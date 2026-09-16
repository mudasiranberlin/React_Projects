import ContactUs from "./ContactUs";
import Whyaic from "./Whyaic";
import MessageOfViceRector from "./MessageOfViceRector";
import StructureOfNU from "./StructureOfNU";
import MissionVisionGoal from "./MissionVisionGoal";
import GovernmentRecognition from "./GovernmentRecognition";
import LibraryAndFacility from "./LibraryAndFacility";
import Campus from "./Campus";
import ContactForm from "./ContactForm";
import Internationalization from "./Internationalization";
import Mudasir from "./Mudasir";
 import { Route, Routes } from 'react-router'
import PageHero from "./Pagehero";

import "./Reactor.css";

// function PageHero({
//   label = "ABOUT OUR INSTITUTION",
//   title = "About Us",
//   description = "Discover our leadership, academic vision, institutional structure, facilities, international activities and university community.",
// }) {
//   return (
//     <>
//       <section className="university-page-hero">
//         <div className="university-page-hero-overlay">
//           <div className="container">
//             <span className="page-hero-label">{label}</span>

//             <h1>{title}</h1>

//             {description && <p>{description}</p>}
//           </div>
//         </div>
//       </section>

//       <div className="page-breadcrumb">
//         <div className="container">
//           <a href="/">Home</a>
//           <span>/</span>
//           <strong>{title}</strong>
//         </div>
//       </div>
//     </>
//   );
// }

export default function Reactor() {
  return (
    <main className="university-page">
      <Mudasir />

      <MessageOfViceRector PageHero={PageHero} />

      <Whyaic PageHero={PageHero} />

      <StructureOfNU PageHero={PageHero} />

      <MissionVisionGoal PageHero={PageHero} />

      <Internationalization PageHero={PageHero} />

      <GovernmentRecognition PageHero={PageHero} />

      <LibraryAndFacility PageHero={PageHero} />

      <Campus PageHero={PageHero} />

      <ContactUs
        PageHero={PageHero}
        ContactForm={ContactForm}
      />
    </main>
  );
}
