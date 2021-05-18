import React from "react";
import colors from "./colors";
import fonts from "./fonts";

const HomeParagraph = props => {
    const { data, imgSrc, imgWidth, isReverse, } = props

    return (
        < div  style={{ margin: '30px 30px 0 0' }}>
            <div className='image-box' style={{ float: isReverse ? 'left' : 'right' }}><img className='kumo-image' src={imgSrc} style={{
                display: 'block', width: imgWidth,
                height: '185px',
                boxShadow: '10px 10px 10px #00000029',
                borderRadius: '41px',
                opacity: 1,
                marginTop: -30

            }} /></div>
            <div className="m-container">
                <h3 className="title" style={{ color: '#084C95', textAlign: isReverse ? 'right' : 'left', font: 'normal normal normal 30px/36px Microsoft Sans Serif' }} >{data.title}</h3>
                <div className="dropdown-divider-1 ud_line p-0 m-0 m-title mb-2" style={{ display: 'block' }}></div>
                <div className='m-paragraph'>
                    <p style={{ color: colors.ParagraphColor }}>{data.description1}</p>
                    <p style={{ color: colors.ParagraphColor }}>{data.description2}</p>
                    <p style={{ color: colors.ParagraphColor }}>{data.description3}</p>
                </div>
            </div>
        </div >
    )
}

export default HomeParagraph