import React, { useEffect } from 'react';
import { useDispatch } from "react-redux"
import * as Actions from "../store/actions"
import { Navbar, NavbarMob } from "./navbar"

const App = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.login());
  }, [])
  return (
    <div>
      <Navbar/>
      <NavbarMob/>

    </div>
  )
}

export default App;
