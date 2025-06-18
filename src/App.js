import logo from './logo.svg';
import './App.css';
import Item from './component/Item';
import ItemDate from './component/ItemDate';

function App() {
  const Response=[
    {
    itemName:"Surf Excel",
    itemdte:"17",
    itemmonth:"june",
    itemyear:"2009"
  },
  {
    itemName:"Tide",
    itemdte:"15",
    itemmonth:"may",
    itemyear:"2008"
  },
  {
    itemName:"Rin",
    itemdte:"24",
    itemmonth:"august",
    itemyear:"2015"
  }
];
  return (
    
  <div>
    <Item name={Response[0].itemName}>  </Item> 
    <Item name={Response[1].itemName}>  </Item> 
    <Item name={Response[2].itemName}>  </Item> 


    <ItemDate day={Response[0].itemdte} month={Response[0].itemmonth} year={Response[0].itemyear}> </ItemDate>
    <ItemDate day={Response[1].itemdte} month={Response[1].itemmonth} year={Response[1].itemyear}> </ItemDate>
    <ItemDate day={Response[2].itemdte} month={Response[2].itemmonth} year={Response[2].itemyear}> </ItemDate>

    
    <div className="App">hey hello </div>
     </div>
  );
}

export default App;
