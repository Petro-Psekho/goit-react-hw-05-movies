import { Puff } from 'react-loader-spinner';

export const LoaderSpinner = () => {
  return (
    <div>
      <Puff
        height="80"
        width="80"
        radius={1}
        color="orangered"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
