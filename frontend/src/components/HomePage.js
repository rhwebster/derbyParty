import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';

export default function Horses() {
    const dispatch = useDispatch();
    
    const horses = useSelector(state => state.horses);
    
    const takenHorses = horses.filter(horse => horse.bettor);
    const availableHorses = horses.filter(horse => !horse.bettor);

    return (
        <div id='home-page-background'>
            <div className='taken-horse-list'>
                <div className='placeholder'>
                    {takenHorses && takenHorses.map(horse => {
                        return (
                            <Horse />
                        )
                    })}
                    {availableHorses && availableHorses.map(horse => {
                        return (
                            <Horse />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}