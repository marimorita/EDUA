import { Route, Switch } from 'wouter';
import { Pdf } from './Components/Ui/Pdf/Pdf';
import { Home } from './Components/Pages/Home/Home';
import { Main } from './Components/Layouts/Main/Main';
import { Error } from './Components/Pages/Error/Error';
import { Team } from './Components/Pages/Interface/Team'; 
import { Login } from './Components/Ui/Login/Login';
import { Visitor } from './Components/Pages/Interface/Visitor';
import { Director } from './Components/Pages/Interface/Director'
import { DirTasks } from './Components/Ui/DirTasks/DirTasks';
import { TeamTasks } from './Components/Ui/TeamTasks/TeamTasks';
import { InfoVisit } from './Components/Ui/InfoVisit/InfoVisit';
import { MemberTasks } from './Components/Ui/MemberTasks/MemberTasks';
import { AccessPanel } from './Components/Ui/AccessPanel/AccessPanel';
import { Receptionist } from './Components/Pages/Interface/Receptionist';
import { Docs, DocsVisitor, DocsReceptionist, DocsVisitorHistory } from './Components/Ui/Docs/Docs';
import { VerificationEmail } from './Components/Ui/Verification/VerificationEmail';
import { VerificationPhone } from './Components/Ui/Verification/VerificationPhone';
import { Search, SearchTeam } from './Components/Ui/Search/Search';
import { Profile, ProfileTeam } from './Components/Ui/Profile/Profile';
import { CardsNotificationsVisitor } from './Components/Ui/Cards/Cards';
import { Notifications, NotificationsTeam, NotificationsVisitor, HistorialVisitor, NotificationsReceptionist } from './Components/Ui/Notifications/Notifications';
import { ForgotPassword } from './Components/Ui/ForgotPassword/ForgotPassword';
 function App() {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto w-full flex flex-col">
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/pdf" component={Pdf} />
        <Route path="/home" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/docs" component={Docs}/>
        <Route path="/login" component={Login} />
        <Route path="/error" component={Error} />
        <Route path="/search" component={Search}/>
        <Route path="/profile" component={Profile} />
        <Route path="/visitor" component={Visitor}/>
        <Route path="/director" component={Director} />
        <Route path="/dirTasks"  component={DirTasks}/>
        <Route path="/infoVisit" component={InfoVisit} />
        <Route path="/teamTasks" component={TeamTasks}/>
        <Route path="/searchTeam" component={SearchTeam}/>
        <Route path="/accessPanel" component={AccessPanel} />
        <Route path="/memberTasks" component={MemberTasks} />
        <Route path="/profileTeam" component={ProfileTeam} />
        <Route path="/docsVisitor" component={DocsVisitor}/>
        <Route path="/receptionist" component={Receptionist} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/docsReceptionist" component={DocsReceptionist}/>
        <Route path="/historialVisitor" component={HistorialVisitor} />
        <Route path="/notificationsTeam" component={NotificationsTeam} />
        <Route path="/verificationEmail" component={VerificationEmail} />
        <Route path="/verificationPhone" component={VerificationPhone} />
        <Route path="/docsVisitorHistory" component={DocsVisitorHistory}/>
        <Route path="/notificationsVisitor" component={NotificationsVisitor} />
        <Route path="/notificationsReceptionist" component={NotificationsReceptionist} />
        <Route path="/cardsNotificationsVisitor" component={CardsNotificationsVisitor} />
      </Switch>
    </div>
  );
}
export default App;