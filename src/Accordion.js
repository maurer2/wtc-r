import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from'./Accordion.module.css';

const Accordion = (props) => {
  const { accordionData, activeAccordionEntry, handleUpdateActiveAccordionEntry } = props;

  const toggleEntry = (event, index) => {
    event.preventDefault();

    handleUpdateActiveAccordionEntry(index);
  }

  return (
    <dl className={ styles.accordion }>
      {
        accordionData.map((entry, index) => {
          const isActiveEntry = activeAccordionEntry === index;

          return (
            <Fragment key={ entry.id }>
              <dt
                className={ classNames(
                  [styles.title],
                  {
                    [`${styles['title--is-active']}`]: isActiveEntry
                  },
                )}
                aria-expanded={ isActiveEntry }
              >
                <a
                  href="/"
                  className={ styles['title-link'] }
                  onClick={ (event) => toggleEntry(event, index) }
                >
                  { entry.question }
                </a>
              </dt>
              <dd className={ classNames(
                  [styles.answer],
                  {
                    [`${styles['answer--is-visible']}`]: isActiveEntry,
                  }
                )}
              >
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