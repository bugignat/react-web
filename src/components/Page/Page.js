import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../Footer/Footer';
import s from './Page.styl';

class Page extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <main className={s.container}>
        {children}
        <Helmet title={title} />
        <Footer />
      </main>
    );
  }
}

export default Page;
