import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Swiper from 'swiper/dist/js/swiper.min';
import { Auth } from '../../actions/index';
import Page from '../../components/Page/Page';
import s from './Home.styl';

import mp4Video from '../../assets/videos/video.mp4';
import webmVideo from '../../assets/videos/video.webm';

class Home extends React.Component {

  swiper = null;

  componentDidMount() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      preloadImages: false,
      lazy: true,
      loop: true,
    })
  }

  componentWillUnmount() {
    this.swiper.destroy();
  }

  render() {
    return (
      <Page title="Home">
        <div className={s.gallery} />
        <section className={s.section1}>
          <div className={s.sectionWrapper}>
            <video className={s.video} loop muted playsInline autoPlay>
              <source src={mp4Video} />
              <source src={webmVideo} />
            </video>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img data-src="https://picsum.photos/300/300/?image=382"
                       data-srcset="https://picsum.photos/3000/3000/?image=382"
                       className="swiper-lazy"
                       alt="" />
                  <div className="swiper-lazy-preloader" />
                </div>
                <div className="swiper-slide">
                  <img data-src="https://picsum.photos/300/300/?image=383"
                       data-srcset="https://picsum.photos/3000/3000/?image=383"
                       className="swiper-lazy"
                       alt="" />
                  <div className="swiper-lazy-preloader" />
                </div>
                <div className="swiper-slide">
                  <img data-src="https://picsum.photos/300/300/?image=384"
                       data-srcset="https://picsum.photos/3000/3000/?image=384"
                       className="swiper-lazy"
                       alt="" />
                  <div className="swiper-lazy-preloader" />
                </div>
              </div>
              <div className="swiper-pagination" />
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
            </div>
            <h1 className={s.title}>Home</h1>
            <p>This is the Home page</p>
            {this.props.token && <h3>{this.props.token}</h3>}
            <button onClick={this.props.dispatchLogin}>Login</button>
            <button onClick={this.props.dispatchLogout}>Logout</button>
          </div>
        </section>
      </Page>
    );
  }
}


const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: bindActionCreators(Auth.login, dispatch),
  dispatchLogout: bindActionCreators(Auth.logout, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
