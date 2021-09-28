import React, {Component} from 'react';
import { Card,Row,Col } from 'antd';
import { Form, Input, Button,
    Select,message
 } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

class ProjectCreation extends Component {
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

         fetch("http://localhost:8000/Projects", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
          }).then(res => {res.json()
            console.log("wwww",res)
        if(res.status=== 201){
            message.success("Project Created Successfully")
            this.props.form.resetFields()
        }
        })
           .then(result =>
             
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
              sm: { span: 6 },
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
                    <Col span={4}></Col>
                    <Col span={16}>
                    <Card title="Project Creation Form" bordered={false} style={{ width: 700 }}>
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
          {getFieldDecorator('Name', {
            rules: [
              {
                required: true,
                message: 'Please input your  Name!',
              },
            ],
          })(<Input />)}
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

const WrappedNormalLoginForm = Form.create({ name: 'register' })(ProjectCreation);
export default WrappedNormalLoginForm