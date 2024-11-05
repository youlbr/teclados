import { useState } from 'react';
import { Boton } from './botones';

function App() {
    const [input, setInput] = useState('');
    const [isMayus, setIsMayus] = useState(false);

    function manejarClic(ele) {
        // Convertir el carácter según el estado de isMayus
        const character = isMayus ? ele.toUpperCase() : ele;
        setInput(input + character);
    }

    function cambiar() {
        setIsMayus(!isMayus);
    }
    function espacio(){
      setInput(input +' ')
    }
    function enter(){
      setInput(input +'\n')
    }

    return (
        <div className='contenedor'>
            <textarea className='input' value={input}/>
            <section className='conten-fila'readOnly >
                <Boton manejarClic={manejarClic}>1</Boton>
                <Boton manejarClic={manejarClic}>2</Boton>
                <Boton manejarClic={manejarClic}>3</Boton>
                <Boton manejarClic={manejarClic}>4</Boton>
                <Boton manejarClic={manejarClic}>5</Boton>
                <Boton manejarClic={manejarClic}>6</Boton>
                <Boton manejarClic={manejarClic}>7</Boton>
                <Boton manejarClic={manejarClic}>8</Boton>
                <Boton manejarClic={manejarClic}>9</Boton>
                <Boton manejarClic={manejarClic}>0</Boton>
            </section>
            <section className='conten-fila'>
            <Boton manejarClic={manejarClic}>{isMayus ? 'Q' : 'q'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'W' : 'w'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'E' : 'e'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'R' : 'r'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'T' : 't'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'Y' : 'y'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'U' : 'u'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'I' : 'i'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'O' : 'o'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'P' : 'p'}</Boton>
            </section>
            <section className='conten-fila'>
            <Boton manejarClic={manejarClic}>{isMayus ? 'A' : 'a'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'S' : 's'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'D' : 'd'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'F' : 'f'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'G' : 'g'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'H' : 'h'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'J' : 'j'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'K' : 'k'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'L' : 'l'}</Boton>
            </section>
            <section className='conten-fila'>
            <Boton onClick={cambiar} isMAYUS={isMayus}>MAYUS</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'Z' : 'z'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'X' : 'x'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'C' : 'c'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'V' : 'v'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'B' : 'b'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'N' : 'n'}</Boton>
                <Boton manejarClic={manejarClic}>{isMayus ? 'M' : 'm'}</Boton>
                <Boton onClick={enter} >ENTER</Boton>  
            </section>
            <section className='conten-fila'>
                <div className='space'onClick={espacio} >SPACE</div>
            </section>
        </div>
    );
}

export default App;

