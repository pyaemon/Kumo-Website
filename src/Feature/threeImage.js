import React from "react";

export default class ThreeImage extends React.Component{
    render(){
        return(
            <div>
            <div
            className="col-lg-3 col-xl-12 col-md-12 px-2 mt-1 kumo-desktop desktop"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div
              className="d-flex justify-content-end align-items-start "
              style={{}}
            >
              <img
                className=" shadow acbel"
                src={"/acbel.jpg"}
                alt="view"
                style={{ width: "500px", height:"auto" , borderRadius: 50, right: -500}}
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{}}
            >
              <img
                className=" shadow CRM "
                src={"/crm.jpeg"}
                alt="view"
                style={{
                  width: "500px",
                  height:"auto",
                  borderRadius: 50,
                  position: "absolute",
                  right: 80
                  
                }}
              />
            </div>
            <div
              className="d-flex justify-content-start align-self-end"
              style={{}}
            >
              <img
                className="shadow ibpem"
                src={"/ibpemwhite.jpeg"}
                alt="view"
                style={{
                  width: "500px",
                  height:"auto",
                  borderRadius: 35,
                  position: "absolute",
                  right: 150
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-3 col-xl-12 col-md-12 px-2 kumo-desktop  mobile-image"
            style={{ maxHeight: 600, position: 'relative' }}
          >
            <div
              className="d-flex justify-content-end align-items-start "
              style={{}}
            >
              <img
                className=" shadow acbel"
                src={"/acbel.jpeg"}
                alt="view"
                style={{ width: "400px", height: "auto", borderRadius: 35, right: -500}}
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{}}
            >
              <img
                className=" shadow CRM "
                src={"/crm.jpeg"}
                alt="view"
                style={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 35,
                  position: "absolute",
                  right: 70
                  
                }}
              />
            </div>
            <div
              className="d-flex justify-content-start align-self-end"
              style={{}}
            >
              <img
                className="shadow ibpem view"
                src={"/ibpemwhite.jpeg"}
                alt="view"
                style={{
                  width: "400px",
                  height: "auto",
                  borderRadius: 35,
                  position: "absolute",
                  right: 120
                }}
              />
            </div>
          </div>

        </div>
        )
    }
}