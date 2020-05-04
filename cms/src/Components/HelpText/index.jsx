import React from 'react';
import { MdHelpOutline } from 'react-icons/md';

import './index.scss';

export default function HelpText (props) {
  return (
    <div className='help-text'>
      <MdHelpOutline color='#5b5b63' size='1.2em' /> {props.children}
    </div>
  );
}
