import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const TextStyled = styled.p`
  display: flex;
  background-color: red;
  padding: 100px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TextStyled>Learn React</TextStyled>
      </header>
    </div>
  );
}

export default App;
