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
 


<Grid style={{margin:'auto'}}> 
<Grid.Row style={{height:'10vh'}}><div><h1 style={{  fontFamily: 'indie Flower', fontSize: '3.5em', paddingBottom:'20px', paddingLeft:'5vw', paddingRight:'20vw'}}><center>News Api</center> </h1>  </div></Grid.Row>
  <Grid.Row> 
    <Header/>
 
<Grid.Column style={{width:'80vw'}}>
<Route path ='/' exact component={Search}/>
<Route path ='/about' component ={About}/>
<Route path ='/search' component ={Search}/>
</Grid.Column>

</Grid.Row> 
 

 



<Grid.Row style={{height:'20vh'}}><div></div></Grid.Row>
    
  </Grid>


</BrowserRouter>
  
  

)


}

export default App;
