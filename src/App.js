import './App.css';
import { AppRoutes } from './routes';
import { Header } from './components/header/header';
import { Curs } from './components/curs/curs';

function App() {
  return (
    <>
    <div className='container'>
    <AppRoutes />
    </div>
    </>
  );
}

export default App;
