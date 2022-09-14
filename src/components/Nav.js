import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//import { Post, First, Second, Third} from './Post_index';
import Post_00 from './Post_00';
import Post_01 from './Post_01';
import Post_my from './Post_my';


    function Nav()
    {
        return(
            <Router>
                <div className="nav_area">
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/Post_01/MENU_01'>MEMU_01</Link></li>
                        <li><Link to='/Post_01/MENU_02'>MENU_02</Link></li>
                        <li><Link to='/Post_my/1'>MYPAGE</Link></li>
                    </ul>
                </div>
                <div>
                    <Switch> 
                        <Route exact path='/'><Post_00 /></Route>
                        <Route path='/Post_01/:pgname'><Post_01 /></Route>
                        <Route path='/Post_01/:pgname'><Post_01 /></Route>
                        <Route path='/Post_my/:no' ><Post_my /></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
export default Nav;