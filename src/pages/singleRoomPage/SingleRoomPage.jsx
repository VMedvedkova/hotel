import { useLocation } from 'react-router'
import 'antd/dist/reset.css'
import { 
  Button, 
  Col, 
  Row, 
  Carousel, 
  Image, 
  Typography,
  Descriptions, 
  Space 
} from 'antd'
import { useHistory  } from 'react-router-dom';
import {
  HomeOutlined,
  CheckOutlined
} from '@ant-design/icons';
import CheckIn from '../../components/checkIn'
import CheckOut from '../../components/checkOut'
import './SingleRoomPage.scss'
import * as constants from '../../constants/rooms'
import PropTypes from 'prop-types'

const propTypes = {
  rooms: PropTypes.shape({
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
  updateRooms: PropTypes.func.isRequired
};

const SingleRoomPage = ({
  rooms,
  updateRooms
}) => {

  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const room = rooms.find(item => item.id === path)
  const history = useHistory();
  const { Title, Text } = Typography;
  const { 
    gallery, 
    number, 
    type, 
    occupancy, 
    price, 
    guest, 
    features, 
    description 
  } = room;

  
  return (
  <>
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <Button 
          type="link" 
          onClick={() => history.goBack()}
        >
          <HomeOutlined />Back Home
        </Button>
      </Col>
      <Col span={12}>
        <Carousel autoplay>        
          {gallery.map((src, index) => (
             <Image 
                key={index}
                src={src}
              />
            ))
          }
        </Carousel>
      </Col>
      <Col span={12}>
        <Row>
          <Col span={12}>
            <Title underline>
              Room {number}
            </Title>
          </Col>
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
          <Descriptions column={1} className="bold_list">
            <Descriptions.Item label="Type">{type}</Descriptions.Item>
            <Descriptions.Item label="Occupancy">{occupancy}</Descriptions.Item>
            <Descriptions.Item label="Price">{price}</Descriptions.Item>
            {guest && <Descriptions.Item label="Guest">{guest}</Descriptions.Item>}
          </Descriptions>
          </Col>
          <Col span={12}>
            <Descriptions  
              column={1} 
              layout={'vertical'} 
              className="bold_list"
            >
              <Descriptions.Item 
                label="Features" 
                className='featuresList'
              >
                {features.map((item, index) => (
                    <Text key={index}>
                      <CheckOutlined /> {item}<br />
                    </Text>
                  ))
                }   
            </Descriptions.Item>
          </Descriptions> 
        </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Descriptions className="bold_list">
          <Descriptions.Item 
            label="Description" 
          >
            {description}
          </Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  </>  
  )  
}

SingleRoomPage.propTypes = propTypes

export default SingleRoomPage
