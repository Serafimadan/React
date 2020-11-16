import './App.css';
import DogGallery from './components/dogPhotoGallery/DogGallery';
import Friend from './components/friendOnDemand/Friend';

function App() {
  return (
    <div className="App">
      <h3>First exercise:</h3>
      <Friend />
      <h3>Second exercise:</h3>
      <DogGallery />
    </div>
  );
}

export default App;
