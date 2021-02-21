import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

//private components
import Privateroute from './helpers/PrivateRoute'
import Adminroute from './helpers/AdminRoute'

//core components
import Home from './Core/Home'
import About from './Core/About'
import Contact from './Core/Contact'
import Packages from './Core/Packages'
import Custompackage from './Core/Custompackage'
import Singlepackage from './Core/Singlepackage'
import Errorpage from './Core/Errorpage'
import Profile from './Components/profile'

//Auth
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Aftersignup from './Auth/Aftersignup'
import Userdashboard from './Auth/Userdashboard';
import AdminDash from './Admin/AdminDash'
import Getdes from './Admin/Getpack';
import AddPackage from './Admin/AddPackage';
import EditPackage from './Admin/Editpackage';
import EditUser from "./Auth/EditUser"
import Myorders from './Auth/Myorder'
import Allbookings from './Admin/Allbookings'

const App = () => {

  AOS.init({ duration: 1500 });

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' exact component={About} />
          <Route path='/contact-us' exact component={Contact} />
          <Route path='/custom-package' exact component={Custompackage} />
          <Route path='/musafirrana/packages' exact component={Packages} />
          <Route path='/musafirrana/package/:packageId' exact component={Singlepackage} />
          <Route path='/profile' exact component={Profile}/>
          <Route path='/sign-up' exact component={Signup} />
          <Route path='/login' exact component={Login} />
          <Route path='/user/detail' exact component={Aftersignup} />
          <Privateroute path='/user/editdetails' exact component={EditUser}/>
          <Privateroute path='/user/dashboard' exact component={Userdashboard} />
          <Privateroute path='/user/orders' exact component={Myorders} />

          <Adminroute path='/admin/dashboard' exact component={AdminDash} />
          <Adminroute path='/admin/dashboard/addpackage' exact component={AddPackage} />
          <Adminroute path='/admin/dashboard/alldestination' exact component={Getdes} />
          <Adminroute path='/admin/dashboard/edit/:id' exact component={EditPackage} />
          <Adminroute path='/admin/dashboard/allbookings' exact component={Allbookings} />
          <Route path='' exact component={Errorpage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;