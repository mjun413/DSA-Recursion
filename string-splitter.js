const stringSplitter = (string, splitter) => {
    // Base Case
    if (string.indexOf(splitter) === -1) {
        return [string.slice(0, string.length)]
    }

    // GEneral Case

    return [string.slice(0, string.indexOf(splitter)), ...stringSplitter(string.slice(string.indexOf(splitter) + 1), splitter)]
}

console.log(stringSplitter('02/20/2020', '/'))
