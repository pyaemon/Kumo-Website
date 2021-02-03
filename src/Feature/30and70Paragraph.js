import React from "react";
import colors from "./colors";
import fonts from "./fonts";

const ParagraphThirty = props => {
    const { paragraphText, title, imgSrc, imgFloat, imgRadius } = props

    return (
        < div style={{ margin: '30px 30px 0 0', overflow: 'auto' }}>
            <div style={{ float: 'right' }}><img src={imgSrc} style={{ display: 'block', width: '300px', height: '200px' }} /></div>
            <div >
                <h3 style={{ color: '#4B7DB2', }} >{title}</h3>
                <div className="dropdown-divider p-0 m-0" style={{ display: 'block', border: '1px solid #EBD1FA' }}></div>
                <p style={{ color: colors.ParagraphColor }}>{paragraphText}</p>
                <p style={{ color: colors.ParagraphColor }}>{paragraphText}</p>
                <p style={{ color: colors.ParagraphColor }}>{paragraphText}</p>
            </div>

        </div >

        // <div className="mt-5">
        //     <div style={{ width: '100%' }}>
        //         <div style={{ float: 'left', width: '30%'}}><img src={Image} alt="img"/></div>
        //         <div style={{ float: 'none', color: colors.ParagraphColor, fontSize: fonts.body }}> 
        //             <div style={{ fontSize: fonts.heading1, color: colors.TitleColor}}>{Title}</div>
        //                 <div className="dropdown-divider p-0 m-0" style={{color :colors.DividerColor}}></div> 
        //                 {ParagraphText}
        //         </div>
        //     </div>
        // </div>
    )


}

export default ParagraphThirty