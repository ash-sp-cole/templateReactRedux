import React, { Component } from 'react'
import {Form} from 'semantic-ui-react';
import axios from 'axios';
import { ImageList } from '../cardSocial';

const options = [
  { key: 'us', text: 'United States', value: 'US' },
  { key: 'gb', text: 'United Kingdom', value: 'GB' },
  { key: 'de', text: 'Germany', value: 'DE' },
]




class Search extends Component {

  state = {
    data: [],
    image: [],
    location:'',
    render:false,
    searchQuery:''
   
  }
  handleChange = (e, { value }) => {
    this.setState({
   location: value ,
    })
    console.log(this.state.location, 'handle change')
    
    
  }

  callApi = () => {


    const location = this.state.location
    const query = document.getElementById('searchKey').value
    if (query === '' || query === ' ') {
      axios.all ([
        axios.get('https://newsapi.org/v2/top-headlines?country='+ location +'&apiKey=' + process.env.REACT_APP_API_KEY, {
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
            render:true
            // image: imageResponse
  
          })
          console.log('api call', this.state.data)
          console.log(this.state.render)
        })
        

    }
    else {

  
    axios.all ([
      axios.get('https://newsapi.org/v2/everything?q='+ query + '&apiKey='+ process.env.REACT_APP_API_KEY, {
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
          render:true
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
    if(search===true) { display = <ImageList userData={this.state.data} />}

    return (


      <div>
            
      {/* <ImageList userData={this.state.data} />  */}
     
      <Form onSubmit={this.callApi} style={{paddingBottom:'20px'}}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Key Words' placeholder='Leave blank for top results ...' id="searchKey" />
        
          <Form.Select
            fluid
            label='Region'
            options={options}
            placeholder='select location'
            onChange={this.handleChange} 
          />
        </Form.Group>
       
       
 
        <Form.Button >Submit</Form.Button>
      </Form>

      {display}
     
      </div>

    )


  }

}
export default Search;