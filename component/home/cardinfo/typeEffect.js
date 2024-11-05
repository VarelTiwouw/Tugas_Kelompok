const TypeEffect = ({ types, effectiveness }) => (
  <div className="type-effect">
    <div className="types">
      {types.map((type) => (
        <span key={type}>{type}</span>
      ))}
    </div>
    <div className="effectiveness">
      {effectiveness.strong.map((effect) => (
        <p key={effect}>{effect}</p>
      ))}
    </div>
  </div>
);
