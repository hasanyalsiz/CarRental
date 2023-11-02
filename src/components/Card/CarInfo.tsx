type InfoProps = {
  icon: string;
  title: string;
};

const CarInfo = ({ icon, title }: InfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img width={25} src={icon} alt="icon" />
      <p className="text-[14px]">{title}</p>
    </div>
  );
};

export default CarInfo;
