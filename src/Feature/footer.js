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

        <div className="  mt-5 d-flex flex-fill flex-wrap w-100" style={{ backgroundColor:  "#dbf3fa ",color: "#084C95"  }}>
            <div className="p-0 flex-fill " >
            {/* <img src={Map} style={{width:280, borderRadius: 10}}/> */}
            <Map className="" style={{borderRadius:10}}/>
            </div>
            <div className="p-2  flex-fill" style={{marginRight: -100}}>
                <img src={Location} alt="img" style={{fontSize: 5}}/>
                <div style={{paddingLeft: 60,marginTop: -40}}>
                <p >(Nga Gyi/98), 64Street, Between</p>
                <p style={{lineHeight:"0.1cm", marginTop: -7 }}>105 & 106 Street, Mandalay, Myanmar</p>
                </div>
               <br></br>
                <img src={Phone} alt="facebook" width={25} />
                <span style={{paddingLeft: 30}}>(+95) 9-774 477 275</span>
                <br></br>
                <p className="pt-5">@2021 Kumo Solution Co.,Ltd. All Rights Reserved</p>
            </div>
            {/* <div class='float-end' style={{marginTop: -28, position: 'absolute', marginLeft:'81%' }} >
                <img src={Messenger} width={55} />
            </div> */}
            <div className="p-2 flex-fill  " style={{position: 'relative', marginLeft: 50}}>
           
                <img src={Facebook} alt="facebook" /><span style={{paddingLeft: 20}}>KUMO Solutions Page</span>
                <br></br><br></br>
                <img src={Mail} alt="mail" /><span style={{paddingLeft: 20}}>office@kumomyanmar.com</span>
            </div>
        </div>
      
    )
}
export default Footer;



// (+95) 9-774 477 275

// @2021 Kumo Solution Co.,Ltd. All Rights Reserved

// KUMO Solutions Page

// office@kumomyanmar.com
