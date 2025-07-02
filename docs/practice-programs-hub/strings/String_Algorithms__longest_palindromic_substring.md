---
title: Longest palindromic substring
tags:
  - java
  - python
  - string
  - coding
categories:
  - Programming
  - Interview
difficulty: varies
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: string
date: 2025-07-01
author: Anikethan Bekal
intro: |
  This is a string problem often encountered in interviews. It tests understanding of fundamental concepts such as iteration, pattern matching, or algorithmic design depending on the problem.

---

# 🧠 Problem: Longest palindromic substring

> **Category**: String Algorithms  
> **Tags**: string manipulation, java, python

---

## ✅ Requirements

Define a function to solve the following:

Longest palindromic substring.

---

## ☕ Java Solution

```java
// 1. Expand Around Center
public static String longestPalindrome(String s) {
    if (s == null || s.length() < 1) return "";
    int start = 0, end = 0;
    for (int i = 0; i < s.length(); i++) {
        int len1 = expandFromCenter(s, i, i);
        int len2 = expandFromCenter(s, i, i + 1);
        int len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substring(start, end + 1);
}
private static int expandFromCenter(String s, int left, int right) {
    while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
}

// 2. Dynamic Programming (for reference)
public static String longestPalindromeDP(String s) {
    int n = s.length();
    if (n < 1) return "";
    boolean[][] dp = new boolean[n][n];
    int start = 0, maxLen = 1;
    for (int i = 0; i < n; i++) dp[i][i] = true;
    for (int i = n - 1; i >= 0; i--) {
        for (int j = i + 1; j < n; j++) {
            if (s.charAt(i) == s.charAt(j)) {
                if (j - i == 1 || dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    if (j - i + 1 > maxLen) {
                        start = i;
                        maxLen = j - i + 1;
                    }
                }
            }
        }
    }
    return s.substring(start, start + maxLen);
}
```

---

## 🔵🟡 Python Solution

```python
# 1. Expand Around Center
def longest_palindrome(s):
    if not s:
        return ""
    start = end = 0
    for i in range(len(s)):
        l1 = expand(s, i, i)
        l2 = expand(s, i, i+1)
        l = max(l1, l2)
        if l > end - start:
            start = i - (l - 1) // 2
            end = i + l // 2
    return s[start:end+1]

def expand(s, left, right):
    while left >= 0 and right < len(s) and s[left] == s[right]:
        left -= 1
        right += 1
    return right - left - 1

# 2. Dynamic Programming (for reference)
def longest_palindrome_dp(s):
    n = len(s)
    if n < 1:
        return ""
    dp = [[False]*n for _ in range(n)]
    start = 0
    max_len = 1
    for i in range(n):
        dp[i][i] = True
    for i in range(n-1, -1, -1):
        for j in range(i+1, n):
            if s[i] == s[j]:
                if j - i == 1 or dp[i+1][j-1]:
                    dp[i][j] = True
                    if j - i + 1 > max_len:
                        start = i
                        max_len = j - i + 1
    return s[start:start+max_len]
```

---

## 🔍 Explanation

- **Expand Around Center**: For each character (and between characters), expand outward as long as the substring is a palindrome.
- **Dynamic Programming**: Use a table to record palindromic substrings and build up to longer ones.

**Edge Cases:**
- Empty string returns empty string.
- All characters same: returns the whole string.
- Multiple palindromes of same length: returns the first found.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n^2)          | O(1)/O(n^2)      | Expand: O(1) space, DP: O(n^2) |
| Python   | O(n^2)          | O(1)/O(n^2)      | Expand: O(1) space, DP: O(n^2) |

---

## ⚠️ Interview Tips / Notes

- Make sure to handle edge cases.
- Keep solutions readable and efficient.
- Be ready to discuss time and space trade-offs.

---
