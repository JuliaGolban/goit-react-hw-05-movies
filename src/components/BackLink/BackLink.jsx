import { useLocation } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { GoBack } from './BackLink.styled';

export const BackButton = ({ children }) => {
  const { state } = useLocation();
  const backLinkHref = state?.from ?? '/movies';

  // if (!state?.from) {
  //   return null;
  // }

  return (
    <GoBack to={backLinkHref}>
      <HiArrowLeft size="10" />
      {children}
    </GoBack>
  );
};
