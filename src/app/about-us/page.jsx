import React from 'react'
import HeroSectionAboutUs from '../components/aboutUs/HeroSectionAboutUs'
import aboutUs from '../data/aboutUs'
import OurStory from '../components/aboutUs/OurStory'
import OurGoal from '../components/aboutUs/OurGoal'
import Market from '../components/aboutUs/Market'
import StatsSection from '../components/service/StatsSection'


export const metadata = {
  title: "Code Creador",
  description: "Your Tech Innovation Partner",
};

const page = () => {
  return (
    <div>
        <HeroSectionAboutUs data={aboutUs.heroSection}/>
        <OurStory data={aboutUs.ourStory}/>
        <OurGoal data={aboutUs.ourGoal}/>
        <Market data={aboutUs.market}/>
        <StatsSection data={aboutUs?.ourImpact}/>
    </div>
  )
}

export default page