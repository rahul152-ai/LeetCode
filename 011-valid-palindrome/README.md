## Valid Palindrome

**Doifficulty:** Easy

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given `a` string `s`, return `true` if it is a palindrome, or `false` otherwise

## Example 1:

<pre>Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
</pre>

## Example 2:

<pre>
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
</pre>

## Example 3:

<pre>
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

</pre>

## Constraints:

`1 <= s.length <= 2 * 105`
s consists only of printable ASCII characters.
