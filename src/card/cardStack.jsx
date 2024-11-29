// 上野 迅

import React from 'react';
import { Card } from './card';
export function CardStack(props) {
    return (
        <div style={{ width: '350px', height: '350px', margin: '0 5px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '0'}}>{props.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <Card imageSrc={props.image1} name={props.name1} price={props.price1} />
                <Card imageSrc={props.image2} name={props.name2} price={props.price2} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <Card imageSrc={props.image3} name={props.name3} price={props.price3} />
                <Card imageSrc={props.image4} name={props.name4} price={props.price4} />
            </div>
        </div>
    );
}