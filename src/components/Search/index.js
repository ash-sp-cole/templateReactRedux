import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import axios from 'axios';

class Search extends Component {

    state ={
        data:[],
        name:'',
        website:''
    }

    componentDidMount (){

        axios.all([
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/photos')
    ])
        .then(responseArr => {
            const data = responseArr[0].data[0];
            console.log(data);
            const picture = responseArr[1].data[0];
            console.log(picture);
        })

  
    }



    render(){
        return(

        <div>


  <Card>
    <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{this.state.name}</Card.Header>
      <Card.Meta>{this.state.website}</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>


        </div>

    )


}

}
export default Search;