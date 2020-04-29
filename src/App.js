import React from 'react';
import Header from './header';
import './app.css';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import {Grid} from 'semantic-ui-react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

const App = () =>{



return(

<BrowserRouter>
<Grid.Row style={{height:'40vh'}}><div></div></Grid.Row>


<Grid columns={2}style={{margin:'auto'}}> 
    <Grid.Column style={{width:'30vw'}}>
    <Header/>
    </Grid.Column>
    




<div style={{width:'70vw', paddingLeft:'300px'}}>
<Grid.Column>
<Route path ='/' exact component={Home}/>
<Route path ='/about' component ={About}/>
<Route path ='/search' component ={Search}/>
</Grid.Column>
</div>
<Grid.Row style={{height:'20vh'}}><div></div></Grid.Row>
    
  </Grid>


</BrowserRouter>
  
  

)


}

export default App;
