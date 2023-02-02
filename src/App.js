import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/appRouter';
import Header from './components/header';
import { Provider } from 'react-redux';
import store from './redux/sagas/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Header />         
          <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
