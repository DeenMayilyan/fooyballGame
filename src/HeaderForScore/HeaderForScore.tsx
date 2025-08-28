import {type FC} from "react";
import {useState} from "react";
import {Button} from "@mui/material";

interface Props {
    team1Score: number;
    team2Score: number;
}

const HeaderForScore:FC<Props> = ({team1Score, team2Score}) => {
    const [team1Name, setTeam1Name] = useState<string>('')
    const [team1NameValue, setTeam1NameValue] = useState<string>('')
    const [team2Name, setTeam2Name] = useState<string>('')
    const [team2NameValue, setTeam2NameValue] = useState<string>('')

    const team1ScoreHandler = () => {
        setTeam1NameValue(team1Name)
    }
    const team2ScoreHandler = () => {
        setTeam2NameValue(team2Name)
    }
        return (
            <div>
                <header style={{
                    background: "grey",
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '1rem',
                    gap: '1rem',
                }}>
                    <h3>
                        {team1NameValue}
                    </h3>
                    <input type={'text'} onChange={e => setTeam1Name(e.target.value)}/>
                    <Button variant='contained' color={'secondary'} onClick={team1ScoreHandler}>Send</Button>
                    <h1>
                        {team1Score} : {team2Score}
                    </h1>
                    <input type={'text'} onChange={e => setTeam2Name(e.target.value)}/>
                    <Button variant='contained' color={"secondary"} onClick={team2ScoreHandler}>Send</Button>
                    <h3>
                        {team2NameValue}
                    </h3>
                </header>
            </div>
        )
    }
export default HeaderForScore