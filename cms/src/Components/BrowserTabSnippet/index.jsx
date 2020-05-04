import React, { useEffect, useState } from 'react';
import { FaLock } from 'react-icons/fa'
import { AiOutlineFile } from 'react-icons/ai'

import './index.scss';

export default function BrowserTabSnippet(props) {
  const [title, setTitle] = useState(props.title);
  const [slogan, setSlogan] = useState(props.slogan);
  
  useEffect(() => {
    setTitle(props.title)
    setSlogan(props.slogan)
  }, [props])

  return (
    <div className="browser">
      <div className="browser__tab">
        {props.favicon !== null ? <img src={props.favicon} alt="" width='16' height='16' /> : <AiOutlineFile size='13' color='#142049' />}
        <div className="browser__tab-name">{title} {slogan !== '' ? `- ${slogan}` : null}{title === '' && slogan === '' ? 'Untitled' : null}</div>
        <div className="browser__tab-close"></div>
      </div>
      <div className="browser__infos">
        <div className="browser__address">
          <FaLock color='#626365' size='12' />
          mywebsite.com
        </div>
      </div>
    </div>
  );
}
