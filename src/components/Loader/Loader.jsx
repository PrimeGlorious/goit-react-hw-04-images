import { Audio } from 'react-loader-spinner';

export function Loader() {
  return (
    <div>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClassName
      />
    </div>
  );
}
