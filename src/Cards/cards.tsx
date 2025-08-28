import './cards.css';

const Cards = () => {
    return (
        <div className={'container'}>
            <div className={'cards'}>
                <div className={'title'}>
                    #1 Inital Contact
                </div>
                <div>
                    <p>
                        The client fills in our contact form or books a call, We respond within 1 business day to
                        understand your needs, goals, and timelines.
                    </p>
                </div>
            </div>
            <div className={'line'}></div>
        </div>
    );
};

export default Cards;