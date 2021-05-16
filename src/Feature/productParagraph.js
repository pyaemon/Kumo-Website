import React, { useEffect, useState } from 'react'
import Font from './fonts'
import Color from './colors'

const ProductParagraph = (props) => {
    const { imgRadius, isReverse, imgSrc, imageWidth, data,imgheight } = props;
    const [pageWidth, setPageWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.onresize = (e) => {
            setPageWidth(e.target.innerWidth)
        }
    })

    return (
        <div className='my-4'>
            <div className={`d-flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} flex-xl-nowrap flex-lg-nowrap flex-md-nowrap flex-sm-wrap flex-xs-wrap flex-wrap mx-4 justify-content-center`} >
                <div className='row ms-3 me-2'>
                <div className='col-6' style={{ display: 'block'}}>
                    <img className='shadow' src={imgSrc} alt="img" style={{ width: imageWidth, borderRadius: imgRadius,height:imgheight, border: '1px solid #C5B3E5' }} />
                </div>
                <div className='col-5 ms-3 me-2 m-container' style={{ display: 'block' }}>
                    <div /*className={`${pageWidth < 768 ? 'text-right' : isReverse && ' text-end'} ms-5`}*/className='pl-2' style={{ whiteSpace: 'nowrap', color: Color.TitleColor, fontSize: Font.heading12, fontWeight: 400 }}>{data.title}</div>
                    <div className={`dropdown-divider m-title border-0 `} style={{ backgroundColor: '', height: "2px"}}></div>
                    <div className='ms-3 me-2' style={{color: "#084C95", fontWeight:600,fontSize: '15px' }}>
                <p style={{ }}>{data.description}</p>
                </div>
            </div>
                </div>
            </div>
        </div>
    )
}
export default ProductParagraph;