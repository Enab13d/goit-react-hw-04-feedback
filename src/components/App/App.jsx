import { Component } from 'react';
import { Wrapper } from './App.styled';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = e => {
    e.preventDefault();
    const value = e.target.value;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };
  countTotalFeedback = (good, neutral, bad) =>
    [good, neutral, bad].reduce((acc, e) => acc + e);
  countPositiveFeedbackPercentage = (good, total) => Math.round((good / total) * 100);
  render() {
    const { handleClick, countTotalFeedback, countPositiveFeedbackPercentage } =
      this;
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback(good, neutral, bad);
    const positivePercentage = countPositiveFeedbackPercentage(good, total);
    return (
      <Wrapper>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions options={Object.keys(this.state)}
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
  }
}
