import React from 'react'
import colors from '../Feature/colors';
import fonts from '../Feature/fonts';

const About=()=>{
    return(
        <div className="container justify-content-center">
            <div className="mt-5 d-flex flex-row row-wrap">
                <div class="col-lg-8">
                    <div style={{ fontSize: fonts.heading1, color: colors.TitleColor}}>About the company</div>
                </div>
                {/* <div class="col-lg-4">col-4</div> */}
                
            </div>
        </div>
    )
}
export default About;