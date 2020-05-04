import React, { useState } from 'react'

import GoogleSnippet from '../../Components/GoogleSnippet';
import BrowserTabSnippet from '../../Components/BrowserTabSnippet';
import SocialSnippet from '../../Components/SocialSnippet';

export default function SettingsSeo() {
  const [favicon, setFavicon] = useState(null);
  const [title, setTitle] = useState('');
  const [slogan, setSlogan] = useState('');
  const [metaDescription, setMetaDescription] = useState('No description has been provided yet.');

  const handleFaviconUpload = e => {
    const reader = new FileReader()
    reader.onload = function () {
      setFavicon(reader.result)
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const handleSubmit = e => {
    e.preventDefault()
    // console.log(favicon)
    const dataForm = new FormData(e.target)
    const formValues = []

    for (var val of dataForm.entries()) {
      const fieldId = val[0].split('-')
      formValues.push({
        id: parseInt(fieldId[fieldId.length - 1]),
        value: val[1]
      })
      console.log(val)
    }
  }
  
  return (
    <div className='row'>
      <div className='col-4 offset-1'>
        <h4>SEO Settings</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Title <small className='text-danger'>(*)</small></label>
            <input type='text' name='settings-site-title' className='form-control' onChange={e => setTitle(e.target.value)} />
          </div>
          <div className='form-group'>
            <label>Business Slogan</label>
            <input type='text' name='settings-site-slogan' className='form-control' onChange={e => setSlogan(e.target.value)} />
            <div className='form-group__messages'>
              <small className='form-text text-muted'>It will be appended to the title.</small>
            </div>
          </div>

          <div className='form-group'>
            <label>Meta description <small className='text-danger'>(*)</small></label>
            <textarea name='settings-site-description' className='form-control' rows='5' onChange={e => setMetaDescription(e.target.value)} />
            <div className='form-group__messages'>
              <small className='form-text text-muted'>Describe your business using the right keywords that most identify it and using between ~120 and 158 characters.</small>
            </div>
          </div>

          <div className='row'>
            <div className='col-6'>
              <label>Favicon</label>
              <div className='custom-file'>
                <input type='file' className='custom-file-input' id='settings-site-favicon' name='settings-site-favicon' onChange={handleFaviconUpload} />
                <label className='custom-file-label' htmlFor='settings-site-favicon'>Choose file</label>
              </div>
              <div className='form-group__messages'>
                <small className='form-text text-muted'>Prepended to the title on mobile devices.</small>
              </div>
            </div>
            <div className='col-6'>
              <label>Meta default image</label>
              <div className='custom-file'>
                <input type='file' className='custom-file-input' id='settings-meta-image' name='settings-meta-image' />
                <label className='custom-file-label' htmlFor='settings-meta-image'>Choose file</label>
              </div>
              <div className='form-group__messages'>
                <small className='form-text text-muted'>Used to share on social media.</small>
              </div>
            </div>
            <div className='col-12 mt-5'>
              <button className='btn btn-primary'>Save settings</button>
            </div>
          </div>
        </form>
      </div>
      <aside className='col-5 offset-1'>
        <GoogleSnippet favicon={favicon} title={title} slogan={slogan} url='www.mywebsite.com' description={metaDescription} />
        <BrowserTabSnippet favicon={favicon} title={title} slogan={slogan} url='www.mywebsite.com' />
        <SocialSnippet favicon={favicon} title={title} slogan={slogan} url='www.mywebsite.com' description={metaDescription} />
      </aside>
    </div>
  );
}
