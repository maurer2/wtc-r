import React, { useEffect, useState } from 'react';
import Accordion from './Accordion';

import style from './App.module.css';

function App() {
  const [showAccordion, setShowAccordion] = useState(false);
  const [accordionData, setAccordionData] = useState({});
  const url = 'http://localhost:3001/accordion';

  const fetchData = () => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        const { faqs } = data;

        if (faqs.length === 0) {
          return;
        }

        setAccordionData(faqs);
        setShowAccordion(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.app}>
      { showAccordion && (<Accordion accordionData={accordionData} />)}
    </div>
  );
}

export default App;
