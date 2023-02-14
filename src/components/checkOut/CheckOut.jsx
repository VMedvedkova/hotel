import { useState } from 'react'
import { Button, Modal, Space } from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'
import * as constants from '../../constants/rooms';
import './CheckOut.scss';

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
const CheckOut = ({
    updateRoomData,
    room
  }) => {
    
    const date = new Date().toString()
    const today = moment(date).format('L');
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const {id, isCheckedIn, number} = room    

    const checkOut = () => {
      setIsModalOpen(true)
    }
    const handleCheckOut = () => {
      setIsModalOpen(false)
      const checkOutInfo = {
        id: id, 
        guest: '', 
        isCheckedIn: false,        
        checkOutDate: today
      }
      updateRoomData(checkOutInfo)  
    }
    const handleCheckOutCancel = () => {
      setIsModalOpen(false)  
    } 

  return (
    <>        
        <Button 
          type="primary"
          disabled={!isCheckedIn}
          onClick={checkOut} 
        >
          Check Out
        </Button>         
        <Modal 
          title="Check Out" 
          open={isModalOpen} 
          onOk={handleCheckOut} 
          onCancel={handleCheckOutCancel}
          footer={
            <>
              <Button onClick={handleCheckOutCancel} type="default">
                  Cancel
              </Button>
              <Button onClick={handleCheckOut} type="primary">
                  Confirm
              </Button>
            </>
            }
        >   
         <Space className="main-layout">
              Do you confirm the check-out {'Room ' + number + '?'}
          </Space>              
        </Modal>
    </>  
  )
};

CheckOut.propTypes = propTypes

export default CheckOut;