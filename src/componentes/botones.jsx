export function Boton(props) {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick(); // Llama a la función onClick pasada como prop
        }
        if (props.manejarClic) {
            props.manejarClic(props.children); // Llama a manejarClic si está definido
        }
    };

    return (
        <div className={`boton ${props.isMAYUS ? 'mayuscula' : ''}`} onClick={handleClick}>
            {props.children}
        </div>
    );
}