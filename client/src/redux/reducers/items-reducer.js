const itemsReducer = (state = [], action) => {
    const itemsArr = [...state] ;
  
    switch (action.type) {
      case 'LOAD_ITEMS':
        return action.value;
  
      case 'ADD_ITEM':
        itemsArr.push(action.value)
        return itemsArr;
  
      case 'DELETE_ITEM':
        return itemsArr.filter(item => item._id !== action.value)
  
      case 'UPDATE_ITEM':
        return itemsArr;

      case 'DELETE_ITEMS':
          return [];
  
      default:
        return state;
    }
  };
  
  export default itemsReducer;