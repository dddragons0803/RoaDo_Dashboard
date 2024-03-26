import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/Sidebar';
function App() {
  return (
    <div className="container">
    <Sidebar />
    <div className="content">
      Main Content
    </div>
  </div>
  );
}

export default App;
