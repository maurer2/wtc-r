import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';

describe('Accordion', () => {
  const accordionData = [
    {
      answer: 'Answer 1',
      id: '1',
      question: 'Question 1',
    },
  ];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Accordion accordionData={accordionData} />);
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('has wrapper class', () => {
    expect(wrapper.find('.accordion').exists()).toBe(true);
  });
});
