import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/appRouter';

const App = () => {
  return (
      <BrowserRouter>
          {/* <Header /> */}
          <AppRouter />
      </BrowserRouter>
  );
}

export default App;
