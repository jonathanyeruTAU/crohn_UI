import * as React from 'react';
import { Button, Box, TextField } from '@mui/material';

const UrlLoader = ({setClicked, setUrl, url}) => {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setClicked(true)
        }
    };

    return ( 
            <TextField
                id="outlined-controlled"
                label="Insert URL"
                variant='outlined'
                value={url}
                onChange={(event) => {
                    setUrl(event.target.value);
                    setClicked(false);
                }}
                onKeyDown={handleKeyDown}
                fullWidth
                size='small'
                sx={{width: "30em", marginBottom: "10em"}}
            />
     );
}
 
export default UrlLoader;