import { Route, Switch } from 'wouter';
import { Home } from './Components/Pages/Home/Home';
import { Main } from './Components/Layouts/Main/Main';
import { Docs } from './Components/Ui/Docs/Docs';
import { Team } from './Components/Pages/Interface/Team';
import { Login } from './Components/Ui/Login/Login';
import { Director } from './Components/Pages/Interface/Director'
import { DirTasks } from './Components/Ui/DirTasks/DirTasks';
import { TeamTasks } from './Components/Ui/TeamTasks/TeamTasks';
import { MemberTasks } from './Components/Ui/MemberTasks/MemberTasks';
import { AccessPanel } from './Components/Ui/AccessPanel/AccessPanel';
import { ModalConfirm } from './Components/Ui/Modals/ModalConfirm';
import { VerificationEmail } from './Components/Ui/Verification/VerificationEmail';
import { VerificationPhone } from './Components/Ui/Verification/VerificationPhone';
import { Search, SearchTeam } from './Components/Ui/Search/Search';
import { Profile, ProfileTeam } from './Components/Ui/Profile/Profile';
import { Notifications, NotificationsTeam } from './Components/Ui/Notifications/Notifications';
import { Visitor } from './Components/Pages/Interface/Visitor';

 function App() {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto w-full flex flex-col">
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/home" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/docs" component={Docs}/>
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search}/>
        <Route path="/visitor" component={Visitor}/>
        <Route path="/profile" component={Profile} />
        <Route path="/director" component={Director} />
        <Route path="/dirTasks" component={DirTasks}/>
        <Route path="/teamTasks" component={TeamTasks}/>
        <Route path="/searchteam" component={SearchTeam}/>
        <Route path="/accessPanel" component={AccessPanel} />
        <Route path="/memberTasks" component={MemberTasks} />
        <Route path="/profileTeam" component={ProfileTeam} />
        <Route path="/modalConfirm" component={ModalConfirm} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/notificationsTeam" component={NotificationsTeam} />
        <Route path="/verificationEmail" component={VerificationEmail} />
        <Route path="/verificationPhone" component={VerificationPhone} />
      </Switch>
    </div>
  );
}

export default App;