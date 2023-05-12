import "./App.css";

function App() {
  return (
    <div className="App" style={{ fontSize: "48px"}}>
      {(1000 * 1).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
    </div>
  );
}

export default App;
