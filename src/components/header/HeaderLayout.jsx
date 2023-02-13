import logo from '../../assets/logo.png';
import 'antd/dist/reset.css'
import { Button, DatePicker, message, Menu, Image, Layout, Avatar } from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'
import { UserOutlined } from '@ant-design/icons';
import { setAccessAllowed } from '../../redux/actions/currentUser';

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const { Header } = Layout

const HeaderLayout = ({
    deleteUser,
    setAccessAllowed
}) => {
  
    const logOut = () => {
      deleteUser()
      setAccessAllowed(false)
    }

  return (
    <Header>        
        <img src={logo} className="logo" alt="logo" />      
        <Button 
          type="link" 
          style={{
                color: '#fff'
          }}
          onClick={logOut}
          >
          <Avatar 
            icon={<UserOutlined />}
            style={{
              backgroundColor: 'rgb(69 86 110)',
              color: '#fff',
              marginRight: 15
            }} />
          Log Out
          </Button>
    </Header>  
  )
};

export default HeaderLayout;
