import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import PatientLogin from './Components/Level 01 - Home Page/Level 02/Patient/PatientLogin';
import PatientRegister from './Components/Level 01 - Home Page/Level 02/Patient/PatientRegister';
import DoctorLogin from './Components/Level 01 - Home Page/Level 02/Doctor/DoctorLogin';
import DoctorRegister from './Components/Level 01 - Home Page/Level 02/Doctor/DoctorRegister';
import AdminLogin from './Components/Level 01 - Home Page/Level 02/Admin/AdminLogin';
import DoctorPortal from './Components/Level 01 - Home Page/Level 02/Doctor/DoctorPortal/DoctorPortal';
import PatientPortal from './Components/Level 01 - Home Page/Level 02/Patient/PatientPortal/PatientPortal';
import Details from './Context/context';
import Analytics from './Components/Level 01 - Home Page/Level 02/Admin/AdminPortal/Analytics';
function App() {
  return (
    <Router>
    <Details>
      <div>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/PatientLogin' element={<PatientLogin></PatientLogin>}></Route>
          <Route path='/PatientRegister' element={<PatientRegister></PatientRegister>}></Route>
          <Route path='/DoctorLogin' element={<DoctorLogin></DoctorLogin>}></Route>
          <Route path='/DoctorRegister' element={<DoctorRegister></DoctorRegister>}></Route>
          <Route path='/AdminLogin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path='/PatientPortal' element={<PatientPortal></PatientPortal>}></Route>
          <Route path='/DoctorPortal' element={<DoctorPortal></DoctorPortal>}></Route>
          <Route path='/AdminPortal' element={<Analytics></Analytics>}></Route>
        </Routes>
        </div>
    </Details>

    </Router>

  );
}

export default App;
