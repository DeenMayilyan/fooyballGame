import './page.css';
import Line from "../Line/line.tsx";
import Cards2 from "../Cards2/cards2.tsx";
import Cards from "../Cards/cards.tsx";


const Page = () => {
    return (
        <div className={'page'}>
            <div className={'row'}>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
            <Line/>
            <div className={'row2'}>
                <Cards2/>
                <Cards2/>
                <Cards2/>
            </div>
        </div>
    );
};

export default Page;