import React from 'react'
import Font from './fonts'
import Color from './colors'

const AboutParagraph = (props) => {
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
                        {data.description1}
                    </div>
                    <div className='ms-3 me-2' style={{ color: Color.ParagraphColor, fontSize: '15px' }}>
                        {data.description2}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutParagraph;