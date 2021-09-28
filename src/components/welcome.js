import React, {Component} from 'react';
import {Row,Col} from 'antd'
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
export default Welcome