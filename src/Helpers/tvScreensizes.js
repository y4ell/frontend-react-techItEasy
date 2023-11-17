function tvScreensize(inputTv) {
    let allSizes = '';

    for (let i = 0; i < inputTv.length; i++) {
        const sizeInch = inputTv[i];
        const sizeCm = Math.round(inputTv[i] * 2.54)
        allSizes = allSizes + `${sizeInch} inch (${sizeCm} cm)`;

        if (i < inputTv.length - 1) {
            allSizes = `${allSizes} | `
        }
    }

    return allSizes;
}


export default tvScreensize

