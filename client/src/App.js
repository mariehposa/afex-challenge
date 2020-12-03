import Order from "./components/order/order";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="left"></div>
      <div className="right">
        <Order />
      </div>
    </div>
  );
}

export default App;
