import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import Button from './Button';

import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions/items-actions';
import { deleteItems } from '../redux/actions/items-actions';
import Box from '@material-ui/core/Box';






const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '20ch',
        },
    },
}));


export default function FormItem() {
    const executeReduxAction = useDispatch();
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState('');

    const classes = useStyles();


    const handleNameChange = (ev) => {
        setName(ev.target.value);
    };

    const handleDescriptionChange = (ev) => {
        setDescription(ev.target.value);
    };

    const handlePriceChange = (ev) => {
        setPrice(ev.target.value);
    };


    const saveItem = () => {
        const newItem = {
            name: name,
            description: description,
            price: price
        };

        const actionToExecute = addItem(newItem);
        executeReduxAction(actionToExecute);
    }

    const deleteAllItems = () => {
        const actionToExecute = deleteItems();
        executeReduxAction(actionToExecute);

    }

    return (
        <div>
            <Box display="flex" justifyContent="center" m={15} p={0}  bgcolor="background.paper">
            <form className={classes.root} noValidate autoComplete="off">

                <TextField
                    id="filled-basic"
                    label="Name"
                    variant="filled"
                    size="small"
                    onChange={handleNameChange}
                />
                <TextField
                    id="filled-basic"
                    label="Description"
                    variant="filled"
                    size="small"
                    onChange={handleDescriptionChange}

                />
                <TextField
                    id="filled-number"
                    label="Price"
                    variant="filled"
                    size="small"
                    type="number"
                    onChange={handlePriceChange}
                />


            </form>
            </Box>

            <Button
                mr={2}
                mb={15}
                variant="contained"
                color="primary"
                onClick={saveItem}
            >
                Save item
            </Button>

            <Button
                mb={15}
                variant="contained"
                color="secondary"
                onClick={deleteAllItems}
            >
                Delete all items
            </Button>
        </div>
    );
}

