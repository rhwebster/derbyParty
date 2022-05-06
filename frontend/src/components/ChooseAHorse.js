import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHorses, editHorse } from '../store/horses';

const ChooseAHorse = ({ horses, hideform }) => {
    const horses = useSelector(state => state.horses.horseList);
    const dispatch = useDispatch();

    const [bettor, setBettor] = useState(horse.bettor);

    const updateBettor = (e) => setBettor(e.target.value);

    useEffect(() => {
        dispatch(getHorses());
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...horse,
            bettor
        };

        const updatedHorse = await dispatch(editHorse(payload));

        if (updatedHorse) {
            hideform();
        }

        const handleCancel = (e) => {
            e.preventDefault();
            hideform();
        };
    };

    return (
        <section className='choose-a-horse-form'>
            <form onSubmit={handleSubmit}>
                <input
                    type='bettor'
                    placeholder='Name'
                    required
                    value={bettor}
                    onChange={updateBettor} />
            </form>
            <button type="submit">This Is My Horse</button>
            <button type="button" onClick={handleCancel}>I Changed My Mind</button>
        </section>
    );
};

export default ChooseAHorse;