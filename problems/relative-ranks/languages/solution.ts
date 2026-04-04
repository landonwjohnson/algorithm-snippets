function findRelativeRanks(score: number[]): string[] {

    const rankLabels = {
        0: "Gold Medal",
        1: "Silver Medal",
        2: "Bronze Medal",
    }

    let result: string[] = new Array(score.length);

    const rankedScores = score.map((value, index) => [value, index] as [number, number]).sort((firstItem, secondItem) => secondItem[0] - firstItem[0]);

    for(let rankIndex = 0; rankIndex < rankedScores.length; rankIndex++){
        const [, originalIndex] = rankedScores[rankIndex];

        if(rankLabels[rankIndex] && typeof rankLabels[rankIndex] === "string"){
            result[originalIndex] = rankLabels[rankIndex]
        } else {
            result[originalIndex] = String(rankIndex + 1)
        }
    }

    return result
};
