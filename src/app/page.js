'use client'
import Banner1 from "./components/banners/Banner1";
import Banner2 from "./components/banners/Banner2";
import Card1 from "./components/cards/Card1";
import Card2 from "./components/cards/Card2";
import Button1 from "./components/comman/Buttons/Button1";
import { FaArrowRight } from "react-icons/fa";
import technologiesServices from "../../public/assets/service/technologies.jpg"
// app/page.js
import Head from 'next/head';
import caseStudies from "./data/caseStudies";
import { useRouter } from "next/navigation";
const metadata = {
  title: "Code Creador",  // Global title
  description: "Your Tech Innovation Partner",  // Global description
};

export default function HomePage() {
    const router = useRouter();
  const cardsData = [
    {
      title: "Caribou",
      id: "caribou-coffee",
      description:
        "Helping a fashion brand streamline their e-commerce platform for seamless customer experiences.",
      image:
        "https://i.ibb.co/3YCdbj60/Untitled-design-10.png0", // Replace with real image URL
      category: "Retail",
    },
    {
      title: "Lulu Hypermarket",
      description:
        "Enabling a mid-sized clinic to enhance patient engagement with a custom telemedicine solution.",
      image:
        "https://i.ibb.co/z15LW5k/Untitled-design-4.png", // Replace with real image URL
      category: "Healthcare",
    },
    {
      title: "Middlesex University",
      description:
        "Transforming a leading university’s learning management system for remote education.",
      image:
        "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with real image URL
      category: "Education",
    },
    {
      title: "Retail",
      description:
        "Optimizing supply chain operations for a logistics giant with AI-driven tracking tools.",
      image:
        "https://i.ibb.co/wZqrbR2c/Untitled-design-6.png", // Replace with real image URL
      category: "Logistics",
    },
    {
      title: "Fintech",
      description:
        "Building a secure and scalable payment gateway for a fast-growing fintech startup.",
      image:
        "https://i.ibb.co/Xr166XBq/Untitled-design-7.png", // Replace with real image URL
      category: "Fintech",
    },
    {
      title: "Retail / Food",
      description:
        "Revolutionizing property management for a real estate firm with a custom CRM and analytics platform.",
      image:
        "https://i.ibb.co/jZB3LMcV/Untitled-design-8.png", // Replace with real image URL
      category: "Real Estate",
    },
  ];
  const cardsData2 = [
    {
      title: "Branding",
      id: 'branding',
      description:
        "Establish a cohesive brand identity across all platforms with our strategic visual solutions.",
      image:
        "https://images.pexels.com/photos/7552373/pexels-photo-7552373.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      category: "Branding",
    },
    {
      title: "UI/UX Design",
      id: 'ui-ux-design',
      description:
        "Crafting intuitive UI/UX designs that offer seamless and efficient user experiences.",
      image:
        "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      category: "Design",
    },
    {
      title: "E-commerce",
      id: 'ecommerce',
      description:
        "Connecting your storefront to customers through our comprehensive eCommerce strategies.",
      image:
        "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
      category: "E-commerce",
    },
    {
      title: "Web App Development",
      id: 'web-development',
      description:
        "Developing tailored web applications that provide immersive digital experiences.",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
      category: "Web App Development",
    },
    {
      title: "Mobile App Development",
      id: "app-development",
      description:
        "Developing tailored web applications that provide immersive digital experiences.",
      image:
        "https://images.pexels.com/photos/89955/pexels-photo-89955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
      category: "Mobile App Development",
    },
    {
      title: "DevOps Consulting",
      id: 'consulting',
      description:
        "Optimizing software development processes to enhance delivery reliability.",
      image:
        "https://images.pexels.com/photos/6804069/pexels-photo-6804069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
      category: "Consulting",
    },
  ];

  return (
    <div>
        <Head>
        <meta name="description" content="Your Tech Innovation Partner" />
        <meta name="robots" content="index, follow" />
        <title>Code Creador</title>
      </Head>
      <Banner1 />

      <div className="container mx-auto px-4 py-8 max-w-[1200px]">
        <h2 className="heading--large sm:text-start text-center text-gray-900  mb-8">
          Services
        </h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData2.map((card, index) => (
            <Card2
              key={index}
              id={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              category={card.category}
            />
          ))}
        </div>
      </div>

      <div className="w-full mx-auto flex justify-center">
        <Button1
          text="Explore More"
           onClick={()=> router.push('/services')}
          icon={FaArrowRight}
          // isLoading={isLoading}
          isDisabled={false}
        />
      </div>
      <Banner2 />

      <div className="container mx-auto px-4 py-8 max-w-[1200px]">
        <h2 className="heading--large sm:text-start text-center  text-gray-900  mb-8">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
            <Card1
              id={study.id}
              key={index}
              title={study.heroSection.description}
              description={study.heroSection.title}
              image={study.heroSection.image}
              category={study.heroSection.industry}
            />
          ))}
        </div>
      </div>

      <div className="w-full mx-auto flex justify-center">
        <Button1
          text="Explore More"
           onClick={()=> router.push('/case-studies')}
          icon={FaArrowRight}
          // isLoading={isLoading}
          isDisabled={false}
        />
      </div>
      <div className="mx-auto w-full flex mt-6 justify-center">
      <img src="/assets/service/technologies.jpg" alt="Technologies Services" />
      </div>
     
    </div>
  );
}
