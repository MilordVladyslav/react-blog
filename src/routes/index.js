import React from 'react'
import { Content, Topic } from '../pages'
import {
    Switch,
    Route,
  } from "react-router-dom";
export const Routes = () => {
    return (
        <Switch>
          <Route path="/dashboard">
            <Topic></Topic>
          </Route>
          <Route path="/">
            <Content></Content>
          </Route>
        </Switch>
    )
}