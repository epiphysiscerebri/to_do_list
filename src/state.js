import renderTree from "./index";

let state = {
  listComponent: [
    { text: "Сдалать уборку", id: Math.random().toString(36).substring(2,9), complete: false},
    { text: "Выучить реакт", id: Math.random().toString(36).substring(2,9), complete: false },
    { text: "Устроится на работу", id: Math.random().toString(36).substring(2,9), complete: false },
  ],
  newTextDeal: "",
  addDeal(newText) {
    if (newText) {
      state.listComponent.push({ text: newText, id: Math.random().toString(36).substring(2,9), complete: false });
      state.newTextDeal = "";
      console.log(state.listComponent)
      renderTree(state);
    }
  },
  updateNewTextDeal(newTextDeal) {
    state.newTextDeal = newTextDeal;
    renderTree(state);
  },
  deleteDeal(id) {
    let arr = state.listComponent;
    let index = arr.findIndex(el => el.id === id);
    arr.splice(index, 1);

    renderTree(state) 
  }

};



export default state;
