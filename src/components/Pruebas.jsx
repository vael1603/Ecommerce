const Pruebas = () => {
    console.log('lala');
    
    const sinVocal = (e) => {
        const letter = e.key;
        if (letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u'){
            console.log(letter);
        }
    }

    return <>
    <input onKeyDown={(event) => sinVocal(event)} placeholder="prueba"/>
    </>
};

export default Pruebas;