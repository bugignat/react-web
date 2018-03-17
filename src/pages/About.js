import React from 'react';
import Helmet from 'react-helmet';
import Block from '../components/Block/Block';

const About = () => (
  <div>
    <h1>About</h1>
    <h2>
      This is the About page
    </h2>
    <table>
      <tbody>
      <tr>
        <td>AM</td>
        <td>Armenia</td>
        <td>+374</td>
      </tr>
      <tr>
        <td>MM</td>
        <td>Burma Myanmar</td>
        <td>+95</td>
      </tr>
      <tr>
        <td>BI</td>
        <td>Burundi</td>
        <td>+257</td>
      </tr>
      <tr>
        <td>KH</td>
        <td>Cambodia</td>
        <td>+855</td>
      </tr>
      <tr>
        <td>CM</td>
        <td>Cameroon</td>
        <td>+237</td>
      </tr>
      <tr>
        <td>CA</td>
        <td>Canada</td>
        <td>+1</td>
      </tr>
      <tr>
        <td>CV</td>
        <td>Cape Verde</td>
        <td>+238</td>
      </tr>
      <tr>
        <td>KY</td>
        <td>Cayman Islands</td>
        <td>+1</td>
      </tr>
      <tr>
        <td>CF</td>
        <td>Central African Republic</td>
        <td>+236</td>
      </tr>
      <tr>
        <td>CL</td>
        <td>Chile</td>
        <td>+56</td>
      </tr>
      </tbody>
    </table>
    <Block />
    <Helmet title="About" />
  </div>
);

export default About;
