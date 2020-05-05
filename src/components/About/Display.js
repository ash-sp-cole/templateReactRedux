import React from 'react';

import { Card, Image,Popup, Button, Icon} from 'semantic-ui-react';

const Display = (props) =>{

   return(


<div> 
<div >
                          
                          <Popup
                              trigger={
                                  <Card>
                                      <Image />
                                      <Card.Content>
                                          <Card.Header>{}</Card.Header>
                                          <Card.Description>
                                          {props.hourOneTemp}
            </Card.Description>
            <Button animated  target="_blank">
        <Button.Content visible>View</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
                                      </Card.Content>
                                  </Card>
                              }
                          >
                              <Popup.Header></Popup.Header>
                              <Popup.Content>
                                  <h5> </h5> 
                              </Popup.Content>
                          </Popup>
                      </div>
            
  


</div>

)



}

export default Display;