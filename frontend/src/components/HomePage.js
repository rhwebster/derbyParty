import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHorses } from '../store/horses';
import { Modal } from '../../context/Modal';
import { useParams } from 'react-router-dom';
import ChooseAHorse from './ChooseAHorse';

export default function Horses() {
    const dispatch = useDispatch();

    const { horseId } = useParams();
    
    const horses = useSelector(state => 
        state.horses.horseList.map(horseId => state.horses[horseId])
    );
    const [showModal, setShowModal] = useState(false);
    
    const takenHorses = horses.filter(horse => horse.bettor);
    const availableHorses = horses.filter(horse => !horse.bettor);

    useEffect(() => {
        dispatch(getHorses());
    }, []);

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
            {showModal && (
                <Modal onClose={() => setShowModal(false)} name='choose-a-horse'>
                    <ChooseAHorse
                        horses={horses}
                    />
                </Modal>
             
            )}
        </div>
    )
}