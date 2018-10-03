//1
/*
let oracion = "the sky is blue";
var inversa = oracion.split(' ').reverse().join(' ');
console.log(inversa);
*/



//2
/*
var lengthOfLongestSubstring = function(s) 
{
    var max     = 0;
    var str     = '';
    var i       = 0;
    var cache   = [];
    
    while (i < s.length) 
    {
        if (cache[s[i]]) 
        {
          
            if (str.length > max) 
            {
                max = str.length;
            }


            var start   = str.indexOf(s[i]);
            str         = str.substring(start + 1);
        }

        if (i < s.length) 
        {
            str += s[i];
            cache[s[i]] = i + 1;
            i++;
        }
    }
    
    if (str.length > max) 
    {
        max = str.length;
    }
    
    console.log(max);
    return max;
};

lengthOfLongestSubstring('abcabcbb');
*/


//3
let beginWord = "hit";

let endWord = "cog";

let wordList = ["hot", "dot", "lot", "log", "cog"]

wordLadder(beginWord, endWord, wordList) = 5

