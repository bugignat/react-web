import React from 'react';
import Helmet from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Auth } from '../actions';
import s from './Home.styl';

const Home = (props) => (
  <div className={s.container}>
    <h1>Home</h1>
    <h2>This is the Home page</h2>
    {props.token && <h3>{props.token}</h3>}
    <button onClick={props.dispatchLogin}>Login</button>
    <button onClick={props.dispatchLogout}>Logout</button>
    <Helmet title="Home" />
  </div>
);


const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: bindActionCreators(Auth.login, dispatch),
  dispatchLogout: bindActionCreators(Auth.logout, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
