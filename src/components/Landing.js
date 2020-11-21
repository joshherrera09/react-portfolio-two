import React from 'react';
import Header from "./Header";
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact";
import Data from "./Data";

const Landing = () => {
    return (
        <div className="App">
            <Header name={Data.name} contactEmail={Data.contactEmail}></Header> 
            <Home name={Data.homePageName} paragraph={Data.aboutMe} image={Data.homePageImage}></Home>
            <Work projects={Data.projects}></Work>
            <Contact contactEmail = {Data.contactEmail} contactSection={Data.contactSection} socialLinks={Data.social}></Contact>
        </div>
    )
}

export default Landing