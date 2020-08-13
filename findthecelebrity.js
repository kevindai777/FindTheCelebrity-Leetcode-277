//Objective is to find the celebrity, who knows nobody but everyone knows him/her
//We are given a method called 'knows', that keeps track of who knows who (a knows b)

// knows = function(a, b) {
//     ...
// };

let n = 3


//O(n) solution that finds the possible celebrity, then does two checks to see if
//it's the real celebrity

let posCeleb = 0
        
for (let i = 1; i < n; i++) {
    
    //If the person is known, mark it as a possible celebrity
    if (knows(posCeleb, i)) {
        posCeleb = i
    }
}

for (let i = 0; i < n; i++) {
    
    //Make sure we're not checking itself
    //If the celeb knows someone, it's not a celeb
    if (i != posCeleb && knows(posCeleb, i)) {
        return -1
    }
    
    //If someone doesn't know the celeb, it's not a celeb
    if (i != posCeleb && !knows(i, posCeleb)) {
        return -1
    }
}

return posCeleb