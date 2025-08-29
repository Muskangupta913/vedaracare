import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../image/vdl.png';

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      name: 'Aesthetic Dermatology',
      key: 'aesthetic',
      href: '/aesthetic_dermatology-dubai',
      items: [
        { name: 'Skin Treatments', href: '/aesthetic_dermatology/skin-treatments-dubai' },
        { name: 'Hair Treatments', href: '/aesthetic_dermatology/hair-treatments-dubai' },
        { name: 'Body Shaping', href: '/aesthetic_dermatology/body-treatments-dubai' }
      ]
    },
    {
      name: 'Ayurveda',
      key: 'ayurveda',
      href: '/ayurveda-treatment-dubai',
      items: [
        { name: 'Ayurvedic Hair Treatment', href: '/ayurveda-treatment/hairfall-treatment-dubai' },
        { name: 'Analysis of Individual', href: '/ayurveda-treatment/analysis-of-individual-dubai' },
        { name: 'Skin Diseases Treatment', href: '/ayurveda-treatment/ayurveda-treatment-dubai-skin-diseases' },
        { name: 'Ayurvedic Diet Plan', href: '/ayurveda-treatment/ayurvedic-diet-plan-dubai' },
        { name: 'Panchakarma Treatment', href: '/ayurveda-treatment/panchakarma-treatment-dubai' },
        { name: 'Gastrointestinal Diseases Treatment', href: '/ayurveda-treatment/gastric-disorders-dubai' },
        { name: 'PCOS Treatment', href: '/ayurveda-treatment/pcod-pcos-treatment-dubai' }
      ]
    },
    {
      name: 'Physiotherapy',
      key: 'physiotherapy',
      href: '/physiotherapy-dubai',
      items: [
        { name: 'Ultrasound Therapy', href: '/physiotherapy/ultrasound-therapy-dubai' },
        { name: 'Electrotherapy', href: '/physiotherapy/electrotherapy-dubai' },
        { name: 'Pelvic Floor Therapy', href: '/physiotherapy/pelvic-floor-therapy-dubai-exercise' },
        { name: 'Scoliosis Treatment', href: '/physiotherapy/scoliosis-treatment-dubai' },
        { name: 'Functional Exercises', href: '/physiotherapy/functional-exercises-dubai' },
        { name: 'Dry Needling', href: '/physiotherapy/dry-needling-dubai-therapy' }
      ]
    },
    {
      name: 'General Physician',
      key: 'general',
      href: '/general-physician-dubai',
      items: [
        { name: 'Gastrointestinal Disorders', href: '/general-physician/gastrointestinal-disorders-dubai' },
        { name: 'Management of Allergy', href: '/general-physician/management-of-allergy-dubai' },
        { name: 'Wound Stitching Services', href: '/general-physician/wound-stitching-services-dubai' },
        { name: 'Minor Injury Care', href: '/general-physician/minor-injury-care-dubai' },
        { name: 'Treatment of Acute Infections', href: '/general-physician/treatment-of-acute-infections-dubai' },
        { name: 'Dyslipidemia Diagnosis and Treatment', href: '/general-physician/dyslipidemia-diagnosis-and-treatment-dubai' },
        { name: 'Personalized Slimming Programs', href: '/general-physician/personalized-slimming-programs-dubai' },
        { name: 'Thyroid Dysfunction Solutions', href: '/general-physician/thyroid-dysfunction-solutions-dubai' },
        { name: 'Asthma and COPD Expertise', href: '/general-physician/asthma-and-copd-expertise-dubai' },
        { name: 'Diabetes Mellitus Care', href: '/general-physician/diabetes-mellitus-care-dubai' },
        { name: 'Specialized Hypertension Management', href: '/general-physician/specialized-hypertension-management-dubai' },
        { name: 'Expertise in Routine Check-Ups', href: '/general-physician/expertise-in-routine-check-ups-dubai' },
        { name: 'Comprehensive Physical Examinations', href: '/general-physician/comprehensive-physical-examinations-dubai' }
      ]
    },
  ];

  return (
    <nav className="w-full py-2 px-6 bg-[#FDF2EC] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="VedaraCare Logo" 
              className="h-12 w-auto object-contain hover:opacity-90 transition-opacity duration-200"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback text if image fails to load */}
            <span className="text-2xl font-bold text-[#4A7C7A] hidden">
              VedaraCare
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden text-[#4B1F0E] lg:flex items-center space-x-8">
          <ul className="flex space-x-4 text-sm font-medium">
            {menuItems.map((item) => (
              <li key={item.key} className="relative group">
                <div className="cursor-pointer flex items-center gap-1 py-2">
                  <Link 
                    to={item.href} 
                    className="whitespace-nowrap hover:text-[#E76F51] transition-colors"
                  >
                    {item.name}
                  </Link>
                  <ChevronDown className="w-4 h-4" />
                </div>

                {/* Desktop Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-pink-200 text-[#4B1F0E] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <div className={`py-2 ${item.items.length > 6 ? 'max-h-80 overflow-y-auto' : ''}`}>
                    {item.items.map((subItem, index) => (
                      <Link 
                        key={index}
                        to={subItem.href} 
                        className="block px-4 py-2 text-sm text-[#4B1F0E] hover:bg-[#4B1F0E] hover:text-white transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}
            
            <li className="cursor-pointer py-2">
              <Link 
                to="/contact" 
                className="whitespace-nowrap hover:text-[#E76F51] transition-colors"
              >
                Contact Us
              </Link>
            </li>
           
            <li className="cursor-pointer">
              <Link to="/contact">
                <button 
                  className="bg-[#E76F51] text-white hover:bg-[#4B1F0E] px-6 py-2 rounded-full text-base font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Book Appointment
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-[#4B1F0E] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#4B1F0E]" />
            ) : (
              <Menu className="w-6 h-6 text-[#4B1F0E]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-6 py-4 bg-[#FDF2EC] border-t border-[#4B1F0E] mt-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.key} className="border-b border-[#4B1F0E] pb-2">
                <div className="flex items-center justify-between">
                  <Link 
                    to={item.href} 
                    className="block py-2 text-base font-medium text-[#4B1F0E] hover:text-[#4B1F0E] transition-colors flex-grow"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                  <button
                    onClick={() => toggleDropdown(item.key)}
                    className="p-2 ml-2"
                    aria-label={`Toggle ${item.name} dropdown`}
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                      activeDropdown === item.key ? 'rotate-180' : ''
                    }`} />
                  </button>
                </div>
                
                {/* Mobile Dropdown Content */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === item.key ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}>
                  <div className={`pl-4 space-y-1 ${item.items.length > 6 ? 'max-h-64 overflow-y-auto' : ''}`}>
                    {item.items.map((subItem, index) => (
                      <Link 
                        key={index}
                        to={subItem.href} 
                        className="block py-2 px-3 text-sm text-[#4B1F0E] hover:text-[#4B1F0E] transition-colors"
                        onClick={closeMenu}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}

            <li className="py-2">
              <Link 
                to="/contact" 
                className="block text-base font-medium text-[#4B1F0E] hover:text-[#4B1F0E] transition-colors"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="py-2">
              <Link 
                to="/contact"
                className="inline-block bg-[#E76F51] hover:bg-[#4B1F0E] hover: text-white px-8 py-3 rounded-full font-semibold text-base transition-all transform hover:scale-105 shadow-xl"
                onClick={closeMenu}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Headers;