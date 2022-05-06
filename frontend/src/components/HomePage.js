import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editHorses } from '../store/horses';
import { Modal } from '../../context/Modal';

export default function Horses() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState();
    
    const horses = useSelector(state => state.horses);
    
    const takenHorses = horses.filter(horse => horse.bettor);
    const availableHorses = horses.filter(horse => !horse.bettor);

    useEffect(() => {
        dispatch(editHorses(horse.bettor));
    }, [horse.bettor]);

    return (
        <div id='home-page-background'>
            <div className='taken-horse-list'>
                    {takenHorses && takenHorses.map(horse => {
                        return (
                            <>
                                <div className='taken-horse'>{horse.bettor}: {horse.name}</div>
                            </>
                        )
                    })}
            </div>
            <div className='available-horselist'>
                    {availableHorses && availableHorses.map(horse => {
                        return (
                            <>
                                <div className='available-horse'>{horse.name}</div>
                                <button onClick={() => setShowModal(true)}>I want this one!</button>
                            </>
                        )
                    })}
            </div>
        </div>
    )
}