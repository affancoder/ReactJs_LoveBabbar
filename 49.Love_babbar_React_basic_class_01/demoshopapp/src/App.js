import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {

  const response = [
    {
      itemName : "Nirma",
      itemDate : "41",
      itemMonth : "jan",
      itemyear : "2024"
    },
    {
      itemName : "surf excel",
      itemDate : "25",
      itemMonth : "july",
      itemYear : "2054"
    },
    // {
    //   itemName : "555",
    //   itemDate : "23",
    //   itemMonth : "nov",
    //   itemYear : "2030"
    // },
  ]

  return (
    <div>
      <Card>
      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
      </Card>

      <div className="App">MD Affan Asghar</div>
    </div>
  );
}

export default App;
