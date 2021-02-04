import React from "react";
import colors from "./colors";
import fonts from "./fonts";

const HomeParagraph = props => {
    const { data, imgSrc, imgWidth, isReverse, } = props

    return (
        < div style={{ margin: '30px 30px 0 0', overflow: 'auto' }}>
            <div style={{ float: isReverse ? 'left' : 'right' }}><img src={imgSrc} style={{
                display: 'block', width: imgWidth,
                height: '200px',
                boxShadow: '10px 10px 10px #00000029',
                borderRadius: '41px',
                opacity: 1,

            }} /></div>
            <div >
                <h3 style={{ color: '#084C95', textAlign: isReverse ? 'right' : 'left', font: 'normal normal normal 30px/36px Microsoft Sans Serif' }} >{data.title}</h3>
                <div className="dropdown-divider p-0 m-0" style={{ display: 'block', border: '1px solid #EBD1FA' }}></div>
                <p style={{ color: colors.ParagraphColor }}>{data.description1}</p>
                <p style={{ color: colors.ParagraphColor }}>{data.description2}</p>
                <p style={{ color: colors.ParagraphColor }}>{data.description3}</p>
            </div>

        </div >
    )
}

export default HomeParagraph