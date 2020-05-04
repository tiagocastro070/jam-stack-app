import React from 'react'
import { Switch } from 'react-router-dom'

import ProtectedRoute from '../ProtectedRoute'
import Dashboard from '../Dashboard'
import Users from '../../Pages/Users'
import Settings from '../../Pages/Settings'

export default function Body() {
  return (
    <div className="body">
      <Switch>
        <ProtectedRoute path="/dashboard" exact component={Dashboard} />
        <ProtectedRoute path="/dashboard/users" component={Users} />
        <ProtectedRoute path="/dashboard/settings" component={Settings} />
      </Switch>
    </div>
  );
}
