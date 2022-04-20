import { Game } from "./components/Game";
import styles from './styles/style.css';


function App() {
  return (
    <div className="App">
      <h1>Jogo da Velha</h1>
      <styles />
      <Game />
    </div>
  );
}

export default App;
