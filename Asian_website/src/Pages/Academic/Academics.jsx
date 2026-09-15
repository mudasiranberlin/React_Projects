import { useState } from "react";
import "./Academics.css";
import AcademicHero from "./AcademicHero";
import Breadcrumb from "./Breadcrumb";
import AcademicOverview from "./AcademicOverview";
import AcademicNavigation from "./AcademicNavigation";
import FoundationSection from "./FoundationSection";
import SciencesSection from "./SciencesSection";
import SocialSciencesSection from "./SocialSciencesSection";
import ArtsSection from "./ArtsSection";
import HealthSection from "./HealthSection";
import GraduateSchoolSection from "./GraduateSchoolSection";
import AcademicUnit from "./AcademicUnit";
import AcademicCTA from "./AcademicCTA";

const academicUnits = [
  {
    id: "foundation",
    number: "01",
    title: "Foundation Studies Department",
    shortTitle: "Foundation Studies",
    description:
      "The Foundation Studies Department provides students with essential academic preparation and foundational knowledge for successful university study.",
    color: "blue",
    menu: [
      "Welcome Message",
      "Organization Chart",
      "Mission Vision and Goal",
      "Programs",
    ],
  },

  {
    id: "sciences",
    number: "02",
    title: "College of Sciences",
    shortTitle: "Sciences",
    description:
      "The College of Sciences provides academic programs in science, technology, engineering and related disciplines, supporting knowledge, innovation and practical skills.",
    color: "red",
    menu: [
      "Message from the Dean",
      "Architecture Department",
      "Computer Studies Department",
      "Civil Engineering Department",
      "Electrical and Electronic Engineering Department",
      "Research Department",
    ],
  },

  {
    id: "social-sciences",
    number: "03",
    title: "College of Social Sciences",
    shortTitle: "Social Sciences",
    description:
      "The College of Social Sciences brings together programs focused on business, economics, law, government, hospitality and tourism.",
    color: "gold",
    menu: [
      "Message from the Dean",
      "Organization Chart (CSS)",
      "School of Business",
      "School of Economics",
      "School of Law and Government",
      "School of Hospitality and Tourism Management",
    ],
  },

  {
    id: "arts",
    number: "04",
    title: "College of Arts, Humanities and Languages",
    shortTitle: "Arts, Humanities & Languages",
    description:
      "The College of Arts, Humanities and Languages supports learning in the humanities, languages, communication and related academic disciplines.",
    color: "purple",
    menu: [
      "Message from the Dean of CAHL",
      "Organization Chart",
      "Majors",
      "CAHL Alumni",
      "Contact Us",
    ],
  },

  {
    id: "health",
    number: "05",
    title: "Faculty of Health Sciences",
    shortTitle: "Health Sciences",
    description:
      "The Faculty of Health Sciences provides academic opportunities focused on health, professional development, research and student preparation.",
    color: "green",
    menu: [
      "Message from the Dean",
      "Organization Chart",
      "Degrees",
      "Guidelines Thesis Paper",
      "Academic Activities",
      "Career Opportunity",
    ],
  },

  {
    id: "graduate",
    number: "06",
    title: "Graduate School",
    shortTitle: "Graduate School",
    description:
      "The Graduate School supports advanced academic study, research, postgraduate development and scholarly activities.",
    color: "navy",
    menu: [
      "History",
      "Message From The Interim Head",
      "Organization Chart",
      "Mission Vision and Goal",
      "Programs",
      "Collection of Abstracts",
      "Alumni Book",
      "Contact Us",
    ],
  },
];
export default function Academics() {
  return (
    <main className="academics-page">

      <AcademicHero />
      


      <Breadcrumb />
      

      <AcademicOverview />
      

      <AcademicNavigation academicUnits={academicUnits} />

      <FoundationSection />

      <SciencesSection />
      
      <SocialSciencesSection />

      <ArtsSection />

      <HealthSection />
      
      

      <GraduateSchoolSection />

      <AcademicCTA />
      

    </main>
  );
}