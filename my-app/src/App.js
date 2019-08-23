import React from 'react';
import Typed from 'typed.js';
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
    return (
      <div className="app">
        <div className="app__content app__grid">
          <div className="app__grid--content app__content--main">
            <div className="wrapper">
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;


// class TypedReactDemo extends React.Component {
//   componentDidMount() {
//   	// If you want to pass more options as props, simply add
//     // your desired props to this destructuring assignment.
//     const { strings } = this.props;
//     // You can pass other options here, such as typing speed, back speed, etc.
//     const options = {
//     	strings: strings,
//       typeSpeed: 50,
//       backSpeed: 50
//     };
//     // this.el refers to the <span> in the render() method
//     this.typed = new Typed(this.el, options);
//   }

//   componentWillUnmount() {
//   	// Make sure to destroy Typed instance on unmounting
//     // to prevent memory leaks
//     this.typed.destroy();
//   }

//   render() {
//     return (
//       <div className="wrap">
//         <h1>Typed.js</h1>
//         <div className="type-wrap">
//           <span
//             style={{ whiteSpace: 'pre' }}
//             ref={(el) => { this.el = el; }}
//           />
//         </div>
//         <button onClick={() => this.typed.toggle()}>Toggle</button>
//         <button onClick={() => this.typed.start()}>Start</button>
//         <button onClick={() => this.typed.stop()}>Stop</button>
//         <button onClick={() => this.typed.reset()}>Reset</button>
//         <button onClick={() => this.typed.destroy()}>Destroy</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
// 	<TypedReactDemo
//     strings={[
//     	'Some <i>strings</i> are slanted',
//       'Some <strong>strings</strong> are bold',
//       'HTML characters &times; &copy;'
//     ]}
//   />,
//   document.getElementById('react-root')
// );
