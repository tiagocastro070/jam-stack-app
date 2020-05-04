import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'


import SettingsSeo from './SettingsSeo'
import SettingsSocial from './SettingsSocial'
import SettingsCustom from './SettingsCustom'
import SettingsAdvanced from './SettingsAdvanced'

export default function Settings() {
  return (
    <Switch>
      <Route path='/dashboard/settings' exact render={() => <Redirect to='/dashboard/settings/seo' />} />
      <Route path='/dashboard/settings/seo' exact component={SettingsSeo} />
      <Route path='/dashboard/settings/social' exact component={SettingsSocial} />
      <Route path='/dashboard/settings/custom' exact component={SettingsCustom} />
      <Route path='/dashboard/settings/advanced' exact component={SettingsAdvanced} />
    </Switch>
    
  );
}
