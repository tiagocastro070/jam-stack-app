import React from 'react';

import Header from '../../Components/Header';
import Menu from '../../Components/Menu';
import Body from '../../Components/Body';

export default function Admin() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Body />
      <div className="footer"></div>
    </div>
  );
}
