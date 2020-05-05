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
<Grid.Row style={{height:'10vh'}}><div><h1 style={{ color:'#e1b382', fontFamily: 'indie Flower', fontSize: '4.5em', paddingBottom:'20px', paddingLeft:'5vw', paddingRight:'20vw'}}><center>Simplify - A p i</center> </h1>  </div></Grid.Row>
  <Grid.Row> 
    <Header/>
 
<Grid.Column style={{width:'80vw'}}>
<Route path ='/' exact component={Search}/>
<Route path ='/about' component ={About}/>
<Route path ='/search' component ={Search}/>
</Grid.Column>

</Grid.Row> 
 

 



<Grid.Row ><div></div></Grid.Row>
    
  </Grid>


</BrowserRouter>
  
  

)


}

export default App;
