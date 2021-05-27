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
        <div>
        <div className="desktop-footer">
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

                     <div class="col-lg-3" style={{whiteSpace:'nowrap' }}>

                          <img src={Facebook} alt="facebook" /><span style={{ paddingLeft: 20 }}>KUMO Solutions Page</span>
                        <br></br><br></br>
                    <div className="mail">
                              <img src={Mail} alt="mail" /><span style={{ paddingLeft: 20}}>office@kumomyanmar.com</span>
                      </div>
                     </div>

                 </div>
             </div>
             <div class="copyright text-center">
             <div class="copyright-reserved">© 2021 Kumo Solutions Co., Ltd. All Rights Reserved</div>
             </div>
         </footer>
         </div>
         <div className="mobile-footer" >
            <footer>
            <div class="row mobile" >
                <div class="column" style={{paddingLeft:20}}>
                {/* <Map  style={{ borderRadius: 10 }} width={"200px"} height={"200px"} /> */}
                <MapForMobile />
                </div>
                <div class="column" style={{marginLeft: -20}}>
                <img src={Location} alt="img" style={{}} width={40}/>
                        <div style={{ paddingLeft: 50, marginTop: -40 , fontSize:"1.2vw" }}>
                           <p class="town" style={{ }}>(Nga Gyi/98), 64Street, Between 105 & 106 Street, Mandalay, Myanmar</p>
                            {/* <p class="town-sub">r</p> */}
                        </div>
                       <br></br>
                       <img src={Phone} alt="facebook" width={25} />
                       <span style={{ paddingLeft:15,fontSize: "2vw" }}>(+95) 9-774 477 275</span>
                </div>
                <div class="column" style={{whiteSpace: 'nowrap', fontSize: "2vw" }}>
                <img src={Facebook} alt="facebook" /><span style={{ paddingLeft: 6 }}>KUMO Solutions Page</span>
                       <br></br><br></br><br></br>
                       <div className="mail">
                            <img src={Mail} alt="mail" /><span style={{paddingLeft: 10}}>office@kumomyanmar.com</span>
                         </div>
                </div>
            </div>
            <div class="copyright text-center">
            <div class="copyright-reserved">© 2021 Kumo Solutions Co., Ltd. All Rights Reserved</div>
             </div>
             </footer>
             </div>
        </div>
    )
}
export default Footer;



// (+95) 9-774 477 275

// @2021 Kumo Solution Co.,Ltd. All Rights Reserved

// KUMO Solutions Page

// office@kumomyanmar.com
