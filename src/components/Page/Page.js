import React from 'react';
import Helmet from 'react-helmet';
import s from './Page.styl';

class Page extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <div className={s.container}>
        {children}
        <Helmet title={title} />
      </div>
    );
  }
}

export default Page;
