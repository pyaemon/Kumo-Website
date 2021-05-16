import React, { useEffect, useState } from 'react'
import Font from './fonts'
import Color from './colors'
// import '../App.css'

const ServiceParagraph = (props) => {
    const { imgRadius, isReverse, imgSrc, imageWidth, data } = props;
    const [pageWidth, setPageWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.onresize = (e) => {
            setPageWidth(e.target.innerWidth)
        }
    })

    return (
        <div className='col-11 my-4'>
            <div className={`d-flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} flex-xl-nowrap flex-lg-nowrap flex-md-nowrap flex-sm-wrap flex-xs-wrap flex-wrap mx-4 justify-content-center`} >
                <div className='image-box' style={{ display: 'inline-block', verticalAlign: 'top' }}>
                    <img className='' src={imgSrc} alt="img" style={{ width: imageWidth, borderRadius: imgRadius, border: '1px solid #C5B3E5' }} />
                </div>
                <div className='mt-3 m-container' style={{ display: 'inline-block' }}>
                    <div className={`${pageWidth < 768 ? 'text-center' : isReverse && ' text-end'} ms-3`} style={{ whiteSpace: 'nowrap', color: Color.TitleColor, fontSize: Font.heading12, fontWeight: 400 }}>{data.title}</div>
                    <div className={`dropdown-divider m-title border-0 p-0`} style={{ backgroundColor: '', height: "2px" }}></div>
                    <div className='ms-3 me-2' style={{ color: Color.ParagraphColor, fontSize: '15px' }}>
                        {data.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceParagraph;