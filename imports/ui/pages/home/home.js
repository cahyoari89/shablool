import React from 'react';
import '../../components/main-form/main-form.js';

let Home = () => (
    <div id="home">
        <div className="container">
            <div className="row">
                <div id="logo-area">
                    <h1>צהו"ל!</h1>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-2 col-xl-offset-5 col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 col-xs-12">
                <div>
                    <MainForm />
                </div>
            </div>
        </div>
        <p id="center-home-massage">
            <a href="/Manage">נהל או צור משחק חדש</a>
        </p>
    </div>
);
