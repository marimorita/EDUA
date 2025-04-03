import { Route, Switch } from 'wouter';
import { Pdf } from './Pages/Pdf/Pdf';
import { Main } from './Layouts/Main/Main';
import { Home } from './Pages/Home/Home';
import { Team } from './Pages/Interface/Team';
import { Docs } from './Ui/Docs/Docs'; 
import { Login } from './Pages/Login/Login';
import { Visitor } from './Pages/Interface/Visitor';
import { Director } from './Pages/Interface/Director'
import { DocsTeam } from './Ui/Docs/DocsTeam';
import { TeamTasks } from './Ui/TeamTasks/TeamTasks';
import { SearchTeam } from './Pages/Search/SearchTeam';
import { AccessPanel } from './Pages/AccessPanel/AccessPanel';
import { MemberTasks } from './Ui/MemberTasks/MemberTasks';
import { Receptionist } from './Pages/Interface/Receptionist';
import { ForgotPassword } from './Pages/ForgotPassword/ForgotPassword';
import { SearchDirector } from './Pages/Search/SearchDirector';
import { Cards, CardTeam } from './Components/Cards/Cards';
import { DocsReceptionist } from './Ui/Docs/DocsReceptionist';
import { VerificationEmail } from './Pages/Verification/VerificationEmail';
import { VerificationPhone } from './Pages/Verification/VerificationPhone';
import { NotificationsTeam } from './Components/Notifications/NotificationsTeam';
import { NotificationsDirector} from './Components/Notifications/NotificationsDirector';
import { NotificationsReceptionist } from './Components/Notifications/NotificationsReceptionist';
import { DocsDirector, DocsMember } from './Ui/Docs/DocsDirector';
import { DocsVisitor, DocsHistorialVisitor } from './Ui/Docs/DocsVisitor';
import { NotificationsVisitor, HistorialVisitor } from './Components/Notifications/NotificationsVisitor';

/* import { Error } from './Pages/Error/Error';
import { DirTasks } from './Ui/DirTasks/DirTasks';
import { InfoVisit } from './Ui/InfoVisit/InfoVisit';
import { VerificationPhone } from './Ui/Verification/VerificationPhone';
import { Profile, ProfileTeam } from './Pages/Profile/Profile';*/

function App() {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto w-full flex flex-col">
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/pdf" component={Pdf} />
        <Route path="/home" component={Home} />
        <Route path="/docs" component={Docs} />
        <Route path="/team" component={Team} />
        <Route path="/login" component={Login} />
        <Route path="/cards" component={Cards} />
        <Route path="/visitor" component={Visitor} />
        <Route path="/cardTeam" component={CardTeam} />
        <Route path="/docsTeam" component={DocsTeam} /> 
        <Route path="/director" component={Director} />
        <Route path="/teamTasks" component={TeamTasks} />
        <Route path="/docsMember" component={DocsMember} /> 
        <Route path="/searchTeam" component={SearchTeam} /> 
        <Route path="/accessPanel" component={AccessPanel} />
        <Route path="/docsVisitor" component={DocsVisitor} /> 
        <Route path="/memberTasks" component={MemberTasks} />
        <Route path="/docsDirector" component={DocsDirector} /> 
        <Route path="/receptionist" component={Receptionist} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/searchDirector" component={SearchDirector} /> 
        <Route path="/historialVisitor" component={HistorialVisitor} />
        <Route path="/docsReceptionist" component={DocsReceptionist} /> 
        <Route path="/notificationsTeam" component={NotificationsTeam} />
        <Route path="/verificationEmail" component={VerificationEmail} />
        <Route path="/verificationPhone" component={VerificationPhone} />
        <Route path="/docsHistorialVisitor" component={DocsHistorialVisitor} /> 
        <Route path="/notificationsVisitor" component={NotificationsVisitor} />
        <Route path="/notificationsDirector" component={NotificationsDirector} />
        <Route path="/notificationsReceptionist" component={NotificationsReceptionist} /> 
      </Switch>
    </div>
  );
}
export default App;