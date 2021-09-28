import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Card,Row,Col } from 'antd';
import { Form, Icon, Input, Button, Checkbox,Tooltip,
    Cascader,
    Select,
 } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

class signup extends Component {
constructor(props){
super(props);
  this.state = {
    confirmDirty: false,
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

      
      }
    });
    }
    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      };
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      };
    
      validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };
        
        const isLoading = this.state.isLoading;
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row>
                    <Col span={8}></Col>
                    <Col span={6}>
                    <Card title="SignUp Form" bordered={false} style={{ width: 500 }}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="Full Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input your Full Name!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input style={{ width: '100%' }} />)}
        </Form.Item>
     
        <Form.Item label="Country">
          {getFieldDecorator('country', {
            rules: [
              {
                required: true,
                message: 'Please input your Country!',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="State">
          {getFieldDecorator('state', {
            rules: [
              {
                required: true,
                message: 'Please input your State!',
              },
            ],
          })(<Input />)}
        </Form.Item>
      
     
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" onClick={this.handleSubmit}>
            Register
          </Button>
        </Form.Item>
  <Row>
              <Col span={4}></Col>
              <Col span={18}>
             <h4>Already Have an Account ? <Link to="/">  Login</Link></h4>
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

const WrappedNormalLoginForm = Form.create({ name: 'register' })(signup);
export default WrappedNormalLoginForm