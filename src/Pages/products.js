import {React,useEffect} from "react";
import Ipbem from '../Images/ipbem.jpeg';
import Survey from '../Images/survey.jpeg';
import CRM from '../Images/crm.jpeg';
import Chiller1 from '../Images/chiller1.jpeg';
import ACBEL from '../Images/acbel.jpeg';
import Solar from '../Images/solar.JPG'
import JNW from "../Images/jnw.PNG";
import UNDP from "../Images/undp.PNG";
import NTTU from "../Images/nttu.PNG";
import ADS from "../Images/ads.PNG";
import DataWarehouse from "../Images/datawarehouse.jpeg";
import Paragraph from '../Feature/productParagraph'
import Footer from '../Feature/footer'
import fonts from '../Feature/fonts'
import colors from '../Feature/colors'
import Aos from "aos";
import "aos/dist/aos.css";

const Products = () => {
    useEffect(() => {
        Aos.init(  {duration: 2000});
       },[]);
    return (
        <div className="d-flex flex-wrap justify-content-center py-3">
            {/* <div className="container ms-3 me-2 mb-5 m-container" style={{ color: colors.ParagraphColor, fontSize: '14px', marginTop: '6%' }}>
                <div className="" style={{ whiteSpace: 'nowrap', color: colors.TitleColor, fontSize: fonts.heading12, fontWeight: 400 }}>Real-Time Machine Learning Platform </div>
                <div className={`dropdown-divider m-title border-0 p-0`} style={{ backgroundColor: '', height: '2px' }}></div>
                <div className="row mt-3">
                    <div className="col-5"> */}
            {/* <div className="d-flex justify-content-between"> */}
            {/* <div className="ms-3 me-2" style={{ color: "#084C95", fontWeight: 600 }}>Through partnerships with CapitaLand, we developed a real-time machine learning platform capable of performing real-time data analysis. This platform combines intelligent, decision-making algorithms with collected data, enabling developers to create a business solution instantaneously with the most current data. In collaboration with data scientists and experts from Taiwan and Singapore (NTU), this platform provides users real-time alarm system of chillers by learning and training machines’ behaviours through machine learning algorithms</div>
                    </div>
                    <div className="col-6 image-box">
                        <img className='shadow' src={Ipbem} width={"600px"} style={{ borderRadius: '40px', height: '230px' }} />
                    </div>
                </div>
            </div> */}
            <div
                className="d-flex justify-content-center product"
                data-aos="zoom-in-left" data-aos-offset="100"
                style={{ marginTop: "30px" }}
            >

                <Paragraph
                    imgSrc={Ipbem}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={false}
                    data={Ipbemdata}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px"}}
                data-aos="zoom-in-right" data-aos-offset="100"
            >

                <Paragraph
                    imgSrc={ACBEL}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={true}
                    data={acbelData}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px" }}
            >

                <Paragraph
                    imgSrc={CRM}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={false}
                    data={Crmdata}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px"}}
            >

                <Paragraph
                    imgSrc={Chiller1}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={true}
                    data={chillerData}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px" }}
            >

                <Paragraph
                    imgSrc={Solar}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={false}
                    data={Solardata}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product survey"
                style={{ marginTop: "30px"}}
            >

                <Paragraph
                    imgSrc={Survey}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={true}
                    data={surveyData}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px" }}
            >

                <Paragraph
                    imgSrc={ADS}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={false}
                   data={adsData}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px"}}
            >

                <Paragraph
                    imgSrc={JNW}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={true}
                    data={jnwData}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px"}}
            >

                <Paragraph
                    imgSrc={DataWarehouse}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={false}
                    data={datawarehouseData}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px"}}
            >

                <Paragraph
                    imgSrc={UNDP}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={true}
                    data={undpData}
                    imgheight={'250px'}
                />
            </div>
            <div
                className="d-flex justify-content-center product"
                style={{ marginTop: "30px"}}
            >

                <Paragraph
                    imgSrc={NTTU}
                    imgWidth={'600px'}
                    imgRadius={'40px'}
                    isReverse={false}
                    data={nttuData}
                    imgheight={'250px'}
                />
            </div>
        </div>
       
    )
}
export default Products;

const Ipbemdata = {
    title: 'Real-Time Machine Learning Platform',
    description1: 'Through partnerships with CapitaLand, we developed a real-time machine learning platform capable of performing real-time data analysis. This platform combines intelligent, decision-making algorithms with collected data, enabling developers to create a business solution instantaneously with the most current data. In collaboration with data scientists and experts from Taiwan and Singapore (NTU), this platform provides users real-time alarm system of chillers by learning and training machines’ behaviours through machine learning algorithms.'
}

const acbelData = {
    title: 'Taiwan Centralized ',
    description1: 'Taiwan Centralized Project for Acbel is the centralized chiller system for monitoring Energy and power consumptions of chillers, cooling towers, zone pumps and etc. It controls multiple sites for saving opportunity and validating measurable saving results by using data visualizations and data driven approaches. It consists of MyApps and User Management system in which MyApps provides five main parts for chiller system and User Management for authorizing user access to the system.',
    description2: 'The system provides chiller system’s latest information with Map View, consuming side, report analysis and control. For user management, admin can add or edit or delete users and their information and control access limit for each user.'
}

const Crmdata = {
    title: 'CRM Modules ',
    description1: ' Customer Relationship Management (CRM) project was developed to enhance better communication with customers for Australia based company, Brennan IT product Portal. The main objective is to be able to view and manage orders easily. Users can analyse revenue and gross margin by month, products and customers. The system will create daily and monthly catalogues and send mails to relevant customers, sales team and client manager.',
    description2: 'Moreover, users are able to view reports by product, vendor, month and the system is able to send mails to relevant clients, managers and sale reps.'
}
const Solardata = {
    title: 'Solarporean',
    description1: 'This product is dedicated for a Singapore based Solar Power Company. The main function of this product is providing source information for Singapore’s Energy Market bidding. In this single platform, various vendors are able to control their sites for power output monitoring and market bidding. As a registered vendor, the client is able to access real-time and historical prices and demand on the market. Users can also generate various reports such as quarterly revenue report, service report, activation reports and so on by selecting the time range they would like to.'
}

const chillerData = {
    title: 'Chiller Plant Analytics',
    description1: 'We have implemented Power generating and cooling system data analysis reporting to several chiller system clients: Acbel (Taiwan), PPHG (Singapore) and so on. Our Chiller Plant Analytics product includes real-time chiller monitoring system, daily reports on each chillers’ performance, and mobile alert system. Through this system, clients can monitor chiller performance trends in real-time or by historical dates, power consumptions of each chiller component and temperature trends of each chiller produced while in operation.',
    description2: 'Moreover, clients can check daily reports through this platform for chillers’ overall performance reviews by selecting any date they would like to review. The system contains user management system to control users’ role and levels so that sites information are only accessed by authorized person. Admin can edit each user’s access level from the UI.'
}

const surveyData = {
    title: 'Survey Platform ',
    description1: 'This is the Singapore exploratory project in which the platform to create, fill and submit surveys. By collecting information through survey system, the platform will transform those information into meaningful reports for application across industries.'
}

const adsData = {
    title: 'Advanced Digital Solutions(ADS) ',
    description1: "This project is to digitize Energy Monitoring System of SMEs in Singapore. The dashboard  provides Realtime, hourly and daily data of each Energy, Temperatures, Humidity and Water Consumption devices. The users are able to use Daily Report of this energy system for any historical date."
}

const jnwData = {
    title: 'Boiler (JNW)',
    description1: "This project is to support the boiler system of JNW. Boiler system contains of Power Usage, Water Consumption, Water level, Temperature Monitoring and Pump Operations. Dashboard display the described informations for realtime, hourly and daily. The user can generate the daily report of the digitized boiler system anytime."
}
const undpData = {
    title: 'Digital x Sustainable Agenda Tool (UNDP)',
    description1: "UNDP supports countries in gaining a clear perspective of their digital ecosystem,which in turn allows for improving public service delivery and commitment to responsible governance. It further enables countries to be well-positioned to manage risks and harness the full potential of their digital transformation. Digital x Sustainable Agenda Tool reports for researched SDG details of a country.Overview report includes details of SDG records, ICT solution, the link to sector and national projects. UNDP website can be edited for each SDG target property of a specific country. This editable table can be updated by admin and categorized by SDG target. It also shows completed fields by a progress bar. It contains Digital Maturity Assessment Survey for each country. And the website generates result data of evaluation level and visualize with graphs"
}
const nttuData = {
    title: 'NTTU Energery monitaring for elementry school ',
    description1: "In National Dong Hwa University Experimental Elementary School, students can attend Grade one to Grade six. Each grade has five classrooms. The purpose of the project is to monitor and save the energy usage of School. The energy monitor panel calculates and reports on daily, monthly, yearly energy consumption for each grade and each class. The panel also calculates the number of trees to plant in a year for the carbon dioxide emission from power usage of school."
}
const datawarehouseData = {
    title: 'Biggest Data Datawarehouse ',
    description1: 'Biggest Data Warehouse is the project to analyze data for Australia based on ITQuoter. It is the cloud-based ETL and data integration service. The head responsibility of this project is to create data-driven workflows for orchestrating data movement and transforming big data, raw and unorganized data from source(API, Excel, CSV, Database and so on) at scale by using Azure Data Factory.',
    description2: 'Then, the system can store data from ITQuoter API to database on each of every 15 minutes automatically meanwhile this system sends error email to admin user when something was wrong on storing data.'
}