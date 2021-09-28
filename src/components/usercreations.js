import React, {Component} from 'react';
import { Card,Row,Col } from 'antd';
import { Form, Input, Button,
    Select,
 } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

class UserCreation extends Component {
constructor(props){
super(props);
  this.state = {
    confirmDirty: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
}
    handleEmailChange = event => {
        this.setState({name: event.target.value});
    };

    

    componentDidMount() {
   
    }
  
    handleSubmit(e){
        e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
         const data = values

         fetch("http://localhost:8000/User", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
          }) .then(result =>
             
            this.setState({
              loading: false,
              alldata: result
            },()=>(console.log("weddsds",result)))
          
          );
      
      }
    });
    }

    onChange(value){
        this.setState({
            userType:`${value}`
        })
    }
  

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
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row>
                    <Col span={8}></Col>
                    <Col span={6}>
                    <Card title="User Creation Form" bordered={false} style={{ width: 500 }}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="ID">
          {getFieldDecorator('Id', {
            rules: [
              {
                required: true,
                message: 'Please input your Id!',
              },
            ],
          })(<Input />)}
        </Form.Item>
                    <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input your  Name!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="User Type">
          {getFieldDecorator('userType', {
            rules: [
              {
                required: true,
                message: 'Please input your User type!',
              },
            ],
          })( <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a User Type"
            onChange={this.onChange}
           
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Admin">Admin</Option>
            <Option value="Manager">Manager</Option>
            <Option value="Developer">Developer</Option>
          </Select>,)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
 



                </Card>
                    </Col>
                    </Row>
              
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'register' })(UserCreation);
export default WrappedNormalLoginForm