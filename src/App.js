import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import SuggestedPosts from './pages/SuggestedPosts';



export default function App() {
  return (

    
      <Router>
       
       <Navbar />
        <Switch>
          <Route path='/' exact component={SignIn} />
         
          <Route path='/signup' component={SignUp} />
          <Route path='/posts' component={SuggestedPosts} />
        </Switch>
      </Router>
    
    
    
  );
}
