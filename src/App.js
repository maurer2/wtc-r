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
      activeAccordionEntry: -1,
    };
    this.updateActiveAccordionEntry = this.updateActiveAccordionEntry.bind(this);
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

  updateActiveAccordionEntry(newActiveAccordionEntry) {
    this.setState((state) => {
      const isSameEntry = state.activeAccordionEntry === newActiveAccordionEntry;

      return {
        activeAccordionEntry: (isSameEntry) ? -1 : newActiveAccordionEntry,
      };
    });
  }

  render() {
    const { showAccordion, accordionData, activeAccordionEntry } = this.state;
    const { updateActiveAccordionEntry } = this;

    return (
      <div className={ style.app }>
        { showAccordion && (
            <Accordion
              accordionData={ accordionData }
              activeAccordionEntry={ activeAccordionEntry }
              handleUpdateActiveAccordionEntry={ updateActiveAccordionEntry }
            />
          )
        }
      </div>
    );
  }
}

export default App;
