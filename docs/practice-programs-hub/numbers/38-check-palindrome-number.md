---
title: Check Palindrome Number
---

> **Number Problem 38: Check Palindrome Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A palindrome number reads the same backward as forward.
</div>

### Example

- Input: `121`
- Output: `True` (since 121 reversed is 121)

---

## Java Solutions
```java
// Palindrome number check
int rev = 0, temp = n;
while (temp != 0) {
    rev = rev * 10 + temp % 10;
    temp /= 10;
}
boolean isPalindrome = (rev == n);
```

## Python Solutions
```python
# Palindrome number check
is_palindrome = (str(n) == str(n)[::-1])
``` 

---

## 🔍 Explanation
- A palindrome number reads the same forward and backward.
- Reverse the digits and compare to the original.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of digits |
| Python   | O(d)            | O(1)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss string vs. integer approaches.
- Handle negative numbers if required.

---

## 🏷 Tags
`numbers`, `python`, `java`, `palindrome`, `easy`, `interview`, `reverse`

