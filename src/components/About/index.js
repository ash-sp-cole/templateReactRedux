import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import axios from 'axios';
import Display from './Display';


class About extends Component {

    state = {
        dataResponse: '',
        dataMain: '',
        temp: '',
        searched: false
    }

    callApi = () => {
        const location = document.getElementById("searchLocation").value;
        console.log(location)
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=ca30025253c55b4bca3bf55f4276f6b1')
            .then(response => {
                const dataResp = response.data;
                const dataMainProp = response.data.weather
                const tempCalc = response.data.main.temp
                this.setState({
                    dataResponse: dataResp,
                    dataMain: dataMainProp[0],
                    temp: (tempCalc - 273.15).toFixed(2) + " 'C",
                    searched: true
                })

            }

            )



    }



    render() {
        let showWeather
        const searched = this.state.searched;
        if (searched === true) { showWeather = <Display temp={this.state.temp} weatherData={this.state.dataResponse} mainData={this.state.dataMain} /> }

        console.log(this.state.dataMain.description)

        return (
            <div>


                <Form onSubmit={this.callApi}>
                    <Input focus placeholder='Search...' id="searchLocation" />
                    <Form.Button >Submit</Form.Button>
                   

                </Form>
                {showWeather}
            </div>
        )
    }
}

export default About;