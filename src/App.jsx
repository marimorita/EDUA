import { Pdf } from './Pages/Pdf/Pdf';
import { Home } from './Pages/Home/Home';
import { Main } from './Layouts/Main/Main';
import { Team } from './Pages/Interface/Team';
import { Docs } from './Components/Docs/Docs';
import { Login } from './Pages/Login/Login';
import { Visitor } from './Pages/Interface/Visitor';
import { Director } from './Pages/Interface/Director'
import { DocsTeam } from './Components/Docs/DocsTeam';
import { DirTasks } from './Pages/Tasks/DirTasks/DirTasks';
import { InfoVisit } from './Pages/InfoVisit/InfoVisit';
import { TeamTasks } from './Pages/Tasks/TeamTasks/TeamTasks';
import { SearchTeam } from './Pages/Search/SearchTeam';
import { AccessPanel } from './Pages/AccessPanel/AccessPanel';
import { ProfileTeam } from './Pages/Profile/ProfileTeam';
import { MemberTasks } from './Pages/Tasks/MemberTasks/MemberTasks';
import { Receptionist } from './Pages/Interface/Receptionist';
import { AuthProvider } from './Context/AuthContext';
import { StateContext } from './Context/Context';
import { Route, Switch } from 'wouter';
import { axiosInstance } from '../axiosConfig';
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
import { NotificationsDirector } from './Components/Notifications/NotificationsDirector';
import { toast, ToastContainer } from 'react-toastify';
import { NotificationsReceptionist } from './Components/Notifications/NotificationsReceptionist';
import { useContext, useEffect, useState } from 'react';
import { DocsVisitor } from './Components/Docs/DocsVisitor';
import { NotificationsVisitor } from './Components/Notifications/NotificationsVisitor';
import { DocsDirector, DocsMember, DocsMyDirector } from './Components/Docs/DocsDirector';
import { SearchVisitor } from './Pages/Search/SearchVisitor';
import { ProtectRoute } from './Context/ProtectectRoutes';

/* import { Error }f from './Pages/Error/Error';
import { VerificationPhone } from './Ui/Verification/VerificationPhone';*/

function App() {
  const { userExists, setUserExits } = useContext(StateContext);
  const [routeVisitor, setRouteVisitor] = useState(localStorage.getItem('RouteV') || '')
  const [routeDirector, setRouteDirector] = useState(localStorage.getItem('RouteD') || '')
  const [routeMemberTeam, setRouteMemberTeam] = useState(localStorage.getItem('RouteM') || '')
  const [routeReceptionist, setRouteReceptionist] = useState(localStorage.getItem('RouteR') || '')

  useEffect(() => {
    const storedRouteV = localStorage.getItem('routeV');
    if (storedRouteV !== routeVisitor) {
      setRouteVisitor(storedRouteV);
    }
  }, [routeVisitor]);

  useEffect(() => {
    const storedRouteD = localStorage.getItem('routeD');
    if (storedRouteD !== routeDirector) {
      setRouteDirector(storedRouteD);
    }
  }, [routeDirector]);

  useEffect(() => {
    const storedRouteM = localStorage.getItem('routeM');
    if (storedRouteM !== routeMemberTeam) {
      setRouteMemberTeam(storedRouteM);
    }
  }, [routeMemberTeam]);

  useEffect(() => {
    const storedRouteR = localStorage.getItem('routeR');
    if (storedRouteR !== routeReceptionist) {
      setRouteReceptionist(storedRouteR);
    }
  }, [routeReceptionist]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchDirector = async () => {
      try {
        const response = await axiosInstance.get(
          `/director/director/${token}`
        );
        setUserExits([response.data]);
      } catch (error) {
        toast.error(error.response, {
          progressStyle: {
            background: "#0000",
          },
        });
      }
    };

    fetchDirector();
  }, [setUserExits]);



  useEffect(() => {
    const fetchReceptionist = async () => {
      try {
        const response = await axiosInstance.get(
          `/receptionist/receptionist/${token}`
        );
        setUserExits([response.data]);
      } catch (error) {
        toast.error(error.response, {
          progressStyle: {
            background: "#0000",
          },
        });
      }
    };

    fetchReceptionist();
  }, [setUserExits]);

  useEffect(() => {
    const fetchMemberTeam = async () => {
      try {
        const response = await axiosInstance.get(
          `/memberTeam/memberTeam/${token}`
        );
        setUserExits([response.data]);
      } catch (error) {
        toast.error(error.response, {
          progressStyle: {
            background: "#0000",
          },
        });
      }
    };

    fetchMemberTeam();
  }, [setUserExits]);

  useEffect(() => {
    const fetchVisitor = async () => {
      try {
        const response = await axiosInstance.get(
          `/visitor/visitor/${token}`
        );
        setUserExits([response.data]);
      } catch (error) {
        toast.error(error.response, {
          progressStyle: {
            background: "#0000",
          },
        });
      }
    };

    fetchVisitor();
  }, [setUserExits]);


  return (
    <AuthProvider>
      <div className="min-h-screen max-w-[1920px] mx-auto w-full flex flex-col">
        <Switch>
          {          //Protected Routes
          }          {routeReceptionist && (
            <>
              <ProtectRoute path={`/SAMM2724/${routeReceptionist}/pdf`} allowedRoles={['receptionist']} >
                <Pdf />
              </ProtectRoute>

              <ProtectRoute path={`/SAMM2724/${routeReceptionist}/receptionist`} allowedRoles={['receptionist']} >
              <Receptionist />
              </ProtectRoute> 
              
              <ProtectRoute path={`/SAMM2724/${routeReceptionist}/notificationsReceptionist`} allowedRoles={['receptionist']} component={NotificationsReceptionist} />
              <ProtectRoute path={`/SAMM2724/${routeReceptionist}/docsReceptionist`} allowedRoles={['receptionist']} component={DocsReceptionist} />
            </>
          )}
          <Route path="/" component={Main} />
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
          <Route path="/infoVisit" component={InfoVisit} />
          <Route path="/teamTasks" component={TeamTasks} />
          <Route path="/docsMember" component={DocsMember} />
          <Route path="/searchTeam" component={SearchTeam} />
          <Route path="/accessPanel" component={AccessPanel} />
          <Route path="/docsVisitor" component={DocsVisitor} />
          <Route path="/profileTeam" component={ProfileTeam} />
          <Route path="/memberTasks" component={MemberTasks} />
          <Route path="/docsDirector" component={DocsDirector} />
          <Route path="/searchVisitor" component={SearchVisitor} />
          <Route path="/docsMyDirector" component={DocsMyDirector} />
          <Route path="/profileVisitor" component={ProfileVisitor} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/searchDirector" component={SearchDirector} />
          <Route path="/profileDirector" component={ProfileDirector} />
          <Route path="/notificationsTeam" component={NotificationsTeam} />
          <Route path="/verificationEmail" component={VerificationEmail} />
          <Route path="/verificationPhone" component={VerificationPhone} />
          <Route path="/profileReceptionist" component={ProfileReceptionist} />
          <Route path="/notificationsVisitor" component={NotificationsVisitor} />
          <Route path="/notificationsDirector" component={NotificationsDirector} />
        </Switch>
      </div>
    </AuthProvider>
  );
}
export default App;