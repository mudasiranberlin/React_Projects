import { useState } from 'react'
import Headers from './Pages/Header/Header';
import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Stats from './Pages/Stats/Stats';
import Programs from './Pages/Programs/Programs';
import CallToAction from './Pages/CallToAction/CallToAction';
import Teachers from './Pages/Teacher/Teachers';
import Events from './Pages/Events/Events';
import Testimonials from './Pages/Testimonials/Testimonials';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Vision from './Pages/Vision/Vision';
import Reactor from './Pages/About Us/Reactor';
import Academics from './Pages/Academic/Academics';
import DepartmentMenu from './Pages/Academic2/Acad';
import Admissions from './Pages/Admission/undergraduate';
import Collaborations from './Pages/Collaborations/Collaborations';
import Collaborationss, { AUPFPage } from './Pages/Collaborations/Collaborationss';

import Publication from './Pages/Publication/Publication';


import AcademicPrograms from './Pages/Graduate/AcademicPrograms';
import StudentServices from './Pages/StudentServices/StudentServices';

 import NUCalendar2023 from './Pages/Calendar/NUCalendar2023'
 import { Route, Routes } from 'react-router'
import GoverningCouncilPage from './Pages/Collaborations/GoverningCouncilPage';

 

function App() {

  return (
    <>
    <Routes>
  <Route index element={<About/>} />
  <Route path="/header" element={<Headers />}/>
  <Route path="/stats" element={<Stats />}/>
  <Route path="/programs" element={<Programs />}/>
  <Route path="/events" element={<Events />}/>
  <Route path="/about" element={<Reactor />} />
  <Route
          path="/collaborations/governing-council"
          element={<GoverningCouncilPage/>}
        />
</Routes>
    <Headers/>
      <main>
        <Hero/>
        <Stats/>
        <About/>
        <Programs/>
        <CallToAction/>
        <Events/>
        <Teachers/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>

      <Vision/>
      <h1>Welcomes</h1>
      <Reactor/>
      <h1>Welcome backss</h1>
      <Academics/>  
      <h2>Department</h2>   

      <DepartmentMenu/>
      <h1>Google is Good</h1>
      <Admissions/>
       <h1>Google is Bad</h1>
       <Collaborations/>

       <Collaborationss/>

       <h2>Publication page</h2>

       <Publication/>
       <AcademicPrograms/>
       <StudentServices/>
       <NUCalendar2023/>
      

      
    


    </>
  )
}

export default App
