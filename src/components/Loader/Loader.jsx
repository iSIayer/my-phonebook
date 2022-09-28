import { RotatingLines } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';
export const Loader = () => {
  return (
    <Spinner>
      <div>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    </Spinner>
  );
};
