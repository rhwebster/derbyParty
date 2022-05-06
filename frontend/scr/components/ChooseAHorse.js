import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ChooseAHorse = ({ horses }) => {
    const horses = useSelector(state => state.horses);
    const dispatch = useDispatch();

    const [bettor, setBettor] = useState(horse.bettor);

    const updateBettor = (e) => setBettor(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...horse,
            bettor
        };

        const updatedHorse = await dispatch(updateHorse(payload));

        if (updatedHorse) {
            hideform();
        }

        const handleCancel = (e) => {
            e.preventDefault();
            hideform();
        }

        return ()
    }
}