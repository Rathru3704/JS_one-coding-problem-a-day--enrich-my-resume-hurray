function padLeft(str, len){
    if(str.length >= len) return str;
    else return padLeft("0" + str, len);
}

const funcAND = (strK, strR) => {
    const res = strK & strR;

    if(strK.length > res.toString().length || strR.length > res.toString().length){
        if(strK.length >= strR.length) return padLeft(res, (Math.abs(strK.length - res.toString().length) + 1));
        if(strR.length > strK.length) return padLeft(res, (Math.abs(strR.length - res.toString().length) + 1));
    }
    return res;
}

const funcXOR = (strF, strL) => {
    const res = strF ^ strL;
    
    if(strF.length > res.toString().length || strL.length > res.toString().length){
        if(strF.length >= strL.length) return padLeft(res, (Math.abs(strF.length - res.toString().length) + 1));
        if(strL.length > strF.length)  return padLeft(res, (Math.abs(strL.length - res.toString().length) + 1));
    }
    return res;
}

const feistelCipher = (str, strK) => {
    arrL = [], arrR = [];

    for(let i = 0; i < str.length / 2; i++){
        arrL.push(str[i]);
    }
    console.log(arrL.join(''));

    for(let i = str.length / 2; i < str.length; i++){
        arrR.push(str[i]);
    }
    
    let RtoF = funcAND(strK, arrR.join('')).toString();
    let LtoXOR = funcXOR(RtoF, arrL.join('')).toString();

    return [LtoXOR, arrR.join('')].join('');
}

const feistelCipherDecryption = (str, strK) => {
    arrL = [], arrR = [];

    for(let i = 0; i < str.length / 2; i++){
        arrL.push(str[i]);
    }
    console.log(arrL.join(''));

    for(let i = str.length / 2; i < str.length; i++){
        arrR.push(str[i]);
    }
    
    let RtoF = funcAND(strK, arrR.join('')).toString();
    let LtoXOR = funcXOR(RtoF, arrL.join('')).toString();

    return [LtoXOR, arrR.join('')].join('');
}

console.log(feistelCipher("101110", "101"));  // 001110
console.log(feistelCipher("001110", "101"));  // 101110