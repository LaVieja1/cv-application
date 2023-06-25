import FormCV from "./components/FormCV";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Creador<span>CV</span></h1>
      <div>
        <FormCV />
      </div>
      <div className="attrribution">
        Santiago Cano 2023 <a className="github" href="https://github.com/LaVieja1/">
        <i className="fab fa-github" aria-hidden="true"></i></a>
      </div>
    </div>
  );
}

export default App;
