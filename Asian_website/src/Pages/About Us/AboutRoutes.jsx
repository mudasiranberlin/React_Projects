import { Routes, Route } from "react-router";

import AboutLayout from "./AboutLayout";

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

import PageHero from "./Pagehero.jsx";


function AboutRoutes() {
  return (
    <Routes>
      {/* ABOUT LAYOUT */}
      <Route
        element={<AboutLayout />}
      >

        {/* /about */}
        <Route
          index
          element={<Mudasir />}
        />
        

        {/* /about/vice-rector */}
        <Route
          path="vice-rector"
          element={
            <MessageOfViceRector
              PageHero={PageHero}
            />
          }
        />

        {/* /about/why-aic */}
        <Route
          path="why-aic"
          element={
            <WhyAIC
              PageHero={PageHero}
            />
          }
        />

        {/* /about/structure */}
        <Route
          path="structure"
          element={
            <StructureOfNU
              PageHero={PageHero}
            />
          }
        />

        {/* /about/mission */}
        <Route
          path="mission"
          element={
            <MissionVisionGoal
              PageHero={PageHero}
            />
          }
        />

        {/* /about/internationalization */}
        <Route
          path="internationalization"
          element={
            <Internationalization
              PageHero={PageHero}
            />
          }
        />

        {/* /about/recognition */}
        <Route
          path="recognition"
          element={
            <GovernmentRecognition
              PageHero={PageHero}
            />
          }
        />

        {/* /about/library */}
        <Route
          path="library"
          element={
            <LibraryAndFacility
              PageHero={PageHero}
            />
          }
        />

        {/* /about/campus */}
        <Route
          path="campus"
          element={
            <Campus
              PageHero={PageHero}
            />
          }
        />

        {/* /about/contact */}
        <Route
          path="contact"
          element={
            <ContactUs
              PageHero={PageHero}
            />
          }
        />

      </Route>

    </Routes>
  );
}

export default AboutRoutes;
