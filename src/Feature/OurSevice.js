import React from "react";
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

const OurService = () => {
    const history = useHistory();
    const handleClickDtrAnz = () => history.push('/services');
    
    const isxl = useMediaQuery({ query: '(min-width: 1200px)' })

    return (
        <div >
            <div className="col-lg-12 mt-2 pt-4 px-0 mx-0" >
                <div className="row justify-content-center p-0 m-0" style={{ color: "#084C95", fontSize: 18, }}>

                    <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 p-0 m-0 mx-xl-2">
                        <div className="p-2">
                            <div className="shadow m-0 h-100" onClick={handleClickDtrAnz} style={{  border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 16, background: "#FFFFFF" }}>
                                <img className="center mt-3" src={"/icons/line_chart.png"} alt="view" style={{ background: "#084c95", borderRadius: 10, display: "block", margin: "auto", height: isxl ? "80px":"50px" }} />
                                <div className="d-flex flex-column align-items-center" style={{ paddingTop: 8, paddingBottom: 16, }}>
                                    <div className="service-text" >Data </div>
                                    <div className="service-text">Analytics</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 p-0 m-0 mx-xl-2">
                        <div className="p-2">
                            <div className="shadow m-0 h-100" onClick={handleClickDtrAnz} style={{  border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 16, background: "#FFFFFF" }}>
                                <img src={"/icons/globe.png"} alt="view" style={{ display: "block", margin: "auto", height: isxl ? "100px":"60px" }} />
                                <div className="d-flex flex-column align-items-center" style={{ paddingTop: 8, paddingBottom: 16 }}>
                                    <div className="service-text" > Web </div>
                                    <div className="service-text"> Development </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 p-0 m-0 mx-xl-2">
                        <div className="p-2">
                            <div className="shadow m-0 h-100" onClick={handleClickDtrAnz} style={{  border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 16, background: "#FFFFFF" }}>
                                <img src={"/icons/iphone.png"} alt="view" style={{ display: "block", margin: "auto", height: isxl ? "100px":"60px" }} />
                                <div className="d-flex flex-column align-items-center" style={{ paddingTop: 8, paddingBottom: 16 }}>
                                    <div className="service-text" > Mobile </div>
                                    <div className="service-text"> Development </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 p-0 m-0 mx-xl-2">
                        <div className="p-2">
                            <div className="shadow m-0 h-100" onClick={handleClickDtrAnz} style={{  border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 16, background: "#FFFFFF" }}>
                                <img src={"/icons/laptop.png"} alt="view" style={{ display: "block", margin: "auto",height: isxl ? "100px":"60px" }} />
                                <div className="d-flex flex-column align-items-center" style={{ paddingTop: 8, paddingBottom: 16 }}>
                                    <div className="service-text" > UI/UX </div>
                                    <div className="service-text"> Design</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 p-0 m-0 mx-xl-2">
                        <div className="p-2">
                            <div className="shadow m-0 h-100" onClick={handleClickDtrAnz} style={{  border: "1px solid #4B74AD", borderRadius: 30, paddingTop: 16, background: "#FFFFFF" }}>
                                <img src={"/icons/hangar.png"} alt="view" style={{ display: "block", margin: "auto",height: isxl ? "100px":"60px"}} />
                                <div className="d-flex flex-column align-items-center" style={{ paddingTop: 8, paddingBottom: 16 }}>
                                    <div className="service-text" >Data </div>
                                    <div className="service-text">Warehousing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurService;