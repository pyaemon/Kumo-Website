import React from "react";


const OurService = () => {
    return (
        <div >
             <div className="p-5" >
            <div className="d-flex  justify-content-between" style={{color: "#084C95",fontSize: 15,}}>
               
                <div className="shadow" style={{ width: 170, height: 130, border:"1px solid #4B74AD" , borderRadius: 30 , paddingTop: 10,background:"#FFFFFF"}}>
                    <img className="center" src={"/icons/line_chart.png"} alt="view" style={{ background: "#4B74AD" ,borderRadius: 10, display: "block", margin: "auto" }} />
                    <div className="text-center" style={{width: 70,display: "block", margin: "auto", paddingTop: 10, }}>
                        <span className="" >Data Analytics</span>
                    </div>
                </div>
                <div className="shadow" style={{ width: 170, height: 130 ,border:"1px solid #4B74AD" , borderRadius: 30, paddingTop: 10,background:"#FFFFFF"}}>
                    <img src={"/icons/globe.png"} alt="view" style={{ display: "block", margin: "auto"}}/>
                    <div className="text-center" style={{width: 70,display: "block", margin: "auto", paddingTop: 10 }}>
                        <span className="" >Web Development</span>
                    </div>
                </div>,
                <div className="shadow" style={{ width: 170, height: 130,border:"1px solid #4B74AD" , borderRadius: 30 , paddingTop: 10,background:"#FFFFFF"}}>
                    <img src={"/icons/iphone.png"} alt="view" style={{ display: "block", margin: "auto"}} />
                    <div className="text-center" style={{width: 70,display: "block", margin: "auto" , paddingTop: 10}}>
                        <span className="" >Mobile Development</span>
                    </div>
                </div>
                <div className="shadow" style={{ width: 170, height: 130 ,border:"1px solid #4B74AD" , borderRadius: 30, paddingTop: 10,background:"#FFFFFF"}}>
                    <img src={"/icons/laptop.png"} alt="view" style={{ display: "block", margin: "auto"}} />
                    <div className="text-center" style={{width: 70,display: "block", margin: "auto", paddingTop: 10 }}>
                        <span className="" >UI/UX Design</span>
                    </div>
                </div>
                <div className="shadow" style={{ width: 170, height: 130 ,border:"1px solid #4B74AD" , borderRadius: 30, paddingTop: 10,background:"#FFFFFF"}}>
                <img src={"/icons/hangar.png"} alt="view" style={{ display: "block", margin: "auto"}}/>
                    <div className="text-center" style={{width: 70,display: "block", margin: "auto", paddingTop: 10 }}>
                        <span className="" >Data Warehousing</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OurService;