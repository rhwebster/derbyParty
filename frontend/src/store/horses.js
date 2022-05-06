const LOAD = 'horses/LOAD';
const EDIT_ONE = 'horses/EDIT_ONE';

const editOneHorse = horse => ({
    type: EDIT_ONE,
    horse
})

const load = horseList => ({
    type: LOAD,
    horseList
})

export const getHorses = () => async dispatch => {
    const res = await fetch(`/api/horses/`);

    if ( res.ok) {
        const horseList = await res.json();
        dispatch(load(horseList));
    }
};

export const editHorse = data => async dispatch => {
    const res = await fetch(`/api/horses/${data.id}/edit`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if(res.ok) {
        const horse = await res.json()
        dispatch(editOneHorse(horse));
        return horse;
    }
};

const sortList = (list) => {
    return list.sort((a, b) => {
        return a.number - b.number;
    }).map((horse) => horse.id);
}

const initialState = { horses: [] }
const horseReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allHorses = {};
            action.horseList.forEach(horse => {
                allHorses[horse.id] = horse;
            });
            return {
                ...allHorses,
                ...state,
                horseList: sortList(action.horseList)
            };
        case EDIT_ONE: {
            return {
                ...state,
                [action.horse.id]: {
                    ...state[action.horse.id],
                    ...action.horse
                }
            }
        }
        default:
            return state;
    }
}

export default horseReducer;