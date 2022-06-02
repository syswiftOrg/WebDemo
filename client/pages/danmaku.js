import React from 'react';
import { OutlinedInput, TextField, InputLabel, FormControl, 
         InputAdornment, IconButton, Button, FormHelperText } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import Router from 'next/router';
import { spawn } from 'child_process';

const danmaku = () => {
    const [values, setValues] = React.useState({
        cid: 0,
        response: '',
    });

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#757CE8',
            },
            secondary: {
                main: '#FFFFFF',
            },
        },
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        
        try {
            //spawn('python', ['graber.py']);
        } catch (err) {
            values.errors = err;
            console.log(values.errors);
        }
    }
    
    return (
        <form id="danmakuForm" autoComplete="on" onSubmit={onSubmit}>
            <h1 >扒取弹幕</h1>

            <div className="comp">
            <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="cid">{'视频的oid/cid'}</InputLabel>
            <OutlinedInput
            id="vidcid"
            labelWidth={100}
            onChange={handleChange('cid')}
            />
            </FormControl>
            </div>

            <div className="comp">
            <ThemeProvider theme={theme}>
                <Button fullWidth type="submit" variant="contained" color="primary">
                     GO！
                </Button>
            </ThemeProvider>
            </div>
            <p>
            </p>
        </form>
    );
};

export default danmaku;