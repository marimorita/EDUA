import { Route, Switch } from 'wouter';
import { Pdf } from './Pages/Pdf/Pdf';
import { Main } from './Layouts/Main/Main';
import { Home } from './Pages/Home/Home';
import { Team } from './Pages/Interface/Team';
import { Login } from './Pages/Login/Login';
import { Visitor } from './Pages/Interface/Visitor';
import { Director } from './Pages/Interface/Director'
import { AccessPanel } from './Pages/AccessPanel/AccessPanel';
import { Receptionist } from './Pages/Interface/Receptionist';
import { ForgotPassword } from './Pages/ForgotPassword/ForgotPassword';
import { Search } from './Ui/Search/Search';
/* import { Error } from './Pages/Error/Error';
import { DirTasks } from './Ui/DirTasks/DirTasks';
import { TeamTasks } from './Ui/TeamTasks/TeamTasks';
import { InfoVisit } from './Ui/InfoVisit/InfoVisit';
import { MemberTasks } from './Ui/MemberTasks/MemberTasks';
import { VerificationEmail } from './Ui/Verification/VerificationEmail';
import { VerificationPhone } from './Ui/Verification/VerificationPhone';
import { Profile, ProfileTeam } from './Pages/Profile/Profile';
import { CardsNotificationsVisitor } from './Components/Cards/Cards';
import { Docs, DocsVisitor, DocsReceptionist, DocsVisitorHistory } from './Ui/Docs/Docs';
import { Notifications, NotificationsTeam, NotificationsVisitor, HistorialVisitor, NotificationsReceptionist } from './Ui/Notifications/Notifications'; */

function App() {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto w-full flex flex-col">
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/pdf" component={Pdf} />
        <Route path="/home" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
        <Route path="/visitor" component={Visitor} />
        <Route path="/director" component={Director} />
        <Route path="/accessPanel" component={AccessPanel} />
        <Route path="/receptionist" component={Receptionist} />
        <Route path="/forgotPassword" component={ForgotPassword} />

      </Switch>
    </div>
  );
}
export default App;