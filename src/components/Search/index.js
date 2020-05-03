import React, { Component } from 'react'
import { Form, Button, Grid, Segment, Placeholder,Divider, Search, Icon, Header } from 'semantic-ui-react';
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
    searchQuery: ''

  }
  handleChange = (e, { value }) => {
    this.setState({
      location: value,
    })
    console.log(this.state.location, 'handle change')


  }

  clearSearch = () => {
    this.setState({
      render:false
    })
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
        // axios.get('https://jsonplaceholder.typicode.com/photos', {
        //   params: {
        //     _limit: 10
        // //   }
        // })
      ])
        .then(responseArr => {
          const dataResponse = responseArr[0].data.articles;

          // const imageResponse = responseArr[1].data;


          this.setState({
            data: dataResponse,
            render: true
            // image: imageResponse

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

          // const imageResponse = responseArr[1].data;


          this.setState({
            data: dataResponse,
            render: true
            // image: imageResponse

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
              <Icon name='delete' />
            </Button>
          </center>

          <ImageList userData={this.state.data} /> 

      </div>
    }
    if (search === false) {
      display =
        <div>
          <Grid columns={3} stackable>
    <Grid.Column>
      <Segment raised>
        <Placeholder>
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
        <Placeholder>
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
        <Placeholder>
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
  </Grid>

      </div>
    }
    return (

      <div>

        {/* <ImageList userData={this.state.data} />  */}
        <Header as='h1' icon textAlign='center'>
          
          <Icon name='newspaper outline' circular />
          <Header.Content>News</Header.Content>
     

          <Form onSubmit={this.callApi} style={{ paddingBottom: '10px' }}>
            <br></br>
            <Form.Button >

              <Button animated>
                <Button.Content visible>Search... </Button.Content>
                <Button.Content hidden size='mini'>
                 News
                </Button.Content>
              </Button>

            </Form.Button>
            <br />
     
            <Segment>
            <Grid columns={2} stackable textAlign='center'>
              <Divider vertical>Or</Divider>
        
              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                  <Header icon>
                    <Icon name='search' />
                    Leave blank for top results ...
                  </Header>
        
                  <Search id="searchKey" placeholder='Search countries...' />
                </Grid.Column>
        
                <Grid.Column>
                  <Header icon>
                    <Icon name='world' />
                    Add New Country
                  </Header>
                 
                </Grid.Column>
              </Grid.Row>
            </Grid>
            </Segment>
            {/* <Form.Group widths='equal'> */}
              {/* <Form.Input  fluid label='Key Words' placeholder='Leave blank for top results ...' id="searchKey" /> */}

           
            {/* </Form.Group> */}



          </Form>
        </Header>

        {display}

      </div>

    )


  }

}
export default SearchNews;