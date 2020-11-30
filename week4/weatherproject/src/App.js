import './App.css';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import CityInfoList from './components/CityInfoList';
import CityForcast from './components/CityForcast';

function App() {

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/:cityId' component={ CityForcast }>
           
          </Route>
          <Route path='/'>
            <CityInfoList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
