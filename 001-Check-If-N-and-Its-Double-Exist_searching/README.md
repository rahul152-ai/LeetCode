# [Check If N and Its Double Exist](https://leetcode.com/problems/check-if-n-and-its-double-exist/)

# Solution [url](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6733275/using-has-map-in-on-time-and-space-compl-gcrx/)

---

# easy

Given an array arr of integers, check if there exist two indices i and j such that :

````i != j
0 <= i, j < arr.length
arr[i] == 2 \* arr[j]```

Example 1:

```Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 _ 5 == 2 _ arr[j]```
Example 2:

```Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.```

Constraints:

```2 <= arr.length <= 500
-103 <= arr[i] <= 103 ```


````
