var candiates = [10, 9, 5, 6]
  , numOfToBe = 1
  , votes = [[3, 4, 1], [3, 2, 4], [3, 2, 1], [3, 2, 4], [3, 2, 1], [4], [4, 2, 1], [4, 2, 3], [4, 1, 2], [4, 2, 3], [4, 2, 1]]//   , threshold = Math.floor(votes.length / (numOfToBe + 1)) + 1,
  , threshold = 16;

function splitVotes(candiateIndex, round, rate, candiates) {
    var validateVotes = votes.filter((vote)=>{
        return vote.indexOf(candiateIndex) <= round - 1 && vote.length > round && vote.indexOf(candiateIndex) > -1;
    }
    );
    //console.log(validateVotes);
    validateVotes.forEach((vote)=>{
        var currentRound = vote.indexOf(candiateIndex);
        candiates[vote[currentRound + 1] - 1] += rate;
    }
    );

    //console.log(candiates);
}

function getOneSelected(votes, candiates) {
    var selected = candiates.filter((candidate)=>{
        return candidate >= threshold;
    }
    ).map((candiate)=>{
        return {
            number: candiates.indexOf(candiate),
            vote: candiate
        }

    }
    );

    console.log(selected);
    return selected;

}

splitVotes(3, 1, 1, candiates);

candiates[2] = 0;
console.log(candiates);
splitVotes(4, 2, 1, candiates);
candiates[3] = 0;
console.log(candiates);
getOneSelected(votes, candiates);
