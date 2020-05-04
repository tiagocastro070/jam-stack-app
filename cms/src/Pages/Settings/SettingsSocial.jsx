import React from 'react';

export default function SettingsSocial() {
  return (
    <>
      <h4>Social Media</h4>
      <hr />
      <div className='form-group'>
        <label htmlFor='settings-facebook'>Facebook Profile</label>
        <input type='text' name='settings-facebook' id='settings-facebook' className='form-control' placeholder='ex: https://www.facebook.com/tiagocastro070' />
      </div>
      <div className='form-group'>
        <label htmlFor='settings-twitter'>Twitter Account</label>
        <input type='text' name='settings-twitter' id='settings-twitter' className='form-control' placeholder='ex: https://twitter.com/tiago_castro070' />
      </div>
      <div className='form-group'>
        <label htmlFor='settings-instagram'>Instagram Profile</label>
        <input type='text' name='settings-instagram' id='settings-instagram' className='form-control' placeholder='ex: https://www.instagram.com/tiago070/' />
      </div>
      <div className='form-group'>
        <label htmlFor='settings-linkedin'>Linkedin Profile</label>
        <input type='text' name='settings-linkedin' id='settings-linkedin' className='form-control' placeholder='ex: https://www.linkedin.com/in/castrotiago/' />
      </div>
      <div className='mt-3 pt-3' />
      <button className='btn btn-primary'>Save</button>
    </>
  );
}
