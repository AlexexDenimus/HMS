interface IProps {
  name: string;
  value: string;
}

export const Info = ({ name, value }: IProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <span className="text-sm text-primary-dark-green">{name}</span>
      <p>{value}</p>
    </div>
  );
};
