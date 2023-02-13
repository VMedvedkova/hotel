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
import CheckIn from '../../components/checkIn'
import CheckOut from '../../components/checkOut'

const contentStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'rgb(69 86 110 / 30%)',
};

const SingleRoomPage = ({
  rooms,
  updateRooms
}) => {

  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const room = rooms.find(item => item.id === path)
  const history = useHistory();
  const { Title, Paragraph, Text } = Typography;
  const { gallery, number, type, occupancy, price, guest, features, description, id } = room;
  const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);
  const [isCheckOutModalOpen, setIsCheckOutModalOpen] = useState(false);
  
  return (
  <>
    <Row gutter={[32, 32]}>
      <Col span={24}><Button type="link" onClick={() => history.goBack()}><HomeOutlined />Back Home</Button></Col>

      <Col span={12}>
        <Carousel autoplay>
        
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
              {updateRooms &&
                <Space wrap>             
                  <CheckIn room={room}/>
                  <CheckOut room={room}/>
                </Space>
              }
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
                <Text key={index}><CheckOutlined /> {item}<br /></Text>
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
  </>  
  )  
}

export default SingleRoomPage
