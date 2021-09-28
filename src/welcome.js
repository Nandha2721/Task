import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Card,Row,Col } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

class Welcome extends Component {
constructor(props){
super(props);
  this.state = {

    };

}
    handleEmailChange = event => {
        this.setState({email: event.target.value});
    };
    handlePwdChange = event => {
        this.setState({password: event.target.value});
    };

    

    componentDidMount() {
      
    }

 

    render() {
      
        return (
            <div >
          <Row>
              <Col span={8}></Col>
              <Col span={8}>
              <h1>Welcome to Our Portal</h1>
              </Col>
          </Row>
           
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'register' })(Welcome);
export default WrappedNormalLoginForm