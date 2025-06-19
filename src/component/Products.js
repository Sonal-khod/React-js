import React from 'react';
import Card from './Card';
import ProductItem from './ProductItem';
import '/Products.css';
function Products =()=>{
    return(
        <Card className="products">
        <ProductItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
        />
        <ProductItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
        />
        <ProductItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
        />
        <ProductItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
        />
        </Card>
    );
}
export default Products;