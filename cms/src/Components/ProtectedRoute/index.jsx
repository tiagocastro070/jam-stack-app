import React from 'react';
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute({component: Component, ...rest}) {
  const myToken = localStorage.getItem('token')
  return (
    <Route {...rest} render={(props) => myToken ? <Component {...props} /> : <Redirect to='/login' />} />
  )
}
