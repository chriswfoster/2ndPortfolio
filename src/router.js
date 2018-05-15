import React from "react"
import { Switch, Route } from "react-router-dom"

//import Components to be rendered here
import Home from "./components/Home"

export default (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
)
