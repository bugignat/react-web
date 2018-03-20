import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Auth } from '../../actions/index';
import Page from '../../components/Page/Page';
import s from './Home.styl';

const Home = (props) => (
  <Page title="Home">
    <div className={s.gallery} />
    <section className={s.section1}>
      <div className={s.sectionWrapper}>
        <h1 className={s.title}>Home</h1>
        <p>This is the Home page</p>
        {props.token && <h3>{props.token}</h3>}
        <button onClick={props.dispatchLogin}>Login</button>
        <button onClick={props.dispatchLogout}>Logout</button>
        <div className={s.notebook} />
      </div>
    </section>
  </Page>
);


const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: bindActionCreators(Auth.login, dispatch),
  dispatchLogout: bindActionCreators(Auth.logout, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
