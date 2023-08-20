import React, { useState } from "react";
import {Switch, Route, Redirect } from 'react-router-dom';
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import ColorForm from "./ColorForm";

function Routes(){
    

 


    return (
        <Switch>
            <Route exact path={'/color/new'}> <ColorDetails type={"form"} /> </Route>
            <Route exact path={'/color/:color'}> <ColorDetails type={"singleColor"} /> </Route>
            <Route exact path={'/color'}> <ColorDetails type={"colorList"} /></Route>
        </Switch>
        );
}

export default Routes;