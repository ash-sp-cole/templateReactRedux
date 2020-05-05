import React, { Component } from 'react';
import { Form, Input, Header, Popup, Icon, Divider, Segment } from 'semantic-ui-react';
import axios from 'axios';
import Display from './Display';
import './weather.css';

class About extends Component {

    state = {
        data: [],
        hourDataArrayONE :[],
        hourDataArrayONETemp:'',
        hourDataArrayTWO :[],
        hourDataArrayTHREE :[],
        dataCityName:'',
        dataSunrise:'',
        dataSunset:'',
        dataTemp:'',
        temp: '',
        searched: false
    }

    callApi = () => {
        const location = document.getElementById("searchLocation").value;

        if (location !== "") {
       
       
        axios.get ('http://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=ca30025253c55b4bca3bf55f4276f6b1')
            .then(response => {
               const dataResp = response.data;
                 const sunrise = new Date (dataResp.city.sunrise * 1000).toUTCString();
                 const sunset = new Date (dataResp.city.sunset * 1000).toUTCString();
                 const hourOne = dataResp.list[0];            
                 const hourTwo = dataResp.list[1];
                 const hourThree = dataResp.list[2];
                    
                
                this.setState({
                    dataCityName: dataResp.city.name,
                     dataSunrise: sunrise,
                     dataSunset:  sunset,
                     hourDataArrayONE: hourOne,
                     hourDataArrayTWO: hourTwo,
                     hourDataArrayTHREE: hourThree,
                     hourDataArrayONETemp: parseFloat(hourOne.main.temp -273).toFixed(2),
                     searched:true
                })
             
              
            }

            )
            .catch(error=> {
                alert('enter valid location')
            })
        }
        else{
            alert("nope");
        }

    }
 


    render() {
        console.log( 'state render hour one ->', this.state.hourDataArrayONETemp); 
        let showWeather
        const searched = this.state.searched;
        if (searched === true) { showWeather = <Display 
            hourOneTemp={this.state.hourDataArrayONETemp}
            
            
            /> }

       

        return (
            <div>

                <Header as='h1' icon textAlign='center' style={{ backgroundColor: "#e1b382", borderRadius: '25px', opacity: '0.8' }} >
                    <Popup style={{ borderRadius: '25px' }} content='Rain rain, go away, come back another day.' trigger={
                        <Icon name='cloudversify' circular style={{ color: "#12343b", backgroundColor: '#c89666' }} />
                    } />
                    <Header.Content style={{ backgroundColor: '#c89666', fontSize: '1.5em', fontFamily: 'indie Flower' }}>Weather</Header.Content>
                </Header>
                <Segment basic textAlign='center' style={{ backgroundColor: "#e1b382", borderRadius: '25px', opacity: '0.9' }} id="weatherMain">




                    <Form>
                        <Input focus placeholder='Enter here...' id="searchLocation" icon={<Icon name='delete' link onClick={() => window.location.reload(false)} />}/>

                    </Form>
                    <Divider horizontal>Enter City or Zip Code</Divider>

                    <Form.Button
                        
                        content='Search'
                        style={{
                            borderRadius: '25px'
                        }}
                            icon='sun'
                        labelPosition='left'
                        onClick={this.callApi}

                    />
                </Segment>

                {showWeather}
            </div>
        )
    }
}

export default About;

