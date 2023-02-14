import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Form, Input, Modal } from 'antd'
import PropTypes from 'prop-types'


const propTypes = {
  accounts: PropTypes.object.isRequired,
  modalState: PropTypes.bool.isRequired,
  setUser: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  setAccounts: PropTypes.func.isRequired
};

const AuthPage = ({
  setUser,
  accounts,
  modalState,
  showModal,
  setAccounts
}) => {
  const isAccounts = Object.keys(accounts).length !== 0
  const [isLoading, setIsLoading] = useState(true);  
  const [isModalOpen, setIsModalOpen] = useState(modalState);  
 
  const onFinish = (values) => {
    setUser(values)  
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }; 
  const handleOk = () => {
    setIsModalOpen(false);
    showModal(false)
  };

  useEffect(() => {
    setIsLoading(false);
    setAccounts()
  }, [isAccounts])
 
  useEffect(() => {
    setIsModalOpen(modalState);
  }, [modalState])

  return (
    <>
      {!isLoading ? 
        <Form
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

        </Form> 
        : 
        <p>Loading...</p>
      }
      {modalState && 
        <Modal title="" open={isModalOpen} 
            footer={[
                <Button key="submit" type="primary" onClick={handleOk}>
                  TRY AGAIN
                </Button>]}
        >
          <p>Invalid username or password</p>
      </Modal>
      }
  </>
  )
}

AuthPage.propTypes = propTypes

export default AuthPage
