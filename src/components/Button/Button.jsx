import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

export const Button = ({ loadMore, text, isLoading }) => {
  return (
    <>
      {!isLoading && (
        <LoadButton onClick={loadMore} type="button">
          {text}
        </LoadButton>
      )}
    </>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
