import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Card,Row,Col } from 'antd';
import { Form, Icon, Input, Button, Checkbox ,Table,Space} from 'antd';
import 'antd/dist/antd.css';

class Tasklist extends Component {
constructor(props){
super(props);
  this.state = {
     alldata:[] ,
       columns: [
        {
            title: 'Id',
            dataIndex: 'id',
          },
        {
          title: ' Project Name',
          dataIndex: 'Name',
        },
        {
            title: ' Task Name',
            dataIndex: 'Name',
             render: (text,record, index)=> <Link to={`/taskcreate/${record.id}`}>{text}</Link>,
          },
          {
            title: ' AssignedTo',
            dataIndex: 'assignedTo',
          },
          {
            title: ' Status',
            dataIndex: 'status',
          },
      
      ]   
    };
    this.handleSubmit = this.handleSubmit.bind(this)
}
    

componentDidMount() {
    this.getLists()
  }
  getLists() {
      this.setState({ loading: true }, () => {
        fetch("http://localhost:8000/Projects/" + this.props.match.params.id)
          .then(res => res.json())
          .then(result =>
           
            this.setState({
              loading: false,
              alldata: result
            },()=>(console.log("weddsds",result)))
          
          )
          .catch(console.log);
      });
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
                    <Card title="Project List" bordered={false} extra={<Link to="/projectcreate"><Button>Project Create</Button></Link>}>
                    <Table columns={this.state.columns} dataSource={this.state.alldata} />

                </Card>
                    </Col>
                    </Row>
              
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'register' })(Tasklist);
export default WrappedNormalLoginForm