import React, { Component } from 'react';
import Accordion from './Accordion.js';

import style from './App.module.css';

class App extends Component {
  constructor() {
    super();

    this.url = 'http://localhost:3001/accordion';
    this.state = {
      showAccordion: false,
      accordionData: {},
    };
  }

  componentDidMount() {
    fetch(this.url)
      .then(response => response.json())
      .then((data) => {
        const { faqs: accordionData } = data;

        if (accordionData.length === 0) {
          return;
        }

        this.setState({
          showAccordion: true,
          accordionData,
        });
      });
  }

  render() {
    const { showAccordion, accordionData } = this.state;

    return (
      <div className={ style.app }>
        { showAccordion && (
            <Accordion accordionData={ accordionData } />
          )
        }
      </div>
    );
  }
}

export default App;
