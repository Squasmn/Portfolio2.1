import "./past.style.scss";
import PropTypes from "prop-types";

function PastComponent() {
  return (
    <div className="past-container">
      <div className="past-content-1">
        <h2>Previous professional life</h2>
        <p>
          Before my venture into webdevelopment, I used to work as a numismatic
          (coin expert) for a well reknown, international auction house in my
          city of origin, Düsseldorf.
        </p>
        <p>
          I did an apprenticeship as clerk for office management with this
          employer. Thereby already being heavily involved in the auction
          management, for periods leading the department.
        </p>
        <p>
          In consequence, I was offered a permanent position as a numismatic.
          Quickly climbing up the internal ladder, I was soon responsible for
          the entire numismatic department as a stand-in. I was in charge of the
          aquisition of new items, the creation of the auction catalogues and
          for the customer service.
        </p>
        <p>
          I acquired an extra qualification in international marketing and sales
          management, which drew me towards webdevelopment as a new carreer
          path.
        </p>
      </div>
      <div className="past-content-2">
        <h2>Skillsets aquired</h2>
        <div className="past-content-2-1">
          <ul>
            <h3>Numismatics</h3>
            <li>
              evaluation of coins, medals and banknotes for auction and purchase
            </li>
            <li>identifying fakes</li>
            <li>appropriate description and categorization</li>
            <li>creation of print and online catalogues</li>

            <h4>Fields of Expertise:</h4>

            <li>German coins and medals, especially since 1871</li>
            <li>Modern world coins</li>
            <li>Buillon coinage</li>

            <h3>Office management</h3>
            <li>customer service</li>

            <li>Invoices</li>
            <li>international shipping</li>
            <li>international marketing</li>
            <li>sales management</li>
            <h3>Languages</h3>
            <li>German: native</li>
            <li>English: fluent</li>
            <li>French: basic</li>
            <li>Spanish: beginner</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

PastComponent.propTypes = {
  title: PropTypes.string,
};

export default PastComponent;
