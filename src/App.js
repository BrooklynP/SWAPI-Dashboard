import './App.css';
import { HomePage } from './pages';

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
    </div>
  );
}

export default App;
