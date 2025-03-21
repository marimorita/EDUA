import { Route, Switch } from 'wouter';
import { Main } from './Layouts/Main/Main';
import { Team } from './Pages/Interface/Team';
import { Visitor } from './Pages/Interface/Visitor';
import { Receptionist } from './Pages/Interface/Receptionist';

/* import { Pdf } from './Pages/Pdf/Pdf';
import { Home } from './Pages/Home/Home';
import { Error } from './Pages/Error/Error';
import { Login } from './Ui/Login/Login';
import { DirTasks } from './Ui/DirTasks/DirTasks';
import { TeamTasks } from './Ui/TeamTasks/TeamTasks';
import { InfoVisit } from './Ui/InfoVisit/InfoVisit';
import { MemberTasks } from './Ui/MemberTasks/MemberTasks';
import { AccessPanel } from './Ui/AccessPanel/AccessPanel';
import { ForgotPassword } from './Pages/ForgotPassword/ForgotPassword';
import { VerificationEmail } from './Ui/Verification/VerificationEmail';
import { VerificationPhone } from './Ui/Verification/VerificationPhone';
import { Search, SearchTeam } from './Ui/Search/Search';
import { Profile, ProfileTeam } from './Pages/Profile/Profile';
import { CardsNotificationsVisitor } from './Components/Cards/Cards';
import { Docs, DocsVisitor, DocsReceptionist, DocsVisitorHistory } from './Ui/Docs/Docs';
import { Notifications, NotificationsTeam, NotificationsVisitor, HistorialVisitor, NotificationsReceptionist } from './Ui/Notifications/Notifications'; */
import { Director } from './Pages/Interface/Director'

function App() {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto w-full flex flex-col">
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/team" component={Team} />
        <Route path="/visitor" component={Visitor} />
        <Route path="/director" component={Director} />
        <Route path="/receptionist" component={Receptionist} />
      </Switch>
    </div>
  );
}
export default App;