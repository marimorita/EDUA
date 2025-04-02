import { Route, Switch } from 'wouter';
import { Pdf } from './Pages/Pdf/Pdf';
import { Main } from './Layouts/Main/Main';
import { Home } from './Pages/Home/Home';
import { Team } from './Pages/Interface/Team';
import { Login } from './Pages/Login/Login';
import { Cards, CardTeam } from './Components/Cards/Cards';
import { Search } from './Ui/Search/Search';
import { Visitor } from './Pages/Interface/Visitor';
import { Director } from './Pages/Interface/Director'
import { TeamTasks } from './Ui/TeamTasks/TeamTasks';
import { AccessPanel } from './Pages/AccessPanel/AccessPanel';
import { MemberTasks } from './Ui/MemberTasks/MemberTasks';
import { Receptionist } from './Pages/Interface/Receptionist';
import { ForgotPassword } from './Pages/ForgotPassword/ForgotPassword';
import { VerificationEmail } from './Pages/Verification/VerificationEmail';
import { VerificationPhone } from './Pages/Verification/VerificationPhone';
import { NotificationsDirector} from './Ui/Notifications/NotificationsDirector';
import { NotificationsVisitor } from './Ui/Notifications/NotificationsVisitor';
import { NotificationsReceptionist } from './Ui/Notifications/NotificationsReceptionist';

/* import { Error } from './Pages/Error/Error';
import { DirTasks } from './Ui/DirTasks/DirTasks';
import { InfoVisit } from './Ui/InfoVisit/InfoVisit';
import { VerificationPhone } from './Ui/Verification/VerificationPhone';
import { Profile, ProfileTeam } from './Pages/Profile/Profile';
import { Docs, DocsVisitor, DocsReceptionist, DocsVisitorHistory } from './Ui/Docs/Docs';*/

function App() {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto w-full flex flex-col">
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/pdf" component={Pdf} />
        <Route path="/home" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/login" component={Login} />
        <Route path="/cards" component={Cards} />
        <Route path="/search" component={Search} />
        <Route path="/visitor" component={Visitor} />
        <Route path="/cardTeam" component={CardTeam} />
        <Route path="/director" component={Director} />
        <Route path="/teamTasks" component={TeamTasks} />
        <Route path="/accessPanel" component={AccessPanel} />
        <Route path="/memberTasks" component={MemberTasks} />
        <Route path="/receptionist" component={Receptionist} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/verificationEmail" component={VerificationEmail} />
        <Route path="/verificationPhone" component={VerificationPhone} />
        <Route path="/notificationsVisitor" component={NotificationsVisitor} />
        <Route path="/notificationsDirector" component={NotificationsDirector} />
        <Route path="/notificationsReceptionist" component={NotificationsReceptionist} /> 
      </Switch>
    </div>
  );
}
export default App;