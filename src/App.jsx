import "./App.scss";
import Rozes from "./assets/Rozes.jpg";
function App() {
  return (
    <>
      <div className="card">
        <div className="firstConteneur">
          <img src={Rozes} />
          <div className="secondConteneur">
            <h1>Rozes</h1>
            <span>
              Under the Grave <p>(2016)</p>
            </span>
          </div>
        </div>
        <div className="rate">
          <p>Rate this album</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </>
  );
}

export default App;
