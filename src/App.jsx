import { Route, Switch } from 'wouter';
import { Main } from './Components/Layouts/Main/Main';
import { Login } from './Components/Ui/Login/Login';
import { Register } from './Components/Ui/Register/Register';
import { VerificationEmail } from './Components/Ui/Verification/VerificationEmail';
import { VerificationPhone } from './Components/Ui/Verification/VerificationPhone';
import { Home } from './Components/Ui/Home/Home';
import { ModalRegister } from './Components/Ui/Modals/ModalRegister';


 function App() {
  return (
    <div className="relative">
      <div className="absolute min-h-screen w-full z-[-1] bottom-0 top-0 bg-pink-500"></div>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/verificationEmail" component={VerificationEmail} />
        <Route path="/verificationPhone" component={VerificationPhone} />
        <Route path="/modalRegister" component={ModalRegister} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;