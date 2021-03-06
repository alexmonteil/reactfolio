import React from 'react';
import './About.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -60, scrollDuration: 200});

/*

Edit About Section: 
    Write a description about you within the <p> tags.
    
*/
const About = () => {
    return (
        <ScrollableAnchor id={'About'}>
            <div className='aboutstyle vh-100 w-100'>
                <h1 className='abouttitle shadow-1 center br3'>About Me</h1>
                <article className='articleabout w-80 tc center br3 mt4 mb2'>
                    <p>Hi, my name is John Doe, I am the anonymous software developer.</p>
                    <p>Software development is my passion. I started doing it in my spare time for fun and it quickly grew into a career interest.</p>
                    <p>I have been working mainly with frameworks such as React, Redux and Express to create responsive and efficient web applications. </p>
                    <p>My interests extend to machine learning, natural language processing and computer vision as I seek to build smart web applications with those capabilities.</p>
                    <hr className='w-80 center' />
                    <p className='mb4'>Thanks for viewing my portfolio</p>
                    <a href='#Portfolio' className='mv2 toSectionButton'>Portfolio</a>
                </article> 
            </div>
        </ScrollableAnchor>
    );
}

export default About;