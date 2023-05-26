import BatatabitImg from '@assets/images/batatabit-pic.jpg';
import ReactEcommerceImg from '@assets/images/react-ecommerce-pic.png';
import AdoptMeImg from '@assets/images/adoptme-pic.png';
import YardSaleImg from '@assets/images/yardsale-pic.png';

export const projects = [
  {
    id: 1,
    title: `Batatabit 🥔`,
    description: `A Landing Page created in the Responsive Design Course at Platzi, using HTML and CSS. Enhanced with Sass and JavaScript for advanced styling, improved user experience, and interactivity.`,
    technologies: ['HTML', 'SASS', 'JS'],
    image: BatatabitImg,
    repo: `https://github.com/ESteban-07/Batatabit`,
    demo: `https://esteban-07.github.io/Batatabit/`,
  },
  {
    id: 2,
    title: `React Ecommerce ⚛️`,
    description: `This user-friendly e-commerce platform seamlessly integrates a clean design, responsive layout, and advanced functionality. It enhances UX with a persistent shopping cart, attractive product panels, and intuitive category navigation.`,
    technologies: ['REACT', 'Tailwind CSS', 'API'],
    image: ReactEcommerceImg,
    repo: `https://github.com/ESteban-07/react-ecommerce`,
    demo: `https://esteban-07.github.io/react-ecommerce/`,
  },
  {
    id: 3,
    title: `Adopt Me 🐶`,
    description: `A website for an NGO that needs to showcase pets for adoption, including rescued animals, shelter pets, and pets whose owners can no longer care for them. It aims to connect these pets with people who have a desire to adopt.`,
    technologies: ['HTML', 'CSS', 'JS'],
    image: AdoptMeImg,
    repo: `https://github.com/ESteban-07/ProyectoCatedraONG`,
    demo: `https://esteban-07.github.io/ProyectoCatedraONG/`,
  },
  {
    id: 4,
    title: `Yard Sale Store 🍀`,
    description: `Created through practical courses, this e-commerce project showcases skills in HTML/CSS component layout, responsive design, JavaScript interaction, DOM manipulation, data fetching, local storage, and deployment with Netlify.`,
    technologies: ['HTML', 'CSS', 'JS'],
    image: YardSaleImg,
    repo: `https://github.com/ESteban-07/platzi-yardsale-store`,
    demo: `https://platzi-yardsale-ecommerce.netlify.app/`,
  },
];
