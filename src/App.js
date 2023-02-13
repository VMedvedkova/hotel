import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/sagas/store';
import { Layout } from 'antd'
import HeaderLayout from './components/header';
import MainLayout from './components/mainLayout';
import FooterLayout from './components/footer/FooterLayout';

const App = () => {
  return (
    <Layout className="layout">
      <Provider store={store}>
        <BrowserRouter>
            <HeaderLayout />         
            <MainLayout />         
            <FooterLayout />
        </BrowserRouter>
      </Provider>
    </Layout>
  );
}

export default App;
