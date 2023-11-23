import React from 'react'
import Nav from './Nav'

const Resume = () => {
    return (
        <header>
            <h1>YLC</h1>
            <p>Welcome to YLC's Portfolio</p>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}

export default Resume;