import "./Item.css";

function Item(props) {
  const ItemName = props.name;
  return (
    <div>
      <p className="hero">{ItemName}</p>
    </div>
  );
}

export default Item; //exporting this js 
