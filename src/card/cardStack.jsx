// 上野 迅

import React from 'react';
import { Card } from './card';
export function CardStack(props) {
    return (
        <div style={{ width: '350px', height: '350px', margin: '0 auto', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '0'}}>{props.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <Card imageSrc={props.image1} />
                <Card imageSrc={props.image2} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <Card imageSrc={props.image3} />
                <Card imageSrc={props.image4} />
            </div>
        </div>
    );
}