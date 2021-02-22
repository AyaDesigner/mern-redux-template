import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';


const useStyles = makeStyles({
    table: {
        minWidth: 250,
    },
});




export default function ItemList() {

    const items = useSelector((state) => state.itemsReducer);
    const classes = useStyles();


    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item number</TableCell>
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

