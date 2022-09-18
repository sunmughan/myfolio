/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sunmughan Swamy",
  title: "Hi all, I'm Sunmughan",
  subTitle: emoji(
    "The Founder and CEO of CodeAir (Bespoke Software Development Company). Professionally experienced as an Indian Artist, Entrepreneur and Software Developer (Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks) mainly but touches everything, music, servers, bots, community management, events, social networks and more."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EbRnkIX9o9W34GunqHkS_BuNmv3GS2Ma/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sunmughan",
  linkedin: "https://www.linkedin.com/in/sunmughan/",
  gmail: "sunmughan@gmail.com",
  gitlab: "https://gitlab.com/sunmughan",
  facebook: "https://www.facebook.com/sunmughan",
  medium: "https://medium.com/@sunmughan",
  stackoverflow: "https://www.quora.com/profile/Sunmughan-Swamy",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Durg University",
      logo: require("./assets/images/du.png"),
      subHeader: "Bachelor in Computer Applications",
      duration: "July 2015 - June 2018",
      desc: "Persuaded my BCA Graduation in Durg University.",
      descBullets: [
        "Scored 72% in 1st year",
        "Scored 70.7% in 2nd year",
        "Scored 71% in the final year"
      ]
    },
    {
      schoolName: "DAV Senior Secondary School",
      logo: require("./assets/images/dav.png"),
      subHeader: "Higher Secondary",
      duration: "June 2012 - July 2013",
      desc: "Persuaded and completed my +2 from here. Amazing school with great learning facilities.",
      descBullets: [
        "Learnt discipline and ethics from here"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
      {
      role: "CTO, Lead Full Stack Developer & Project Head",
      company: "QwikList",
      companylogo: require("./assets/images/codeair.png"),
      date: "July 2018 – Present",
      desc: "Codeair is my first startup which aim to provide services on A.I, Blockchain, Cryptocurrency, Mobile Application Development, Web Development, Backend Maintenance, DevOps, Framework Development, Enterprise Solutions and Student's Academic Projects. We aim to provide quality service at best affordable price.",
      descBullets: [
        "Made it to enters the top 100 growing companies in India 2021",
        "Clients over 17 countries"
      ]
    },
    {
      role: "Chief Technology Officer",
      company: "QwikList",
      companylogo: require("./assets/images/qwiklist.png"),
      date: "September 2021 – January 2022",
      desc: "To carry on a business of rendering local search engine optimization services in India for providing business information about the characteristics, interest and other attributes of various types of businesses, projects, individuals, organizations. To carry on business in India as service provider in relation to and for facilitation of purchase and sale of any kinds of goods or services by any third parties through any medium, including by developing and operating a portal for listing of products and services and enabling users to purchase such goods or services from third party vendors and, providing any services in relation thereto, including promotion of products or services, payment collection, packaging and delivery of products, customer care service and quality control. To carry on the business of on line shopping, Internet advertising and marketing, creating virtual malls, stores, shops, creating shopping catalogues, providing secured payment processing, net commerce solutions for business to business and business to consumers. To promote, advise, organize and to carry on marketing and distribution channel for various goods and service providers and to provide various solution for digital payments for its users through multiple platforms such as website, mobile apps and through third party applications.",
      descBullets: [
        "Developed the digital platform for Qwiklist (Web application and Mobile App).",
        "Registered the company in Private Limited and helped in getting recognised in Indore (M.P)."
      ]
    },
    {
      role: "Lead Software Developer",
      company: "National Informatics Centre",
      companylogo: require("./assets/images/nic.jpeg"),
      date: "Dec 2019 – May 2020",
      desc: "I've been worked here as a lead software engineer. Understanding the basic needs and requirements of the company i along with my team used to share the desired output in the form of softwares to run the industry among its competitors freely."
    },
    {
      role: "Tech Blogger",
      company: "DroidAdda",
      companylogo: require("./assets/images/dadda.png"),
      date: "Jul 2015 – Dec 2017",
      desc: "I created Droidadda on July 29 2015 as a personal blog. Soon after getting huge response from the user i made it a public blogging platform where i post latest trending articles on various topics like Android,Blogging,Games,Apps,Development,Marketing,etc for my beloved readers on Droidadda."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/amd.png"),
      projectName: "ActionalMD",
      projectDesc: "A healthcare startup aims to deliver the best medical practices to people and improve modernization in digital healthcare industry. I along with my team in CodeAir, were designed and frontend and Backend of the initial phase of the ActionalMD back in 2021 at its earliest release.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://actionalmd.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/taxdraw.png"),
      projectName: "TaxDraw",
      projectDesc: "A legal business company which helps businesses to registered officially as a legal entity in India. I have improved the backend in Laravel as an outsourcing partner to them.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://taxdraw.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
    
  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "My first certification and achievement comes from here, I've earned the Badge and certificate by scoring good among 300K other programmers.",
      image: require("./assets/images/gpca.png"),
      imageAlt: "Google Certification Badge",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1T6qYVOWA2OvY0m_eZXh_gofOkP2dYGr7/view"
        },
        {
          name: "Date of Achievement",
          subtitle: "Apr 2018"
        }        
      ]
    },    
    {
      title: "Google Professional Cloud Architect",
      subtitle:
        "Developed a Google Cloud PWA that is available on 2 Billion devices world wide.",
      image: require("./assets/images/gpca.png"),
      imageAlt: "Google Professional Cloud Architect",
      footerLink: [
        {
          name: "Date of Achievement",
          subtitle: "Jul 2019"
        }
      ]
    },
    {
      title: "IBM Certified Solution Developer",
      subtitle:
        "Developed a Google Cloud PWA that is available on 2 Billion devices world wide.",
      image: require("./assets/images/gcpa.png"),
      imageAlt: "Google Professional Cloud Architect",
      footerLink: [
        {
          name: "Date of Achievement",
          subtitle: "Oct 2016"
        }
      ]
    },

    {
      title: "AWS Certified Associate Developer",
      subtitle: "Completed Certifcation from AWS in Web App Development",
      image: require("./assets/images/awscda.png"),
      imageAlt: "AWS Certification",
      footerLink: [
        {
        	name: " Date of Achievement", 
        	subtitle: "Sep 2020"
        	}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@sunmughan/vidhhya-complete-online-school-management-solution-5c543a6127ab",
      title: "Vidhhya — Complete Online School Management Solution by CodeAir",
      description:
        "Codeair has developed a unified solution for online school and learning. Vidhhya School Management ERP (Website + Admin Panel + Android/iOS Mobile Application) aims at easing administrative hassles and enhancing efficiency, and productivity. The Solution is cloud based and supports various modern technologies such as – Online payment gateway, RFID smart cards, biometric, mobile apps, email alerts, etc. School management software is agile and can be tailored according to the requirements of the institution."
    },
    {
      url: "https://medium.com/@sunmughan/iconfy-instant-free-use-video-conferencing-app-for-android-7599429a97fe",
      title: "iConfy — Instant Free use video conferencing app for android 📸",
      description:
        "iConfy is a free video conferencing and video meeting app that allows you to communicate with your friends, family or colleagues with ease."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "PROJECT PRESENTATION",
      subtitle: "Detailed slides of Vidhhya School Management System and Students Academic Project Development",
      slides_url: "https://drive.google.com/file/d/12zpqbCjplwHU3dgY-YfyRM1br8bY_GnP/view?usp=drivesdk",
      event_url: "https://drive.google.com/file/d/1C9zwAUKvKCfGuLLObXiJC1h1Hicri5og/view?usp=drivesdk"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT PROGRAMMING AND TECHNOLOGY 🥸",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a project in mind and want to discuss ? Feel free to connect me over here 😌",
  number: "+91-9584215603",
  email_address: "sunmughan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "codeair1", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
