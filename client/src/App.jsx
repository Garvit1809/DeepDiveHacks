import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/home.page';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/resesarcher-loign' component={Home} />
        <Route path='/become-a-researcher' component={Home} />
      </Switch>
    </div>
  );
};

export default App;
