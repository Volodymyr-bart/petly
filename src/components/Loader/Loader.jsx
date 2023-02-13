import { Oval } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderStyled>
            <Oval
  ariaLabel="loading-indicator"
  height={150}
  width={150}
  strokeWidth={1}
  strokeWidthSecondary={1}
  color="rgb(239 134 54)"
  secondaryColor="white"
/>

        </LoaderStyled>
        
    );
}
