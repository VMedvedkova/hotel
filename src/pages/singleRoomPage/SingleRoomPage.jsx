import {useParams, useState, useEffect} from 'react'
import { useLocation } from 'react-router'
import 'antd/dist/reset.css'
import { Button, Col, Row, Carousel, Image, Typography, Descriptions, Space, Modal } from 'antd'
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'
import { Link, useHistory  } from 'react-router-dom';
import {
  HomeOutlined,
  CheckOutlined
} from '@ant-design/icons';

const contentStyle = {
  // height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'rgb(69 86 110 / 30%)',
};

const SingleRoomPage = ({
  rooms
}) => {

  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const room = rooms.find(item => item.id === path)
  const history = useHistory();
  const { Title, Paragraph, Text } = Typography;
  const { gallery, number, type, occupancy, price, guest, features, description } = room;
  const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);
  const [isCheckOutModalOpen, setIsCheckOutModalOpen] = useState(false);
  
  const checkIn = () => {
    setIsCheckInModalOpen(true)
  }
  const handleCheckIn = () => {
  }
  const handleCheckInCancel = () => {
    setIsCheckInModalOpen(false)
  }
  const checkOut = () => {
    setIsCheckOutModalOpen(true)
  }
  const handleCheckOut = () => {
  }
  const handleCheckOutCancel = () => {
    setIsCheckOutModalOpen(false)
  }
 
  return (
  <>
  
    <Row gutter={[32, 32]}>
      <Col span={24}><Button type="link" onClick={() => history.goBack()}><HomeOutlined />Back Home</Button></Col>

      <Col span={12}>
        <Carousel >
        
          {gallery.map((src, index) => (
             <Image 
                key={index}
                src={src}
              />
            ))
          }
      </Carousel></Col>
      <Col span={12}>
        <Row>
          <Col span={12}><Title underline>Room {number}</Title></Col>
          <Col span={12}>
            <Row justify="end">
              <Space wrap>
                <Button type="primary" onClick={checkIn} >Check In</Button>
                <Button type="primary" onClick={checkOut} >Check Out</Button>
              </Space>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
          <Descriptions  column={1}>
            <Descriptions.Item label="Type" labelStyle={{fontWeight: 'bold'}}>{type}</Descriptions.Item>
            <Descriptions.Item label="Occupancy" labelStyle={{fontWeight: 'bold'}}>{occupancy}</Descriptions.Item>
            <Descriptions.Item label="Price" labelStyle={{fontWeight: 'bold'}}>{price}</Descriptions.Item>
            {guest && <><Descriptions.Item label="Guest" labelStyle={{fontWeight: 'bold'}}>{guest}</Descriptions.Item></>}
          </Descriptions>
          </Col>
          <Col span={12}>
            <Descriptions  column={1} layout={'vertical'} >
            <Descriptions.Item label="Features" labelStyle={{fontWeight: 'bold'}} className='featuresList'>
              {features.map((item, index) => (
                <Text><CheckOutlined /> {item}<br /></Text>
                ))
              }   
          </Descriptions.Item>
          </Descriptions> 
        </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Descriptions>
          <Descriptions.Item label="Description" labelStyle={{fontWeight: 'bold'}}>{description}</Descriptions.Item>
        </Descriptions>
      </Col>

    </Row>
    <Modal title="Check In" open={isCheckInModalOpen} onOk={handleCheckIn} onCancel={handleCheckInCancel}>
        
    </Modal>
    <Modal title="Check Out" open={isCheckOutModalOpen} onOk={handleCheckOut} onCancel={handleCheckOutCancel}>
        
    </Modal>
  </>    

  )  
}

export default SingleRoomPage
