import { Layout } from 'antd'
import AppRouter from "../../components/appRouter"
import './MainLayout.scss';
import PropTypes from 'prop-types'

const { Content } = Layout

const propTypes = {
  setRooms: PropTypes.func.isRequired
};


const MainLayout = ({
  setRooms
}) => {
  
  setRooms()
  return (
      <Content className="main_layout">
        <div className="site-layout-content">
          <AppRouter />
        </div>
      </Content>
  )
}

MainLayout.propTypes = propTypes

export default MainLayout
