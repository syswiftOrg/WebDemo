import React from 'react';
import { OutlinedInput, TextField, InputLabel, FormControl, 
         InputAdornment, IconButton, Button, FormHelperText } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import Router from 'next/router';

const danmaku = () => {
    const [values, setValues] = React.useState({
        oid: '',
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
        const oid = values.oid;
        
        try {
            const response = await axios.get('http://comment.bilibili.com/'+{oid}+'.xml')
            console.log(response);
        } catch (err) {
            
        }
    }
    
    return (
        <form id="danmakuForm" autoComplete="on" onSubmit={onSubmit}>
            <h1 >扒取弹幕</h1>

            <div className="comp">
            <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="oid">{'视频的oid/cid'}</InputLabel>
            <OutlinedInput
            id="vidOid"
            labelWidth={100}
            onChange={handleChange('oid')}
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
        </form>
    );
};

export default danmaku;