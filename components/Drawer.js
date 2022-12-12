import React from 'react';

const Drawer = ({ menuItems }) => {
    return (
        <div className="drawer drawer-end absolute overflow-hidden ">
            <input id="portfolio-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side ">
                <label htmlFor="portfolio-drawer" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 bg-[#0a192f] text-base-content  space-y-4 pl-12 pt-12">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Drawer;