import {
  Award,
  Users,
  Calendar,
  Shield,
  ClipboardList,
  Package,
  ShieldCheck,
} from "lucide-react";
import * as Icons from "lucide-react";

import hairtreat from "../image/hari-treatment-3.1.webp";
import hair1 from "../image/hair1.jpg";

import hair3 from "../image/hair3.webp";

export const hairsdata = {
  hero: {
    title: "Best Hair Treatment in Dubai | Top Hair",
    subtitle: "Revitalize your Hair with our cutting-edge therapies.",
    buttonText: "Explore Hair Care",
  },
  sidebar: {
    title: "Hair Services",
    services: [
      {
        link: "/aesthetic_dermatology/hair-treatments/hair-loss-dubai",
        im: "Hair Loss",
      },
      {
        link: "/aesthetic_dermatology/hair-treatments/hair-growth-dubai",
        im: "Hair Growth",
      },
      {
        link: "/aesthetic_dermatology/hair-treatments/hairPRP-dubai",
        im: "Hair PRP",
      },
      {
        link: "/aesthetic_dermatology/hair-treatments/hair-removal-dubai",
        im: "Hair Removal",
      },
    ],
  },
  content: {
    title: "Restoration Clinic - Vedara Care",
    description:
      "At Vedara Care Polyclinic, we understand how important healthy, strong hair is to your confidence and overall appearance. Whether you’re dealing with hair loss, thinning, dryness, dandruff, or other scalp issues, our expert team is here to help. If you're looking for the best hair treatment clinic in Dubai, you’ve come to the right place. Our advanced, personalized treatments are designed to bring back life, strength, and shine to your hair.",
    mainImage: hairtreat,
    alt:"Restoration Clinic at VedaraCare – expert solutions for skin, hair, and body rejuvenation",

    services: [
      {
        title: "Why Choose Dubai for Hair Treatments?",
        description:
          "Dubai’s reputation as a global leader in aesthetics extends to its world-class hair treatment facilities. The city combines state-of-the-art technology, internationally trained specialists, and a commitment to personalized care, making it a go-to destination for anyone seeking Hair Treatment in Dubai. Here’s why Dubai stands out:",
        a: "Advanced Technology:",
        b: "Expert Professionals:",
        c: "Luxury and Comfort:",
        d: "Diverse Options:",
        e: "Clinics in Dubai use the latest innovations, such as platelet-rich plasma (PRP) therapy, laser treatments, and stem cell therapies, to address a wide range of hair concerns.",
        f: " Many clinics boast dermatologists and trichologists trained in top institutions worldwide, ensuring you receive expert care.",
        g: " From sleek, modern facilities to VIP treatment rooms, Dubai’s clinics offer a premium experience that aligns with the city’s high standards.",
        h: "Whether you need a solution for hair thinning, scalp issues, or cosmetic enhancements, Dubai’s clinics provide a comprehensive range of treatments.",
      },
    ],

    // {added}
    
    
    // {}
    
    title2: "Who Needs Hair Treatment?",
    description2:"Hair problems affect both men and women at different stages of life. If you’re experiencing excessive hair fall, thinning, bald patches, dandruff, or a lack of hair growth, it may be time to consider professional care. Environmental factors in Dubai, such as heat, humidity, and water quality, often make hair issues more common. Anyone who wants stronger, healthier, and thicker hair can benefit from hair treatment in Dubai at VedaraCare Polyclinic. Our experts help individuals who are struggling with hair loss, scalp conditions, or simply want to restore natural shine and volume.",
      
      title22:"Causes of Hair Problems",
      description22:"There are many reasons why people face hair issues. The most common causes include:",
    list: [
        "Genetics – Hereditary hair loss is one of the leading causes of baldness.",
        "Hormonal Imbalance – Conditions like PCOS, thyroid issues, or pregnancy can trigger hair fall.",
        "Stress & Lifestyle – Poor sleep, anxiety, and hectic routines can weaken hair roots.",
        "Diet & Nutrition – Lack of essential vitamins, minerals, and proteins slows down hair growth.",
        "Environmental Factors – Hard water, sun exposure, and pollution in Dubai can damage hair.",
      ],
      closing:
        "At VedaraCare Polyclinic, we identify the underlying cause before recommending the right hair treatment in Dubai, ensuring long-lasting results.",
    title33: "How Does Hair Treatment Work at VedaraCare Polyclinic?",
    descriptionab:"Our process for hair treatment in Dubai is simple, safe, and focused on your unique needs:",
      list1: [
        "Consultation & Scalp Analysis – We examine your scalp and hair health to find the root cause of the issue.",
        "Personalized Treatment Plan – Based on your condition, we recommend the most suitable treatment option, from PRP to mesotherapy or advanced therapies.",
        "Non-Surgical Procedures – All our treatments are non-invasive, meaning no downtime or surgery.",
        "Aftercare Guidance – We offer personalized lifestyle, dietary, and product recommendations to help you maintain your results.",
        
      ],
      closing1:"This step-by-step approach ensures that each patient receives care that is customized, effective, and comfortable.",
    
       title34: "Technology and Methods We Use",
    descriptionac:"At VedaraCare Polyclinic, we combine medical expertise with modern technology to deliver the best hair treatment in Dubai. Some of our advanced solutions include:",
      list2: [
        "PRP (Platelet-Rich Plasma) Therapy – Uses your own blood’s growth factors to stimulate new hair growth.",
        "Mesotherapy – Nourishes the scalp with vitamins, minerals, and proteins.",
        "Laser Therapy – Improves blood circulation and boosts hair follicles.",
        "Hair Boosters & Growth Serums – Special injections designed to strengthen hair from the root.",
        "Mesotherapy & Skin Boosters – Hydrating and nourishing from within.",
        "Scalp Care Treatments – For dandruff, itching, and dry scalp conditions.",
      ],
      closing2:"All treatments are FDA-approved, safe, and performed by trained specialists.",

       title35: "Cost of Hair Treatment in Dubai",
    descriptionad:"The cost of hair treatment in Dubai depends on the type of procedure, the number of sessions required, and the severity of the hair problem. At VedaraCare Polyclinic, we believe in transparent pricing with no hidden charges. During your consultation, our experts will explain the estimated costs based on your personalized treatment plan. We also offer affordable packages, allowing patients to access premium care without financial stress.",
    
    title21:"Insurance & Payment Options",
    description21:"While most cosmetic hair treatments in Dubai are not covered by insurance, some medical-related hair conditions may be included depending on your provider. At VedaraCare Polyclinic, we help patients check insurance eligibility and also provide flexible payment plans. This ensures you can begin your treatment journey with peace of mind, without worrying about expenses upfront.",

    title22:"Book Your Hair Treatment Consultation in JVC, Jumeirah Village Circle, Dubai Today!",
    description22:"Struggling with hair fall, thinning, or scalp issues? You don’t need to wait until the problem gets worse. At VedaraCare Polyclinic in Jumeirah 1, our experts specialize in safe, effective, and personalized hair treatment in Dubai to restore your confidence and give you healthier, stronger hair.",


    // {last}


    gallery: [hair3, hair1],
    features: [
      {
        title: "1. Hair Loss (Alopecia)",
        description:
          "Hair loss can be caused by genetics, stress, hormonal imbalance, or medical conditions. Our clinic offers personalized hair loss treatments including PRP therapy, mesotherapy, and medication support.",
        icon: Icons.ClipboardList,
                dark: true,
      },
      {
        title: "2. Thinning Hair",
        description:
          "Hair thinning is often an early sign of hair loss. We provide therapies that stimulate hair growth, strengthen existing strands, and improve scalp health.",
        icon: Icons.Package,
                dark: false,
      },
      {
        title: " 3. Dandruff and Itchy Scalp",
        description:
          "We offer treatments to tackle dandruff, flakiness, and dryness, often caused by fungal or bacterial infections, or harsh weather.",
        icon: Icons.Users,
                dark: false,
      },
      {
        title: "4. Damaged Hair from Styling or Chemicals",
        description:
          " Heat styling, frequent coloring, and chemical treatments can leave hair weak and brittle. Our restorative treatments nourish and repair hair from within.",
        icon: Icons.ShieldCheck,
                dark: true,
      },
      
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "Who Can Benefit from Our Hair Treatments?",
        answer:
          "Almost anyone experiencing hair or scalp issues can benefit from our therapies. We treat:",
        answers: "Men and women with genetic or hormonal hair loss",
        answer1: "Individuals with patchy hair loss or thinning",
        answer2: "Those recovering from illness or stress-induced hair fall",
        answer3: "People who want to maintain healthy, strong hair",
        answer4:
          "Our solutions are suitable for all hair types—curly, straight, wavy, or coily.",
      },
      {
        question: "Step-by-Step Hair Treatment Process at Vedara Care",
        answer:
          "To ensure the best possible outcome, we follow a structured, personalized process:",
        answers: "1. Detailed Consultation",
        answer1: "2. Scalp Analysis",
        answer2: "3. Personalized Plan",
        answer3: "4. Treatment Sessions",
        answer4: "5. Follow-Up and Maintenance",
      },
      {
        question: "Tips for Maintaining Healthy Hair Post-Treatment",
        answer:
          "To support your recovery and maintain results from the best hair treatment clinic in Dubai, here are a few tips:",
        answers: "Use sulfate-free, dermatologically tested shampoos",
        answer1: "Avoid heat styling and chemical products for a few weeks",
        answer2: "Follow a protein-rich diet and stay hydrated",
        answer3: "Schedule maintenance sessions as advised by our experts",
        answer4: "Manage stress and get adequate sleep",
      },
      {
        question:
          "Why Choose Vedara Care – The Best Hair Treatment Polyclinic in Dubai?",
        answer:
          "At Vedara Care Polyclinic, we combine medical expertise with modern technology and traditional healing to offer truly comprehensive hair care. Here’s why we are considered the best hair treatment clinic in Dubai:",
        answers: "Certified dermatologists and trichologists on-site",
        answer1: "In-house Ayurvedic experts offering chemical-free therapies",
        answer2: "Use of FDA-approved machines and evidence-based solutions",
        answer3: "Personalized care plans with free consultation options",
        answer4: "High patient satisfaction with visible, lasting results",
      },
      {
        question: "Affordable Hair Treatment Packages in Dubai",
        answer:
          "We believe that quality care should be accessible to everyone. That’s why we offer budget-friendly packages for:",
        answers: "PRP Hair Treatment",
        answer1: "Hair Boosters & Mesotherapy",
        answer2: "Combination Therapies",
        answer3: "Herbal Scalp Detox",
        answer4: "Herbal Scalp Detox",
      },
    ],
  },
  stats: [
    { icon: Award, value: "10+", label: "Years of Experience" },
    { icon: Users, value: "5K+", label: "Happy Patients" },
    { icon: Calendar, value: "15+", label: "Treatments Offered" },
    { icon: Shield, value: "100%", label: "Safe & Certified" },
  ],
  treatments: {
    title: "Our Skin Treatments",
    subtitle: "Effective solutions for every skin type.",
    items: [
      {
        image: "/images/facial.jpg",
        name: "Glow Facial",
        description: "Brighten dull skin in just one session.",
        duration: "45 mins",
        price: "₹1500",
        features: ["Quick recovery", "No downtime", "Hydration boost"],
      },
    ],
  },
  doctors: {
    items: [],
  },
  testimonials: {
    title: "Patient Testimonials",
    subtitle: "What our patients are saying",
    items: [
      {
        name: "Aditi Verma",
        comment: "Amazing transformation in just 3 sessions!",
        treatment: "Chemical Peel",
        rating: 5,
        image: "/images/user1.jpg",
      },
    ],
  },
  footer: {
    companyName: "Vedara Skin Clinic",
    description: "Advanced skin and wellness solutions under one roof.",
    quickLinks: ["Home", "Skin", "Dentistry", "Hair", "About", "Contact"],
    services: ["Acne", "Laser", "Glow Therapy", "Skin Polishing"],
    contact: {
      address: "123 Wellness Street, Delhi",
      phone: "+91-9876543210",
      email: "info@ramaclinic.com",
      hours: "Mon–Sat: 10am–7pm",
    },
  },
};
