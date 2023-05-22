import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">A</Link>
          </li>
          <li>
            <Link to="/B">B</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
    )
}

export default Layout;