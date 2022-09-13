import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//import { Post, First, Second, Third} from './Post_index';
import Post from './Post';
import First from './First';
import Second from './Second';
import Third from './Third';


    function Nav()
    {
        return(
            <Router>
                <div className="nav_area">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/First'>First</Link></li>
                        <li><Link to='/Second'>Second</Link></li>
                        <li><Link to='/Third/1'>Third</Link></li>
                    </ul>
                </div>
                <div>
                    <Switch> 
                        <Route exact path='/'><Post /></Route>
                        <Route path='/First'><First /></Route>
                        <Route path='/Second'><Second /></Route>
                        <Route path='/Third/:no' ><Third /></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
export default Nav;