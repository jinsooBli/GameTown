import "./Introduce1.css"
import IntroduceListItem from './IntroduceListItem';
import React from 'react';

const ItemList = ({items}) => {
  return (
      <div>
        <ul>
          {items.map((item) => {
            return (
                <li key={item.aid}>
                  <IntroduceListItem item={item}/>
                </li>
            );
          })}
        </ul>
      </div>
  )
}

export default ItemList;