import React from 'react'
import Font from './fonts'
import Color from './colors'

const AboutParagraph = (props) => {
    const { imgRadius, isReverse, imgSrc, imageWidth, data ,imgheight} = props;
    return (
        <div className='col-11 mt-3'>
            <div className={`d-flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} flex-xl-nowrap flex-lg-nowrap flex-md-nowrap flex-sm-wrap flex-xs-wrap flex-wrap `} >
                <div className='image-box' style={{ display: 'inline-block', verticalAlign: 'top' , paddingTop: 10}}>
                    <img className='shadow' src={imgSrc} alt="img" style={{ width: imageWidth, borderRadius: imgRadius, border: '1px solid #C5B3E5',height:imgheight }} />
                </div>
                <div className='m-container' style={{ display: 'inline-block'}}>
                    <div className={`${isReverse && 'me-2'} ms-3`} style={{ whiteSpace: 'nowrap', color: Color.TitleColor, fontSize: Font.heading12, fontWeight: 400 }}>{data.title}</div>
                    <div className={`dropdown-divider m-title border-0 p-0 container-fluid`} style={{ backgroundColor: '', height: "2px"}}></div>
                    <div className='ms-3 me-2 ' style={{ color: Color.ParagraphColor, fontSize: '15px' ,wordSpacing: 4 }}>
                        {data.description1}
                    </div>
                    <div className='ms-3 me-2 mt-1' style={{ color: Color.ParagraphColor, fontSize: '15px',wordSpacing: 4 }}>
                        {data.description2}
                    </div>
                    <div className='ms-3 me-2 mt-1' style={{ color: Color.ParagraphColor, fontSize: '15px',wordSpacing: 4 }}>
                        {data.description3}
                    </div> 
                    {/* <div className='ms-3 me-2 mt-3 ' style={{ color: Color.ParagraphColor, fontSize: '15px' }}>
                        {data.description4}
                    </div> */}
                    {/* <div className='ms-3 me-2 ' style={{ color: Color.ParagraphColor, fontSize: '15px' }}>
                        {data.description5}
                    </div>     */}
                </div>

                
            </div>
        </div>
    )
}
export default AboutParagraph;