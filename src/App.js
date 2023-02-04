import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/appRouter';
import Header from './components/header';
import AuthPage from './pages/authPage/AuthPage';
import { Provider } from 'react-redux';
import store from './redux/sagas/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Header />         
          <AppRouter />
          {/* <AuthPage />    */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
