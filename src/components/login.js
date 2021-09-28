import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Card,Row,Col } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

class Login extends Component {
constructor(props){
super(props);
  this.state = {
      usertype:"admin",
        email: 'saravanan245@gmail.com',
        password: 'password',
        redirect: false,
        authError: false,
        isLoading: false,
        location: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this)
}
    handleEmailChange = event => {
        this.setState({email: event.target.value});
    };
    handlePwdChange = event => {
        this.setState({password: event.target.value});
    };

    

    componentDidMount() {
      
    }
    handleSubmit(e){
        e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
         const data = values

         if(data.username ==="sarvanan234@gmail.com" && data.password ===this.state.password){
             console.log("same admin")
             this.setState({
                 usertype:"admin"
             })
             this.props.history.push('/projectcreate')
         }
         else if(data.username ==="madhivanan@gmail.com" && data.password ===this.state.password){
          console.log("same admin")
          this.setState({
              usertype:"admin"
          })
          this.props.history.push('/projectlist')
      }
         else{
                 this.props.history.push('/welcome')
             this.setState({
                 usertype:"others"
             })
         
             console.log("different user")
         }
      }
    });
    }
   

    render() {
        const { getFieldDecorator } = this.props.form;
        const isLoading = this.state.isLoading;
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row>
                    <Col span={8}></Col>
                    <Col span={6}>
                    <Card title="Login Form" bordered={false} style={{ width: 500 }}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [ {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
       
        </Form.Item>
        <Row>
            <Col span={4}></Col>
            <Col span={6}>
            <Button style={{width:300}} type="primary" onClick={this.handleSubmit}  className="login-form-button">
            Log in
          </Button>
            </Col>
        </Row>
       
        
          
      </Form>

                </Card>
                    </Col>
                    </Row>
              
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'register' })(Login);
export default WrappedNormalLoginForm