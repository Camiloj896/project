const biggestNumber = async (data: [], arrayKey: string) => {
    let number = 0;

    await data.forEach(element => {
        if (Math.round(element[arrayKey]) > number ) {
            number = element[arrayKey];
        }
    })

    return number;

}

export default biggestNumber