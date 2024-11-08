// 上野 迅

import React from 'react';
import { Card } from './card';
export function CardStack() {
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Card imageSrc="./images/product/apple.jpg" />
                <Card imageSrc="./images/product/apple.jpg" />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Card imageSrc="./images/product/apple.jpg" />
                <Card imageSrc="./images/product/apple.jpg" />
            </div>
        </>
    );
}