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
    <div className="min-h-screen max-w-[1920px] mx-auto w-full flex flex-col">
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