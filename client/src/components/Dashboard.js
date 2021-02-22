import React from 'react';
import { useEffect } from 'react';
import FormItem from './FormItem';
import ItemsList from './ItemsList';
import { loadItems } from '../redux/actions/items-actions';
import { useDispatch } from 'react-redux';





const Dashboard = () => {

    const executeReduxAction = useDispatch();

    useEffect(() => {
        const actionToExecute = loadItems();
        executeReduxAction(actionToExecute);
      }, []);


    

    return ( 
        <div>
            <FormItem/>
            <ItemsList/>
           
        </div>
     );
}
 
export default Dashboard;