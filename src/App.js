import logo from './logo.svg';
import './App.css';
import Headers from './companent/Headers';
import Home from './companent/Home';
import Contact from './companent/Contact';

import Services from './companent/Services';
import Skin from './pages/Skin'

import Body from './pages/Body';


import Ayurvedic_Hair_t from './pages/Ayurvedic_Hair_t';
import Analysis_individual from './pages/Analysis_individual';
import Skin_diseases from './pages/Skin_diseases';
import Ayurvedic_diet_plan from './pages/Ayurvedic_diet_plan';
import Panchakrma_treat from './pages/Panchakrma_treat';
import Gastro_dise_treat from './pages/Gastro_dise_treat';
import Pcos_treatment from './pages/Pcos_treatment';

import Ultrasound_therapy from './pages/Ultrasound _therapy';
import Electrotherapy from './pages/Electrotherapy';
import Pelvic_floor_therapy from './pages/Pelvic_floor_therapy';
import Scoliosis_treatment from './pages/Scoliosis_treatment';
import Functional_exercises from './pages/Functional_exercises';
import Dry_needling from './pages/Dry_needling';

import Gastrointestinal_disorders from './pages/Gastrointestinal_disorders';
import Allergy_management from './pages/Allergy_management';
import Wound_stitching from './pages/Wound_stitching';
import Minor_injury_care from './pages/Minor_injury_care';
import Acute_infections_care from './pages/Acute_infections_care';
import Dyslipidemia_care from './pages/Dyslipidemia_care';
import Slimming_programs from './pages/Slimming_programs';
import Thyroid_dysfunction_solutions from './pages/Thyroid_dysfunction_solutions';
import Asthma_copd_expertise from './pages/Asthma_copd_expertise';
import Diabetes_mellitus_care from './pages/Diabetes_mellitus_care';
import Hypertension_managemen from './pages/Hypertension_managemen';
import Routine_checkups from './pages/Routine_checkups';
import Physical_examinations from './pages/Physical_examinations';



import Treatment from './companent/Treatment';
import Doctors from './companent/DR_doctor'

import Aesthetic_dermatology from './pages/Aesthetic_dermatology';

import Ayurveda_clinic from './pages/Ayurveda_clinic';
import Physiotherapy_clinic from './pages/Physiotherapy_clinic';
import General_physician from './pages/General_physician';


import Skin_booster from './pages/Skin_booster';
import Derma_roller from './pages/Derma_roller';
import Skin_tightening from './pages/Skin_tightening';
import Microdermabrasion from './pages/Microdermabrasion';
import Skin_Allergy_t from './pages/Skin_Allergy_t';
import Botox_hyperhidrosis from './pages/Botox_hyperhidrosis';
import Carboxy_therapy from './pages/Carboxy_therapy';
import Electrolysis from './pages/Electrolysis';
import Fillers from './pages/Fillers';
import Botox from './pages/Botox';
import Pigmentation from './pages/Pigmentation';
import Dark_circle from './pages/Dark_circle';
import Facials from './pages/Facials';
import Hifu from './pages/Hifu';
import Mesotherapy from './pages/Mesotherapy';
import FacePRP from './pages/FacePRP';

import HairLoss from './pages/HairLoss';
import HairGrowth from './pages/HairGrowth';
import HairPRP from './pages/HairPRP';




import EximiaBody from './pages/EximiaBody';
import IvDrip from './pages/IvDrip';


import {BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import Hairs from './pages/Hairs';
import { ImOffice } from 'react-icons/im';
import HairRemoval from './pages/HairRemoval';

function App() {
  return (
    <>
     <BrowserRouter>
       <Headers/>
      <Routes>

        

         <Route path="/" element={<Home/>}/>
         
         <Route path="/aesthetic_dermatology/skin-treatments-dubai" element={<Skin />} />
         <Route path="/aesthetic_dermatology/skin-treatments/skin-booster-treatment-dubai" element={<Skin_booster />} />
         <Route path="/aesthetic_dermatology/skin-treatments/derma-roller-dubai-microneedling" element={<Derma_roller/>}/>
         <Route path="/aesthetic_dermatology/skin-treatments/skin-tightening-dubai" element={<Skin_tightening/>}/>
         <Route path="/aesthetic_dermatology/skin-treatments/microdermabrasion-dubai" element={<Microdermabrasion/>}/>
         <Route path="/aesthetic_dermatology/skin-treatments/skin-allergies-in-dubai" element={<Skin_Allergy_t/>}/> 
         <Route path="/aesthetic_dermatology/skin-treatments/botox-hyperhidrosis-dubai" element={<Botox_hyperhidrosis/>}/>    
         <Route path="/aesthetic_dermatology/skin-treatments/carboxy-therapy-dubai" element={<Carboxy_therapy/>}/>
         <Route path="/aesthetic_dermatology/skin-treatments/electrolysis-dubai" element={<Electrolysis/>}/>
         <Route path="/aesthetic_dermatology/skin-treatments/dermal-fillers-dubai" element={<Fillers/>}/>
         <Route path="/aesthetic_dermatology/skin-treatments/botox-dubai" element={<Botox/>}/>
         <Route path="/aesthetic_dermatology/skin-treatments/pigmentation-dubai" element={<Pigmentation/>}/>
         <Route path="/aesthetic_dermatology/skin-treatments/dark-cricle-treatment-dubai" element={<Dark_circle/>}/>
         <Route path="/aesthetic_dermatology/skin-treatments/facials-dubai" element={<Facials/>}/>
         <Route path="/aesthetic_dermatology/skin-treatments/hifu-dubai" element={<Hifu/>}/>
         <Route path="/aesthetic_dermatology/skin-treatments/mesotherapy-treatment-dubai" element={<Mesotherapy/>}/>
         <Route path="/aesthetic_dermatology/skin-treatments/face-PRP-dubai" element={<FacePRP/>}/>


         <Route path="/aesthetic_dermatology/hair-treatments-dubai" element={<Hairs/>}/>
         <Route path="/aesthetic_dermatology/hair-treatments/hair-loss-dubai" element={<HairLoss/>}/>
         <Route path="/aesthetic_dermatology/hair-treatments/hair-growth-dubai" element={<HairGrowth/>}/>
         <Route path="/aesthetic_dermatology/hair-treatments/hairPRP-dubai" element={<HairPRP/>}/>
         <Route path="/aesthetic_dermatology/hair-treatments/hair-removal-dubai" element={<HairRemoval/>}/>



         

         <Route path="/aesthetic_dermatology/body-treatments-dubai" element={<Body/>}/>
         <Route path="/aesthetic_dermatology/body-treatments/eximia-body-countering-dubai" element={<EximiaBody/>}/>
         <Route path="/aesthetic_dermatology/body-treatments/iv-drip-dubai" element={<IvDrip/>}/>
        
         
         <Route path="/services" element={<Services/>}/>


         <Route path="/ayurveda-treatment/hairfall-treatment-dubai" element={<Ayurvedic_Hair_t/>}/>
         <Route path="/ayurveda-treatment/analysis-of-individual-dubai" element={<Analysis_individual/>}/>
         <Route path="/ayurveda-treatment/ayurveda-treatment-dubai-skin-diseases" element={<Skin_diseases/>}/>
         <Route path="/ayurveda-treatment/ayurvedic-diet-plan-dubai" element={<Ayurvedic_diet_plan/>}/>
         <Route path="/ayurveda-treatment/panchakarma-treatment-dubai" element={<Panchakrma_treat/>}/>
         <Route path="/ayurveda-treatment/gastric-disorders-dubai" element={<Gastro_dise_treat/>}/>
         <Route path="/ayurveda-treatment/pcod-pcos-treatment-dubai" element={<Pcos_treatment/>}/>

         <Route path="/treats" element={<Treatment/>}/>
         <Route path="/doct" element={<Doctors/>}/>
         

         <Route path="/physiotherapy/ultrasound-therapy-dubai" element={<Ultrasound_therapy/>}/>
         <Route path="/physiotherapy/electrotherapy-dubai" element={<Electrotherapy/>}/>
         <Route path="/physiotherapy/pelvic-floor-therapy-dubai-exercise" element={<Pelvic_floor_therapy/>}/>
         <Route path="/physiotherapy/scoliosis-treatment-dubai" element={<Scoliosis_treatment/>}/>
         <Route path="/physiotherapy/functional-exercises-dubai" element={<Functional_exercises/>}/>
         <Route path="/physiotherapy/dry-needling-dubai-therapy" element={<Dry_needling/>}/>

         <Route path="/general-physician/gastrointestinal-disorders-dubai" element={<Gastrointestinal_disorders/>}/>
         <Route path="/general-physician/management-of-allergy-dubai" element={<Allergy_management/>}/>
         <Route path="/general-physician/wound-stitching-services-dubai" element={<Wound_stitching/>}/>
         <Route path="/general-physician/minor-injury-care-dubai" element={<Minor_injury_care/>}/>
         <Route path="/general-physician/treatment-of-acute-infections-dubai" element={<Acute_infections_care/>}/>
         <Route path="/general-physician/dyslipidemia-diagnosis-and-treatment-dubai" element={<Dyslipidemia_care/>}/>
         <Route path="/general-physician/personalized-slimming-programs-dubai" element={<Slimming_programs/>}/>
         <Route path="/general-physician/thyroid-dysfunction-solutions-dubai" element={<Thyroid_dysfunction_solutions/>}/>
         <Route path="/general-physician/asthma-and-copd-expertise-dubai" element={<Asthma_copd_expertise/>}/>
         <Route path="/general-physician/diabetes-mellitus-care-dubai" element={<Diabetes_mellitus_care/>}/>
          <Route path="/general-physician/specialized-hypertension-management-dubai" element={<Hypertension_managemen/>}/>
          <Route path="/general-physician/expertise-in-routine-check-ups-dubai" element={<Routine_checkups/>}/>
          <Route path="/general-physician/comprehensive-physical-examinations-dubai" element={<Physical_examinations/>}/>

          


         <Route path="/aesthetic_dermatology-dubai" element={<Aesthetic_dermatology/>}/>
         
         <Route path="/ayurveda-treatment-dubai" element={<Ayurveda_clinic/>}/>
         <Route path="/physiotherapy-dubai" element={<Physiotherapy_clinic/>}/>
         <Route path="/general-physician-dubai" element={<General_physician/>}/>
         
         
                  
         <Route path="/contact" element={<Contact/>}/>
         
         
         
         
         
       </Routes>
      </BrowserRouter>
             
        </>
  );
}

export default App;