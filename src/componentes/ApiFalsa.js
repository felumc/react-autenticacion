const ApiFalsa = () => {
    return new Promise((resolve) => {
        //simula resolver una cadena con un retardo, 1000 = 1 seg
        setTimeout(() => resolve('2342f2f1d131rf12'), 25);
    });
};
export default ApiFalsa;