import logo from '../../assets/logo.png'
import 'antd/dist/reset.css'
import { Button, Layout, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './HeaderLayout.scss'
import PropTypes from 'prop-types'

const { Header } = Layout

const propTypes = {
  deleteUser: PropTypes.func.isRequired,
  setAccessAllowed: PropTypes.func.isRequired
};

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
      <img 
        src={logo} 
        className="logo" 
        alt="logo" 
      />      
      <Button 
        className="button"
        type="link" 
        onClick={logOut}
      >
        <Avatar 
          className="avatar"
          icon={<UserOutlined />}
        />
          Log Out
      </Button>
    </Header>  
  )
};

HeaderLayout.propTypes = propTypes

export default HeaderLayout
