import React, { Component } from 'react'

import axios from 'axios';
import Display from '../cardSocial';

class Search extends Component {

  state = {
    data: [],
    image: []
  }

  componentDidMount() {

    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/users'),
      axios.get('https://jsonplaceholder.typicode.com/photos')
    ])
      .then(responseArr => {
        const dataResponse = responseArr[0].data[1];

        const imageResponse = responseArr[1].data[1];


        this.setState({
          data: dataResponse,
          image: imageResponse

        })

      })
  }




  render() {
    return (

      <div>

        <Display imageData={this.state.image} userData={this.state.data} />

      </div>

    )


  }

}
export default Search;