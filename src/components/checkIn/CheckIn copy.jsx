import { useState, useEffect } from 'react'
import { 
  Button, 
  Modal, 
  Form,
  Input,
  DatePicker } from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'
import { UserOutlined } from '@ant-design/icons';
import { setAccessAllowed } from '../../redux/actions/currentUser';
// import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { toArray } from "antd/lib/form/util";


const CheckIn = ({
    updateRoomData,
    room,
    roomId,
    rooms,
    guest,
    getCurrentRoomData
  }) => {
    // const {id} = room
    const thisRoom = rooms.find(room => room.id === roomId)
    const {id, isCheckedIn} = thisRoom
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isCheckedInMode, setIsCheckedInMode] = useState(isCheckedIn); 
    const [form] = Form.useForm();

    useEffect(() => {
      setIsCheckedInMode(isCheckedIn)
    }, [rooms])

    const checkIn = () => {
      setIsModalOpen(true)
    }
    const handleCheckIn = (values) => {      
      const date = new Date().toString()
      const today = moment(date).format('L');
      setIsModalOpen(false)
      values.roomId = id
      values.dateOfCheckIn = today
      values.isCheckedIn = true
      values.dateOfCheckOut = moment(values.checkOutDate).format('L');
      updateRoomData(values)    
      form.resetFields()

    }
    const handleCheckInCancel = () => {
      setIsModalOpen(false)     
      form.resetFields()
    }    
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);    
      form.resetFields()
    };

  return (
    <>        
        <Button
          type={"primary"}
          disabled={isCheckedInMode}
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
          name="guestsName"
          // onChange={(e)}
          rules={[{ required: true, message: "Please, enter the guest's name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Please, enter the approximate date of guest check out"
          name="dateOfCheckOut"
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