const Evolution = ({ stages, conditions }) => (
  <div className="evolution">
    <ul>
      {stages.map((stage) => (
        <li key={stage}>{stage}</li>
      ))}
    </ul>
    <p>{conditions}</p>
  </div>
);
