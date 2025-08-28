import {useState} from 'react';
import {Box, Typography} from "@mui/material";

const NamesArray = () => {
    const [names, setNames] = useState('')
    const [array, setArray] = useState<string[]>([])

    const addNames = () => {
        const x = array

        if(array.indexOf(names) === -1) {
            x.push(names)
            setArray(x)
        }
        else {
            alert('Ays anunic unenq')
        }
       console.log(x)
    }

    return (
        <Box sx={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
        }}>
            <Typography variant='h3'>
                {names}
            </Typography>
            <input type={'text'} onChange={e => setNames(e.target.value)} />
            <button onClick={addNames}>Click Me</button>
        </Box>
    );
};

export default NamesArray;