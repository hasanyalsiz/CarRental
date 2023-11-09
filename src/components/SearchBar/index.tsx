import { useMemo, useState } from 'react';
import ReactSelect from 'react-select';
import { makes } from '../../constants';
import { OptionType } from '../../types';
import { useSearchParams } from 'react-router-dom';

type ButtonProps = {
  styling: string;
};

// aynı dosyadaki 2. bileşen
const SearchButton = ({ styling }: ButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" width={40} height={40} />
    </button>
  );
};

const SearchBar = () => {
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');

  const [params, setParams] = useSearchParams();

  // eventlerde parametrelin tipini kendimiz tanımlyamıyacağımzdan (çok fazla veri)
  // react ta yerleşik olarak bulunan tipleri kullanırız
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //url'e marke ve model'i query param olarak ekle
    setParams({
      make: make.toLowerCase(),
      model: model.toLowerCase(),
    });
  };

  // her render sırasında tekrardan hesaplmanın önüne
  // geçmek için ilk hesaplmanın sonucnu ara bellekte tutuyoruz
  // react her render sırasında bilgi oradan alıyor
  const options: OptionType[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    [makes]
  );

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item text-black">
        <ReactSelect
          onChange={(e) => e && setMake(e.value)} // e geldiyse o zaman state'i güncelle
          options={options}
          className="w-full"
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <img
          width={25}
          className="absolute ml-4"
          src="/model-icon.png"
        />
        <input
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input rounded text-black"
          type="text"
          placeholder="e.g:Civic"
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <SearchButton styling="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
