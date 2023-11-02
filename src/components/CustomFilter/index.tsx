import Select from 'react-select';
import { OptionType } from '../../types';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type CustomFilterType = {
  title: string;
  options: OptionType[];
};

const CustomFilter = ({ title, options }: CustomFilterType) => {
  const [selected, setSelected] = useState<OptionType | null>();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    // url'e eklincek parametreyi belirleme
    const key = title === 'Yakıt Tipi' ? 'fuel' : 'year';

    // eğerki bir değer seçildyse onu url'e ekle
    if (selected?.value) {
      params.set(key, selected.value.toLowerCase());
    } else {
      //eğerki seçilen seçeneğin value'su boşsa url'den parametreyi kaldır
      params.delete(key);
    }

    // url'i güncelle
    setParams(params);
  }, [selected]);

  return (
    <div className="w-fit">
      <Select
        onChange={(e) => setSelected(e)}
        placeholder={title}
        options={options}
        className="text-black min-w-[100px]"
      />
    </div>
  );
};

export default CustomFilter;
