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
const Home = () => {
  return (
    <div >
      <div className="container  py-3 my-4" style={{ height: "100vh" }}>
        <div className="d-flex flex-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap px-2 justify-content-between pt-4">
          <div className="col-lg-5 col-xl-5 col-md-5 ">
            <div
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
            <div
              style={{
                color: "#4B74AD",
                textAlign: "left",
                fontSize: "35px",
                fontFamily: "Cambria",
                marginTop: "40px",
              }}
            >
              Vision
          </div>

            <div
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
          <div
            className="col-lg-6 col-xl-6 col-md-6 px-2"
            style={{ maxHeight: 600, position: "relative", display: "block" }}
          >
            <div
              className="d-flex justify-content-end align-items-start"
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
        </div>

        <div
          className="d-flex justify-content-center "
          style={{ marginTop: "80px" }}
        >
          <ParaFragment
            imgSrc={Development}
            isReverse={false}
            data={kumoData}
            imgWidth={"300px"}
          />
        </div>

        <div className="d-flex justify-content-start mt-5" >
          {" "}
          <KumoButton text="See More About Company" />
        </div>
        <div className="d-flex justify-content-center mt-5">
          {" "}
          <button
            className="btn"
            style={{
              backgroundColor: "#EFF8FE",
              width: "400px",
              height: "76px",
              textAlign: "center",
              textAlign: "center",
              color: "#084C95",
              fontSize: "1.5rem",
              borderRadius: "50px",
              boxShadow: "0px 3px 6px #00000029",
            }}
          >
            <div
              style={{
                height: "40px",
                width: "40px",
                backgroundColor: "#4B74AD",
                borderRadius: "50%",
                display: "inline-block",
                marginRight: "20px",

              }}
            >
              <i
                class="fa fa-building"
                style={{ color: "#ffffff", fontSize: "20px" }}
              ></i>{" "}
            </div>
            <span
              className="px-0"
              style={{
                textAlign: "center",
                color: "#084C95",
                fontSize: "1.5rem",
              }}
            >Partner Company</span>
            <hr style={{ marginTop: -2, marginLeft: 100 }}></hr>

          </button>
        </div>

        <div>
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

        <div className="container-fluid">
          <div style={{ background: "#dbf3fa", transform: "skew(-30deg)", width: "900px", height: "350px", zIndex: ' 1', position: 'absolute', marginLeft: 100 }}></div>
        </div>
        <div className='' style={{}}>
          <div className="d-flex justify-content-center mt-5" style={{ position: 'relative', zIndex: '2', }} >
            <div
              className="d-flex justify-content-center align-self-center"
              style={{
                background: "#4B74AD",
                height: 50,
                width: 50,
                borderRadius: "50%",

              }}
            >
              <i
                class="fas fa-wrench align-self-center "
                style={{ color: "#ffffff", fontSize: "15px" }}
              ></i>
            </div>
            <span
              className="px-4"
              style={{
                textAlign: "center",
                color: "#084C95",
                fontSize: "1.5rem",
              }}
            >
              Our Services
          </span>
            <hr style={{ marginTop: -4, marginLeft: 100 }}></hr>
          </div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <OurService />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          {" "}
          <button
            className="btn"
            style={{
              backgroundColor: "#EFF8FE",
              width: "400px",
              height: "76px",
              textAlign: "center",
              color: "#084C95",
              fontSize: "1.5rem",
              borderRadius: "50px",
              boxShadow: "0px 3px 6px #00000029",
            }}
          >
            <div
              style={{
                height: "40px",
                width: "40px",
                backgroundColor: "#4B74AD",
                borderRadius: "50%",
                display: "inline-block",
                marginRight: "20px",
              }}
            >
              <i
                class="fa fa-laptop"
                style={{ color: "#ffffff", fontSize: "20px" }}
              ></i>{" "}
            </div>
          Previous Products
          <hr style={{ marginTop: -4, marginLeft: 100 }}></hr>
          </button>
        </div>
        <div className="d-flex justify-content-center ">
          <ParaFragment
            imgSrc={realtimeImg}
            isReverse={false}
            data={productData1}
            imgWidth={"400px"}
          />
        </div>
        <div className="d-flex justify-content-center pt-3 " style={{ color: "#084C95" }}>
          <div
            className="col-lg-4 col-xl-4 col-md-4 px-2"
            style={{ maxHeight: 600, position: "relative", display: "block" }}
          >
            <div
              className="d-flex justify-content-end align-items-start"
              style={{}}
            >
              <img
                className="img-fluid shadow"
                src={Acbel1}
                alt="view"
                style={{ width: 210, height: 110, borderRadius: 30, marginTop: 70 }}
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{}}
            >
              <img
                className="img-fluid shadow"
                src={Acbel}
                alt="view"
                style={{
                  width: 320,
                  height: 150,
                  borderRadius: 30,
                  position: "absolute",
                  marginBottom: 200
                }}
              />
            </div>
          </div>
          <div  >
            <h3>Taiwan Centralized</h3>
            {/* <hr style={{ marginTop: -4,marginRight: 50  }}></hr> */}
            <div className="dropdown-divider p-0 m-0" style={{ display: 'block', border: '1px solid #EBD1FA' }}></div>
            <p>Taiwan Centralized Project for Acbel is the centralized chiller system for monitoring Energy and power consumptions of chillers, cooling towers, zone pumps and etc. It controls multiple sites for saving opportunity and validating measurable saving results by using data visualizations and data driven approaches. It consists of MyApps and User Management system in which MyApps provides five main parts for chiller system and User Management for authorizing user access to the system.
</p>

          </div>
        </div>
        <div style={{ color: "#084C95" }}>The system provides chiller system’s latest information with Map View, consuming side, report analysis and control. For user management, admin can add or edit or delete users and their information and control access limit for each user. </div>
        <div className="d-flex justify-content-center pt-4 " style={{ color: "#084C95" }}>
          <div  >
            <h3>CRM Modules</h3>
            {/* <hr style={{ marginTop: -4,marginRight: 50  }}></hr> */}
            <div className="dropdown-divider p-0 m-0" style={{ display: 'block', border: '1px solid #EBD1FA' }}></div>
            <p>Customer Relationship Management (CRM) project was developed to enhance better communication with customers for Australia based company, Brennan IT product Portal. The main objective is to be able to view and manage orders easily. Users can analyse revenue and gross margin by month, products and customers. The system will create daily and monthly catalogues and send mails to relevant customers, sales team and client manager. Moreover, users are able to view reports by product, vendor, month and the system is able to send mails to relevant clients, managers and sale reps.
</p>
          </div>
          <div
            className="col-lg-4 col-xl-4 col-md-4 px-2"
            style={{ maxHeight: 600, position: "relative", display: "block" }}
          >
            <div
              className="d-flex justify-content-end align-items-start"
              style={{}}
            >
              <img
                className="img-fluid shadow"
                src={Crm1}
                alt="view"
                style={{ width: 180, height: 180, borderRadius: "50%", marginRight: 180, marginTop: 70, position: "absolute", zIndex: 1 }}
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{}}
            >
              <img
                className="img-fluid shadow"
                src={Crm}
                alt="view"
                style={{
                  width: 230,
                  height: 230,
                  borderRadius: "50%",
                  marginBottom: -220,
                  position: "relative",
                  marginLeft: 20,
                  zIndex: 2
                }}
              />
            </div>
          </div>

        </div>

        <div className="d-flex justify-content-start mt-5">
          {" "}
          <KumoButton text="See More Products" />
        </div>
        <div className='col-12'>
          <Footer />
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

// const productData2 = {
//   title: "Taiwan Centralized",
//   description1:
//     "Taiwan Centralized Project for Acbel is the centralized chiller system for monitoring Energy and power consumptions of chillers, cooling towers, zone pumps and etc. It controls multiple sites for saving opportunity and validating measurable saving results by using data visualizations and data driven approaches. It consists of MyApps and User Management system in which MyApps provides five main parts for chiller system and User Management for authorizing user access to the system.",
//   description2:
//     "The system provides chiller system’s latest information with Map View, consuming side, report analysis and control. For user management, admin can add or edit or delete users and their information and control access limit for each user.",
// };

// const productData3 = {
//   title: "CRM Modules",
//   description1:
//     "Customer Relationship Management (CRM) project was developed to enhance better communication with customers for Australia based company, Brennan IT product Portal. The main objective is to be able to view and manage orders easily. Users can analyse revenue and gross margin by month, products and customers. The system will create daily and monthly catalogues and send mails to relevant customers, sales team and client manager. Moreover, users are able to view reports by product, vendor, month and the system is able to send mails to relevant clients, managers and sale reps.",
// };
