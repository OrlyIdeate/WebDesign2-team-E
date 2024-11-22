// 上野 迅

import React from 'react';
import { Card } from './card';
export function CardStack(props) {
    return (
        <div style={{ width: '400px', height: '400px', marginLeft: '10', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '0'}}>{props.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Card imageSrc={props.image1} />
                <Card imageSrc={props.image2} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Card imageSrc={props.image3} />
                <Card imageSrc={props.image4} />
            </div>
        </div>
    );
}