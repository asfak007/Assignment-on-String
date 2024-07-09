function shuffleString(s, indices) {
    
    let shuffled = new Array(s.length);

    
    for (let i = 0; i < indices.length; i++) {
        shuffled[indices[i]] = s[i];
    }

    
    return shuffled.join("");
}

// Test examples
console.log(shuffleString("mamacode", [4, 5, 6, 7, 0, 1, 2, 3])); 
console.log(shuffleString("dosta", [4, 0, 1, 2, 3])); // 
console.log(shuffleString("abc", [1, 0, 2])); 

// time complexity is O(n) and space complexity is O(n);