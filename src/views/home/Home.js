import React from 'react';
import DragAndDropLayout from '../../components/layout/DragAndDropLayout';
import NavBar from '../../components/navBar/NavBar';
import './Home.css';

const Home = () => {
    return (
        <>
            <NavBar/>
            <div className='home__layout'>
                <h1>Kiki Drag and Drop interface Layout</h1>
                <p>Inspired by <strong>Trello</strong>, and <strong>Google Keep</strong>, <strong>Invision</strong> and <strong>Ettrics</strong></p>
                <DragAndDropLayout/>
                <span>Drag and drop functionality by Kevin Clément</span>
            </div>
        </>
    );
};

export default Home;