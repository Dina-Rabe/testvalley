import logo from './logo.svg';
import styles from './components/custom.css';
import './App.css';
import HeaderDesk from './components/headerDesk';
import HeaderPhone from './components/headerPhone';
import Api1Desk from './components/Api1Desk'
import Api1Phone from './components/Api1Phone';
import Api2Desk from './components/Api2Desk';
import Api2Phone from './components/Api2Phone';
import Api3Desk from './components/Api3Desk';


function App() {
  return (
    <div className="App">
      <HeaderDesk /> <HeaderPhone />
      <Api1Desk /> <Api1Phone />
      <Api2Desk /> <Api2Phone />
      <Api3Desk />
    </div>
  );
}

export default App;
