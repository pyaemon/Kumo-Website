import React from 'react'
import ParaFragment from '../Feature/aboutParagraph'
import AboutImg from '../images/about1.PNG'

const About = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center py-3 my-4" style={{ height: "100vh" }}> 
            <ParaFragment
                imgSrc={AboutImg}
                imageWidth={'500px'}
                imgRadius={'8%'}
                isReverse={true}
                data={AboutCompany}
            />
        </div>
    )
}
export default About;

const AboutCompany = {
    title: 'About the company',
    description1: '“We make our History with your satisfaction.”',
    description2:   'Kumo Solutions was founded in 2018 at Mandalay, Myanmar to provide software development related services. By the strength of local talents, we have successfully delivered projects to both local and global customers.We have highly engaged in working with Taiwan, and Singapore companies through the successful outcomes. We focus to deliver world-class End-to-End IT solutions and seek for continuous improvements.'
}
