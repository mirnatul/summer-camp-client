import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <div>
                <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? "border-b-4 border-slate-900" : ""}
                >
                    {children}
                </NavLink>
            </div>

        </div>
    );
};

export default ActiveLink;