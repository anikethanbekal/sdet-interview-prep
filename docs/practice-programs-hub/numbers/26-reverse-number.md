---
title: Reverse a Number
---

> **Number Problem 26: Reverse a Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
Given an integer, reverse its digits.
</div>

### Example

- Input: `12345`
- Output: `54321`

---
## Java Solutions
```java
// Iterative
int rev = 0;
while (n != 0) {
    rev = rev * 10 + n % 10;
    n /= 10;
}

// Using StringBuilder
String revStr = new StringBuilder(Integer.toString(n)).reverse().toString();
int revNum = Integer.parseInt(revStr);
```

## Python Solutions
```python
# Iterative
rev = 0
num = n
while num != 0:
    rev = rev * 10 + num % 10
    num //= 10

# Using string slicing
rev = int(str(n)[::-1])
``` 
---

## 🔍 Explanation
- Extract digits from right to left and build the reversed number.
- String conversion is a quick alternative, but iterative is more universal.
- Watch for leading zeros in the reversed result.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(1)             | d = number of digits |
| Python   | O(d)            | O(1)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss handling of negative numbers if required.
- Watch for integer overflow in Java.
- String slicing is Pythonic, but iterative is language-agnostic.

---

## 🏷 Tags
`numbers`, `python`, `java`, `reverse`, `easy`, `interview`, `digit-manipulation`

