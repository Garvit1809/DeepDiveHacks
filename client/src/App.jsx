import { Route, Switch } from 'react-router-dom';
import AllFishes from './pages/fishes/allFishes.page';
import OneFish from './pages/fishes/oneFish.page';
import Home from './pages/home/home.page';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/fishes' component={AllFishes} />
        <Route path='/fishes/:fishId' component={OneFish} />
        <Route path='/resesarcher-loign' component={Home} />
        <Route path='/become-a-researcher' component={Home} />
      </Switch>
    </div>
  );
};

export default App;
