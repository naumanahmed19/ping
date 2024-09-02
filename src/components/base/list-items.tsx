type ListItemProps = {
  leading?: React.ReactNode;
  title: React.ReactNode;
  trailing?: React.ReactNode;
};
const ListItem: React.FC<ListItemProps> = ({ leading, title, trailing }) => {
  return (
    <div className="flex items-start justify-start">
      {leading}
      <div className="flex-1 space-y-2 ">
        <div className="flex items-start justify-between">
          {title}
          {trailing && <div className="flex items-center">{trailing}</div>}
        </div>
      </div>
    </div>
  );
};
export default ListItem;
