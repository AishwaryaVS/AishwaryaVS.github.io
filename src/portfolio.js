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
  username: "Aishwarya Vijaykumar Sheelvant",
  title: "Hi all, I'm Aishwarya",
  subTitle: emoji(
    "A grad student at Georgia Tech pursuing a Masters degree in Computer Science"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xCs7eugIhY0wLY6C4ilzqanzQnXBrQIu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AishwaryaVS",
  linkedin: "https://www.linkedin.com/in/aishwarya-v-sheelvant/",
  gmail: "aishwaryasheelvant12@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Machin Learning / Data Science ",
  skills: [
    "As a dedicated student, I am fervently seeking opportunities to immerse myself in the dynamic field of Data Science. With an insatiable appetite for knowledge and a passion for problem-solving, I am constantly refining my skills through hands-on projects and coursework. I thrive on the challenges that Data Science presents, leveraging every opportunity to delve deeper into the intricacies of this ever-evolving domain.I aim to not only expand my technical proficiency but also contribute meaningfully to the realm of data-driven insights and solutions."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fa-brands fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
const techStack = {
  title: "TECHNICAL SKILLS",
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming Skills : Python, Java, SQL , HTML, CSS, C, React", //Insert stack or technology you have experience in
      // progressPercentage: "90%" //Insert relative proficiency in percentage
      descBullets: [
        " t",
      ]
    },
    {
      Stack: "Frameworks and Tools : Amazon Web Services(AWS), Git, Tensorflow, Bootstrap, Flask, RestAPI, Docker, Kubernetes",
      // progressPercentage: "70%"
      descBullets: [
        " Amazon Web Services(AWS)", "Git", "Tensorflow", "Bootstrap", "Flask", "RestAPI", "Docker", "Kubernetes",
      ]
    },
    {
      Stack: "Databases : MySQL, OracleSQL, PostgreSQL",
      // progressPercentage: "60%"
      descBullets: [
        "MySQL", "OracleSQL", "PostgreSQL",
      ]
    },
    {
    Stack: "ML Models : Regression, YOLO, KNN, Faster RCNN, Decision Tree, Random Forest",
    // progressPercentage: "60%"
    descBullets: [
      "Regression", "YOLO", "KNN", "Faster RCNN", "Decision Tree", "Random Forest",
    ]
  },


  ],
  // display: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
  // experience: [
  //   "Data Science",
  //   "Machine Learning",
  //       "",
  //       "Data Science for Epidemiology",
  //       "Numerical Linear Algebra",
  //       "Advanced Internet Computing"],
        display: true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      desc: "Relevant courses",
      descBullets: [
        "Big Data System and Analytics",
        "Computational Data Analytics",
        "Natural Language Processing",
        "Data Science for Epidemiology",
        "Numerical Linear Algebra",
        "Advanced Internet Computing"
      ]
    },
    {
      schoolName: "M.S Ramaiah Institute of Technology",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2017- August 2021",
      desc: "Relevant courses",
      descBullets: [
        "Database Systems",
        "Data Analytics",
        "Machine Learning",
        "Data Science",
        "Object Oriented Programming with JAVA"
      ]
    }
  ]
};
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Engineer Intern",
      company: "Rocket Mortgage",
      companylogo: require("./assets/images/Rocket.png"),
      date: "May 2023 – August 2023",
      descBullets: [
        "Technology Stack: Python, Kubernetes, CircleCI, Seldon Core, AWS, Argo Workflows",
       "Automated the CI/CD pipeline, streamlining the integration, testing, and deployment of Machine Learning models resulting in an 80%  decrease in deployment time.", 
       "Implemented TensorFlow data drift detection techniques on various Clustering Models to enable model monitoring",
       "Orchestrated Kubernetes cluster setup with Rancher, ensuring high availability and scalability for efficient model serving"
      ]
    },
    {
      role: "Data Scientist",
      company: "Neewee Analytics",
      companylogo: require("./assets/images/download.png"),
      date: "August 2020 – June 2022",
      descBullets: [
        "Technology Stack: Python, PostgreSQL, FastAPI, Jenkins, Docker, Postman, Pandas, Matplotlib, Numpy",
        "Automated the process of data extraction from different file formats, reducing the time required for data collection by 90%",
        "Developed optimized solutions for the Coal Blend manufacturing industry using Multiobjective Optimization using Genetic Algorithms, reducing costs by $225,000",
        "Collaborated with UI/UX team to design custom APIs using FastAPI, for retrieval and storage of data from PostgreSQL and RDS data sources in collaboration with UI teams"
        
       ]
    },
    {
      role: "Business Intelligence Intern",
      company: "Collins Aerospace",
      companylogo: require("./assets/images/collins.png"),
      date: " February 2021 - June 2021",
      descBullets: [
        "Technology Stack: SAP Business Warehouse, SAP Business Objects, DataStore Objects",
        "Developed and optimized process workflows using SAP tools like BW, BO enabling strategic business decision-making.",
        "Transferred and transformed large volumes of data for business report generation using SAP BO, InfoSets, DataStore Objects, and InfoCubes"
        
        
       ]
    },
    {
      role: "Software Engineer Intern Intern",
      company: "Simpragma Solutions ",
      companylogo: require("./assets/images/sim.png"),
      date: "July 2019 - August 2019",
      descBullets: [
        "Technology Stack: Java, J2SE, Gradle, Audacity",
        "Engineered speech-to-text conversion software for a virtual assistant AI technology by utilizing NLP models",
        "Achieved an accuracy of 75% by implementing Sphinx4 API with an overall increase of 30% from the previously deployed model"
        
        
       ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  projects: [
    {
      projectName: "Sparse Recommendation System Analysis: A Study of  MultiVAE and EASE Algorithms",
      projectDesc: "Implemented Deep Learning recommendation models: MultiVAE and EASE, achieving an accuracy of 70%.Investigated the computational efficiency and scalability of the algorithms for large-scale datasets of size 20 million. Technology Stack: Tensorflow, Python, Jupyter Notebook",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/AishwaryaVS/Sparse-Recommendation-System-Analysis"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Object detection for Climatic Data",
      projectDesc: "Modeled two prominent Deep Learning detection algorithms: YOLO and Faster RCNN, on a large curated image dataset to predict climatic conditions of an area. Achieved a collective accuracy of 70% after performing a detailed comparative study of the accuracy and time for execution.Technology Stack: Python, AWS, Keras,Jupyter Notebook",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/AishwaryaVS/Object-Detection-For-Climatic-Data"
        }
      ]
    },
    {
      projectName: "Crime Prediction: Data Science and Data Analysis",
      projectDesc: "Devised a state-wise crime prediction algorithm to identify the influence of factors such as unemployment, poverty, and education, on crime in India and designed an interactive data visualization to depict the crime rate providing a user interface to detect crime hotspots nationwide.Technology Stack: Tensorflow, Python, Jupyter Notebook, Matplotlib, Geopandas, Folium",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/AishwaryaVS/Object-Detection-For-Climatic-Data"
        }
      ]
    },
    {
      projectName: "Advanced Java and J2SE project",
      projectDesc: "Developed a UI model to track, edit and retrieve information about conferences held in the university.The objective of this model was to help students find information about conferences with ease and reduce time by faster retrieval of data.Technology Stack: Java, AWT, HTML, Oracle",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/AishwaryaVS/Java-Swings-Project"
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
    "Achievements, Certifications, Publications !",

  achievementsCards: [
    {
      title: "Makkala Jagriti Volunteer",
      subtitle:
        "Volunteered for Makkala Jagriti, an NGO which taught extracurricular activities to underprivileged kids",
      },
    {
      title: "Sponsorship Head - UDBHAV",
      subtitle:
        "Head of the Sponsorship team for undergrad college fest, UDBHAV",
    },

    {
      title: "NPTEL Certifications ",
      subtitle:"Certifications in Design and Analysis of Algorithms, Database Management Systems, Discrete Mathematics"
    },
    {
      title: "LinkedIn Certifications",
      subtitle:"Certifications in Advanced Statistics, Angular, Data Analysis"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
const contactInfo = {
  title: emoji("Contact Details"),
  number: "+1(470)9293152",
  email_address: "aishwaryasheelvant12@gmail.com"
};
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false;


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