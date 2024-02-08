import logo from './logo.svg';
import styles from './components/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderDesk from './components/headerDesk';
import HeaderPhone from './components/headerPhone';
import Api1 from './components/Api1'


function App() {
  return (
    <div className="App">
      <HeaderDesk /> <HeaderPhone />
      <Api1 />
    </div>
  );
}

export default App;
