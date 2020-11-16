import './App.css';
import DogGallery from './components/dogPhotoGallery/DogGallery';
import Friend from './components/friendOnDemand/Friend';
import RandomJoke from './components/jokeGenerator/RandomJoke';

function App() {
  return (
    <div className="App">
      <h3>First exercise:</h3>
      <Friend />
      <h3>Second exercise:</h3>
      <DogGallery />
      <h3>Third exercise:</h3>
      <RandomJoke />
    </div>
  );
}

export default App;
