import React from 'react';
import Header from './header';
import './app.css';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

const App = () =>{



return(
<BrowserRouter>
<Header/>
<div>
<Route path ='/' exact component={Home}/>
<Route path ='/about' component ={About}/>
<Route path ='/search' component ={Search}/>
</div>

</BrowserRouter>
  
  

)


}

export default App;
