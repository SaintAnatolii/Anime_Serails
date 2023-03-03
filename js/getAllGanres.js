export const getAllGanres = (arr) => {
    let ganres = new Set();
    
    arr.forEach((serial)=>{
        ganres.add(serial.ganre)
    })
    return ganres;
};