import React from 'react';
import Button from '@material-ui/core/Button';

const MateEx1=()=>{
    
    return (
        <div>
            <Button variant="outlined">default</Button>
            <Button variant="outlined" color="primary">primary</Button>
            <Button variant="contained" disabled>disabled</Button>
            <Button color="primary" href="https://www.naver.com/">link</Button>
            <Button variant="outlined" color="secondary">secondary</Button>
            <h3>size</h3>
            <Button variant="outlined" size="small">small</Button><br></br>
            <Button variant="outlined" size="medium">medium</Button><br></br>
            <Button variant="outlined" size="large">large</Button><br></br>
        </div>

    )
}

export default MateEx1;