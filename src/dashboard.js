import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Card,Row,Col } from 'antd';
import { Form, Icon, Input, Button, Checkbox ,Table,Space} from 'antd';
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
        data:[
            {
              key: '1',
              Name: 'John',
              email: 'madhi@gmail.com',
              age: 32,
              phone:"9089786756",
              country: 'India',
              state: "Dehli",
            },
            {
              key: '2',
              Name: 'Jim',
              email: 'suman@gmail.com',
              age: 42,
              phone:"9089786746",
              country: 'India',
              state: "Tamil Nadu",
            },
            {
              key: '3',
              Name: 'Joe',
              email: 'kavan@gmail.com',
              age: 32,
              phone:"9089784556",
              country: 'India',
              state: "Tamil Nadu",
            },
          ],
          columns : [
            {
              title: 'Name',
              dataIndex: 'Name',
              key: 'Name',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Email',
              dataIndex: 'email',
              key: 'email',
            },
            {
              title: 'Phone',
              dataIndex: 'phone',
              key: 'phone',
            },
            {
              title: 'Country',
              dataIndex: 'country',
              key: 'country',
            },
            {
                title: 'State',
                dataIndex: 'state',
                key: 'state',
              },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
             <>
                  <a>Edit </a>

                  <a>Delete</a>
                </>
              ),
            },
          ]
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

         if(data.username ===this.state.email && data.password ===this.state.password){
             console.log("same admin")
             this.setState({
                 usertype:"admin"
             })
             this.props.history.push('/signup')
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
                    <Col span={2}></Col>
                    <Col span={20}>
                    <Card title="Dashboard" bordered={false}>
                    <Table columns={this.state.columns} dataSource={this.state.data} />

                </Card>
                    </Col>
                    </Row>
              
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'register' })(Login);
export default WrappedNormalLoginForm