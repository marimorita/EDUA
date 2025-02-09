import { Route, Switch } from 'wouter';
import { Main } from './Components/Layouts/Main/Main';
import { Home } from './Components/Pages/Home/Home';
import { Login } from './Components/Ui/Login/Login';
import { Admin } from './Components/Pages/Interface/Admin';
import { Team } from './Components/Ui/Team/Team';
import { Search } from './Components/Ui/Search/Search';
import { Profile } from './Components/Ui/Profile/Profile';
import { Director } from './Components/Pages/Interface/Director'
import { AccessPanel } from './Components/Ui/AccessPanel/AccessPanel';
import { ModalConfirm } from './Components/Ui/Modals/ModalConfirm';
import { VerificationEmail } from './Components/Ui/Verification/VerificationEmail';
import { VerificationPhone } from './Components/Ui/Verification/VerificationPhone';
import { Notifications } from './Components/Ui/Notifications/Notifications';

 function App() {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto w-full flex flex-col">
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/home" component={Home} />
        <Route path="/team" component={Team}/>
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search}/>
        <Route path="/profile" component={Profile} />
        <Route path="/director" component={Director} />
        <Route path="/accessPanel" component={AccessPanel} />
        <Route path="/modalConfirm" component={ModalConfirm} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/verificationEmail" component={VerificationEmail} />
        <Route path="/verificationPhone" component={VerificationPhone} />
      </Switch>
    </div>
  );
}

export default App;