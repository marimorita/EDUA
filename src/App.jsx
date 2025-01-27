import { Route, Switch } from 'wouter';
import { Main } from './Components/Layouts/Main/Main';
import { Login } from './Components/Ui/Login/Login';
import { VerificationEmail } from './Components/Ui/Verification/VerificationEmail';
import { VerificationPhone } from './Components/Ui/Verification/VerificationPhone';
import { Home } from './Components/Pages/Home/Home';
import { ModalConfirm } from './Components/Ui/Modals/ModalConfirm';
import { Profile } from './Components/Ui/Profile/Profile';
import { Admin } from './Components/Pages/Interface/Admin';
import { AccessPanel } from './Components/Ui/AccessPanel/AccessPanel';

 function App() {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto w-full flex flex-col">
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/accessPanel" component={AccessPanel} />
        <Route path="/verificationEmail" component={VerificationEmail} />
        <Route path="/verificationPhone" component={VerificationPhone} />
        <Route path="/modalConfirm" component={ModalConfirm} />
        <Route path="/profile" component={Profile} />
        <Route path="/home" component={Home} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;