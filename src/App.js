import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./loginpage";
import Welcome from "./welcome";
import Signup from "./signup";
import Dashboard from "./dashboard";
// import EditPage from "./pages/edit";
// import Register from "./pages/register";
// import NotFound from "./pages/notfound";
// import FileUploadPage from "./pages/fileupload";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route exact path='/welcome' component={Welcome} />
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/dashboard' component={Dashboard} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
