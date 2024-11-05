const Footer = ({ copyright, links }) => (
  <footer>
    <p>{copyright}</p>
    <ul>
      {links.map((link) => (
        <li key={link}>{link}</li>
      ))}
    </ul>
  </footer>
);

export default App;
