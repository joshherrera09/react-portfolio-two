import React from 'react';
import Data from './Data'


const Home = ({name, paragraph, homePageImage}) => {
    return (
        <div>
            <div className="home_container">
                <div className="home_head_wrapper">
                    <h1>Hello I'm <br /><span>{name}</span></h1>
                    <p>{paragraph}</p>
                </div>
                <div className="image_container">
                    <img src={Data.homePageImage} alt="Josh Herrera"></img>
                    <div className="bg"></div>
                </div>
            </div>
        </div>
    )
}

export default Home;