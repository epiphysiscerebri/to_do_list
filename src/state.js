import renderTree from './index';

let state = {
    listComponent: [{text: 'Сдалать уборку', id: 1}, {text: 'Выучить реакт', id: 2}, {text: 'Устроится на работу', id: 3}],
    newTextDeal: '',
    addDeal(newText) {
        state.listComponent.push({text: newText, id: 4});
        state.newTextDeal = '';
        renderTree(state);
    },
    updateNewTextDeal(newTextDeal) {
        state.newTextDeal = newTextDeal;
        renderTree(state);
    }
}

export default state;