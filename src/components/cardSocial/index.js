import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';

const Display = (props) => {
   
    console.log(props.imageData, props.userData, 'prop test');
 return(
            <div>
                  <Card>
    <Image src='' wrapped ui={false} />
    <Card.Content>
      <Card.Header></Card.Header>
      <Card.Meta></Card.Meta>
      <Card.Description>
        {}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      
        <Icon name='user' />
       {}
      
    </Card.Content>
  </Card>


            </div>
        )
    }


export default Display;