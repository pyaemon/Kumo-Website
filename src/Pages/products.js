import React from 'react'
import Ipbem from '../Images/ipbem.jpeg';
import Survey from '../Images/survey.jpeg';
import CRM from '../Images/crm.jpeg';
import Chiller1 from '../Images/chiller1.jpeg';
import ACBEL from '../Images/acbel.jpeg';
import Paragraph from '../Feature/productParagraph'
import Footer from '../Feature/footer'

const Products=()=>{
    return(
        <div className="container justify-content-center py-3 my-4">
             <Paragraph
                imgSrc={Ipbem}
                imageWidth={'500px'}
                imgRadius={'40px'}
                isReverse={true}
                data={ipbemData}
            />
            <Paragraph
                imgSrc={ACBEL}
                imageWidth={'500px'}
                imgRadius={'40px'}
                isReverse={false}
                data={acbelData}
            />
            <Paragraph
                imgSrc={CRM}
                imageWidth={'500px'}
                imgRadius={'40px'}
                isReverse={true}
                data={crmData}
            />
            <Paragraph
                imgSrc={Chiller1}
                imageWidth={'500px'}
                imgRadius={'40px'}
                isReverse={false}
                data={chillerData}
            />
            <Paragraph
                // imgSrc={CRM}
                imageWidth={'500px'}
                imgRadius={'40px'}
                isReverse={true}
                data={solarData}
            />
            <Paragraph
                imgSrc={Survey}
                imageWidth={'500px'}
                imgRadius={'40px'}
                isReverse={false}
                data={surveyData}
            />
            <Footer />
        </div>
        
    )
}
export default Products;

const ipbemData = {
    title: 'Real-Time Machine Learning Platform',
    description: 'Through partnerships with CapitaLand, we developed a real-time machine learning platform capable of performing real-time data analysis. This platform combines intelligent, decision-making algorithms with collected data, enabling developers to create a business solution instantaneously with the most current data. In collaboration with data scientists and experts from Taiwan and Singapore (NTU), this platform provides users real-time alarm system of chillers by learning and training machines’ behaviours through machine learning algorithms.'
}

const acbelData = {
    title: 'Taiwan Centralized ',
    description: 'Taiwan Centralized Project for Acbel is the centralized chiller system for monitoring Energy and power consumptions of chillers, cooling towers, zone pumps and etc. It controls multiple sites for saving opportunity and validating measurable saving results by using data visualizations and data driven approaches. It consists of MyApps and User Management system in which MyApps provides five main parts for chiller system and User Management for authorizing user access to the system.',
    description1: 'The system provides chiller system’s latest information with Map View, consuming side, report analysis and control. For user management, admin can add or edit or delete users and their information and control access limit for each user.'
}

const crmData = {
    title: 'CRM Modules  ',
    description: 'Customer Relationship Management (CRM) project was developed to enhance better communication with customers for Australia based company, Brennan IT product Portal. The main objective is to be able to view and manage orders easily. Users can analyse revenue and gross margin by month, products and customers. The system will create daily and monthly catalogues and send mails to relevant customers, sales team and client manager. Moreover, users are able to view reports by product, vendor, month and the system is able to send mails to relevant clients, managers and sale reps. '
}

const chillerData = {
    title: 'Chiller Plant Analytics',
    description: 'We have implemented Power generating and cooling system data analysis reporting to several chiller system clients: Acbel (Taiwan), PPHG (Singapore) and so on. Our Chiller Plant Analytics product includes real-time chiller monitoring system, daily reports on each chillers’ performance, and mobile alert system. Through this system, clients can monitor chiller performance trends in real-time or by historical dates, power consumptions of each chiller component and temperature trends of each chiller produced while in operation.',
    description1: 'Moreover, clients can check daily reports through this platform for chillers’ overall performance reviews by selecting any date they would like to review. The system contains user management system to control users’ role and levels so that sites information are only accessed by authorized person. Admin can edit each user’s access level from the UI.'
}

const solarData = {
    title: 'Solarporean   ',
    description: 'This product is dedicated for a Singapore based Solar Power Company. The main function of this product is providing source information for Singapore’s Energy Market bidding. In this single platform, various vendors are able to control their sites for power output monitoring and market bidding. As a registered vendor, the client is able to access real-time and historical prices and demand on the market. Users can also generate various reports such as quarterly revenue report, service report, activation reports and so on by selecting the time range they would like to.'
}

const surveyData = {
    title: 'Survey Platform ',
    description: 'This is the Singapore exploratory project in which the platform to create, fill and submit surveys. By collecting information through survey system, the platform will transform those information into meaningful reports for application across industries.'
}