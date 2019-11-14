const countingSheep = (numSheeps) => {
    if (numSheeps === 0) {
        console.log('All sheep jumped over the fence')
        return
    }
    console.log(numSheeps + ': Another sheep jumpers over the fence')
    return countingSheep(numSheeps - 1)
}

countingSheep(3)
