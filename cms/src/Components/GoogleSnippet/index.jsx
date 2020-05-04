import React, { useEffect, useState, useRef } from 'react';
import { IoMdRibbon } from 'react-icons/io';

import HelpText from '../HelpText'

import './index.scss';

export default function GoogleSnippet(props) {
  const [title, setTitle] = useState(props.title)
  const [slogan, setSlogan] = useState(props.slogan)
  const [description, setDescription] = useState(props.description)

  const snippet = useRef(null);

  const showBadge = () => {
    if (snippet.current === null) return false;
    const snippetTitleWidth = snippet.current.querySelector('.google-snippet__title div').offsetWidth;
    return title.length + slogan.length > 10 && snippetTitleWidth < 585 && description.length > 120 && description.length < 158;
  }

  useEffect(() => {
    setTitle(props.title)
    setDescription(props.description)
    setSlogan(props.slogan)
  }, [props])
  
  return (
    <>
      <div className='google-snippet' ref={snippet}>
        <div className={`google-snippet__badge ${showBadge() ? 'google-snippet__badge--show' : null}`}><IoMdRibbon color='white' size='1.8em' /> Optimal for Google</div>
        <div className='google-snippet__url'>
          {props.favicon !== null ? <img src={props.favicon} className='google-snippet__favicon' alt='favicon-google' width='16' height='16' /> : null }
          {props.url}
        </div>
        <div className='google-snippet__title'>
          <div>
            {title} {slogan !== '' ? `- ${slogan}` : null}{title === '' && slogan === '' ? 'Untitled' : null}
          </div>
        </div>
        <div className='google-snippet__description'>{description.length > 158 ? `${description.substring(0, 158)}...` : description }</div>
      </div>
      <HelpText>
        Favicon will only appear on mobile results. Title should have only one line and around 600px of available space before being cropped. Description should ideally have a length between 120 and 158 characters, more than that will be cropped by Google.
      </HelpText>
    </>
  );
}
