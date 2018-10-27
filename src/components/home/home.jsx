import React from 'react';
// import {connect} from 'react-redux';

import Header from '../header/header.jsx';

import './home.scss';

class HomePage extends React.Component {
  render() {
    return <React.Fragment>
        <section id="hero-block">
          <div className="cta-block">
            <h1>Will you be a part of
your community?</h1>
            <p>Fighting childhood hunger starts with schools…</p>
            <p>… and ends with a vibrant and supportive community.</p>
            <a href="mailto:hello@nourimeals.com">
              <button className="cta-btn">connect</button>
            </a>
          </div>
        </section>
        <section id="home-quotes">
          <div className="white-overlay quote-content">
            <blockquote cite="https://www.nokidhungry.org/who-we-are/hunger-facts">More than 13 million children in the US live in ‘food insecure’ homes… In the US, 1 in 6 children face hunger.<cite> - nokidhungry.org</cite></blockquote>
            <blockquote cite="https://www.northwestharvest.org/wa-hunger-facts">1 in 5 kids in Washington state lives in a household that struggles to put food on the table. The majority of working-age Washingtonians who live in poverty are actively working or looking for work.<cite> - northwestharvest.org</cite></blockquote>
          </div>
        </section>
      </React.Fragment>
  }
}

export default HomePage;