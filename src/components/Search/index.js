import React, { Component } from 'react'
import { Form, Button, Grid, Segment, Placeholder,Dropdown, Divider, Search, Icon, Header,  Input } from 'semantic-ui-react';
import axios from 'axios';
import { ImageList } from '../cardSocial';

const options = [
  { key: 'us', text: 'United States', value: 'US' },
  { key: 'gb', text: 'United Kingdom', value: 'GB' },
  { key: 'de', text: 'Germany', value: 'DE' },
]




class SearchNews extends Component {

  state = {
    data: [],
    image: [],
    location: '',
    render: false,
    searchQuery: '',
   

  }
  handleChange =  (e, { value }) => {
    this.setState({
      location: value,
    })
    console.log(this.state.location, 'handle change')


  }

  clearSearch = () => {
    this.setState({
      render: false
    })
  }
  handleKeyPress = (event) => {
    console.log('keyPRress')
    if(event.key === 'Enter'){
     this.callApi()
    }
  }
  callApi = () => {


    const location = this.state.location
    const query = document.getElementById('searchKey').value
    if (query === '' || query === ' ') {
      axios.all([
        axios.get('https://newsapi.org/v2/top-headlines?country=' + location + '&apiKey=' + process.env.REACT_APP_API_KEY, {
          params: {
            _limit: 10
          }
        }),
       
      ])
        .then(responseArr => {
          const dataResponse = responseArr[0].data.articles;

         ;


          this.setState({
            data: dataResponse,
            render: true
           

          })
          console.log('api call', this.state.data)
          console.log(this.state.render)
        })


    }
    else {


      axios.all([
        axios.get('https://newsapi.org/v2/everything?q=' + query + '&apiKey=' + process.env.REACT_APP_API_KEY, {
          params: {
            _limit: 10
          }
        }),

      ])
        .then(responseArr => {
          const dataResponse = responseArr[0].data.articles;

          


          this.setState({
            data: dataResponse,
            render: true
          

          })
          console.log('api call', this.state.data)
          console.log(this.state.render)
        })


    }

  }



  render() {

    const { value } = this.state
    const search = this.state.render;
    let display
    if (search === true) {
      display =
        <div>
          <center style={{ paddingBottom: '20px' }}>
            <Button icon onClick={this.clearSearch}>
              <Icon name='delete'/> clear
            </Button>
          </center>

          <ImageList userData={this.state.data} />

        </div>
    }
    if (search === false) {
      display =
        <div> 
          <Grid columns={3} stackable>
            <Grid.Column >
              <Segment raised>
                <Placeholder  style={{backgroundColor:'#e1b382'}} >
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment raised>
                <Placeholder style={{backgroundColor:'#c89666'}}>
                <Placeholder.Header image >
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment raised>
                <Placeholder style={{backgroundColor:'#e1b382'}}>
                <Placeholder.Header image >
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>
          </Grid>

        </div>
    }
    return (

      <div  >

        <Header as='h1' icon textAlign='center'style={{backgroundColor:"#e1b382",borderRadius: '25px'}} >

          <Icon name='newspaper outline' circular style={{color:"#12343b", backgroundColor:'#c89666'}} />
          <Header.Content style={{backgroundColor:'#c89666', fontSize:'1.5em',fontFamily: 'indie Flower'}}>News</Header.Content>
        </Header>

        <Segment style={{backgroundColor:'#c89666' ,color:'#c89666', borderRadius: '25px'}}>
          <Grid columns={2} stackable textAlign='center' style={{ borderRadius: '25px',backgroundColor:'#e1b382'}}>
            <Divider vertical style={{height:'50px'}}>Or</Divider>

            <Grid.Row verticalAlign='middle' >
              <Grid.Column>
                <Header icon style={{margin:'auto', paddingTop:'5%'}}>
                <Icon name="search"/>
        Select a keyword to search for  ...
      </Header>

                <br></br>
 <Input  id="searchKey"  onKeyPress={this.handleKeyPress} placeholder='Search  ...'  icon={<Icon name='delete' link  onClick={() => window.location.reload(false)}/>} />
            
              </Grid.Column>
             
              <Grid.Column >
                <Header icon style={{margin:'auto', paddingTop:'5%'}}>
                  <Icon name='world'/>
                  <h4> View Top Ten </h4>
  
 
       <Form.Select
            fluid
           
            options={options}
            placeholder='select location'
            clearable
            onChange={this.handleChange} 
            onKeyPress={this.handleKeyPress}
          />
       </Header>
       

              </Grid.Column>
              
            </Grid.Row>
         
            <Form onSubmit={this.callApi}   style={{ paddingBottom: '10px' }} >
              
              <Form.Button style={{backgroundColor:'#2d545e', borderRadius: '25px'}} >

                <Button style={{backgroundColor: '#e1b382'}} >
                Search...
             
                </Button>

              </Form.Button>

            </Form>
            </Grid>
        </Segment>




   




        {display}

      </div>

    )


  }

}
export default SearchNews;

