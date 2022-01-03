import CriptoCardI from './../interfaces/CriptoCardI';

const BubbleSort = async (data: CriptoCardI[], orderBy: string) => {
    let n, i, k, aux, obt1 = 0, obt2 = 0;
    n = data.length;

    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {

            if (orderBy === '1h') {
                obt1 = Math.round(Number(data[i].percent_change_1h));
                obt2 = Math.round(Number(data[i + 1].percent_change_1h));
            } else if (orderBy === '24h') {
                obt1 = Math.round(Number(data[i].percent_change_24h));
                obt2 = Math.round(Number(data[i + 1].percent_change_24h));
            } else if (orderBy === '7d') {
                obt1 = Math.round(Number(data[i].percent_change_7d));
                obt2 = Math.round(Number(data[i + 1].percent_change_7d));
            } else {

            }
       
            if (obt1 < obt2) {
                aux = data[i];
                data[i] = data[i + 1];
                data[i + 1] = aux;
            }
        }
    }

    return data;

}

export default BubbleSort;