import ec from "./assets/ecomm.png";
import book from "./assets/booking.png";
import form from "./assets/2fa_form.png";
import ph from "./assets/test.png";
export const webPortfolio = [
  {
    id: 1,
    name: "Online store",
    img: ec,
    desc: "Online store is an E-commerce platform that features Product listing with categories and search functionality,Add to cart and remove items, Persistent cart using MongoDB,Order creation and tracking and integrating Paystack as the online payment gateway to handle transactions securely.it was built using the MERN stack (MongoDB, Express.js, React, Node.js) with Redux for state management and Tailwind CSS for styling.",
    extra:
      "Some key features includes User registration and login,JWT-based authentication,Secure payment processing using Paystack, Optimized for various screen sizes and devices.",
    conclusion:
      "With a focus on user experience and secure payment processing, it aims to provide a comprehensive solution for online retail businesses.",
    stack: [
      "React Js",
      "Tailwind CSS",
      "Redux",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Paystack",
      "GIT",
      "Netlify",
    ],
    github: "https://github.com/mr-atuzie/ecomm_client",
    link: "https://ec-shop.netlify.app",
  },
  {
    id: 2,
    name: "Nation Properties",
    img: book,
    desc: "Nation Properties is designed to simplify the process of finding and booking accommodations/rooms,Upload images and provide detailed information for each property,Automatic calculation of stay duration and total price based on check-in and check-out dates,Bookmark properties for quick access later. The platform is built using the MERN stack (MongoDB, Express.js, React, Node.js) with Tailwind CSS for styling.",
    extra:
      "Some key features includes User registration and login,JWT-based authentication,Upload images and provide detailed information for each property,Display properties in both grid and list views,Detailed property pages with descriptions, images, reviews, and ratings and maps,Automatic calculation of stay duration and total price based on check-in and check-out dates,Bookmark properties for quick access later.",
    conclusion:
      "With a focus on user experience, seamless booking management, and detailed property listings, it aims to provide a comprehensive solution for finding and booking accommodations.",
    stack: [
      "React Js",
      "Tailwind CSS",
      "Node Js",
      "Express Js",
      "MongoDB",
      "GIT",
      "Netlify",
    ],
    github: "https://github.com/mr-atuzie/booking_fe",
    link: "https://nation-properties.netlify.app",
  },
  {
    id: 3,
    name: "SecureAuth",
    img: form,
    desc: "SecureAuth is a authentication platform designed to implement Two-Factor Authentication (2FA) using email.It provides a authentication mechanism that enhances security by requiring users to verify their identity through a code sent to their email and also Password Management system for Forget and Reset Password. ",
    extra:
      "Some key features includes User registration and login,JWT-based authentication for session management,Sending a unique verification code to the user's email during login,Integration with an email service Nodemailer to send verification codes",
    conclusion:
      "By implementing Two-Factor Authentication with email, it enhances security and provides users with an additional layer of protection against unauthorized access. The project aims to deliver a robust and reliable solution for modern authentication needs.",
    stack: [
      "React Js",
      "Tailwind CSS",
      "Node Js",
      "Express Js",
      "MongoDB",
      "NodeMailer",
      "GIT",
      "Netlify",
    ],
    github: "https://github.com/mr-atuzie/2FA_form",
    link: "https://2fa-form.netlify.app",
  },
  {
    id: 4,
    name: "TestMaster",
    img: ph,
    desc: "TestMaster is a comprehensive computer-based testing application designed to facilitate online examinations across multiple subjects. Built using the MERN stack (MongoDB, Express.js, React, Node.js) with Tailwind CSS for styling, the platform allows administrators to create and manage tests, while students can take exams and receive instant results via email. The application supports a wide range of question types, real-time scoring, and automated result notifications.",
    extra:
      "Some key feature includes Support for multiple subjects and question types (MCQs, True/False),Real-time progress tracking during exams,Automated scoring system for immediate result generation,Instant email notifications of results to students.",
    conclusion:
      "With a focus on ease of use, instant results, and comprehensive test management, it aims to provide a reliable solution for educational institutions and organizations conducting online exams. The project strives to deliver a scalable, maintainable, and secure application for modern assessment needs.",
    stack: [
      "React Js",
      "Tailwind CSS",
      "Node Js",
      "Express Js",
      "MongoDB",
      "NodeMailer",
      "GIT",
      "Netlify",
    ],
    github: "https://github.com/mr-atuzie/cbt",
    link: "https://computer-base-test.netlify.app",
  },

  // {
  //   id: 5,
  //   name: "LogiTrack",
  //   img: ph,
  //   desc: "LogiTrack is a comprehensive logistics and tracking platform designed to manage and monitor shipments in real-time. Built using the MERN stack (MongoDB, Express.js, React, Node.js) with Tailwind CSS for styling, the platform offers features for shipment tracking, route optimization, status updates, and detailed reporting. The system aims to streamline logistics operations, enhance transparency, and improve overall efficiency.",
  //   extra:
  //     "Some key features includes User registration and login,JWT-based authentication for secure session management,Real-time tracking of shipment locations and statuses,Interactive map for real-time location tracking of shipments,Automated status updates sent to customers via email or SMS",
  //   conclusion:
  //     "With a focus on real-time tracking, route optimization, and automated notifications, it aims to streamline logistics operations and improve overall efficiency. The project strives to deliver a scalable, maintainable, and secure application for modern logistics needs.",
  //   stack: [
  //     "React Js",
  //     "Tailwind CSS",
  //     "Node Js",
  //     "Express Js",
  //     "MongoDB",
  //     "GIT",
  //     "Netlify",
  //   ],
  //   github: "https://github.com/mr-atuzie/super_landing-page",
  //   link: "https://genuine-flan-11fc86.netlify.app/",
  // },
];
