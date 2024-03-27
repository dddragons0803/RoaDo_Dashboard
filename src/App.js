import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/Sidebar';
import Maincontent from './Component/Maincontent';
function App() {
  return (
    <div className="container">
    <Sidebar />
    <div className="content">
      <Maincontent />
    </div>
  </div>
  );
}

export default App;
