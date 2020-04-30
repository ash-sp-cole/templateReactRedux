import React, { Component } from 'react'
import {Card, Icon} from 'semantic-ui-react';
import axios from 'axios';
import { ImageList } from '../cardSocial';

class Search extends Component {

  state = {
    data: [],
    image: []
  }

  componentDidMount() {

    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/users', {
        params: {
          _limit: 10
        }
      }),
      axios.get('https://jsonplaceholder.typicode.com/photos', {
        params: {
          _limit: 10
        }
      })
    ])
      .then(responseArr => {
        const dataResponse = responseArr[0].data;

        const imageResponse = responseArr[1].data;


        this.setState({
          data: dataResponse,
          image: imageResponse

        })

      })
  }




  render() {
    return (


      <div>
           
        <ImageList imageData={this.state.image} userData={this.state.data} /> 
     


     
      </div>

    )


  }

}
export default Search;