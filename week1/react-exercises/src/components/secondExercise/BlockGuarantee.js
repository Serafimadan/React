import React from 'react';
import Guarantee from './Guarantee';
import picChat from '../source/chat.png';
import picCoin from '../source/coin.png';
import picDelivery from '../source/f-delivery.png';

const guaranteesArray = [
    {
        id: 1,
        img: picChat,
        title: 'Free shipping',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        img: picCoin,
        title: '100% Money back',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 3,
        img: picDelivery,
        title: 'Online support 24/7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
];

const BlockGuarantee = () => {
    const getGuaranteesList = guaranteesArray.map(({ id, img, title, description }) => {
        return (
            <Guarantee key={ id } picture = { img } title = { title } description = { description }/>
        );
    });
    return (
        <div className = 'container'>
            <h2>Second exercise!</h2>
            <div className = 'blocks-container'> 
                { getGuaranteesList }
            </div>
        </div>
    )
}
export default BlockGuarantee;