import React from 'react';
import Helmet from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Auth } from '../actions';

const Home = (props) => (
  <div>
    <h1>Home</h1>
    <h2>
      This is the Home page
    </h2>
    {props.token && <h3>{props.token}</h3>}
    <button onClick={props.dispatchSetToken}>Set token</button>
    <button onClick={props.dispatchClearToken}>Clear token</button>
    <Helmet title="Home" />
  </div>
);


const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetToken: bindActionCreators(Auth.setToken, dispatch),
  dispatchClearToken: bindActionCreators(Auth.clearToken, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
