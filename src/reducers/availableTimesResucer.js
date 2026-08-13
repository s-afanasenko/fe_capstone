import { fetchAPI } from "../moks/API";

export default function reducer(state, action) {
    switch (action.type) {
        case 'initializeTimes':
            const newDate = new Date();
            return fetchAPI(newDate);
        case 'updateTimes':
           return fetchAPI(action.date);
        default:
            return state;
    }
}