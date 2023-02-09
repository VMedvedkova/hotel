import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import AppRouter from './components/appRouter';
import HeaderLayout from './components/header';
import AuthPage from './pages/authPage/AuthPage';
import { Provider } from 'react-redux';
import store from './redux/sagas/store';
import {createBrowserHistory} from 'history'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import MainLayout from './components/mainLayout';
const { Content, Footer } = Layout


const customHistory = createBrowserHistory();

const App = () => {
  return (
    <Layout className="layout">
      <Provider store={store}>
        <BrowserRouter>
            <HeaderLayout />         
            <MainLayout />
        </BrowserRouter>
      </Provider>
    </Layout>
  );
}

export default App;
