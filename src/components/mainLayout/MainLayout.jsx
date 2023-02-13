import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from 'antd'
import { Route, Switch, Redirect, Outlet } from 'react-router-dom'
import AuthPage from "../../pages/authPage"
import MainPage from "../../pages/mainPage"
import AppRouter from "../../components/appRouter"
import SingleRoomPage from "../../pages/singleRoomPage"

const { Content } = Layout

const MainLayout = ({
  setRooms
}) => {
  
  setRooms()

  return (
    <>
      <Content
        style={{
          padding: '32px 50px',
        }}
      >
        <div className="site-layout-content">
          <AppRouter />
        </div>
      </Content>
    </>
  );
};
export default MainLayout