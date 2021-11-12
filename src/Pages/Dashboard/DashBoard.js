import React from 'react';
import DashBoardNav from '../Shared/DashBoardNav/DashBoardNav';


const DashBoard = () => {
    return (
        <div>
            <DashBoardNav></DashBoardNav>
            <h1 className="text-center mt-5 mb-5 text-success">Welcome To Dashboard</h1>
        </div>
    );
};

export default DashBoard;