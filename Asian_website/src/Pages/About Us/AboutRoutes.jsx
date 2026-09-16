 import { Route, Routes } from 'react-router'

import Mudasir from "./Mudasir";
import MessageOfViceRector from "./MessageOfViceRector";
import WhyAIC from "./Whyaic";
import StructureOfNU from "./StructureOfNU";
import MissionVisionGoal from "./MissionVisionGoal";
import Internationalization from "./Internationalization.jsx";
import GovernmentRecognition from "./GovernmentRecognition";
import LibraryAndFacility from "./LibraryAndFacility";
import Campus from "./Campus";
import ContactUs from "./ContactUs";
import PageHero from './Pagehero.jsx';
import ContactForm from './ContactForm.jsx'
import AboutLayout from './Mudasir';

function AboutRoutes() {
  return (
    <Routes>
      <Route index element={<Mudasir />} />

      <Route
        path="vice-rector"
        element={<MessageOfViceRector PageHero={PageHero} />}
      />

      <Route
        path="why-aic"
        element={< WhyAIC PageHero={PageHero}/>}
      />

      <Route
        path="structure"
        element={<StructureOfNU  PageHero={PageHero}/>}
      />

      <Route
        path="mission"
        element={<MissionVisionGoal PageHero={PageHero} />}
      />

      <Route
        path="internationalization"
        element={<Internationalization PageHero={PageHero} />
}
      />
      

      <Route
        path="recognition"
        element={<GovernmentRecognition PageHero={PageHero} />}
      />

      <Route
        path="library"
        element={<LibraryAndFacility PageHero={PageHero} />}
      />

      <Route
        path="campus"
        element={<Campus PageHero={PageHero} />}
      />

      <Route
        path="contact"
        element={<ContactUs PageHero={PageHero} ContactForm={ContactForm}  />}
      />
    </Routes>
  );
}
export default AboutRoutes