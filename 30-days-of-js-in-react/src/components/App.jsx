import React from 'react';
import { Route, Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faListUl from '@fortawesome/fontawesome-free-solid/faListUl';

import Nav from './nav/nav';
import AjaxTypeAhead from './ajaxTypeAhead/ajaxTypeAhead';
import ArrayCardio01 from './arrayCardio01/arrayCardio01';
import ArrayCardio02 from './arrayCardio02/arrayCardio02';
import Clock from './clock/clock';
import CssVariables from './cssVariables/cssVariables';
import DrumKit from './drumkit/drumkit';
import PanelGallery from './flexPanelsGallery/flexPanelsGallery';
import HTML5Canvas from './html5Canvas/html5Canvas';

fontawesome.library.add(faListUl);

function App() {
  return (
    <div className="container">
      <h1 className="title--main">
        <Link to="/">Matte Fletcher | 30 Days of JS
          <FontAwesomeIcon icon="list-ul" size="xs" />
        </Link>
      </h1>
      <Route path="/" exact component={Nav} />
      <Route path="/ajaxTypeAhead" component={AjaxTypeAhead} />
      <Route path="/arrayCardio01" component={ArrayCardio01} />
      <Route path="/arrayCardio02" component={ArrayCardio02} />
      <Route path="/clock" component={Clock} />
      <Route path="/cssVariables" component={CssVariables} />
      <Route path="/drumkit" component={DrumKit} />
      <Route path="/html5Canvas" component={HTML5Canvas} />
      <Route path="/panelGallery" component={PanelGallery} />
    </div>
  );
}

export default App;
