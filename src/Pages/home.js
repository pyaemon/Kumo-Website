import React from 'react'
import ParaFragment from '../Feature/homeParagraph'
import Development from '../Images/development.jpg'
import realtimeImg from '../Images/ipbem.jpeg'
import KumoButton from '../Feature/kumoButtom'
import IconCarousel from '../Feature/IconCarousel';
import OurService from '../Feature/OurSevice'
import Footer from '../Feature/footer'
import Acbel from '../Images/acbel.jpeg'
import Acbel1 from '../Images/acbel1.jpeg'
import Crm from '../Images/crm.jpeg'
import Crm1 from '../Images/crm1.jpeg'
import Map from "../Feature/map"
import ThreeImage from '../Feature/threeImage'
import { useHistory } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive'

const Home = () => {
  const history = useHistory();
  const handleClickAbout = () => history.push('/about');
  const handleClickPrud = () => history.push('/products');

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 991px)' })
  const isxl = useMediaQuery({ query: '(min-width: 1400px)' })
  const graterThan=useMediaQuery({ query: '(max-width: 450px)' })
  const LessThan=useMediaQuery({ query: '(max-width: 380px)' })
  // const isxl = useMediaQuery

  return (
    <div >
      <div className="py-3 my-4" >
        <div className="d-flex flex-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap px-2 justify-content-between pt-4">
          <div className="col-lg-5 col-xl-5 col-md-5 kumo-team" style={{ marginTop: 100 }}>
            <div >
              <div
                className="kumo1"
                style={{
                  color: "#084C95",
                  textAlign: "left",
                  fontSize: "104px",
                  fontFamily: "Microsoft Sans Serif",
                  lineHeight: "80%"
                }}
              >
                KUMO{" "}
              </div>
              <div
                className="kumo2"
                style={{
                  color: "#084C95",
                  textAlign: "left",
                  fontSize: "50px",
                  fontFamily: "Microsoft Sans Serif",

                }}
              >
                SOLUTIONS
          </div>
              <div
                style={{
                  color: "#4B74AD",
                  textAlign: "left",
                  fontSize: "35px",
                  fontFamily: "Cambria",
                }}
              >
                Committed to People,{" "}
              </div>
              <div
                style={{
                  color: "#4B74AD",
                  textAlign: "left",
                  fontSize: "35px",
                  fontFamily: "Cambria",
                  lineHeight: "80%"
                }}
              >
                Committed to the Future
          </div>
              <div className="vertion-paragraph">
                <div
                  style={{
                    color: "#4B74AD",
                    textAlign: "left",
                    fontSize: "35px",
                    fontFamily: "Cambria",
                    marginTop: "120px",
                  }}
                >
                  Vision
          </div>
                <div
                  className="vertion-local"
                  style={{

                    color: "#4B74AD",
                    textAlign: "left",
                    fontSize: "25px",
                    fontFamily: "Microsoft Yi Baiti",
                    lineHeight: " 90%"
                  }}
                >
                  To grow local IT industry & provide world class outsourcing
                  services.
          </div>
              </div>
            </div>
          </div>
          {/* <div
            className="col-lg-6 col-xl-6 col-md-6 px-2  image-box kumo-image"
            style={{ maxHeight: 600, position: "relative", display: "block" }}
          >
            <div
              className="d-flex justify-content-end align-items-start "
              style={{}}
            >
              <img
                className="img-fluid shadow"
                src={"/acbel.jpeg"}
                alt="view"
                style={{ width: 390, height: 210, borderRadius: 17 }}
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{}}
            >
              <img
                className="img-fluid shadow"
                src={"/crm.jpeg"}
                alt="view"
                style={{
                  width: 390,
                  height: 210,
                  borderRadius: 17,
                  position: "absolute",
                }}
              />
            </div>
            <div
              className="d-flex justify-content-start align-self-end"
              style={{}}
            >
              <img
                className="img-fluid shadow"
                src={"/ibpemwhite.jpeg"}
                alt="view"
                style={{
                  width: 390,
                  height: 210,
                  borderRadius: 17,
                  position: "absolute",
                }}
              />
            </div>
          </div>
        </div> */}
          <div className="d-flex flex-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap kumo-container">
            <ThreeImage />
          </div>
        </div>
        <div
          className="d-flex justify-content-center development"
          style={{ marginTop: "80px", overflow: 'auto' }}
        >
          <ParaFragment
            imgSrc={Development}
            isReverse={false}
            data={kumoData}
            imgWidth={"400px"}
          />
        </div>

        <div className="d-flex justify-content-start mt-3"  >
          {" "}
          <KumoButton text="See More About Company" onClick={handleClickAbout} />
          {/* <button type="button" onClick={handleClick}></button> */}
        </div>
        <div className="d-flex justify-content-center mt-5">
          {" "}
          <button
            className="btn m-container border"
            style={{
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#EFF8FE",
              width: "250px",
              height: 55,
              textAlign: "center",
              textAlign: "center",
              color: "#084C95",
              fontSize: "1.5rem",
              borderRadius: "50px",
              boxShadow: "0px 3px 6px #00000029",
            }}
          >
            <div
              className="align-item-start"
              style={{
                height: "40px",
                width: "40px",
                backgroundColor: "#4B74AD",
                borderRadius: "50%",
                display: "inline-block",
                marginRight: "10px",

              }}
            >
              <i
                class="fa fa-building"
                style={{ color: "#ffffff", fontSize: "20px" }}
              ></i>{" "}
            </div>
            <span
              className=""
              style={{
                textAlign: "center",
                color: "#084C95",
                fontSize: "1.5rem",
              }}
            >
              Partner Company
              {/* <hr className='ud_line m-title' style={{ marginTop: -4, marginLeft: '110px', height:"2px",width:'75%'}}></hr> */}
            </span>
            <div className='m-title' style={{ marginTop: -3, marginLeft: '25px', height: "2px", width: '100%' }}></div>
          </button>
        </div>

        <div className="px-4">
          <IconCarousel></IconCarousel>
        </div>
        {/* <div className="d-flex justify-content-center mt-5">
        {" "}
        <button
          className="btn"
          style={{
            backgroundColor: "#fff",
            width: "400px",
            height: "76px",
            textAlign: "center",
            textAlign: "center",
            color: "#084C95",
            fontSize: "1.5rem",
            
            // borderRadius: "50px",
            // boxShadow: "0px 3px 6px #00000029",
          }}
        >
          <div className='d-flex justify-content-center '
            style={{
              height: "40px",
              width: "40px",
              backgroundColor: "#4B74AD",
              borderRadius: "50%",
              display: "inline-block",
            //   marginRight: "20px",
              borderBottom:"2px solid #084C95"
              
            }}
          >
            <i
              class="fas fa-wrench align-self-center "
              style={{ color: "#ffffff", fontSize: "20px" }}
            ></i>{" "}
            <span>Our Services</span>
          </div>
          
        </button>
      </div> */}

        <div className="container-fluid p-0 m-0">
          <div className="home-service-bg" style={{}}></div>
        </div>
        <div className='m-container' style={{}}>
          <div className="d-flex justify-content-center mt-3" style={{ position: 'relative', zIndex: '4', paddingLeft: "50px", marginRight: '-5px' }} >
            <div
              className="d-flex justify-content-center"
              style={{
                background: "#4B74AD",
                height: "40px",
                width: "40px",
                borderRadius: "50%",

              }}
            >
              <i
                class="fas fa-wrench align-self-center"
                style={{ color: "#ffffff", fontSize: "15px" }}
              ></i>
            </div>
            <div className="m-container  ">
              <span
                className="px-2 mx-2"
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  paddingLeft: "10px",
                  cursor: 'pointer'
                }}
              >
                Our Services
              
              </span>
              <div className='m-title p-0' style={{ marginTop: -2, paddingleft: "-20px", height: "2px", width: '100%', marginRight: '-200px' }}></div>
            </div>
          </div>
          <div className="" style={{ position: 'relative', zIndex: 1 }} >
            <OurService />
          </div>
        </div>
        <div className="d-flex justify-content-center" style={{ marginTop: "10%" }}>
          {" "}
          <button
            className="btn m-container border"
            style={{
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#EFF8FE",
              width: "250px",
              height: 55,
              textAlign: "center",
              textAlign: "center",
              color: "#084C95",
              fontSize: "1.5rem",
              borderRadius: "50px",
              boxShadow: "0px 3px 6px #00000029",
            }}
          >
            <div
              className=""
              style={{
                height: "40px",
                width: "40px",
                backgroundColor: "#4B74AD",
                borderRadius: "50%",
                display: "inline-block",
                marginRight: "10px",

              }}
            >
              <i
                class="fa fa-laptop"
                style={{ color: "#ffffff", fontSize: "20px" }}
              ></i>{" "}
            </div>
            <span
              className=""
              style={{
                textAlign: "center",
                color: "#084C95",
                fontSize: "1.5rem",
              }}
            >
              Previous Product
          
            </span>
            <div className='m-title' style={{ marginTop: -3, marginLeft: '25px', height: "2px", width: '100%' }}></div>
          </button>
        </div>
     
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "10px", overflow: 'hidden' }}
        >
          <ParaFragment
            imgSrc={realtimeImg}
            isReverse={false}
            data={productData1}
            imgWidth={"400px"}
          />
        </div>
     
        <div className="container-fluid taiwan-desktop111 m-0 px-0 py-3 pt-3 mt-3" style={{}}>
          <div className=" d-md-flex p-0 m-0" style={{}}>
            {!(!isMobile && isTablet) &&
              <div className="p-0 m-0" style={{ minWidth: isxl ? "20%" : "30%", zIndex: 1 }} align="center">
                <div className="mx-auto" style={{ position: "relative", minHeight: 200 }}>
                  <img className="img-fluid shadow" src={Acbel1} style={{ position: "absolute", right: 0, bottom: 0, /*height: 140,*/ width: isMobile ? 300 : "70%", borderRadius: 46, border: `1px solid #483d8b99` }} />
                  <img className="img-fluid shadow" src={Acbel} style={{ position: "absolute", right: 16, bottom: "16%", /*height: 170,*/ width: isMobile ? 300 : "90%", borderRadius: 36, border: `1px solid #483d8b99` }} />
                </div>
              </div>
            }
            <div className="p-0 m-0 m-container" style={{ minWidth: isxl ? "80%" : "70%", position: "relative", color: "#084C95" }}>
              {(!isMobile && isTablet) &&
                <div className="mx-auto me-2" style={{ width: 300, position: "relative", minHeight: 200, float: isTablet ? "left" : "none" }}>
                  <img className="img-fluid shadow" src={Acbel1} style={{ position: "absolute", right: 0, bottom: 0, /*height: 140,*/ width: isMobile ? 300 : "70%", borderRadius: 46, border: `1px solid #483d8b99` }} />
                  <img className="img-fluid shadow" src={Acbel} style={{ position: "absolute", right: 16, bottom: "16%", /*height: 170,*/ width: isMobile ? 300 : "90%", borderRadius: 36, border: `1px solid #483d8b99` }} />
                </div>
              }
              <div></div>
              <h3 className="" style={{ marginRight: 15, textAlign: 'right' }}>Taiwan Centralized </h3>
              <div className=" m-title p-0" style={{ marginLeft: isMobile ? 0 : isTablet ? 22 : -22, position: "absolute", display: 'block', width: '100%', zIndex: -1 }}></div>
              <p className="ps-2">Taiwan Centralized Project for Acbel is the centralized chiller system for monitoring Energy and power consumptions of
              chillers, cooling towers, zone pumps and etc. It controls multiple sites for saving opportunity and validating measurable
              saving results by using data visualizations and data driven approaches. It consists of MyApps and User Management system in
              which MyApps provides five main parts for chiller system and User Management for authorizing user access to the system.
              </p>
              <p>
                The system provides chiller system’s latest information with Map View, consuming side, report analysis and control. For user management, admin can add or edit or delete users and their information and control access limit for each user.
              </p>
            </div>
          </div>
          </div>
         
          <div className="container-fluid taiwan-mobile p-0 m-0" style={{}}>
          <div className="pt-4 px-2 mx-0 p-0 centralized" style={{ color: "#084C95" }}>
    
    <h3 className="taiwan">Taiwan Centralized</h3>
<div className=" m-title p-0 m-0" style={{ display: 'block', width: '100%' }}></div>
          {/* //justify-content-start */}
          <div
            className="image-box pt-3 mb-1 image-container d-flex justify-content-center align-items-center"
            style={{ maxHeight: 600, position: "relative", display: "block" ,
            marginTop:"40px",
           // marginLeft:greaterThan1700?"-120px":null
          }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{}}
            >
              <img
                className="img-fluid shadow acb1"
                src={Acbel1}
                alt="view"
                style={{ width: 300, borderRadius: 30,left:"5%"
                  // height:150
               }}
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{}}
            >
              <img
                className="img-fluid shadow acb"
                src={Acbel}
                alt="view"
                style={{
                  width: 310,
                  // height: 150,
                  borderRadius: 30,
                  position: "absolute",
                  right: "30%",
                  top: -24,
                  marginLeft:120
                }}
              />
            </div>
          </div>
          <div className="m-container centralized-layout ps-2"  style={{ marginLeft:"-4%" }}>
         
           
            <p style={{textAlign:"justify"}}>Taiwan Centralized Project for Acbel is the centralized chiller system for monitoring Energy and power consumptions of chillers, cooling towers, zone pumps and etc. It controls multiple sites for saving opportunity and validating measurable saving results by using data visualizations and data driven approaches. It consists of MyApps and User Management system in which MyApps provides five main parts for chiller system and User Management for authorizing user access to the system.
            </p>
          </div>
       
          </div>



          {/* <div className="row p-0 m-0 px-2" style={{ color: "#084C95",paddingLeft:"0px" }}>The system provides chiller system’s latest information with Map View, consuming side, report analysis and control. For user management, admin can add or edit or delete users and their information and control access limit for each user. </div> */}

        </div>
        
      
<div className="crm-desktop111">
<div className="d-flex crm-desktop111 flex-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap pt-4 mt-3  " style={{ color: "#084C95", }}>
          <div className="m-0 p-0 m-container " style={{ marginTop: '80px', width: '100%' }} >
            <h3>CRM Modules</h3>
            {/* <hr style={{ marginTop: -4,marginRight: 50  }}></hr> */}
            <div className="m-title p-0 px-3" style={{ display: 'block', height: '2px', }}></div>
            <p style={{display: "inline-block"}}>Customer Relationship Management (CRM) project was developed to enhance better communication with customers for Australia based company, Brennan IT product Portal. The main objective is to be able to view and manage orders easily. Users can analyse revenue and gross margin by month, products and customers. The system will create daily and monthly catalogues and send mails to relevant customers, sales team and client manager. Moreover, users are able to view reports by product, vendor, month and the system is able to send mails to relevant clients, managers and sale reps.
            </p>
          </div>
          <div
            className="pt-4 mt-4 py-3 my-3 px-3 mx-3 mb-4 pb-4 image-box "
            style={{ maxHeight: 100, position: "relative", display: "block", }}
          >
            <div
              className=" d-flex justify-content-start align-items-center crm-container"
              style={{}}
            >
              <img
                className="img-fluid shadow crm1"
                src={Crm1}
                alt="view"
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  position: "absolute",
                  left: -15,
                  top: 15, border: `1px solid #483d8b99`
                }}
              />
            </div>
            <div
              className="d-flex justify-content-start align-items-end"
              style={{ marginTop: -60 }}
            >
              <img
                className="img-fluid shadow p-0 m-0 px-0 mx-5 crm"
                src={Crm}
                alt="view"
                style={{ width: 255, height: 255, borderRadius: "50%", marginLeft: 10, border: `1px solid #483d8b99`, marginBottom: '10%' }}
              />

            </div>
          </div>
        </div>
</div>
        
        
        <div className="crm-mobile1 p-0 m-0" style={{}}>
          <div className="px-2 mx-0 p-0 centralized" style={{ color: "#084C95" }}>
    
    <h3 className="taiwan">CRM Modules</h3>
<div className=" m-title p-0 m-0" style={{ display: 'block', width: '100%' }}></div>
          {/* //justify-content-start */}
          <div
            className="image-box  mb-1 image-container d-flex justify-content-center align-items-center"
            style={{ maxHeight: 600, position: "relative", display: "block" ,
            marginTop:"40px",right:LessThan? "20%":"10%"
           // marginLeft:greaterThan1700?"-120px":null
          }}
          >
            <div
            className="pt-4 mt-4 py-3 my-3 px-3 mx-3 mb-4 pb-4 image-box "
            style={{ maxHeight: 100, position: "relative", display: "block",right: graterThan? "20%":LessThan?"30%": 0 }}
          >
            <div
              className=" d-flex justify-content-start align-items-start crm-container"
              style={{}}
            >
              <img
                className="img-fluid shadow crm1"
                src={Crm1}
                alt="view"
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  position: "absolute",
                  left: -15,
                  top: 15, border: `1px solid #483d8b99`
                }}
              />
            </div>
            <div
              className="d-flex justify-content-start align-items-end"
              style={{ marginTop: -60 }}
            >
              <img
                className="img-fluid shadow p-0 m-0 px-0 mx-5 crm"
                src={Crm}
                alt="view"
                style={{ width:graterThan?210: 255, height:graterThan?200: 255,
                   borderRadius: "50%", marginLeft: 10, border: `1px solid #483d8b99`, marginBottom: '10%' }}
              />

            </div>
          </div>
          </div>
          <div className="m-container centralized-layout ps-2"  style={{ marginLeft:"-4%", marginTop:graterThan?"40px": "60px" }}>
         
           
          <p style={{display: "inline-block",textAlign:"justify"}}>Customer Relationship Management (CRM) project was developed to enhance better communication with customers for Australia based company, Brennan IT product Portal. The main objective is to be able to view and manage orders easily. Users can analyse revenue and gross margin by month, products and customers. The system will create daily and monthly catalogues and send mails to relevant customers, sales team and client manager. Moreover, users are able to view reports by product, vendor, month and the system is able to send mails to relevant clients, managers and sale reps.
            </p>
          </div>
        </div>
          </div>
        
        {/* <div
            className="col-lg-4 col-xl-4 col-md-4 px-4 justify-content-center image-box"
            style={{ maxHeight: 600, display: "block", marginLeft: -50 }}
          >
            <div
              className="d-flex justify-content-start align-items-start"              
              style={{ }}
            >
              <img
                className="img-fluid shadow"
                src={Crm}
                alt="view"
                style={{
                  width: 220,
                  height: 220,
                  right: 100,
                  borderRadius: "50%",
                  position: "absolute",                  
                  zIndex: 2
                }}
              />
              
            </div>
            <div
              className="d-flex justify-content-start align-items-end "
              style={{  }}
            >
              <img
                className="img-fluid shadow"
                src={Crm1}
                alt="view"
                style={{ width: 155, height: 155, borderRadius: "50%", marginTop: 50, left: 190, position: "relative" ,zIndex: 1 }}
              />
            </div>
          </div> */}



        <div className="d-flex justify-content-start mt-5 pt-4 kumo-button">
          {" "}
          <KumoButton text="See More Products" onClick={handleClickPrud} />
        </div>
      </div>
    </div>

  );
};
export default Home;

const kumoData = {
  title: "Kumo Solutions is a Software Development Company",
  description1:
    "Established in 2018 to navigate customers through the next generation of business innovation through empowered software development technology and skill. We deliver high value solutions by bridging the gap between business and technology.",
  description2:
    " Our Priority is to be a reliable service provider who gives our best to serve clients in a professional and effective manner. We have multiple partnerships both locally and globally in Taiwan, Singapore and Australia. The state-of-the-art platform is designed to support scalable and multi-tenanted products, supported by a full stack of tools including Dashboard, Data ETL, Report and Machine Learning.",
  description3:
    "We bring the product mindset to the services industry. For companies operating in the information age, we help our customers to leverage new technologies into competitive advantages to the customers’ products.",
};

const productData1 = {
  title: "Real time machine learning platform",
  description1:
    "Through partnerships with CapitaLand, we developed a real-time machine learning platform capable of performing real-time data analysis. This platform combines intelligent, decision-making algorithms with collected data, enabling developers to create a business solution instantaneously with the most current data. In collaboration with data scientists and experts from Taiwan and Singapore (NTU), this platform provides users real-time alarm system of chillers by learning and training machines’ behaviours through machine learning algorithms.",
};

const productData2 = {
  title: "Taiwan Centralized",
  description1:
    "Taiwan Centralized Project for Acbel is the centralized chiller system for monitoring Energy and power consumptions of chillers, cooling towers, zone pumps and etc. It controls multiple sites for saving opportunity and validating measurable saving results by using data visualizations and data driven approaches. It consists of MyApps and User Management system in which MyApps provides five main parts for chiller system and User Management for authorizing user access to the system.",
  description2:
    "The system provides chiller system’s latest information with Map View, consuming side, report analysis and control. For user management, admin can add or edit or delete users and their information and control access limit for each user.",
};

// const productData3 = {
//   title: "CRM Modules",
//   description1:
//     "Customer Relationship Management (CRM) project was developed to enhance better communication with customers for Australia based company, Brennan IT product Portal. The main objective is to be able to view and manage orders easily. Users can analyse revenue and gross margin by month, products and customers. The system will create daily and monthly catalogues and send mails to relevant customers, sales team and client manager. Moreover, users are able to view reports by product, vendor, month and the system is able to send mails to relevant clients, managers and sale reps.",
// };
