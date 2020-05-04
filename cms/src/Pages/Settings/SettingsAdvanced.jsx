import React from 'react';

export default function SettingsAdvanced() {
  return (
    <div className='col-10 offset-1'>
      <h4>Advanced Settings <span role='img' aria-label='Attention'>🛑</span></h4>
      <hr />
      <div className='card border-transparent'>
        <div className='card-body'>
          <h5 className='card-title mb-2'>Maintenance Mode</h5>
          <p className='card-text'>The maintenance mode allows you to display a user-friendly notice to your users. <strong>This option will hide all your website content</strong>.</p>
          <div className='custom-control custom-switch'>
            <input type='checkbox' className='custom-control-input' id='maintenanceSwitch' />
            <label className="custom-control-label" htmlFor="maintenanceSwitch">Enable / disable maintenance mode.</label>
          </div>
        </div>
      </div>
    </div>
  );
}
