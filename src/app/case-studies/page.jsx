import React from 'react'
import Card1 from '../components/cards/Card1';
import caseStudies from '../data/caseStudies';

const page = () => {

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
  return (
    <div >
<div className='max-w-[1200px] px-6 mx-auto py-10'>
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
    </div>
  )
}

export default page