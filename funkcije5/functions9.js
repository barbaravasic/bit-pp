function combineNonDuplicatePairs(intervalFrom, inetervalTo) {
    var combinations = [];
    var numberOfPairs = 0;

    for (var i = intervalFrom, iNew = 0; i <= inetervalTo; i++ , iNew++) {
        for (var j = 1, jNew = 0; j <= inetervalTo; j++) {
            if (i !== j) {
                combinations[numberOfPairs] = [i, j];
                numberOfPairs++;
                jNew++;
            }
        }
    }

    return combinations;
}

console.log (combineNonDuplicatePairs(1,7));
