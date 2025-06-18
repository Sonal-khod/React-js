import './ItemDate.css'
function ItemDate(prop ){
    const dd=prop.day;
    const mth=prop.month;
    const saal=prop.year;
     return(
     <div className="Item_dt">
            <div>{dd}</div>
            <div>{mth}</div>
            <div>{saal}</div>
     </div>
    )
}
export default ItemDate;