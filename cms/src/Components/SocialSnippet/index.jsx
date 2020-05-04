import React, { useState, useEffect } from 'react'

import './index.scss';

export default function SocialSnippet(props) {
  const [title, setTitle] = useState(props.title)
  const [slogan, setSlogan] = useState(props.slogan)
  const [description, setDescription] = useState(props.description)

  useEffect(() => {
    setTitle(props.title)
    setDescription(props.description)
    setSlogan(props.slogan)
  }, [props])
  
  return (
    <div className='meta-og'>
      <img src='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png' alt='website title' className="meta-og__img" />
      <div className="meta-og__infos">
        <div className="meta-og__website">mywebsite.com</div>
        <div className="meta-og__title">
          {title} {slogan !== '' ? `- ${slogan}` : null}{title === '' && slogan === '' ? 'Untitled' : null}
        </div>
        <div className="meta-og__description">{description}</div>
      </div>
    </div>
  );
}
