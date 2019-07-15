import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Accordion.module.css';

const Accordion = ({ accordionData }) => {
  const [activeEntry, updateActiveEntry] = useState(-1);

  const toggleEntry = (event, index) => {
    event.preventDefault();

    if (activeEntry === index) {
      updateActiveEntry(-1);
      return;
    }

    updateActiveEntry(index);
  };

  const Key = ({ isActiveEntry, children }) => (
    <dt
      className={classNames(
        [styles.title],
        {
          [`${styles['title--is-active']}`]: isActiveEntry,
        },
      )}
      aria-expanded={isActiveEntry}
    >
      { children }
    </dt>
  );

  const TitleLink = ({ entry, index }) => (
    <a href="/" className={styles['title-link']} onClick={event => toggleEntry(event, index)}>
      { entry.question }
    </a>
  );

  const Value = ({ entry, isActiveEntry }) => (
    <dd className={classNames(
      [styles.answer],
      {
        [`${styles['answer--is-visible']}`]: isActiveEntry,
      },
    )}
    >
      { entry.answer }
    </dd>
  );

  return (
    <dl className={styles.accordion}>
      {
        accordionData.map((entry, index) => {
          const isActiveEntry = (activeEntry === index);

          return (
            <Fragment key={entry.id}>
              <Key isActiveEntry={isActiveEntry}>
                <TitleLink entry={entry} index={index} />
              </Key>
              <Value entry={entry} isActiveEntry={isActiveEntry} />
            </Fragment>
          );
        })
      }
    </dl>
  );
};

Accordion.propTypes = {
  accordionData: PropTypes.arrayOf(PropTypes.object.isRequired),
};

Accordion.defaultProps = {
  accordionData: [],
};

export default Accordion;
