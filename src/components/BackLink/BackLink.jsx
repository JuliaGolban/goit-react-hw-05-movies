import { useLocation } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { GoBack } from './BackLink.styled';

export const BackButton = ({ children }) => {
  const { state } = useLocation();

  if (!state?.from) {
    return null;
  }

  return (
    <GoBack to={state.from}>
      <HiArrowLeft size="10" />
      {children}
    </GoBack>
  );
};