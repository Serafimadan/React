import './App.css';

import HobbyList from './components/firstExercise/HobbyList';
import BlockGuarantee from './components/secondExercise/BlockGuarantee';
import Counter from './components/thirdExercise/Counter';



function App() { 

  return (
    <div className="App">
    <HobbyList />
    <BlockGuarantee />
    <Counter />
    <div className = 'lastBlock'>
    <h2>Project link</h2>
    <a href = 'https://weather-in-the-world.netlify.app/'>Hackyourweather app</a>
    </div>
    </div>
  );
}

export default App;
