import './App.css'
import { useState } from "react";

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
import Reactor from './Pages/Reactor/Reactor';
import Academics from './Pages/Academic/Academics';
import DepartmentMenu from './Pages/Academic2/Acad';
import Admissions from './Pages/Admission/undergraduate';

import Collaborations from './Pages/Collaborations/Collaborations';
import Collaborationss from './Pages/Collaborations/Collaborationss';

import Publication from './Pages/Publication/Publication';


import AcademicPrograms from './Pages/Graduate/AcademicPrograms';
import StudentServices from './Pages/StudentServices/StudentServices';

 import NUCalendar2023 from './Pages/Calendar/NUCalendar2023'

 import DepartmentMenuu from './Pages/Academic3/Acad';




export default function App() {
  return (
    <>
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
      <h1>Welcome</h1>
      <Reactor/>
      <h1>Welcome back</h1>
      <Academics/>  
      <h2>Department2</h2>   

      <DepartmentMenu/>
      <h2>Welcome department</h2>
      <main>
        <DepartmentMenuu/>

      </main>

      


      <h1>End of Department</h1>
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
  );
}
