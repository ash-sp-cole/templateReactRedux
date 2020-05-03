import React from 'react';

import { Card, Image, Icon} from 'semantic-ui-react';

const Display = (props) =>{
  console.log( 'temp ',props.weatherData.temp);
   return(


<div> 

<Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.weatherData.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.temp} </span>
      </Card.Meta>
      <Card.Description>
        {props.mainData.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>


</div>

)



}

export default Display;