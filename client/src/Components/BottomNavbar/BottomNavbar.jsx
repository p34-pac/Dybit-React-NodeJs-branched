import React from 'react';
import './BottomNavBar.css';
import { Link, useLocation } from 'react-router-dom';
import { Dashboard, Payment, People, Task, VerifiedUser } from '@mui/icons-material';

const BottomNavBar = () => {
    const location = useLocation();

    const MenuIcons = [
        { name: "Dashboard", Icon: <Dashboard className='Icon' /> },
        { name: "Referrals", Icon: <People className='Icon' /> },
        { name: "Tasks", Icon: <Task className='Icon' /> },
        { name: "Payment", Icon: <Payment className='Icon' /> },
        { name: "Profile", Icon: <VerifiedUser className='Icon' /> },
    ];

    return (
        <div className='BottomNavBar-container'>
            <ul className='Icon-order-list flex'>
                {MenuIcons.map((item, i) => (
                    <li key={i} className='w-16'>
                        <Link
                            to={`/${item.name.toLowerCase()}`}
                            className={`flex flex-col align-center justify-center text-center pt-6 ${location.pathname.includes(item.name.toLowerCase()) ? 'active' : ''}`}
                        >
                            <span className='Icon-container text-xl cursor-pointer'>
                                {item.Icon}
                            </span>
                            <span className='Icon-tag'>
                                {item.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BottomNavBar;
