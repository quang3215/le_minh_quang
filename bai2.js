function merge2String(Chain1, Chain2) {
    let s1 = Chain1.split("");
    let s2 = Chain2.split("");
    let tempString = "";
    let s1l = s1.length;
    let s2l = s2.length;
    if (s1l == s2l) {
        for (let i = 0; i < s1l; i++) {
            tempString += s1[i];
            tempString += s2[i];
        }
        return tempString;
    }

    if (s1l < s2l) {
        for (let i = 0; i < s1l; i++) {
            tempString += s1[i];
            tempString += s2[i];
        }
        for (let j = s1l; j < s2l; j++) {
            tempString += s2[j];
        }
        return tempString;

    }
    if (s1l > s2l) {
        for (let i = 0; i < s2l; i++) {
            tempString += s1[i];
            tempString += s2[i];
        }

        for (let j = s2l; j < s1l; j++) {
            tempString += s1[j];
        }
        return tempString;
    }
};
console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123"));
console.log(merge2String("abcd", "123"));