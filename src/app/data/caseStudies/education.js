import certiquest from "./education/subprojects/certiquest";
import smartlearn from "./education/subprojects/smartlearn";

// data/caseStudyData.js
const education = {
    id: "education", // Unique ID for routing
    heroSection: {
      title: "Revolutionizing Education with a Modern Learning Management System",
      category: "Industry",
      industry: "Education",
      image:
        "https://i.ibb.co/wNsqN7fp/Untitled-design-12.png",
    },
    section1: {
      title1: "Services Provided",
      title:
        "Transforming Remote Learning for a Leading University",
      description: `A leading university sought to modernize its learning management system (LMS) to support remote education and enhance the learning experience for students and faculty.`,
      services: [
        "UI/UX Design",
        "Web App Development",
        "Cloud Integration",
        "Digital Transformation",
  
      ],
      details: [
        { label: "Language", value: "JavaScript/Node.js" },
        { label: "Timescale", value: "22 Weeks" },
        { label: "Launch Date", value: "November 2024" },
        { label: "System", value: "Moodle" },
      ],
    },
    objectivesData: {
      title: "Objectives",
      description:
        "Create a user-friendly LMS for students and faculty, Enable seamless content delivery and assessments, Integrate analytics for performance tracking.",
      objectives: [
        {
          icon: "📦",
          title: "Online Learning Platform",
          description:
            "The LMS allows students to access course materials, submit assignments, and take exams online.",
        },
        {
          icon: "🔗",
          title: "Content Delivery Integration",
          description:
            "The platform integrates with existing systems for seamless content delivery.",
        },
        {
          icon: "🎁",
          title: "Performance Analytics",
          description:
            "Faculty can track student performance and engagement through detailed analytics.",
        },
      ],
    },
    challengesData: {
      title: "Challenges",
      description:
        "Outdated system with limited functionality, Difficulty in scaling for a large user base, Lack of mobile compatibility.",
      objectives: [
        {
          icon: "✍️",
          title: "Limited Functionality",
          description:
            "The existing LMS lacked features to support modern remote learning.",
        },
        {
          icon: "📦",
          title: "Scalability Issues",
          description:
            "The system struggled to handle the growing number of users.",
        },
        {
          icon: "🔗",
          title: "Mobile Compatibility",
          description:
            "The platform was not optimized for mobile devices, limiting accessibility.",
        },
      ],
    },
    features: [
      {
        smallTitle: "Major Features",
        subtitle:
         <p><b>Interactive Course Modules: </b> Engaging and interactive learning materials.<br /> <b>Real-Time Grading:</b> Instant feedback and grading for assignments and exams.<br /> <b>Analytics Dashboard:</b> Insights into student performance and engagement.,</p> 
      },
      {
        title: "Superior UX Design",
        subtitle:
          "The LMS offers a responsive, intuitive, and engaging interface for students and faculty.",
      },
      //{
        //title: "Building a Secure Telemedicine Platform",
        //subtitle:
       // "A mid-sized clinic wanted to offer telemedicine services to improve patient engagement and accessibility.",
     // },
      // Add more features as needed
    ],
    keyResultsData: {
      title: "Key Results",
      description:
        "The modernized LMS transformed the university’s remote learning capabilities.",
      objectives: [
        {
          icon: "📱",
          title: "Improved Student Engagement",
          description:
            "Student engagement increased by 80%.",
        },
        {
          icon: "📈",
          title: "Faster Content Delivery",
          description:
            "Content delivery became 30% faster.",
        },
        {
          icon: "🌍",
          title: "Enhanced Faculty Productivity",
          description:
            "Faculty reported improved productivity and ease of use.",
        },
      ],
    },
    conclusion: {
      title: "Conclusion",
      subtitle:
        "The new LMS empowered the university to deliver high-quality remote education effectively, enhancing the learning experience for all stakeholders.",
    },

    subProjects: {
      title: "Digital Transformation in Education",
      subtitle: "From certification platforms to adaptive learning systems, explore how we’ve empowered education providers to scale, personalize, and optimize their offerings globally.",
      items: [certiquest, smartlearn],
    }
     // Add more as needed

  };
  
  
  export default education