import { useState, useEffect } from 'react'
import { 
  Button, 
  Modal, 
  Form,
  Input,
  DatePicker } from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'


const CheckIn = ({
    updateRoomData,
    room
  }) => {
    const {id, isCheckedIn, checkOutDate} = room 
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [form] = Form.useForm();

    const checkIn = () => {
      setIsModalOpen(true)
    }    
    const date = new Date().toString()
    const today = moment(date).format('L');

    const handleCheckIn = (values) => {  
      const today = moment(date).format('L');
      setIsModalOpen(false)
      values.id = id
      values.isCheckedIn = true
      values.checkInDate = today
      const formatedcheckOutDate = values.checkOutDateFromForm.toString();
      const checkOutDateToStore = moment(formatedcheckOutDate).format('L');
      values.checkOutDate = checkOutDateToStore;
      console.log('values:', values); 
      updateRoomData(values)    
      form.resetFields()

    }
    const handleCheckInCancel = () => {
      setIsModalOpen(false)     
      form.resetFields()
    }    
    const onFinishFailed = (errorInfo, values) => {
      console.log('Failed:', errorInfo); 
    };
    
    useEffect(() => {
      if (today === checkOutDate) {
        const expiredDate = {
          id: id, 
          guest: '', 
          isCheckedIn: false,
          checkOutDate: today,
          checkInDate: ''
        }
        updateRoomData(expiredDate)  
      }
    }, [updateRoomData])

  return (
    <>        
        <Button
          type={"primary"}
          disabled={isCheckedIn}
          onClick={checkIn} 
          >
          Check In
          </Button>
         
        <Modal 
          title="Check In" 
          open={isModalOpen} 
          onOk={handleCheckIn} 
          onCancel={handleCheckInCancel}
          footer={<>
            <Button onClick={handleCheckInCancel} type="default">
                Cancel
            </Button>
            <Button form="checkIn" htmlType="submit" type="primary">
                Submit
            </Button></>
            }
        >
        <Form
           form={form}
          // id="myForm"
          name="checkIn"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          // style={{ maxWidth: 600 }}
          // initialValues={{ remember: true }}
          autoComplete="Off"
          onFinish={handleCheckIn}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          style={{ 
            marginTop: '25px',
            marginBottom: '25px'
          }}
        >
        <Form.Item
          label="Please, enter the guest's name"
          name="guest"
          // onChange={(e)}
          rules={[{ required: true, message: "Please, enter the guest's name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Please, enter the approximate date of guest check out"
          name="checkOutDateFromForm"
          rules={[{ required: true, message: "Please, enter the approximate date of guest check out" }]}
        > 
          <DatePicker />
        </Form.Item>          
        </Form>         
        </Modal>
    </>  
  )
};


CheckIn.propTypes = {
  roomId: PropTypes.string.isRequired,
  isCheckedIn:  PropTypes.bool,
  updateRoomData:  PropTypes.func.isRequired
}

CheckIn.defaultProps = {
  roomId: '',
  isCheckedIn: false,
  updateRoomData: () => {}
}

export default CheckIn;