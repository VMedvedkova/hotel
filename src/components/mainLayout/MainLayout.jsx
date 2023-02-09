import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from 'antd'
import { Route, Switch, Redirect, Outlet } from 'react-router-dom'
import AuthPage from "../../pages/authPage"
import MainPage from "../../pages/mainPage"
import AppRouter from "../../components/appRouter"
import SingleRoomPage from "../../pages/singleRoomPage"

const { Header, Content, Footer } = Layout

const MainLayout = ({
  user,
}) => {

  const isUser = Object.keys(user).length !== 0

  const publicRoutes = [
    {
        path: '/login',
        Component: AuthPage,
    }
  ];

  const privateRoutes = [
      {
          path: '/',
          Component: MainPage,
      },
      {
          path: '/room/:roomId',
          Component: SingleRoomPage,
      }
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
      </ConfigProvider>
      <Content
        style={{
          padding: '32px 50px',
        }}
      >
        <div className="site-layout-content">

          <AppRouter />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </>
  );
};
export default MainLayout