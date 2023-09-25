import './App.css';
import { HomePage } from './pages';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <HomePage />;
      break;
    default:
      component = <HomePage />
      break;
  }
  return (
    <div className="App">
      {component}
      <ToastContainer position='bottom-left'/>
    </div>
  );
}

export default App;
