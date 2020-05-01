import React from 'react';
import { Card, Image, Popup, Icon, Button } from 'semantic-ui-react';
import '../list.css';
export const ImageList = (props) => {
    console.log(props)
    const userInfo = props.userData.map((title) => {
        return (

            
                    <div >

                        <Popup
                            trigger={
                                <Card>
                                    <Image src={title.urlToImage} />
                                    <Card.Content>
                                        <Card.Header>{title.title}</Card.Header>
                                        <Card.Description>
                                           {title.description}
          </Card.Description>
          <Button animated href={title.url} target="_blank">
      <Button.Content visible>View</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
                                    </Card.Content>
                                </Card>
                            }
                        >
                            <Popup.Header>{title.source.name}</Popup.Header>
                            <Popup.Content>
                                <h5> {title.author} </h5> 
                            </Popup.Content>
                        </Popup>
                    </div>
          








        )
    })

    // const title = props.userData.map((user)=>{
    //     return <div> title - {user.title}</div>

    //   })
    //   const image = props.userData.map((user)=>{
    //       return <img src={user.urlToImage}/>
    //   })

    return <div className='image-list' >
        {userInfo}
    </div>

}



