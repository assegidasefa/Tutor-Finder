import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Home/Footer';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import Privatepage from './pages/privatepage';
import PrivateRoute from './RouteHandler/PrivateRoute';
import StudentHomePage from './pages/student_home';
import TeacherHomePage from './pages/teacher_home';
import AdminHomePage from './pages/admin_home';
import AdminRoute from './RouteHandler/AdminRoute';
import TeacherRoute from './RouteHandler/TeacherRoute';
import StudentRoute from './RouteHandler/StudentRoute';
import WellcomePage from './pages/wellcome';
import NotFoundPage from './pages/404';
import signup_page from './pages/signup_page';
import Mock from './pages/mock';
import tutor_accept_reject_page from './pages/tutor_accept_reject_page';
import Student_details_page from './pages/Student_details_page';
import tutor_subject_schedule_page from './pages/tutor_subject_schedule_page';
import tutor_requirement_page from './pages/tutor_requirement_page';
import admin_dashboard_page from './pages/admin_dashboard_page';
import manage_tutor_page from './pages/manage_tutor_page';
import manage_student_page from './pages/manage_student_page';
import tutor_register_page from './pages/tutor_register_page';
import forget_password_page from './pages/forget_password_page';
import reset_password_page from './pages/reset_password_page';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/auth/signup" component={signup_page} />
        <Route exact path="/auth/login" component={LoginPage} />
       
        <Route exact path="/auth/mock" component={Mock} />
        <Route exact path="/auth/forget-password" component={forget_password_page} />
        <Route exact path="/auth/reset-password:resetToken" component={reset_password_page} />
        <Route exact path="/tutor-register" component={tutor_register_page} />
        <Route exact path="/manage-student" component={manage_student_page} />
        <Route exact path="/manage-tutor" component={manage_tutor_page} />
        <Route exact path="/admin-dashboard" component={admin_dashboard_page} />
        <Route exact path="/tutor-requirement" component={tutor_requirement_page} />
        <Route exact path="/student_schedule" component={tutor_subject_schedule_page} />
        <Route exact path="/student-details" component={Student_details_page} />
        <Route exact path="/tutor-accept-reject" component={tutor_accept_reject_page} />
        <Route path="/wellcome" component={WellcomePage} />
        <StudentRoute path="/student-home" component={StudentHomePage} />
        <StudentRoute path="/student-report" component={StudentHomePage} />
        <TeacherRoute path="/teacher-home" component={TeacherHomePage} />
        <TeacherRoute path="/teacher-profile" component={TeacherHomePage} />
        <AdminRoute path="/admin-home" component={AdminHomePage} />
        <PrivateRoute path="/private" component={Privatepage} />
        <PrivateRoute exact path="/" component={HomePage} />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>

    </Router>
  );
}
export default App;
