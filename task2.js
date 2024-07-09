function strStr(haystack, needle) {
    if (needle.length === 0) return 0;


    for (let i = 0; i <= haystack.length - needle.length; i++) {

        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }


    return -1;
}

// Test examples
console.log(strStr("sadbutsad", "sad")); 
console.log(strStr("codemama", "ostad")); 

// Time complexity of O(n+m) and space complexity of O(m)