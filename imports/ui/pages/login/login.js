import { Meteor } from 'meteor/meteor';
import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

const Login = () => {
  const login = () => {
    Meteor.loginWithGitlab(err => (err ? FlowRouter.go('Game.LoginError') : FlowRouter.go('Home')));
  };

  const isAlreadyLoggedIn = Meteor.loggingIn() || Meteor.userId();
  if (isAlreadyLoggedIn) {
    FlowRouter.go('Home');
    return null;
  }

  return (
    <div id="login">
      <button className="btn btn-lg btn-warning btn-block" onClick={login}>
        <i className="fa fa-gitlab fa-2x pull-right" aria-hidden="true" />
        <span style={{ fontSize: 'large', paddingTop: '5px', verticalAlign: 'middle' }}>התחבר</span>
      </button>
    </div>
  );
};

export default Login;
