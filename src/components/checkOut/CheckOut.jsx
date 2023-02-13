import { useState, useEffect } from 'react'
import { Button, Modal, Space } from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'

const CheckOut = ({
    updateRoomData,
    room
  }) => {
    
    const date = new Date().toString()
    const today = moment(date).format('L');

    const {id, isCheckedIn, number} = room
    
    const [isModalOpen, setIsModalOpen] = useState(false); 

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
          footer={<>
            <Button onClick={handleCheckOutCancel} type="default">
                Cancel
            </Button>
            <Button onClick={handleCheckOut} type="primary">
                Confirm
            </Button></>
            }
        >   
         <Space  
            style={{
              marginTop: 25,
              marginBottom: 25
            }}>
              Do you confirm the check-out {'Room ' + number + '?'}
          </Space>              
        </Modal>
    </>  
  )
};


CheckOut.propTypes = {
  updateRoomData:  PropTypes.func.isRequired
}

CheckOut.defaultProps = {
  updateRoomData: () => {}
}

export default CheckOut;