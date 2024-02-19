// ProfileCover.jsx
import React, { useContext, useEffect } from 'react';
import './ProfileCover.css';
import { UserContext } from '../../../context/userContext';
import { FaUser } from 'react-icons/fa';

function ProfileCover() {
    const { user, fetchUser } = useContext(UserContext);

    useEffect(() => {
        fetchUser();
    }, []); 

    console.log(user);
    return (
        <div className='profile-cover'>
            <section className="user-info">
                <aside className='user-profile-image'>
                    <FaUser className="User-Toggler"/>
                </aside>
                <div className='info-context'>
                {user ? (
                <React.Fragment>
                   <b className='userName'>Hi, {user.firstName}</b>
                   <b className='userEmail'>{user.email}</b>
                </React.Fragment>
                ) : (
                <b className='userEmail'>Loading...</b>
                )}
                </div>
            </section>
            </div>
    );
}

export default ProfileCover;