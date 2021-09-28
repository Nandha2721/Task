import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserCreation from "./components/usercreations";

import ProjectCreation from "./components/projectcreation";
import TaskCreation from "./components/taskcreation";
import Login from "./components/login";
import ProjectList from "./components/projectlist";
import TaskList from "./components/tasklist";
import Welcome from "./components/welcome";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                       <Route exact path='/login' component={Login} />
                        <Route exact path='/usercreate' component={UserCreation} />
                        <Route exact path='/projectcreate' component={ProjectCreation} />
                        <Route exact path='/taskcreate/:id' component={TaskCreation} />
                        <Route exact path='/projectlist' component={ProjectList} />
                        <Route exact path='/tasklist/:id' component={TaskList} />
                        <Route exact path='/welcome' component={Welcome} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
