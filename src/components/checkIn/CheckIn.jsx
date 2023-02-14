import { useState, useEffect } from 'react'
import { 
  Button, 
  Modal, 
  Form,
  Input,
  DatePicker } from 'antd'
import moment from 'moment'
import './CheckIn.scss'
import * as constants from '../../constants/rooms'
import PropTypes from 'prop-types'

const propTypes = {
  updateRoomData: PropTypes.func.isRequired,
  room: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    type: PropTypes.oneOf(Object.values(constants.ROOMS_TYPES)).isRequired,
    occupancy: PropTypes.oneOf(constants.ROOM_OCCUPANCY_LIST).isRequired,
    isCheckedIn: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    checkInDate: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    checkOutDate: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    guest: PropTypes.string,
  }).isRequired,
};

const CheckIn = ({
    updateRoomData,
    room
  }) => {

    const {id, isCheckedIn, checkOutDate} = room 
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [form] = Form.useForm();
    const date = new Date().toString()
    const today = moment(date).format('L');

    const checkIn = () => {
      setIsModalOpen(true)
    }    
    const checkOutDateToStore = (checkOutDateFromForm) => {
      const formatedcheckOutDate = checkOutDateFromForm.toString();
      return moment(formatedcheckOutDate).format('L');
    }
    const handleCheckIn = (values) => {  
      setIsModalOpen(false)
      values.checkOutDate = checkOutDateToStore(values.checkOutDateFromForm);
      const details = {        
        id: id,
        isCheckedIn: true,
        checkInDate: today
      }
      Object.assign(values, details);
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
    
    const disabledDate = (current) => current && current < moment().endOf('day');
    
    useEffect(() => {
      if (today >= checkOutDate) {
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
        footer={
          <>
            <Button onClick={handleCheckInCancel} type="default">
                Cancel
            </Button>
            <Button form="checkIn" htmlType="submit" type="primary">
                Submit
            </Button>
          </>
        }
      >
        <Form
          form={form}
          name="checkIn"
          initialValues={{ remember: true }}
          autoComplete="Off"
          onFinish={handleCheckIn}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="main-layout"
        >
          <Form.Item
            label="Please, enter the guest's name"
            name="guest"
            rules={[{ 
              required: true, 
              message: "Please, enter the guest's name" 
            }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Please, enter the approximate date of guest check out"
            name="checkOutDateFromForm"
            rules={[{ 
              required: true, 
              message: "Please, enter the approximate date of guest check out" 
            }]}
          > 
            <DatePicker disabledDate={disabledDate}/>
          </Form.Item>          
        </Form>         
      </Modal>
    </>  
  )
};

CheckIn.propTypes = propTypes

export default CheckIn
