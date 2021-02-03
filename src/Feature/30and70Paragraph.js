// import React from "react";
// import colors from "./colors";
// import fonts from "./fonts";

// const ParagraphThirty = props => {
//     const { paragraphText, title, imgSrc, imgFloat, imgRadius } = props

//     return (
//         < div style={{ margin: '30px 30px 0 0', overflow: 'auto' }}>
//             <div style={{ float: 'left' }}><img src={imgSrc} style={{ display: 'block', width: '300px', height: '200px' }} /></div>
//             <div >
//                 <h3 style={{ color: '#4B7DB2', }} >{title}</h3>
//                 <div className="dropdown-divider p-0 m-0" style={{ display: 'block', border: '1px solid #EBD1FA' }}></div>
//                 <p style={{ color: colors.ParagraphColor }}>{paragraphText}</p>
//                 <p style={{ color: colors.ParagraphColor }}>{paragraphText}</p>
//                 <p style={{ color: colors.ParagraphColor }}>{paragraphText}</p>
//             </div>

//         </div >
//     )
// }

// export default ParagraphThirty

import React from 'react'
import Font from '../Feature/fonts'
import Color from '../Feature/colors'

const ParagraphThirty = (props) => {
    const { imgRadius, isReverse, imgSrc, imageWidth, data } = props;
    return (
        <div className='col-9'>
            <div className={`d-flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} flex-xl-nowrap flex-lg-nowrap flex-md-nowrap flex-sm-wrap flex-xs-wrap flex-wrap mx-4`} >
                <div className='' style={{ display: 'inline-block', verticalAlign: 'top' }}>
                    <img className='' src={imgSrc} alt="img" style={{ width: imageWidth, borderRadius: imgRadius, border: '1px solid #C5B3E5' }} />
                </div>
                <div className='mt-3' style={{ display: 'inline-block' }}>
                    <div className={`${isReverse && 'text-end me-2'} ms-3`} style={{ whiteSpace: 'nowrap', color: Color.TitleColor, fontSize: Font.heading12, fontWeight: 400 }}>{data.title}</div>
                    <div className={`dropdown-divider border-0 p-0`} style={{ backgroundColor: '#C5B3E5', height: 1.4}}></div>
                    <div className='ms-3 me-2' style={{ color: Color.ParagraphColor, fontSize: '15px' }}>
                        {data.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ParagraphThirty;