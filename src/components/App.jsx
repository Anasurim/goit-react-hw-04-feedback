import PropTypes from 'prop-types';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { useState } from 'react';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = e => {
    const feedbackName = e.target.name;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackName]: prevFeedback[feedbackName] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const positiveFeedback = feedback.good;
    return !totalFeedback
      ? 0
      : Math.round((positiveFeedback / totalFeedback) * 100);
  };

  const feedbackOptions = Object.keys(feedback);
  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          feedbackOptions={feedbackOptions}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!total ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        )}
      </Section>
    </>
  );
}

App.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
};
