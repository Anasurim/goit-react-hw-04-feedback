import React from 'react';

export function FeedbackOptions({ feedbackOptions, onLeaveFeedback }) {
  return (
    <div>
      {feedbackOptions.map(item => {
        return (
          <button key={item} name={item} onClick={onLeaveFeedback}>
            {item}
          </button>
        );
      })}
    </div>
  );
}
