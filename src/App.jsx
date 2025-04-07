import { Route, Switch } from 'wouter';
import { Pdf } from './Pages/Pdf/Pdf';
import { Main } from './Layouts/Main/Main';
import { Home } from './Pages/Home/Home';
import { Team } from './Pages/Interface/Team';
import { Docs } from './Components/Docs/Docs'; 
import { Login } from './Pages/Login/Login';
import { Visitor } from './Pages/Interface/Visitor';
import { Director } from './Pages/Interface/Director'
import { DocsTeam } from './Components/Docs/DocsTeam';
import { DirTasks } from './Pages/Tasks/DirTasks/DirTasks';
import { TeamTasks } from './Pages/Tasks/TeamTasks/TeamTasks';
import { SearchTeam } from './Pages/Search/SearchTeam';
import { AccessPanel } from './Pages/AccessPanel/AccessPanel';
import { ProfileTeam } from './Pages/Profile/ProfileTeam';
import { MemberTasks } from './Pages/Tasks/MemberTasks/MemberTasks';
import { Receptionist } from './Pages/Interface/Receptionist';
import { ForgotPassword } from './Pages/ForgotPassword/ForgotPassword';
import { SearchDirector } from './Pages/Search/SearchDirector';
import { ProfileVisitor } from './Pages/Profile/ProfileVisitor';
import { ProfileDirector } from './Pages/Profile/ProfileDirector';
import { Cards, CardTeam } from './Components/Cards/Cards';
import { DocsReceptionist } from './Components/Docs/DocsReceptionist';
import { VerificationEmail } from './Pages/Verification/VerificationEmail';
import { VerificationPhone } from './Pages/Verification/VerificationPhone';
import { NotificationsTeam } from './Components/Notifications/NotificationsTeam';
import { ProfileReceptionist } from './Pages/Profile/ProfileReceptionist';
import { NotificationsDirector} from './Components/Notifications/NotificationsDirector';
import { DocsDirector, DocsMember, DocsMyDirector } from './Components/Docs/DocsDirector';
import { NotificationsReceptionist } from './Components/Notifications/NotificationsReceptionist';
import { DocsVisitor, DocsHistorialVisitor } from './Components/Docs/DocsVisitor';
import { NotificationsVisitor, HistorialVisitor } from './Components/Notifications/NotificationsVisitor';

/* import { Error } from './Pages/Error/Error';
import { InfoVisit } from './Ui/InfoVisit/InfoVisit';
import { VerificationPhone } from './Ui/Verification/VerificationPhone';*/

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
        <Route path="/dirTasks" component={DirTasks} />
        <Route path="/director" component={Director} />
        <Route path="/teamTasks" component={TeamTasks} />
        <Route path="/docsMember" component={DocsMember} /> 
        <Route path="/searchTeam" component={SearchTeam} /> 
        <Route path="/accessPanel" component={AccessPanel} />
        <Route path="/docsVisitor" component={DocsVisitor} /> 
        <Route path="/profileTeam" component={ProfileTeam} />
        <Route path="/memberTasks" component={MemberTasks} />
        <Route path="/docsDirector" component={DocsDirector} /> 
        <Route path="/receptionist" component={Receptionist} />
        <Route path="/docsMyDirector" component={DocsMyDirector} />
        <Route path="/profileVisitor" component={ProfileVisitor} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/searchDirector" component={SearchDirector} /> 
        <Route path="/profileDirector" component={ProfileDirector} />
        <Route path="/historialVisitor" component={HistorialVisitor} />
        <Route path="/docsReceptionist" component={DocsReceptionist} /> 
        <Route path="/notificationsTeam" component={NotificationsTeam} />
        <Route path="/verificationEmail" component={VerificationEmail} />
        <Route path="/verificationPhone" component={VerificationPhone} />
        <Route path="/profileReceptionist" component={ProfileReceptionist} />
        <Route path="/docsHistorialVisitor" component={DocsHistorialVisitor} /> 
        <Route path="/notificationsVisitor" component={NotificationsVisitor} />
        <Route path="/notificationsDirector" component={NotificationsDirector} />
        <Route path="/notificationsReceptionist" component={NotificationsReceptionist} /> 
      </Switch>
    </div>
  );
}
export default App;