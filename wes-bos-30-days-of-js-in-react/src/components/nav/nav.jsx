import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="container">
      <nav>
        <ol>
          <li>
            <Link to="/drumkit">01. Drumkit</Link>
          </li>
          <li>
            <Link to="/clock">02. Clock</Link>
          </li>
          <li>
            <Link to="/cssVariables">03. CSS Variable Manipulation</Link>
          </li>
          <li>
            <Link to="/arrayCardio01">04. Array Cardio 01</Link>
          </li>
          <li>
            <Link to="/panelGallery">05. Flex Panel Gallery</Link>
          </li>
          <li>
            <Link to="/ajaxTypeAhead">06. Ajax Type Ahead</Link>
          </li>
          <li>
            <Link to="/arrayCardio02">07. Array Cardio 02</Link>
          </li>
          <li>
            <Link to="/html5Canvas">08. HTML5 Canvas</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Nav;
