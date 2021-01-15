import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arrState = Object.keys(options);
  return (
    <ul className="btnList">
      {arrState.map(el => (
        <li key={el}>
          <button type="button" className="btn" onClick={() => onLeaveFeedback(el)}>
            {el.slice(0, 1).toUpperCase() + el.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  update: PropTypes.func,
};

export default FeedbackOptions;
