import {
  Experience,
  Feedback,
} from '../FeedbackOptions/FeedbackOptions.styled';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <form>
      <Experience name="Experience" onClick={onLeaveFeedback} multiple>
        {options.map((option, idx) => <Feedback value={option} key={idx}>{option}</Feedback>)}
      </Experience>
    </form>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
