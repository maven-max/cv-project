import "./section.css";
function GenInfo() {
  return (
    <div className="sect-container">
      <h2 className="sect-header">General Information</h2>
      <div className="sect-body">
        <p>
          Name: Emmanuel Miezah Egote
          <br />
          Email:{" "}
          <a href="mailto:emmanuelegote@gmail.com">emmanuelegote@gmail.com</a>
          <br />
          Phone: <a href="tel:0504744346">0504744346</a>
        </p>
        <p>
          Result-driven student pursuing Computer Engineering degree with
          excellent organization skills. Strong analytical thinker and problem
          solver quick to learn new skills.
        </p>
      </div>
    </div>
  );
}
export default GenInfo;
