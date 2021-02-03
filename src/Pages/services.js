import React from 'react'
import Azure from '../Config/azure.png'
import Warehouse from '../Config/Warehouse.jpg'
import Paragraph from '../Feature/30and70Paragraph'

const Services = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center py-3 my-4" style={{ height: "100vh" }}>
            <Paragraph
                imgSrc={Azure}
                imageWidth={'215px'}
                imgRadius={'70%'}
                isReverse={false}
                data={analyticsData}
            />
            <Paragraph
                imgSrc={Warehouse}
                imageWidth={'215px'}
                imgRadius={'70%'}
                isReverse={true}
                data={warehouseData}
            />
        </div>
    )
}
export default Services;

const analyticsData = {
    title: 'Data Analytics Services',
    description: 'We analyse raw data of businesses into transforming actionable and insightful information in order to make quick and data-dricen decisions by rendering data analytic services. Data Analytic helps in delivering faster and accurate report, analysis and planning with enhanced customer experiences. We collaborate with expertise in related areas to bring out the best outcomes for analysing data.'
}

const warehouseData = {
    title: 'Data Warehousing',
    description: 'We provide the service for data warehousing by designing a data storage system by querying data from different sources such as Rest API, Databases, Excel and CSV. Then, analyse data by enabling businesses to transform data into actionable insight. Then, save in the system and distribute those back to related customers for services.'
}