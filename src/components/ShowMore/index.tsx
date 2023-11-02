import { useSearchParams } from 'react-router-dom';
import CustomButton from '../CustomButton';

const ShowMore = () => {
  const [params, setParams] = useSearchParams();

  // url'den limiti alma
  const limit = Number(params.get('limit')) || 5;

  const handleLimit = () => {
    const newLimit = limit + 5;
    params.set('limit', String(newLimit));
    setParams(params);
  };

  return (
    <div className="w-full flex-center gap-5 my-10">
      {limit < 30 && (
        <CustomButton handleClick={handleLimit} title="Daha Fazla" />
      )}
    </div>
  );
};

export default ShowMore;
