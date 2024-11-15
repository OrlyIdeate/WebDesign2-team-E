// 上野 迅

import React from 'react';
import { Card } from './card';
export function CardStack() {
    return (
        <div style={{ width: '430px', height: '430px', margin: '0', border: 'solid 1px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Card imageSrc="./images/product/apple.jpg" />
                <Card imageSrc="./images/product/apple.jpg" />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Card imageSrc="./images/product/apple.jpg" />
                <Card imageSrc="./images/product/apple.jpg" />
            </div>
        </div>
    );
}