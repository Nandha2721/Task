import React, {Component} from 'react';
import { Card,Row,Col, message } from 'antd';
import { Form, Input, Button,
    Select
 } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

class TaskCreation extends Component {
constructor(props){
super(props);
  this.state = {
    confirmDirty: false,
    Id:"ID123",
    name:"machinetask"
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
}
    handleEmailChange = event => {
        this.setState({name: event.target.value});
    };

    

    componentDidMount() {
      this.setState({
          id:this.props.match.params.id
      },()=>this.getProject())
    }
    getProject(){
     
            this.setState({ loading: true }, () => {
              fetch(`http://localhost:8000/Projects/${this.state.id}`)
                .then(res => res.json())
                .then(result =>{
                 if(result. hasOwnProperty("Tasks")){
                     this.setState({
                        task:result.Tasks.task,
                        Id:result.Tasks.Id,
                        assignedTo:result.Tasks.assignedTo,
                        status:result.Tasks.status
                     })
                 }
                  this.setState({
                    loading: false,
                    alldata: result,
                    projectname:result.Name,
                   
                  },()=>(console.log("weddsds",result)))
              
                })
                .catch(console.log);
            });
         
    }
    handleSubmit(e){
        e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
         const data = values
let Projects={
    Name:this.state.projectname,
    Id:this.state.id,
    Tasks:{
    assignedTo:data.assignedTo,
    status:data.status,
    task:data.task,
    Id:data.Id
    }
}




    fetch("http://localhost:8000/Projects/" + this.state.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Projects)
    })
      .then(res => {res.json()
        console.log("wwww",res)
    if(res.status=== 200){
        message.success("Task Assigned Successfully")
        this.props.history.push('/projectlist')
    }
    })
      .then(result => {
       console.log("welcome",result)
      });
      
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
                    <Card title="Task Creation Form" bordered={false} style={{ width: 700 }}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="Project Name">
          {getFieldDecorator('projectname', {
              initialValue:this.state.projectname,
            rules: [
            ],
          })(<Input disabled />)}
        </Form.Item>
                    <Form.Item label="ID">
          {getFieldDecorator('Id', {
                initialValue:this.state.Id,
            rules: [
              {
                required: true,
                message: 'Please input your Id!',
              },
            ],
          })(<Input />)}
        </Form.Item>
                    <Form.Item label="Task Name">
          {getFieldDecorator('task', {
                initialValue:this.state.task,
            rules: [
              {
                required: true,
                message: 'Please input your Task Name!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Assign To">
          {getFieldDecorator('assignedTo', {
                initialValue:this.state.assignedTo,
            rules: [
              {
                required: true,
                message: 'Please input your Assign To!',
              },
            ],
          })(<Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a AssigmTo"
            onChange={this.onChange}
           
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="JEE">JEE</Option>
            <Option value="HEMAN">HEMAN</Option>
            <Option value="Kumar">Kumar</Option>
            <Option value="Suman">Suman</Option>
           
          </Select>,)}
        </Form.Item>
        <Form.Item label="Status">
          {getFieldDecorator('status', {
                initialValue:this.state.status,
            rules: [
              {
                required: true,
                message: 'Please input your Status!',
              },
            ],
          })(<Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a Status"
            onChange={this.onChange}
           
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Complete">Complete</Option>
            <Option value="Not Complete">Not Complete</Option>
           
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

const WrappedNormalLoginForm = Form.create({ name: 'register' })(TaskCreation);
export default WrappedNormalLoginForm