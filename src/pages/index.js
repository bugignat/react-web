import loadable from 'loadable-components';

const Home = loadable(() => import('./Home'));
const About = loadable(() => import('./About'));
const Contacts = loadable(() => import('./Contacts'));
const Terms = loadable(() => import('./Terms'));
const NotFound = loadable(() => import('./NotFound'));

export { Home, About, Contacts, Terms, NotFound };
