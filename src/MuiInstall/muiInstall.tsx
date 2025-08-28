import {Box, Button, Typography} from "@mui/material";
import {useState} from "react";

const MuiInstall = () => {
    const [changeNumber, setChangeNumber] = useState<number>(0)
    const [changeColor, setChangeColor] = useState('black')

    const changeAll = () => {
        setChangeNumber(changeNumber + 1)
        const colors = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        let str = '#'

        for(let i = 0; i < 6; i++) {
            const x = Math.floor(Math.random() * colors.length)
            str += colors[x]
        }
        setChangeColor(str)
    }

    return (
        <Box sx={{
            display: 'flex',
            gap: '1rem',
        }}>
            <Typography variant='h5' sx={{
                backgroundColor: changeColor,
                padding: '1rem 4rem',
                marginTop: changeNumber + 'rem',
            }}>
                {changeNumber}
            </Typography>
            <Button sx={{
                backgroundColor: 'pink',
                color: 'white',
                height: 'fit-content',
            }}
                onClick={changeAll}>
                Number++
            </Button>
        </Box>
    );
};

export default MuiInstall;