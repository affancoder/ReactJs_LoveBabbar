import "./ItemDate.css";

function ItemDate() {
  const date = 31;
  const month = "july";
  const year = 2006;

  return (
    <div className = "mfg-date">

      <span>{date}</span>
      <span>{month}</span>
      <span>{year}</span>

    </div>
  );
}

export default ItemDate;
