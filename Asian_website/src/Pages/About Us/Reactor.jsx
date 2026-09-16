import ContactUs from './ContactUs';
import Whyaic from './Whyaic';
import MessageOfViceRector from './MessageOfViceRector'
import StructureOfNU from './StructureOfNU'
import MissionVisionGoal from './MissionVisionGoal';
import './Reactor.css'
import GovernmentRecognition from './GovernmentRecognition';
import LibraryAndFacility from './LibraryAndFacility';
import Campus from './Campus';
import ContactForm from './ContactForm';
import Internationalization from './Internationalization';
import AcademicNavigation from '../Academic/AcademicNavigation';
import AcademicUnit from '../Academic/AcademicUnit';

function PageHero({ label="wel", title="wel", description="wel" }) {
  return (
    <>
      <section className="university-page-hero">
        <div className="university-page-hero-overlay">
          <div className="container">
            <span className="page-hero-label">{label}</span>

            <h1>{title}</h1>

            {description && (
              <p>{description}</p>
            )}
          </div>
        </div>
      </section>

      <div className="page-breadcrumb">
        <div className="container">
          <a href="/">Home</a>
          <span>/</span>
          <strong>{title}</strong>
        </div>
      </div>
    </>
  );
}


/* =========================================================
   WHY NU
========================================================= */



// export function WhyNU() {
//   return (
//     <main className="university-page">

//       <PageHero
//         label="ABOUT OUR INSTITUTION"
//         title="Why NU?"
//         description="Discover the values, opportunities and educational environment that make our institution a place to learn, grow and succeed."
//       />

//       <section className="info-section">
//         <div className="container">

//           <div className="section-heading-left">
//             <span className="section-label">
//               WHY CHOOSE US
//             </span>

//             <h2>
//               Why Study at
//               <span> NU?</span>
//             </h2>

//             <p>
//               Choosing a university is an important decision.
//               Our institution is committed to providing students
//               with an educational environment that supports
//               academic achievement, personal development and
//               professional growth.
//             </p>
//           </div>

//           <div className="why-grid">

//             <div className="why-card">
//               <div className="why-icon">🎓</div>
//               <h3>Quality Education</h3>
//               <p>
//                 We strive to provide students with quality
//                 education through dedicated lecturers,
//                 academic programs and practical learning.
//               </p>
//             </div>

//             <div className="why-card">
//               <div className="why-icon">👨‍🏫</div>
//               <h3>Qualified Lecturers</h3>
//               <p>
//                 Students have the opportunity to learn from
//                 experienced educators who are committed to
//                 teaching and student development.
//               </p>
//             </div>

//             <div className="why-card">
//               <div className="why-icon">🌏</div>
//               <h3>International Opportunities</h3>
//               <p>
//                 Academic partnerships and international
//                 networks help students gain broader exposure
//                 to regional and global opportunities.
//               </p>
//             </div>

//             <div className="why-card">
//               <div className="why-icon">💡</div>
//               <h3>Practical Learning</h3>
//               <p>
//                 Our educational approach encourages students
//                 to connect academic knowledge with practical
//                 skills and real-world challenges.
//               </p>
//             </div>

//             <div className="why-card">
//               <div className="why-icon">🤝</div>
//               <h3>Community</h3>
//               <p>
//                 Students become part of an academic community
//                 where cooperation, respect and social
//                 responsibility are encouraged.
//               </p>
//             </div>

//             <div className="why-card">
//               <div className="why-icon">🚀</div>
//               <h3>Future Development</h3>
//               <p>
//                 We encourage students to develop the skills,
//                 confidence and knowledge necessary for their
//                 future careers.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       <section className="blue-highlight">
//         <div className="container highlight-content">
//           <span className="section-label light">
//             YOUR FUTURE STARTS HERE
//           </span>

//           <h2>
//             Learn. Grow. Lead.
//           </h2>

//           <p>
//             Our goal is to help every student discover their
//             potential and prepare for meaningful participation
//             in society.
//           </p>

//           <a href="/contact" className="page-button">
//             Contact Us →
//           </a>
//         </div>
//       </section>

//     </main>
//   );
// }


/* =========================================================
   CONTACT US
========================================================= */



// export function ContactUs() {
//   return (
//     <main className="university-page">

//       <PageHero
//         label="GET IN TOUCH"
//         title="Contact Us"
//         description="We are here to answer your questions and provide information about admissions, programs and university life."
//       />

//       <section className="info-section contact-page-section">
//         <div className="container">

//           <div className="contact-layout">

//             <div className="contact-details">

//               <span className="section-label">
//                 CONTACT INFORMATION
//               </span>

//               <h2>
//                 We'd Love to
//                 <span> Hear From You</span>
//               </h2>

//               <p>
//                 If you have questions about our academic programs,
//                 admissions, campus or other university services,
//                 please contact us.
//               </p>

//               <div className="contact-detail">
//                 <div className="detail-icon">📍</div>

//                 <div>
//                   <h3>Address</h3>
//                   <p>
//                     Daun Cham Village, Sangkat Kratie,
//                     Kratie Town, Kratie Province, Cambodia
//                   </p>
//                 </div>
//               </div>

//               <div className="contact-detail">
//                 <div className="detail-icon">📞</div>

//                 <div>
//                   <h3>Phone</h3>
//                   <p>
//                     +855 XX XXX XXX
//                   </p>
//                 </div>
//               </div>

//               <div className="contact-detail">
//                 <div className="detail-icon">✉</div>

//                 <div>
//                   <h3>Email</h3>
//                   <p>
//                     info@aic-edu.net
//                   </p>
//                 </div>
//               </div>

//               <div className="contact-detail">
//                 <div className="detail-icon">🌐</div>

//                 <div>
//                   <h3>Website</h3>
//                   <p>
//                     www.aic-edu.net
//                   </p>
//                 </div>
//               </div>

//             </div>

//             <ContactForm />

//           </div>

//         </div>
//       </section>

//       <section className="map-placeholder">
//         <div className="container">
//           <div className="map-box">
//             <div>
//               <span>📍</span>
//               <h3>Our Location</h3>
//               <p>
//                 Kratie Town, Kratie Province, Cambodia
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }





/* =========================================================
   CONTACT FORM
========================================================= */



// function ContactForm() {
//   function handleSubmit(e) {
//     e.preventDefault();

//     alert(
//       "Thank you for contacting us. Your message has been received."
//     );
//   }

//   return (
//     <form
//       className="university-contact-form"
//       onSubmit={handleSubmit}
//     >

//       <h3>Send Us a Message</h3>

//       <div className="form-two">
//         <input
//           type="text"
//           placeholder="Your Name"
//           required
//         />

//         <input
//           type="email"
//           placeholder="Your Email"
//           required
//         />
//       </div>

//       <input
//         type="text"
//         placeholder="Subject"
//         required
//       />

//       <input
//         type="tel"
//         placeholder="Phone Number"
//       />

//       <textarea
//         rows="7"
//         placeholder="Your Message"
//         required
//       />

//       <button type="submit" className="page-button">
//         Send Message →
//       </button>

//     </form>
//   );
// }


/* =========================================================
   CAMPUS
========================================================= */






/* =========================================================
   LIBRARY AND FACILITY
========================================================= */






/* =========================================================
   GOVERNMENT RECOGNITION
========================================================= */



/* =========================================================
   INTERNATIONALIZATION
========================================================= */




/* =========================================================
   MISSION VISION AND GOAL
========================================================= */



/* =========================================================
   STRUCTURE OF NU
========================================================= */




/* =========================================================
   MESSAGE OF VICE RECTOR
========================================================= */

// export function MessageOfViceRector() {
//   return (
//     <main className="university-page">

//       <PageHero
//         label="LEADERSHIP MESSAGE"
//         title="Message Of Vice Rector"
//         description="A message from the Vice Rector to students, faculty, partners and the wider university community."
//       />

//       <section className="info-section vice-rector-section">

//         <div className="container">

//           <div className="vice-message-layout">

//             <div className="vice-photo">

//               <div className="vice-photo-placeholder">
//                 <span>👤</span>

//                 <p>
//                   Vice Rector
//                 </p>
//               </div>

//             </div>

//             <div className="vice-message">

//               <span className="section-label">
//                 MESSAGE FROM THE VICE RECTOR
//               </span>

//               <h2>
//                 Welcome to
//                 <span> Our Academic Community</span>
//               </h2>

//               <p>
//                 Dear Students, Faculty Members, Staff,
//                 Partners and Friends,
//               </p>

//               <p>
//                 It is my great pleasure to welcome you to
//                 our institution. Higher education is not only
//                 about obtaining a qualification; it is also
//                 about developing knowledge, character,
//                 confidence and a sense of responsibility.
//               </p>

//               <p>
//                 At our institution, we are committed to creating
//                 an educational environment where students can
//                 develop their abilities and prepare themselves
//                 for their future careers and responsibilities
//                 in society.
//               </p>

//               <p>
//                 We encourage our students to be curious,
//                 responsible and open to new ideas. We also
//                 believe that cooperation among students,
//                 lecturers, universities, communities and
//                 international partners is essential for
//                 sustainable development.
//               </p>

//               <p>
//                 As Cambodia and the wider ASEAN region continue
//                 to change, our graduates need more than
//                 academic knowledge. They need communication
//                 skills, creativity, critical thinking,
//                 professional competence and the ability to
//                 work with people from different backgrounds.
//               </p>

//               <p>
//                 We will continue working to strengthen our
//                 academic programs, support our faculty and
//                 staff, encourage research and expand
//                 opportunities for international cooperation.
//               </p>

//               <p>
//                 I encourage every student to make full use of
//                 your time at the university. Learn from your
//                 lecturers, learn from your classmates, take
//                 part in activities and contribute positively
//                 to your community.
//               </p>

//               <p>
//                 Together, we can build a stronger academic
//                 community and contribute to the development
//                 of Cambodia and the ASEAN region.
//               </p>

//               <p>
//                 With best wishes for your academic journey
//                 and future success.
//               </p>

//               <div className="vice-signature">

//                 <strong>
//                   Vice Rector
//                 </strong>

//                 <span>
//                   Asian Institute of Cambodia
//                 </span>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       <section className="blue-highlight">

//         <div className="container highlight-content">

//           <span className="section-label light">
//             OUR SHARED FUTURE
//           </span>

//           <h2>
//             One Community, One Destiny
//           </h2>

//           <p>
//             Working together to develop good human resources
//             in a global family.
//           </p>

//         </div>

//       </section>

//     </main>
//   );
// }

export default function Reactor() {
  return (
    <>
      <PageHero />

      {/* <MessageOfViceRector/> */}
      
      {/* <MissionVisionGoal/> */}
      {/* <Internationalization/> */}
      {/* <MissionVisionGoal/> */}

      {/* <GovernmentRecognition/> <LibraryAndFacility/> <Campus/> <ContactForm/>  */}
      {/* <ContactUs/>  */}

       {/* <ContactUs PageHero={<PageHero />}ContactForm={<ContactForm />} />  */}

<h2>Here we start</h2>
 <AcademicNavigation academicUnits={academicUnits} />

<MessageOfViceRector
  PageHero={PageHero}
/>
<StructureOfNU PageHero={PageHero} />



<MissionVisionGoal PageHero={PageHero}/>

<Internationalization PageHero={PageHero}/>
<GovernmentRecognition PageHero={PageHero} />
<LibraryAndFacility PageHero={PageHero}/>
<Campus PageHero={PageHero}/>
<ContactForm PageHero={PageHero}/>


<ContactUs
  PageHero={PageHero}
  ContactForm={ContactForm}
/>

<ContactUs
  PageHero={PageHero}
  ContactForm={ContactForm}
/>



      

      <Whyaic PageHero={PageHero} />
      <Whyaic PageHero={PageHero} />
      {/* <WhyNU/> */}

      
    </>
  );
}