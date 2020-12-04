import Order from "./components/order/order";
import Trade from "./components/Trade/trade";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="left"></div>
      <div className="right">
        <Order />
        <Trade />
      </div>
    </div>
  );
}

export default App;
