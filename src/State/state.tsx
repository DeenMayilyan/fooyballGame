import {useState} from 'react';

const State = () => {
    const [name, setName] = useState<number>(0)

    function changeName(index: number) {
        setName(index * index)
    }

    return (
        <div>
            Hello {name}
            <hr/>
            <button onClick={() => changeName(1)}>1</button>
            <button onClick={() => changeName(2)}>2</button>
            <button onClick={() => changeName(3)}>3</button>
            <button onClick={() => changeName(4)}>4</button>
            <button onClick={() => changeName(5)}>5</button>
            <button onClick={() => changeName(6)}>6</button>
            <button onClick={() => changeName(7)}>7</button>
            <button onClick={() => changeName(8)}>8</button>
            <button onClick={() => changeName(9)}>9</button>
            <button onClick={() => changeName(10)}>10</button>
        </div>
    );
};

export default State;