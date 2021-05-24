import React from 'react'
import colors from './colors';
import Facebook from "../Images/facebook.png";
import Mail from "../Images/mail.png"
import Location from "../Images/locations.png"
import Messenger from "../Images/messager.svg";
import Phone from "../Images/phone.png";
import Map from "../Feature/map"
import Font from "../Feature/fonts";
// import Map from "../Images/map.JPG"

const Footer = () => {
    return (
        // <div class="mt-5 pb-0 footer" style={{ backgroundColor: "#dbf3fa ", color:   }}>
        //     <div class="container footer-sub m-0 h-100 p-2">
        //         <div class="row h-100">
        //             <div class="col-lg-4 col-md-5 col-xs-12 about-company" id="footer-map">
        //                 <Map className="" style={{ borderRadius: 10 }} />
        //             </div>
        //             <div class="col-lg-4 col-md-4 col-xs-12 links " style={{ font: Font.regular }}>
        //                 <img src={Location} alt="img" style={{}} />
        //                 <div style={{ paddingLeft: 60, marginTop: -40, font: Font.regular }}>
        //                     <p class="town">(Nga Gyi/98), 64Street, Between</p>
        //                     <p class="town-sub" style={{ lineHeight: "0.1cm", marginTop: -7, whiteSpace: 'nowrap' }}>105 & 106 Street, Mandalay, Myanmar</p>
        //                 </div>
        //                 <br></br>
        //                 <img src={Phone} alt="facebook" width={25} />
        //                 <span style={{ paddingLeft: 30 }}>(+95) 9-774 477 275</span>
        //                 <br></br>
        //                 <p className="reserved col-xs-12" style={{ paddingTop: "15%", font: Font.large }}> © 2021 Kumo Solutions Co., Ltd. All Rights Reserved</p>
        //             </div>
        //             <div class="col-lg-3 col-md-5 col-xs-12 location">
        //                 <img src={Facebook} alt="facebook" /><span style={{ paddingLeft: 20 }}>KUMO Solutions Page</span>
        //                 <br></br><br></br>
        //                 <div className="mail">
        //                     <img src={Mail} alt="mail" /><span style={{ paddingLeft: 20 }}>office@kumomyanmar.com</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <footer>
            <div class="container container-footer">
                <div class="row">

                    <div class="col-lg-4 col-md-6 three-column">
                    <Map  style={{ borderRadius: 10 }} />
                    </div>

                    <div class="col-lg-4 col-md-6 mb-2">
                    <img src={Location} alt="img" style={{}} />
                        <div style={{ paddingLeft: 60, marginTop: -40, font: Font.regular }}>
                            <p class="town">(Nga Gyi/98), 64Street, Between</p>
                            <p class="town-sub" style={{ lineHeight: "0.1cm", marginTop: -7, whiteSpace: 'nowrap' }}>105 & 106 Street, Mandalay, Myanmar</p>
                        </div>
                        <br></br>
                        <img src={Phone} alt="facebook" width={25} />
                        <span style={{ paddingLeft: 30 }}>(+95) 9-774 477 275</span>
                    </div>

                    <div class="col-lg-3">

                         <img src={Facebook} alt="facebook" /><span style={{ paddingLeft: 20 }}>KUMO Solutions Page</span>
                       <br></br><br></br>
                       <div className="mail">
                             <img src={Mail} alt="mail" /><span style={{ paddingLeft: 20 }}>office@kumomyanmar.com</span>
                         </div>
                    </div>

                </div>
            </div>
            <div class="copyright text-center">
            © 2021 Kumo Solutions Co., Ltd. All Rights Reserved
            </div>
        </footer>

    )
}
export default Footer;



// (+95) 9-774 477 275

// @2021 Kumo Solution Co.,Ltd. All Rights Reserved

// KUMO Solutions Page

// office@kumomyanmar.com
