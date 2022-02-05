import renderTree from "./index";

let state = {
  listComponent: [
    { text: "Сдалать уборку", id: 1  },
    { text: "Выучить реакт", id: 2  },
    { text: "Устроится на работу", id: 3 },
  ],
  newTextDeal: "",
  addDeal(newText) {
    if (newText) {
      state.listComponent.push({ text: newText, id: state.listComponent.length + 1 });
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
  },
};



export default state;
