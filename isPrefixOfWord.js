/*
Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. 
If searchWord is a prefix of more than one word, return the index of the first word (minimum index). 
If there is no such word return -1.
A prefix of a string s is any leading contiguous substring of s.

 

Example 1:
Input: sentence = "i love eating burger", searchWord = "burg"
Output: 4
Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

Example 2:
Input: sentence = "this problem is an easy problem", searchWord = "pro"
Output: 2
Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.

Example 3:
Input: sentence = "i am tired", searchWord = "you"
Output: -1
Explanation: "you" is not a prefix of any word in the sentence.
 

Constraints:
1 <= sentence.length <= 100
1 <= searchWord.length <= 10
sentence consists of lowercase English letters and spaces.
searchWord consists of lowercase English letters.
*/


/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

/* SIMPLE LOOP */
var isPrefixOfWord = function(sentence, searchWord) {
    // Split sentence into array of words
    const words = sentence.split(' ');
    
    // Iterate through each word
    for (let i = 0; i < words.length; i++) {
        // Check if current word starts with searchWord
        if (words[i].startsWith(searchWord)) {
            return i + 1; // Return 1-indexed position
        }
    }
    
    // No word found with searchWord as prefix
    return -1;
};


/* TWO POINTERS */
/*
var isPrefixOfWord_TwoPointer = function(sentence, searchWord) {
    let sentencePtr = 0;        // Pointer for sentence
    let searchPtr = 0;          // Pointer for searchWord
    let wordCount = 0;          // Track which word we're on
    let isStartOfWord = true;   // Flag to know if we're at word start
    
    while (sentencePtr < sentence.length) {
        const currentChar = sentence[sentencePtr];
        
        // If we hit a space
        if (currentChar === ' ') {
            // Check if we completed matching searchWord
            if (searchPtr === searchWord.length) {
                return wordCount; // Found it!
            }
            // Reset for next word
            searchPtr = 0;
            isStartOfWord = true;
            sentencePtr++;
            continue;
        }
        
        // If we're at the start of a new word
        if (isStartOfWord) {
            wordCount++;
            isStartOfWord = false;
        }
        
        // If we've already matched all of searchWord
        if (searchPtr === searchWord.length) {
            // We found a complete prefix match!
            // Skip to end of current word or return immediately
            return wordCount;
        }
        
        // If we're still matching characters
        if (currentChar === searchWord[searchPtr]) {
            searchPtr++;
            sentencePtr++;
        } 
        // Characters don't match
        else {
            // Reset search pointer - this word won't work
            searchPtr = 0;
            
            // Skip to the end of current word (until space or end)
            while (sentencePtr < sentence.length && sentence[sentencePtr] !== ' ') {
                sentencePtr++;
            }
        }
    }
    
    // Check one last time after loop ends (for last word)
    if (searchPtr === searchWord.length) {
        return wordCount;
    }
    
    return -1;
};
*/


console.log("\n=== APPROACH 1: SIMPLE LOOP ===");
console.log(isPrefixOfWord("i love eating burger", "burg")); // 4
console.log(isPrefixOfWord("this problem is an easy problem", "pro")); // 2
console.log(isPrefixOfWord("i am tired", "you")); // -1


/*
console.log("\n=== APPROACH 2: Two Pointer ===");
console.log(isPrefixOfWord_TwoPointer("i love eating burger", "burg"));          // 4
console.log(isPrefixOfWord_TwoPointer("this problem is an easy problem", "pro")); // 2
console.log(isPrefixOfWord_TwoPointer("i am tired", "you"));                     // -1
*/
