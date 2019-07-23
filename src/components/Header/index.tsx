import * as React from 'react';
import { Link } from "react-router-dom";

import "./header.scss"
export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/inbox">Inbox</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

