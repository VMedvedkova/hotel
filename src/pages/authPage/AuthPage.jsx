import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Modal } from 'antd';

const AuthPage = ({
  setUser,
  isAccessAllowed,  
  accounts,
  user,
  modalState,
  showModal,
  setDataAccountsInStore
}) => {
  // const [isUser, setIsUser] = useState(user);
  const [isLoading, setIsLoading] = useState(true);
  

  const onFinish = (values) => {
    setUser(values)  
  };

  console.log('isLoading:', isLoading);

  // useEffect(() => {
  //   console.log('isAccounts:', isAccounts);
  //   console.log('isUser:', isUser);
  //   console.log('isAccessAllowed:', isAccessAllowed);
  // }, [isUser])

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [isModalOpen, setIsModalOpen] = useState(modalState);
  
  const handleOk = () => {
    setIsModalOpen(false);
    showModal(false)
  };

  const isAccounts = Object.keys(accounts).length !== 0

  useEffect(() => {
    setIsLoading(false);
  }, [isAccounts])

  useEffect(() => {
    setIsModalOpen(modalState);
  }, [modalState])

  return (
    <>
  {!isLoading ? <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Log in
      </Button>
    </Form.Item>
  </Form> : <p>Loading...</p>}
  {modalState && <Modal title="" open={isModalOpen} 
      footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            TRY AGAIN
          </Button>]}
          >
  <p>Invalid username or password</p>
</Modal>}
</>
  )
}

export default AuthPage
