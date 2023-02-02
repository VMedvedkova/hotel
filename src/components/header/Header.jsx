// import { Link, NavLink } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { signOut } from '../redux/actions/users'
// import Login from '../components/login'
// import Logout from '../logout'
// import CustomImage from '../../customComponents/customImage/CustomImage';
// import { HeaderContainer } from '../../customComponents/headerContainer';
// import logo from '../../assets/images/q.svg';
import 'antd/dist/reset.css'
import { Button, DatePicker, message } from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'

const Header = ({
    setData
}) => {

    const handleClick = () => {
      console.log('ok')
      setData()
    }

    const date = new Date().toString()
    console.log('date', date)
    const dateMoment = moment(date).format('L');
    console.log('dateMoment', dateMoment)
  

    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg" aria-label="Eleventh navbar example">
            <div className="container-fluid">

            <Button type={'primary'} onClick={handleClick}>SET DATA</Button>
        
            </div>
        </nav>
        </div>
      </>  
    )
};


Header.propTypes = {
  setData: PropTypes.func.isRequired
}

Header.defaultProps = {
  setData: () => {}
}

export default Header;