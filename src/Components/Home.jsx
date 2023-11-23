import React from "react";
import dg from "../../src/images/dinner_generator.png"

const Home = () => {
    const projects = [
        {title: 'Project 1', description: 'This is the first project', imgsrc: dg},
        {title: 'Project 2', description: 'This is the second project'},
        {title: 'Project 3', description: 'This is the third project'},
        {title: 'Project 4', description: 'This is the fourth project'},
    ]
    return (
        <h1>YLC Portfolio</h1>
    );
}

export default Home;