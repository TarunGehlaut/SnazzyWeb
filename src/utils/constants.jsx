import { AiOutlineContacts, AiOutlineHome } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import { MdOutlineFindInPage, MdOutlinePerson } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb";

import heroBanner1 from "../assets/hero-banner-1.jpg";
import heroBanner2 from "../assets/hero-banner-2.jpg";
import heroBanner3 from "../assets/hero-banner-3.jpg";

// companies
import Company1 from "../assets/company-1.svg";
import Company2 from "../assets/company-2.svg";
import Company3 from "../assets/company-3.svg";
import Company4 from "../assets/company-4.svg";
import Company5 from "../assets/company-5.svg";

// tech icons
import angularIcon from "../assets/angular.svg";
import djangoIcon from "../assets/django.svg";
import jsIcon from "../assets/js.svg";
import pythonIcon from "../assets/python.svg";
import reactIcon from "../assets/react.svg";
import salesforceBlueIcon from "../assets/salesforce_blue.svg";
import shopifyIcon from "../assets/shopify.svg";
import vueIcon from "../assets/vue.svg";

// Achievement:
import RevenueImg from "../assets/Annual-Revenue.webp";
import FastWebsiteImg from "../assets/FastWebsite.jpg";
import ClientImg from "../assets/happyClient.jpg";
import ProjectCompleteImg from "../assets/projectComplete.jpg";

// case studies
import caseStudyTwoImg from "../assets/case-study-1.jpg";
import caseStudyThreeImg from "../assets/case-study-2.jpg";
import caseStudyOneImg from "../assets/case-study-3.webp";

// Key Featurrs img
import canny1Img from "../assets/canny1.webp";
import canny2Img from "../assets/canny2.webp";
import canny3Img from "../assets/canny3.webp";
import canny4Img from "../assets/canny4.webp";

// blogs images
import blogImg1 from "../assets/blogImg1.webp";
import blogImg2 from "../assets/blogImg2.webp";
import blogImg3 from "../assets/blogImg3.webp";
import blogImg4 from "../assets/blogImg4.jpg";

// Review Avatar's
import ReviewAvatar1 from "../assets/avatar1.jpg";
import ReviewAvatar2 from "../assets/avatar2.jpg";
import ReviewAvatar3 from "../assets/avatar3.jpg";

export const menus = [
  {
    name: "Home",
    icon: <AiOutlineHome />,
    dis: "translate-x-0",
    disMob: "translate-x-0",
  },
  {
    name: "About",
    icon: <MdOutlinePerson />,
    dis: "translate-x-14",
    disMob: "translate-x-[44px]",
  },
  {
    name: "Services",
    icon: <TbHeartHandshake />,
    dis: "translate-x-28",
    disMob: "translate-x-[88px]",
  },
  {
    name: "Case Study",
    icon: <MdOutlineFindInPage />,
    dis: "translate-x-[168px]",
    disMob: "translate-x-[132px]",
  },
  {
    name: "Blog",
    icon: <BiNotepad />,
    dis: "translate-x-56",
    disMob: "translate-x-[176px]",
  },
  {
    name: "Contact",
    icon: <AiOutlineContacts />,
    dis: "translate-x-70",
    disMob: "translate-x-[220px]",
  },
];

export const headerBannerContent = [
  {
    id: "1",
    title: "Data-Driven Results",
    heroText: `  We believe in the power of data to drive results. That's why we
    use data-driven insights to inform all of our digital marketing
    strategies and tactics. From tracking website traffic to measuring the
    effectiveness of your campaigns, we have the tools and expertise to
    deliver results that matter.`,
    imgSrc: heroBanner1,
  },
  {
    id: "2",
    title: `Building Your Online Presence`,
    heroText: `At SnazzyWeb, we specialize in building stunning and effective websites that engage your audience and help grow your business. From design to development, we handle every aspect of the web building process`,
    imgSrc: heroBanner2,
  },
  {
    id: "3",
    title: `Innovation at its Best`,
    heroText: `At SnazzyWeb, we are dedicated to delivering the latest and most innovative technology solutions to businesses just like yours. With a team of experts and a commitment to excellence, we are the partner you can count on for all your IT needs.`,
    imgSrc: heroBanner3,
  },
];

export const companies = [
  {
    id: crypto.randomUUID(),
    imgSrc: Company1,
  },
  {
    id: crypto.randomUUID(),
    imgSrc: Company2,
  },
  {
    id: crypto.randomUUID(),
    imgSrc: Company3,
  },
  {
    id: crypto.randomUUID(),
    imgSrc: Company4,
  },
  {
    id: crypto.randomUUID(),
    imgSrc: Company5,
  },
];

export const technologiesUsedData = [
  {
    id: crypto.randomUUID(),
    title: "ReactJS",
    subTitle: "CRM",
    imgSrc: reactIcon,
  },

  {
    id: crypto.randomUUID(),
    title: "VueJS",
    subTitle: "CRM",
    imgSrc: vueIcon,
  },

  {
    id: crypto.randomUUID(),
    title: "AngularJS",
    subTitle: "CRM",
    imgSrc: angularIcon,
  },

  {
    id: crypto.randomUUID(),
    title: "JavaScript",
    subTitle: "CRM",
    imgSrc: jsIcon,
  },
  {
    id: crypto.randomUUID(),
    title: "Salesforce",
    subTitle: "CRM",
    imgSrc: salesforceBlueIcon,
  },
  {
    id: crypto.randomUUID(),
    title: "django",
    subTitle: "CRM",
    imgSrc: djangoIcon,
  },

  {
    id: crypto.randomUUID(),
    title: "Python",
    subTitle: "CRM",
    imgSrc: pythonIcon,
  },
  {
    id: crypto.randomUUID(),
    title: "Shopify",
    subTitle: "CRM",
    imgSrc: shopifyIcon,
  },
];

export const achievements = [
  {
    id: crypto.randomUUID(),
    stats: "123%",
    subtitle: "Traffic increase within 6 months.",
    imgSrc: ClientImg,
  },
  {
    id: crypto.randomUUID(),
    stats: "20 days",
    subtitle: "To finish Project",
    imgSrc: ProjectCompleteImg,
  },
  {
    id: crypto.randomUUID(),
    stats: "50%",
    subtitle: "Revenue growth in just 60 days.",
    imgSrc: RevenueImg,
  },
  {
    id: crypto.randomUUID(),
    stats: "3x",
    subtitle: "Faster website performance.",
    imgSrc: FastWebsiteImg,
  },
];

export const caseStudies = [
  {
    id: crypto.randomUUID(),
    title: " Acutok",
    subtitle: "Consultancy, SAAS,Software, UI/UX",
    imgSrc: caseStudyOneImg,
  },
  {
    id: crypto.randomUUID(),
    title: " Alankaram",
    subtitle: "Ecommerce, Furniture, Lifestyle ",
    imgSrc: caseStudyTwoImg,
  },
  {
    id: crypto.randomUUID(),
    title: "OGHemp",
    subtitle: "Consultancy,Corporate, Industrial Software ",
    imgSrc: caseStudyThreeImg,
  },
];

export const keyFeaturesData = [
  {
    id: crypto.randomUUID(),
    service: "#service 1",
    title: `Beautiful Websites`,
    subtitle: `Website design & development is a combination of both, experience and approach. We start by tackling what you want to convey, the problem you want to solve, or the reaction you want to provoke. We then utilize an agile methodology to execute rapidly.`,
    imgSrc: canny1Img,
  },
  {
    id: crypto.randomUUID(),
    service: "#service 2",
    title: `ECommerce Enablement`,
    subtitle: `E-commerce plays a role vital role in gaining and retaining customers. Incorporate directory management or have more targeted marketing behind it, your business can do all of these and more with the right e-commerce solution.`,
    imgSrc: canny2Img,
  },
  {
    id: crypto.randomUUID(),
    service: "#service 3",
    title: `Branding`,
    subtitle: `We design consumer experience in a way that attracts loyalty to your brand. We understand and encompass who you are, take your unique offerings to the right people and clearly answers why consumers must choose you over the rest.`,
    imgSrc: canny3Img,
  },
  {
    id: crypto.randomUUID(),
    service: "#service 4",
    title: `Social Marketing`,
    subtitle: `We have knowledge, tools and experiences since we have catered to many digital solutions and revolutions over the past decade. Digital and social makeovers certainly cannot be at the end of the tunnel of your growth strategy.`,
    imgSrc: canny4Img,
  },
];

export const BlogsData = [
  {
    id: crypto.randomUUID(),
    title: `How to start affiliate marketing`,
    author: `Amy Johnson`,
    job: "Writer",
    blogImgSrc: blogImg3,
    avatar: ReviewAvatar1,
  },
  {
    id: crypto.randomUUID(),
    title: `Top 10 Proven Ways To Earn Money Online In 2023`,
    author: `Laura Gavrilă`,
    job: "Writer",
    blogImgSrc: blogImg4,
    avatar: ReviewAvatar2,
  },
  {
    id: crypto.randomUUID(),
    title: `Marketing Certificates That Can Land You Your Dream Job`,
    author: `Gillian Mays`,
    job: "Marketing",
    blogImgSrc: blogImg1,
    avatar: ReviewAvatar3,
  },
  {
    id: crypto.randomUUID(),
    title: `What is Click Bank? How to Earn Money By ClickBank`,
    author: `Manuel Schröder`,
    job: "Designer",
    blogImgSrc: blogImg2,
    avatar: ReviewAvatar1,
  },
];

export const reviewsData = [
  {
    id: crypto.randomUUID(),
    review: `They took a difficult brief and delivered a fresh new brand that pushes boundaries and arms us with what we need to grow our business and expand into new markets.`,
    author: `Rachael Weir`,
    job: "Marketing Manager",
    avatar: ReviewAvatar1,
  },
  {
    id: crypto.randomUUID(),
    review: `I am extremely impressed with the quality of service provided by this web development company. Their team of developers is highly skilled and knowledgeable, and they were able to create a website that exceeded my expectations.`,
    author: `Emily Mason`,
    job: "Lead IT",
    avatar: ReviewAvatar2,
  },
  {
    id: crypto.randomUUID(),
    review: `SnazzyWeb's work has been vital in supporting our strategic goals as we evolve as a company. Although the project is over, we continue to build our partnership with Canny as their guidance is invaluable.`,
    author: `Rachael Weir`,
    job: "MArketing Manager",
    avatar: ReviewAvatar3,
  },
];
