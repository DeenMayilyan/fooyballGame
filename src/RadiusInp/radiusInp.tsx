import{useState} from 'react';
import {Box} from "@mui/material";

const RadiusInp = () => {
    const [radius, setRadius] = useState('')
    const [button, setButton] = useState('')

    const radiusPx = () => {
        setButton(radius)
    }

    return (
        <Box sx={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
        }}>
            <Box sx={{
                backgroundColor: 'rosybrown',
                width: '100px',
                height: '100px',
                borderRadius: button + 'px',
            }}>
            </Box>
            <input type={'text'} onChange={e => setRadius(e.target.value)} />
            <button onClick={radiusPx}>Click</button>
        </Box>
    );
};

export default RadiusInp;