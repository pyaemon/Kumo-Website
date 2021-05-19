import React from 'react'
import colors from './colors';
import Facebook from "../Images/facebook.png";
import Mail from "../Images/mail.png"
import Location from "../Images/locations.png"
import Messenger from "../Images/messager.svg";
import Phone from "../Images/phone.png";
import Map from "../Feature/map"
// import Map from "../Images/map.JPG"

const Footer = () => {
    return (
        // <div className="footer w-100 d-flex flex" style={{ backgroundColor: "#dbf3fa ", color: "#084C95" }}>
        //     <div className=" mt-5 d-flex flex-fill flex-wrap" >
        //         <div className="p-0 flex-fill map-style " style={{ marginLeft: 50 }} >
        //             {/* <img src={Map} style={{width:280, borderRadius: 10}}/> */}
        //             <Map className="" style={{ borderRadius: 10 }} />
        //         </div>
        //         <div className="p-2 flex-wrap location" style={{ marginLeft: 100 }}>
        //             <div className="location-sub">
        //                 <img src={Location} alt="img" style={{ fontSize: 5 }} />
        //                 <div style={{ paddingLeft: 60, marginTop: -40 }}>
        //                     <p >(Nga Gyi/98), 64Street, Between</p>
        //                     <p style={{ lineHeight: "0.1cm", marginTop: -7 }}>105 & 106 Street, Mandalay, Myanmar</p>
        //                 </div>
        //                 <br></br>
        //                 <img src={Phone} alt="facebook" width={25} />
        //                 <span style={{ paddingLeft: 30 }}>(+95) 9-774 477 275</span>
        //                 <br></br>
        //                 <p className="pt-5">@2021 Kumo Solution Co.,Ltd. All Rights Reserved</p>
        //             </div>
        //         </div>
        //         {/* <div class='float-end' style={{marginTop: -28, position: 'absolute', marginLeft:'81%' }} >
        //         <img src={Messenger} width={55} />
        //     </div> */}
        //         <div className="p-2 flex-fill  flex-wrap" style={{ position: 'relative', marginLeft: 50 }}>
        //             <div className="facebook">
        //                 <img src={Facebook} alt="facebook" /><span style={{ paddingLeft: 20 }}>KUMO Solutions Page</span>
        //                 <br></br><br></br>
        //                 <img src={Mail} alt="mail" /><span style={{ paddingLeft: 20 }}>office@kumomyanmar.com</span>
        //             </div>
        //         </div>
        //     </div>
        // </div>



        <div class="mt-5 pb-0 footer" style={{ backgroundColor: "#dbf3fa ", color: "#084C95" }}>
            <div class="container footer-sub">
                <div class="row">
                    <div class="col-lg-4 col-xs-12 about-company">
                        <Map className="" style={{ borderRadius: 10 }} />
                    </div>
                    <div class="col-lg-4 col-xs-12 links ">
                        <img src={Location} alt="img" style={{ fontSize: 5 }} />
                        <div style={{ paddingLeft: 60, marginTop: -40 }}>
                            <p >(Nga Gyi/98), 64Street, Between</p>
                            <p class="town" style={{ lineHeight: "0.1cm", marginTop: -7 ,whiteSpace: 'nowrap'}}>105 & 106 Street, Mandalay, Myanmar</p>
                        </div>
                        <br></br>
                        <img src={Phone} alt="facebook" width={25} />
                        <span style={{ paddingLeft: 30 }}>(+95) 9-774 477 275</span>
                        <br></br>
                        <p className="reserved col-xs-12" style={{paddingTop:"15%"}}>@2021 Kumo Solution Co.,Ltd. All Rights Reserved</p>
                    </div>
                    <div class="col-lg-3 col-xs-12 location">
                    <img src={Facebook} alt="facebook" /><span style={{ paddingLeft: 20 }}>KUMO Solutions Page</span>
                       <br></br><br></br>
                        <img src={Mail} alt="mail" /><span style={{ paddingLeft: 20 }}>office@kumomyanmar.com</span>
                    </div>
                </div>
                {/* <div class="row mt-5">
                    <div class="col copyright">
                        <p class=""><small class="text-white-50">© 2019. All Rights Reserved.</small></p>
                    </div>
                </div> */}
            </div>
        </div>

    )
}
export default Footer;



// (+95) 9-774 477 275

// @2021 Kumo Solution Co.,Ltd. All Rights Reserved

// KUMO Solutions Page

// office@kumomyanmar.com
