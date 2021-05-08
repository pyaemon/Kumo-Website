import React from 'react'
import ParaFragment from '../Feature/aboutParagraph'
import colors from '../Feature/colors'
import AboutImg from '../Images/about_1.png'
import Team from '../Images/TEAM.jpg'
import Developers from '../Images/DEVELOPERS.jpg'
import fonts from '../Feature/fonts'
import Footer from '../Feature/footer'
import Color from '../Feature/colors'
import '../App.css'

const About = () => {
    const windowWidth = window.innerWidth
    return (
        <div className="d-flex flex-wrap justify-content-center py-3 my-4 mt-5" style={{ height: "100vh" }}> 
            <ParaFragment
                imgSrc={AboutImg}
                imageWidth={'380px'}
                imgRadius={'5%'}
                isReverse={true}
                data={AboutCompany}
                imgheight={'200px'}
            />
            <div className='col-11' style={{ paddingLeft:'2rem',color: Color.ParagraphColor, wordSpacing: 4 , fontSize: '15px' }}>
                <p>To provide satisfying products to our customers, we utilize object-oriented analysis, design, and testing methodologies and ensure seamless integration and traceability between the project’s requirements, design, development, quality assurance, and delivery.<br></br>Our goal is not only to achieve local and global customers but also to support the development of the domestic Information Technology Industry. 
                </p>
            </div>

            <div className="w-100 pb-3" style={{ position:'relative', margin: '0 auto'}}>
                <img className="shadow-lg mt-3 w-100" alt="developers" src={Developers} style={{ height: '300px'}}/>
                <div style={{position: 'absolute', top: '50%', height:'300px', width: '100%', left: '50%', transform: 'translate(-50%, -50%)', opacity: '0.7', background: 'rgb(76, 74, 131)'}}>
                    <div className="mt-3" style={{ whiteSpace: 'nowrap', paddingLeft: windowWidth < 1200 ? '12rem' : '31rem', fontSize: fonts.heading1, fontWeight: 600, color: colors.WhiteColor }}>Team Introduction</div>
                    <div className="p-4 mx-5" style={{ fontSize: '15px', letterSpacing: '0px',color: colors.WhiteColor,wordSpacing: 4 }}>The team is made up of 20 local talents who strive for the continual development of innovative and exceptional skills by adopting international & the foremost practice standards. We maintain continuous improvements by promoting a learning environment, ensuring that our employees are exposed to and trained on state-of-the-art technologies. As a team, we continue to learn together, creating a collaborative environment encouraging individual and organizational growth and development. The work environment in the company reflects a professional approach to dedicated team spirit and serves as a motivational ground for the professional and personal growth of the software talent.</div>
                </div>
            </div>                     
            
             <ParaFragment
                imgSrc={Team}
                imageWidth={'380px'}
                imgRadius={'5%'}
                isReverse={false}
                data={TeamData}
                imgheight={'200px'}
            />
         
            <div className="col-11 ms-3 me-2"  style={{ color: colors.ParagraphColor, fontSize: '15px', wordSpacing: 4 , marginTop: '3%'}}>
                <div className="ms-3 me-2" style={{ whiteSpace: 'nowrap', color: colors.TitleColor, fontSize: fonts.heading12, fontWeight: 400 }}>Operations</div>
                <div className={`dropdown-divider border-0 p-0`} style={{ backgroundColor: '#C5B3E5', height: 1.4}}></div>
                <div className="ms-3 me-2">Kumo Solutions is dedicated to transforming our consumers’ needs into fully realized and satisfying products by comprehensively understanding our clients’ business requirements and delivering beyond their expectations. Our commitment and dedication are backed by the necessary technological skill and innovation as we craft software customized to the needs of each individual consumers’ daily operations. Our software development process is continuously monitored and improved to maximize our client’s ease and productivity.</div>
            </div>
                <Footer />
          
        </div>
    )
}
export default About;

const AboutCompany = {
    title: 'About the company',
    description1: '“We make our History with your satisfaction.”',
    description2: 'Kumo Solutions was founded in 2018 at Mandalay, Myanmar to provide software development related services. By the strength of local talents, we have successfully delivered projects to both local and global customers.',
    description3: 'We have been highly engaged in working with Taiwanese and Singaporean companies by collaborating in multiple projects with successful outcomes. Our main focus is to deliver world-class End-to-End IT solutions and continue to strive for improvement and innovation.',
    // description4: 'To provide satisfying products to our customers, we utilize object-oriented analysis, design, and testing methodologies and ensure seamless integration and traceability between the project’s requirements, design, development, quality assurance, and delivery.',
    // description5: 'Our goal is not only to achieve local and global customers but also to support the development of the domestic Information Technology Industry.'
}
const TeamData={
    title: 'Global Scale and Agility',
    description1: 'Kumo Solutions keeps up in an environment that demands constant change through agile teamwork and consistent adaptations to the latest technologies and innovations. Working with international organizations and companies has also given insight on international approaches and different points of views, further broadening our knowledge and capabilities. With the guided and multi-level trainings, we are focused on creating a stable foundation to approach situations with better agility throughout the globe.'
}
