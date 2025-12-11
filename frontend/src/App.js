import Header from './components/header/Header';
import Register from './components/register/Register';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-content">
        <Register />
      </div>
    </div>
  );
}

export default App;