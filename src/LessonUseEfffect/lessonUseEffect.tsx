import {useEffect, useState} from 'react';

const LessonUseEffect = () => {
    const [word, setWord] = useState('')

    useEffect(() => {
        let x = word.split('').pop()
        if (x === 'l') {
            console.log(word)
        }
    });

    return (
        <div>
            <input type={'text'} onChange={(e) => {setWord(e.target.value)}}/>
        </div>
    );
};

export default LessonUseEffect;