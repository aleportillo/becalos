import Lista from './features/Lista.js';
import { personas } from './data/personas.js';

function App() {
  return (
    <div>
      <h1>Miembros del equipo</h1>
      <Lista personas={personas} />
    </div>
  );
}

export default App;
