import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Clonify</div>
     <h4>DASHBOARD</h4>
      <ul className="navigation">
        <li>Dashboard
          <ul className="sub-navigation">
            <li>Analytics</li>
            <li>Finance</li>
            <li>Job Boards</li>
          </ul>
        </li>
        <li>Messages</li>
        <li>Friends</li>
        <li>App</li>
      </ul>
      <h4>PAGES</h4>
      <ul className='pages'>
        <li>Help Center</li>
        <li>File Manager</li>
      </ul>

    </div>
  );
}

export default Sidebar;
