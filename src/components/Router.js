//import React, { useState } from "react";
import React from "react";
//import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

// TODO Redirect 모르겠음

const AppRouter = ({refreshUser, isLoggedIn, userObj}) => {
    return (
        <HashRouter>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <div
                style={{
                    maxWidth: 890,
                    width: "100%",
                    margin: "0 auto",
                    marginTop: 80,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Routes>
                {isLoggedIn ? ( 
                    <>
                        <Route path="/" exact={true} element={<Home userObj={userObj} />} />
                        <Route path="/profile" element={<Profile userObj={userObj} refreshUser={refreshUser} />} />
                    </> 
                ) : ( 
                    <Route path="/" element={<Auth />} />
                )}
                </Routes>
            </div>
        </HashRouter>
    );
};

export default AppRouter;


/*
const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? ( 
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                    </> 
                ) : ( 
                    <>
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    </>)
                }
            </Switch>
        </Router>
    );
};
*/