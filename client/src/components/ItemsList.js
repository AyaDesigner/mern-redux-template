import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { useSelector, useDispatch } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { updateItem, deleteItem } from '../redux/actions/items-actions';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles({
    table: {
        minWidth: 700
    },
});


export default function ItemList() {

    const items = useSelector((state) => state.itemsReducer);
    const classes = useStyles();
    const actionToExecute = useDispatch();

    const editItem = () => {

    }

    const deleteCurrentItem = (itemId) => {
        actionToExecute(deleteItem(itemId))
    }


    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                <Box p={1}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nº</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {items.map((item, index) => (
                                <TableRow key={item._id}>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="right">{item.name}</TableCell>
                                    <TableCell align="right">{item.description}</TableCell>
                                    <TableCell align="right">{item.price}</TableCell>
                                    <IconButton onClick={editItem}><EditIcon></EditIcon></IconButton>
                                    <IconButton onClick={() => deleteCurrentItem(item._id)}><DeleteIcon></DeleteIcon></IconButton>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </Box>
            </Box>
        </div>
    );
}

