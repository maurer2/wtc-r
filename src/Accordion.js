import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from'./Accordion.module.css';

const Accordion = (props) => {
  const { accordionData, activeAccordionEntry, handleUpdateActiveAccordionEntry } = props;

  return (
    <dl className={ styles.accordion }>
      {
        accordionData.map((entry, index) => {
          const isActiveEntry = activeAccordionEntry === index;

          return (
            <Fragment key={ entry.id }>
              <dt
                className={ `${styles.title} ${isActiveEntry ? styles['title--is-active'] : ''} ` }
                onClick={ () => handleUpdateActiveAccordionEntry(index) }
              >
                { entry.question }
              </dt>
              <dd className={ `${styles.answer} ${isActiveEntry ? styles['answer--is-visible'] : ''} ` }>
                { entry.answer }
              </dd>
            </Fragment>
          )
        })
      }
    </dl>
  );
};

Accordion.propTypes = {
  accordionData: PropTypes.array,
  activeAccordionEntry: PropTypes.number,
  handleUpdateActiveAccordionEntry: PropTypes.func,
}

export default Accordion;