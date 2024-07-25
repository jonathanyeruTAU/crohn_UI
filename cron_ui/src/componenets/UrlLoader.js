import * as React from 'react';
import { Button, Box, TextField } from '@mui/material';

const UrlLoader = ({setClicked, setUrl, url}) => {
    return ( 
        <Box>
            <TextField
                id="outlined-controlled"
                label="Insert URL"
                variant='outlined'
                value={url}
                onChange={(event) => {
                    setUrl(event.target.value);
                    setClicked(false);
                }}
            />
            <Button variant="contained" onClick={()=>setClicked(true)}>
                Authentify
            </Button>
        </Box>
     );
}
 
export default UrlLoader;