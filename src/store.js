
const items = [];
let hideCheckeditems = false;
let error = null;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item)
};
function setError(error) {
  this.error = error;
};
function findAndUpdate(id, newData) {
  let oldItem = this.findById(id);
  Object.assign(oldItem, newData)
}

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  error,
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndUpdate,
  setError,
  findAndDelete,
  toggleCheckedFilter
};