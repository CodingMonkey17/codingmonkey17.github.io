/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rachel's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Rachel Hau Portfolio",
    type: "website",
    url: "https://codingmonkey17.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Rachel Hau",
  logo_name: "Rachel Hau",
  // nickname: "Chin Man Hau",
  subTitle:
    "A passionate AI developer committed to creating impactful technologies that advance societal well-being.",
  resumeLink:
    "https://drive.google.com/file/d/17jq4oTVoaPrTHtFeDUyFWk8NerjVf6X5/view?usp=sharing",

  githubProfile: "https://github.com/CodingMonkey17",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/CodingMonkey17",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rachel-hau-2750262ab/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:rachelhau.work@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Artificial Intelligence",
      imagePath: "AIhuman.svg",
      skills: [
        "⚡ Built scalable AI systems using supervised, unsupervised, and reinforcement learning techniques",
        "⚡ Designed time series models for forecasting and anomaly detection in real-world datasets",
        "⚡ Fine-tuned Large Language Models (LLMs) for natural language understanding and generation tasks",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Machine Learning for Societal Benefit",
      // imagePath: "Technology.svg",
      imagePath: "AIhuman.svg",
      // fileName: "FullStackImg",
      skills: [
        "⚡ Developed and deployed machine learning models for real-world applications, including air quality forecasting and language understanding",
        "⚡ Focused on projects with societal impact, leveraging AI to support public health, education, and accessibility",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },

        //
      ],
    },

    {
      title: "End-to-End AI Engineering",
      // fileName: "DesignImg",
      imagePath: "AIhuman.svg", // either use imagePath or fileName, and change in SkillSection.js in containers folder

      skills: [
        "⚡ Designed modular and reproducible pipelines for data preprocessing, training, and inference",
        "⚡ Built and deployed APIs and microservices using Flask, FastAPI, and containerized with Docker",
        "⚡ Integrated machine learning models into full-stack systems",
      ],
      softwareSkills: [
        // {
        //   skillName: "Adobe XD",
        //   fontAwesomeClassname: "simple-icons:adobexd",
        //   style: {
        //     color: "#FF2BC2",
        //   },
        // },
        // {
        //   skillName: "Figma",
        //   fontAwesomeClassname: "simple-icons:figma",
        //   style: {
        //     color: "#F24E1E",
        //   },
        // },
        // {
        //   skillName: "Adobe Illustrator",
        //   fontAwesomeClassname: "simple-icons:adobeillustrator",
        //   style: {
        //     color: "#FF7C00",
        //   },
        // },
        // {
        //   skillName: "Inkscape",
        //   fontAwesomeClassname: "simple-icons:inkscape",
        //   style: {
        //     color: "#000000",
        //   },
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Leiden University",
      subtitle: "M.Sc. in Computer Science (Artificial Intelligence track)",
      logo_path: "LU.png",
      alt_name: "Leiden University",
      duration: "2025-2027",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link:
        "https://www.universiteitleiden.nl/en/education/study-programmes/master/computer-science/artificial-intelligence",
    },
    {
      title: "University of Groningen",
      subtitle: "B.Sc. in Artificial Intelligence",
      logo_path: "rug.png",
      alt_name: "RUG",
      duration: "2022-2025",
      descriptions: [
        "⚡ Completed key coursework in Signals and Systems, Algorithms and Data Structures, Neural Networks, Object-Oriented Programming, and Machine Learning for Industry Practical.",
        "⚡ Gained strong mathematical foundations through Linear Algebra and Multivariable Calculus, enabling rigorous development of AI models.",
        "⚡ Conducted a bachelor research project on Physics-Enhanced Machine Learning for Air Pollution Forecasting, combining domain knowledge with real-world data to support environmental insight.",
      ],
      website_link:
        "https://www.rug.nl/bachelors/artificial-intelligence/?lang=en",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have applied my AI and software engineering skills across a range of roles—from developing and deploying LLM-based chatbots and timeseries predictions, to robotics systems with ROS. These roles reflect my ability to build, deploy, and explain AI-powered solutions in both academic and industry settings.",

  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "LTGame Limited",
          company_url: "https://www.ltgame.com/",
          logo_path: "ltgame.jpeg",
          duration: "September 2024 – Present",
          location: "Remote",
          description:
            "Led the development of an AI-powered online card game competition platform. Built and deployed RL agents (DQN, PPO, CFR) using PyTorch, TensorFlow, OpenSpiel, RLCard, and PettingZoo. Integrated models into a scalable server for global API-based tournaments and coordinated across cross-functional teams.",
          color: "#2E86C1",
        },

        {
          title: "Teaching Assistant",
          company:
            "University of Groningen, Faculty of Science and Engineering",
          company_url: "https://www.rug.nl/fse/",
          logo_path: "rug.png",
          duration: "February 2024 – April 2024",
          location: "Groningen, Netherlands",
          description:
            "Facilitated weekly tutorial sessions for approximately 20 students, offering guidance on challenging course material and fostering interactive learning. Acted as a liaison between students and faculty by collecting and relaying feedback on lecture content and student needs. Assisted in grading assignments and exams, ensuring consistency, fairness, and alignment with academic standards.",
          color: "#004586",
        },

        {
          title: "Private Tutor",
          company: "Hong Kong Tutor Association",
          company_url: "https://www.hkta.edu.hk/en",
          logo_path: "hkta.png", // Use a relevant icon or leave empty if not available
          duration: "May 2022 – August 2022",
          location: "Hong Kong",
          description:
            "Provided personalized tutoring in Mathematics, Chinese, and English to primary and secondary school students. Focused on strengthening foundational concepts and improving academic confidence. Adapted teaching methods to suit individual learning styles, resulting in noticeable progress and improved performance within a short period.",
          color: "#F39C12",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "AI Intern",
          company: "LTGame Limited",
          company_url: "https://www.ltgame.com/",
          logo_path: "ltgame.jpeg",
          duration: "July 2024 – August 2024",
          location: "Macao SAR",
          description:
            "Designed and integrated AI-driven features into gaming products to enhance interactivity and player engagement. Focused on developing in-game ChatBots powered by Large Language Models (LLMs), applying generative AI techniques to create dynamic, context-aware experiences. Demonstrated strong technical and communication skills, leading to a direct promotion to a long-term remote Machine Learning Engineer role after the internship.",
          color: "#27AE60",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Software Department Engineer",
          company: "Makercie (GEARS)",
          company_url:
            "https://www.linkedin.com/company/makercie-rug/?originalSubdomain=nl", // Add URL if available
          logo_path: "makercie.jpeg", // Replace with actual logo path or placeholder
          duration: "June 2023 – August 2024",
          location: "Groningen, Netherlands",
          description:
            "Contributed to robotics system development by integrating and configuring modular ROS nodes for coordinated functionality. Established reliable motor board communication with the central computer to support real-time autonomous control. Created internal and public-facing ROS tutorials covering node configuration, messaging protocols, and launch file management to streamline onboarding and collaboration.",
          color: "#1ABC9C",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have worked on a range of projects involving data science, reinforcement learning, and neural networks. Highlights include a hybrid PINN-GNN model for pollution forecasting, adaptive DDPG for RL research, and financial time series prediction. I also built a deployed air quality forecasting app, bluffing agents using Theory of Mind, digit classification models, and a small-scale LLM project with attention mechanisms.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "rachel_icon.JPG",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Driven by passion, defined by efficiency",
    subtitle:
      "Born in Hong Kong, I bring precision, efficiency, and relentless commitment, building tech that empowers, not replaces.",
    // link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "city.svg",
  },
  addressSection: {
    title: "Intelligence is amplified, not artificial.",
    subtitle:
      "I design systems where humans lead and AI supports, always with clarity, always with intent.",
    // locality: "San Jose",
    // country: "USA",
    // region: "California",
    // postalCode: "95129",
    // streetAddress: "Saratoga Avenue",
    avatar_image_path: "AIhuman.svg",
    // location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    // title: "",
    // subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
