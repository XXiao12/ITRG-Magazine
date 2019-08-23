import React from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const options = {
      strings: ['What makes workshops <span class="app__text--yellow">better?</span>'],
      typeSpeed: 50,
      backSpeed: 50
    };
    this.typed = new Typed(this.el, options);
  }

  render() {
    const yPosition = window.scrollY;
    console.log('window.scrolly: ', yPosition);
    return (
      <div className="app">
        <div className="app__content app__grid">
          <div className="app__grid--content app__content--main">
            <div className="wrapper" id="top" name="top">
              <h1
                ref={(el) => { this.el = el; }}
              />
              <p className="app__text--subtext ">Over the course of five days, our expert facilitators help you complete a key initiative, work through critical project deliverables, and train your team. We use a learning-based approach to implement Info-Tech methodologies tailored to your unique situation.</p>
              <a href="#why" name="why" className="button">Benefits of workshops</a>
            </div>
          </div>
          <div id="why" name="why" className="app__grid--content">
            <h2>Why workshops?</h2>
            <div className="app__workshop">
              <p className="app__workshop--heading">1. Get 90% of any Project done in 5 Days</p>
              <ul>
                <li>Spend 5 intense and focused days to collapse project timelines and make major project decisions.</li>
                <li>Use our proven and road-tested methodologies to get your project done quickly and effectively.</li>
                <li>Hundreds of project and process workshops available to help with any topic that is important to you.</li>
              </ul>
            </div>
            <div className="app__workshop">
              <p className="app__workshop--heading">2. High Value, Standard US$20,000, No-Hassle Negotiating</p>
              <ul>
                <li>No-hassle negotiating and scoping, always a US$20,000 flat rate across all projects.</li>
                <li>Gain and share expertise over a variety of short, focused engagements, instead of one, longer term consulting project.</li>
                <li>High value engagements not long run-away consulting projects that never end.</li>
              </ul>
            </div>
            <div className="app__workshop">
              <p className="app__workshop--heading">3. An Intense, Collaborative Learning Experience</p>
              <ul>
                <li>Workshop materials have been rigorously road-tested and built on industry best practices.</li>
                <li>Develop and train your team through collaboration with our expert facilitators.</li>
                <li>Extend your team by drawing on our analysts across a wide range of specialties.</li>
              </ul>
            </div>
            <div className="app__footer">
              <div className="app__footer--pagenumber">
                <p>2</p>
              </div>
              <a className="app__footer--up" href="top" name="top">
                <FontAwesomeIcon icon={faChevronUp} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
