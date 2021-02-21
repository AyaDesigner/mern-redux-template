import axios from 'axios';




export const loadItems = () => {
    return dispatch => { //return function
        return axios                           // request item
            .get('http://localhost:5000/items') //return post request response
            //response
            .then((allItemsArray) => { //pass data in as a parameter, call the callback, dispatch the action. 
                dispatch({
                    type: 'LOAD_ITEMS',
                    value: allItemsArray.data
                })
            })
    }
};



export const addItem = (itemWithoutId) => {
    return dispatch => { //return function
        return axios                           // request item
            .post('http://localhost:5000/items', itemWithoutId) //return post request response
            //response
            .then((backendResponse) => { //pass data in as a parameter, call the callback, dispatch the action. 
                dispatch({
                    type: 'ADD_ITEM',
                    value: backendResponse.data
                })
            })
    }
};




export const deletePlan = (itemId) => {
    return dispatch => { //return function
        return axios
            .delete(`http://localhost:5000/items/${itemId}`) //return delete request response
            .then((data) => { //pass data in as a parameter, call the callback, dispatch the action. 
                dispatch({
                    type: 'DELETE_ITEM',
                    value: itemId
                })
            })
    }
};





export const updateItem = (item) => {
    console.log(item)
    return dispatch => { //return function
        return axios
            .put(`http://localhost:5000/items/${item._id}`, item) //return put request response
            .then((responseFromServer) => { //pass data in as a parameter, call the callback, dispatch the action. 
                dispatch({
                    type: 'UPDATE_ITEM',
                    value: item
                })
            })
    }
};

