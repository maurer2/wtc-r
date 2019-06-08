import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Accordion = (props) => {
  const { accordionData } = props;

  return (
    <dl className="accordion">
      {
        accordionData.map((entry) => {
          return (
            <Fragment key={entry.id}>
              <dt>
                { entry.answer }
              </dt>
              <dd>
                { entry.question }
              </dd>
            </Fragment>
          )
        })
      }
    </dl>
  );
};

Accordion.propTypes = {
  accordionData: PropTypes.array
}

export default Accordion;