import React from 'react'
import ParaFragment from '../Feature/30and70Paragraph'
// import softdevImg from '../Images/softDev.jpg'
const Home = () => {
    return (
        <div className="container justify-content-center">
            <ParaFragment
                text={''}
                imgFloat={'right'}
                imgRadius={'square'}
                title={paraTitle}
                paragraphText={paragraph}
                // imgSrc={softdevImg}
            />
        </div>
    )
}
export default Home;

const paraTitle = 'Kumo Solutions is a Software Development Company'
const paragraph = 'Established in 2018 to navigate customers through the next generation of business innovation with the empowered software development. We deliver high value solutions by bridging the gap between busines and technology.'
