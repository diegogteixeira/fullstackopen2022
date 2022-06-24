import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    // <div>{text}: {value}</div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticsLine text="Good" value={good} />
            <StatisticsLine text="Neutral" value={neutral} />
            <StatisticsLine text="Bad" value={bad} />
            <StatisticsLine text="All" value={good + neutral + bad} />
            <StatisticsLine text="Average" value={(good - bad) / (good + neutral + bad)} />
            <StatisticsLine text="Positive" value={`${(good * 100) / (good + neutral + bad)} %`} />
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <h2>Statistics</h2>
      <div>No feedback given</div>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

  return (
    <div>
      <h2>Give feedback</h2>
      <Button text="Good" handleClick={handleClickGood} />
      <Button text="Neutral" handleClick={handleClickNeutral} />
      <Button text="Bad" handleClick={handleClickBad} />
      {/* <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button> */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
