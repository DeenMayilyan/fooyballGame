import './cards.css';
import gato2 from '../../assets/images/gato2.png';
import gato3 from '../../assets/images/gato3.webp';
import perro from '../../assets/images/perro.jpg';
import perro2 from '../../assets/images/perro2.jpg';
import perro3 from '../../assets/images/perro3.jpg';
import gato5 from '../../assets/images/gato5.jpg';
import perro4 from '../../assets/images/perro4.webp';
import gato6 from '../../assets/images/gato6.jpg';
import gato8 from '../../assets/images/gato8.jpg';
import perro5 from '../../assets/images/perro5.jpg';
import gato9 from '../../assets/images/gato9.webp';
import perro6 from '../../assets/images/perro6.webp';


const Cards = () => {
    return (
        <div className={'container2'} id={'container'}>
            <div className={'grid'}>
                <div>
                    <img src={gato2} className={'pets'}/>
                    <div className={'text'}>
                        <div className={'names'}>
                            Milo ♀
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div>
                            Price: 130€
                            Age: 2 years
                            <button className={'button'}>→</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={gato3} className={'pets'}/>
                    <div className={'text'}>
                        <div className={'names'}>
                            Toby ♂
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div>
                            Price: 270€
                            Age: 1,5 years
                            <button className={'button'}>→</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={perro} className={'pets'}/>
                    <div className={'text'}>
                        <div className={'names'}>
                            Leo ♂
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div>
                            Price: 500€
                            Age: 1 years
                            <button className={'button'}>→</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={perro2} className={'pets'}/>
                    <div className={'text'}>
                        <div className={'names'}>
                            Ziggy ♀
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div>
                            Price: 450€
                            Age: 2,5 years
                            <button className={'button'}>→</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={perro3} className={'pets'}/>
                    <div className={'text'}>
                        <div className={'names'}>
                            Lucky ♂ Bella ♀
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and.
                        </p>
                        <div>
                            Price: 700€
                            Age: 3 years
                            <button className={'button'}>→</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={gato5} className={'pets'}/>
                    <div className={'text'}>
                        <div className={'names'}>
                            Pipo ♀
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div>
                            Price: 250€
                            Age: 3 months
                            <button className={'button'}>→</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={perro4} className={'pets'}/>
                    <div className={'text'}>
                        <div className={'names'}>
                            Charlie ♂
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div>
                            Price: 300€
                            Age: 2 years
                            <button className={'button'}>→</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={gato6} className={'pets'}/>
                    <div className={'text'}>
                        <div className={'names'}>
                            Minnie ♀
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div>
                            Price: 500€
                            Age: 9 months
                            <button className={'button'}>→</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={gato8} className={'pets'}/>
                    <div className={'text'}>
                        <div className={'names'}>
                            Bimbo ♀
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div>
                            Price: 1000€
                            Age: 2 months
                            <button className={'button'}>→</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={perro5} className={'pets'}/>
                    <div className={'text'}>
                        <div className={'names'}>
                            Taco ♂
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div>
                            Price: 900€
                            Age: 3 months
                            <button className={'button'}>→</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={gato9} className={'pets'}/>
                    <div className={'text'}>
                        <div className={'names'}>
                            Beny ♀
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div>
                            Price: 2000€
                            Age: 1week
                            <button className={'button'}>→</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={perro6} className={'pets'}/>
                    <div className={'text'}>
                        <div className={'names'}>
                            Franky ♂ Mishi ♀
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and.
                        </p>
                        <div>
                            Price: 1000€
                            Age: 3 months
                            <button className={'button'}>→</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cards;