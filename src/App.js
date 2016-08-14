import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import { DatePicker } from 'antd';

import { Button, notification } from 'antd';
const openNotification = function () {
  notification.open({
    message: '这是标题',
    description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案',
  });
};


import { Popconfirm, message } from 'antd';

function confirm() {
  message.success('点击了确定');
}

function cancel() {
  message.error('点击了取消');
}


  // http://www.uprogrammer.cn/react-router-cn/
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hey REACT
        </p>
        <DatePicker></DatePicker>
        <Button type="primary" onClick={openNotification}>打开通知提醒框</Button>
        
          <Popconfirm title="确定要删除这个任务吗？" onConfirm={confirm} onCancel={cancel}>
            <a href="#">删除</a>
          </Popconfirm>

      </div>
    );
  }
}

export default App;
