import React from 'react'
import ParaFragment from '../Feature/homeParagraph'
import softdevImg from '../Images/softDev.jpg'

const Home = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center py-3 my-4" style={{ height: "100vh" }}>
            <ParaFragment
                imgSrc={softdevImg}
                imageWidth={'300px'}
                imgRadius={'10%'}
                isReverse={false}
                data={kumoData}
            />
            <ParaFragment
                imgSrc={softdevImg}
                imageWidth={'300px'}
                imgRadius={'10%'}
                isReverse={true}
                data={kumoData}
            />
        </div>
    )
}
export default Home;

const kumoData = {
    title: 'Kumo Solutions is a Software Development Company',
    description1: 'Established in 2018 to navigate customers through the next generation of business innovation with the empowered software development. We deliver high value solutions by bridging the gap between busines and technology.'
}
