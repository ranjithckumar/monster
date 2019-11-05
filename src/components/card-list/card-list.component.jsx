import React from 'react';
import { Card} from '../card/card.component'
import './card-list.styles.css';

export const CardList= props => (
  <div className="card-list">
      {props.monster.map(monster=>(
        // here we calling card component by passing monster state as props
        <Card key={monster.id} monster={monster} />
    ))}
    
  </div>
);