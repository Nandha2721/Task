import React, { Component } from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css'
import './App.css';
import { Form, Input, Button, Radio ,Card} from 'antd';
import {Row,Col} from 'antd'
import { Upload, message } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }



class home extends Component {

constructor(props) {
    super(props);
    this.state ={
      activeTab: "1"
    }
    this.handleChange = this.handleChange.bind(this)
}
handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };
  changeTab = activeKey => {
    console.log(activeKey);
    this.setState({
      activeTab: activeKey
    });
  };
    render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
          <div>
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        );
        return (
            <Row>
                <Col span={24}>

                <Tabs defaultActiveKey="1" centered activeKey={this.state.activeTab} onChange={this.changeTab} >
                  
                  
            <TabPane style={{color:"white"}} tab="Personal Details" key="1" >
             <div>
                 <Row style={{background:"#fbfbfb"}}>
                     <Col span={8}></Col>
                     <Col span={8}>
                     <h1 style={{marginLeft:'20%'}}>Add Your Personal Details</h1>
                     <h4></h4>

<br/>
<br/>
<br/>
                     <div>


                       <Card>
                     <Form
      layout="vertical"

    >
      <Form.Item label="Full Name" name="fullname" rules={[{ required: true }]}>
      <Input placeholder="Enter Full Name" />
      </Form.Item>
      <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
      <Button>Male</Button> <Button>Female</Button> <Button>Others</Button>
      </Form.Item>
      <Form.Item label="Country" name="country" rules={[{ required: true }]}>
      <Input placeholder="Enter Full Name" />
      </Form.Item>
       <Form.Item label="State" name="state" rules={[{ required: true }]}>
      <Input placeholder="Enter Full Name" />
      </Form.Item>
      <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
      <Input placeholder="Enter Full Name" />
      </Form.Item>
    <Row>
<Col span={24}>
<Button style={{width:"100%",background:"orangered"}} onClick={() => this.changeTab("2")}type="primary">Next</Button>
</Col>

    </Row>
     
      
    </Form>
    </Card>
                     </div>
                     </Col>
                
                 </Row>
                
             </div>
            </TabPane>
            <TabPane tab="Company Details" key="2">
            <div>
                 <Row style={{background:"#fbfbfb"}}>
                     <Col span={8}></Col>
                     <Col span={8}>
                     <h1 style={{marginLeft:'20%'}}>Add Your Company Details</h1>
                     <h4></h4>

<br/>
<br/>
<br/>
                     <div>
                       <Card>
                     <Form
      layout="vertical"

    > <Form.Item>
     <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </Form.Item>
        
      <Form.Item label="Company Name" name="companyname" rules={[{ required: true }]}>
      <Input placeholder="Enter Full Name" />
      </Form.Item>
      <Form.Item label="Email ID" name="emailID" rules={[{ required: true }]}>
      <Input placeholder="Enter Email ID" />
      </Form.Item>
      <Form.Item label="Job title" name="jobtitle" rules={[{ required: true }]}>
      <Input placeholder="Enter Job Title" />
      </Form.Item>
       <Form.Item label="Years of Experience" name="experience" rules={[{ required: true }]}>
      <Input placeholder="Enter " />
      </Form.Item>
     
     <Row>
       <Col span={4}>
       <Button type="primary" onClick={() => this.changeTab("1")}>Back</Button>
       </Col><Col span={18}>
        <Button style={{width:"100%",background:"orangered"}} onClick={() => this.changeTab("3")} type="primary">Next</Button>
       </Col>
     </Row>
     
     
    </Form>
    </Card>
                     </div>
                     </Col>
                
                 </Row>
                
             </div>
            </TabPane>
            <TabPane tab="Email Verification" key="3">
            <div>
                 <Row style={{background:"#fbfbfb"}}>
                     <Col span={8}></Col>
                     <Col span={8}>
                     <h1 style={{marginLeft:'20%'}}>Enter your OTP</h1>
                     <h4></h4>

<br/>
<br/>
<br/>
<div>
  <Card>
<Form.Item label="Enter Your OTP" name="otp">
      <Input  />
      </Form.Item>
      <Row>
       <Col span={4}>
       <Button type="primary" onClick={() => this.changeTab("2")}>Back</Button>
       </Col><Col span={18}>
        <Button style={{width:"100%",background:"orangered"}} type="primary">Next</Button>
       </Col>
     </Row>
     
        </Card>
      </div>
</Col>
</Row>
                     </div>
            </TabPane>
            
          </Tabs>
          
                </Col>
            </Row>
           
        );
    }
}


export default home;