import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import Users from './containers/Users';
// import Users from './containers/Pizza'; // added asynchronusly / lazy
import asyncComponent from './hoc/asyncComponent';

// lazy loading automatically supported by webpack
const asyncPizza = asyncComponent(() => {
    return import ('./containers/Pizza.js');
})

class App extends Component{
    render(){
        return(
            <div>
                <div>
                    <Link to='/'>Users</Link>
                    <Link to='/pizza'>Pizza</Link>
                </div>
                <div>
                    <Route path='/' exact component={Users} />
                    <Route path='/pizza' component={asyncPizza} />
                </div>
            </div>
        )
    }
}

export default App;