import { Route, Switch } from 'wouter';
import { Main } from './Components/Layouts/Main/Main';
import { Login } from './Components/Ui/Login/Login';
import { Register } from './Components/Ui/Register/Register';
import { Help } from './Components/Ui/Help/Help';

 function App() {
  return (
    <div className="relative">
      <div className="absolute min-h-screen w-full z-[-1] bottom-0 top-0 bg-pink-500"></div>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/help" component={Help}></Route>
      </Switch>
    </div>
  );
}

export default App;