import React from 'react'
import colors from './colors';
import Facebook from "../Images/facebook.png";
import Mail from "../Images/mail.png"
import Location from "../Images/locations.png"
import Messenger from "../Images/messager.svg";
import Phone from "../Images/phone.png";
import Map from "../Feature/map"
import Font from "../Feature/fonts";
import MapForMobile from "../Feature/Mapformobile";
// import Map from "../Images/map.JPG"

const Footer = () => {
    return (

        <div class="row" style={{margin: 0, background: "#dbf3fa",
            color: "#084C95"}}>
            <div class="col-lg-4 col-md-4 px-3">
                <Map style={{ borderRadius: 10 }} />
            </div>
            <div class="col-lg-7 col-md-7">
                    <div class="row">
                        <div class="col-lg-6 col-md-5 col-sm-5">
                             <img src={Location} alt="img" style={{ width: 40, height: 40 }} />
                                <div style={{ paddingLeft: 60, marginTop: -40, font: Font.regular }}>
                                    <p class="town">(Nga Gyi/98), 64Street, Between  105 & 106 Street, Mandalay, Myanmar</p>
                                    {/* <p class="town-sub" style={{ lineHeight: "0.1cm", marginTop: -7, whiteSpace: 'nowrap' }}>105 & 106 Street, Mandalay, Myanmar</p> */}
                                </div>
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-5">
                            <img src={Facebook} alt="facebook" style={{ width: 40, height: 40 }} /><span class="solutions" style={{ paddingLeft: 20 }}>KUMO Solutions Page</span>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-md-5 col-sm-5">
                            <div className="mail d-flex">
                            <img src={Phone} alt="facebook" style={{ width: 40, height: 40 }} />
                                <p class="Phone" style={{ paddingLeft: 30,paddingTop:8 }}>(+95) 9-774 477 275</p>
                             </div>
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-5">
                                <div className="mail d-flex">
                                <img src={Mail} alt="mail" style={{ width: 40, height: 40 }} /><p class="office" style={{ paddingLeft: 20,paddingTop:8 }}>office@kumomyanmar.com</p>
                            </div> 
                            
                            </div>

                    </div>

                {/* <div class="row">
                    <div class="col-lg-6 col-md-5 col-sm-5">
                        <img src={Location} alt="img" style={{ width: 40, height: 40 }} />
                        <div style={{ paddingLeft: 60, marginTop: -40, font: Font.regular }}>
                            <p class="town">(Nga Gyi/98), 64Street, Between  105 & 106 Street, Mandalay, Myanmar</p>
                           </div>
                        <div class="py-5">
                            <div className="mail d-flex">
                                <img src={Phone} alt="facebook" style={{ width: 40, height: 40 }} />
                                <span class="Phone" style={{ paddingLeft: 30 }}>(+95) 9-774 477 275</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-5" >
                        <img src={Facebook} alt="facebook" style={{ width: 40, height: 40 }} /><span class="solutions" style={{ paddingLeft: 20 }}>KUMO Solutions Page</span>
                        <div class="py-5">
                            <div className="mail d-flex">
                                <img src={Mail} alt="mail" style={{ width: 40, height: 40 }} /><p class="office" style={{ paddingLeft: 20,paddingTop:8 }}>office@kumomyanmar.com</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div class="row ">
                    <div class="col-lg-12 col-md-12" style={{marginTop: 70}}>
                    <div class="">© 2021 Kumo Solutions Co., Ltd. All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;



// (+95) 9-774 477 275

// @2021 Kumo Solution Co.,Ltd. All Rights Reserved

// KUMO Solutions Page

// office@kumomyanmar.com
