import React from 'react';

export function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <div>
      <ul>
        <li>
          Good: <span>{good}</span>
        </li>
        <li>
          Neutral: <span>{neutral}</span>
        </li>
        <li>
          Bad: <span>{bad}</span>
        </li>
        <li>
          Total: <span>{total}</span>
        </li>
        <li>
          Positive Feedback: <span>{percentage}%</span>
        </li>
      </ul>
    </div>
  );
}
