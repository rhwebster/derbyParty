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