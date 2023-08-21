import { Wrapper } from './App.styled';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification';
import { useState} from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const options = ['good', 'neutral', 'bad'];
  const setValue = value => {
    switch (value) {
      case 'good':
        setGood(value => value + 1);
        break;
      case 'neutral':
        setNeutral(value => value + 1);
        break;
      case 'bad':
        setBad(value => value + 1);
        break;
      default:
        break;
    }
  };

  const handleClick = e => {
    e.preventDefault();
    const value = e.target.value;
    setValue(value);
  };
  const countTotalFeedback = (good, neutral, bad) =>
    [good, neutral, bad].reduce((acc, e) => acc + e);
  const countPositiveFeedbackPercentage = (good, total) =>
    Math.round((good / total) * 100);

  const total = countTotalFeedback(good, neutral, bad);
  const positivePercentage = countPositiveFeedbackPercentage(good, total);

  return (
    <Wrapper>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleClick}
          ></FeedbackOptions>
        }
      />
      <Section
        title="Statistics"
        children={
          total < 1 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )
        }
      />
    </Wrapper>
  );
};
