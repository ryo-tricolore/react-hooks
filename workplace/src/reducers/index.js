// action = {
//     type: 'CREATE EVENT',
//     title: "お知らせ",
//     body: "お知らせ"
// }

const events = (state = [], action) => {
    switch(action.type) {
        case 'CREATE EVENT':
            const event = { title: action.title, body: action.body }
            const length = state.length;
            const id = length === 0 ? 1 : state[length - 1].id + 1;
        
            return [...state, {id, ...event}];
        case 'DELETE EVENT':
            return state;    
        case 'DELETE ALL EVENT':
            return [];        
        default:
            return state;
    }
}

export default events;