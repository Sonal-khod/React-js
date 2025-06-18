import './Item.css'
function Item(prop) {
   const itemm=prop.name;
   return(
   <p className='orange' >{itemm}</p> 
)
}
export default Item;