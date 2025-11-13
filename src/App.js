import './App.css';
import Takki from './takki-component';
function App() {

  return (
    <div className="App">
      <div className="grid-container">
        <Takki takkiId="takki-1"></Takki>
        <Takki takkiId="takki-2"></Takki>
        <Takki takkiId="takki-3"></Takki>
        <Takki takkiId="takki-4"></Takki>
        <Takki takkiId="takki-5"></Takki>
        <Takki takkiId="takki-6"></Takki>
        <Takki takkiId="takki-7"></Takki>
        <Takki takkiId="takki-8"></Takki>
        <Takki takkiId="takki-9"></Takki>
      </div>
    </div>
  );
}

export default App;
