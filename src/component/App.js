import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import * as Actions from "../store/actions"
import { Navbar, NavbarMob } from "./navbar"

const App = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.login());
  }, [])


  const data = useSelector(({ authReducer }) => authReducer.myData)
  const data2 = useSelector(({ userReducer }) => userReducer.myData)


  return (
    <div>

      {data}  <br />
      {data2}
      <Navbar />
      <NavbarMob />

    </div>
  )
}

export default App;
