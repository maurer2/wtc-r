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
    {
      answer: 'Answer 2',
      id: '2',
      question: 'Question 2',
    },
  ];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Accordion accordionData={accordionData} />);
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();

    const firstTitle = wrapper.find('.title-link').first();

    firstTitle.simulate('click', { preventDefault: () => {} });

    expect(wrapper).toMatchSnapshot();
  });

  test('has wrapper class', () => {
    expect(wrapper.find('.accordion').exists()).toBe(true);
  });

  test('has question and answers', () => {
    expect(wrapper.find('.title').exists()).toBe(true);
    expect(wrapper.find('.answer').exists()).toBe(true);
  });

  test('each question has an answer answers', () => {
    const lengthQuestions = wrapper.find('.title').length;
    const lengthAnswers = wrapper.find('.answer').length;

    expect(lengthQuestions).toBe(lengthAnswers);
  });

  test('clicking on a title activates entry', () => {
    let firstQuestion = wrapper.find('.title').first();
    const firstTitle = wrapper.find('.title-link').first();

    expect(firstTitle.exists()).toBe(true);
    expect(firstQuestion.hasClass('title--is-active')).toBe(false);

    firstTitle.simulate('click', { preventDefault: () => {} });

    wrapper.update();

    firstQuestion = wrapper.find('.title').first();

    expect(firstQuestion.hasClass('title--is-active')).toBe(true);
  });
});
