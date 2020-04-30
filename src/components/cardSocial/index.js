import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';

 export const ImageList = (props) =>{

        const singleImage = props.imageData.map((image)=> {
            const userInfo = props.userData.map((user)=>{
                return <div>{user.name}</div>
            })
            return (
            <div>
        <Card>
            <Card.Header><h5>{userInfo}</h5></Card.Header>
            <img src={image.url}/>
        </Card>
        </div>
            )
        })
        
       
        console.log(singleImage)
return <div> 
    

  {singleImage}
  </div>
}


