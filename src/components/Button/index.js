import PropTypes from 'prop-types';
import Spinner from 'components/Spinner';
import { StyledButton } from './styles';

export default function Button({
  children, type, disabled, isLoading, onClick,
}) {
  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled || isLoading}>
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
};
