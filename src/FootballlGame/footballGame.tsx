import {Box, Button} from "@mui/material";
import {useState} from "react";
import './football.css';


const FootbolGame = () => {
    const [leftRight, setLeftRight] = useState<number>(50)
    const [topBottom, setTopBottom] = useState<number>(0)

    const Click = (index:number) => {
        if(index === 1) {
            setLeftRight(0)
        }
        if(index === 2) {
            setLeftRight(50)
        }
        if (index === 3) {
            setLeftRight(100)
        }
    }

    const Click2 = (index:number) => {
        if(index === 4) {
            setTopBottom(0)
        }
        if(index === 5) {
            setTopBottom(100)
        }
    }

    return (
        <Box>
            0:0
            <Box sx={{
                width: '100vw',
                height: '100vh',
                backgroundImage: 'url(../../src/assets/images/pitch2.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                justifyContent: 'end',
            }}>

                <Box sx={{
                    width: '100px',
                    height: '100px',
                    backgroundImage: 'url(../../src/assets/images/ball.png)',
                    backgroundSize: 'cover',
                    borderRadius: '100%',
                    position: 'absolute',
                    top: `calc(${topBottom}% - ${topBottom === 0 ? '0px' : topBottom === 100 ? '100px' : "0px"})`,
                    left: `calc(${leftRight}% - ${leftRight === 0 ? '0px'
                        : leftRight === 50 ? '50px' : leftRight === 100 ? '100px' : "0px"})`,
                }} />

                <Box sx={{display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center'}}>
                    <Button variant='contained' color='success' onClick={() => Click(1)} sx={{
                        color: 'white',
                        border: '1px solid white',
                    }}>Left</Button>
                    <Box sx={{
                        display: 'flex',
                        gap: '1rem',
                        flexDirection: 'column',
                    }}>
                        <Button variant='contained' color='success' onClick={() => Click2(4)} sx={{
                            color: 'white',
                            border: '1px solid white',
                        }}>Top</Button>
                        <Button variant='contained' color='success' onClick={() => Click(2)} sx={{
                            color: 'white',
                            border: '1px solid white',
                        }}>Middle</Button>
                        <Button variant='contained' color='success' onClick={() => Click2(5)} sx={{
                            color: 'white',
                            border: '1px solid white',
                        }}>Bottom</Button>
                    </Box>
                    <Button variant='contained' color='success' onClick={() => Click(3)} sx={{
                        color: 'white',
                        border: '1px solid white',
                    }}>Right</Button>

                </Box>
            </Box>
        </Box>


    );
};

export default FootbolGame;