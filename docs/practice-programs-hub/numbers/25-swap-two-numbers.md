---
title: Swap Two Numbers
---

> **Number Problem 25: Swap Two Numbers**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
Given two numbers, swap their values without using a third variable (and with a third variable, for completeness).
</div>

### Example

- Input: `a = 5, b = 7`
- Output: `a = 7, b = 5`

---
## Java Solutions
```java
// Using a third variable
int temp = a;
a = b;
b = temp;

// Without using a third variable (arithmetic)
a = a + b;
b = a - b;
a = a - b;

// Without using a third variable (bitwise XOR)
a = a ^ b;
b = a ^ b;
a = a ^ b;
```

## Python Solutions
```python
# Using a third variable
temp = a
a = b
b = temp

# Without using a third variable (arithmetic)
a = a + b
b = a - b
a = a - b

# Without using a third variable (tuple unpacking)
a, b = b, a
``` 

---

## 🔍 Explanation
- Swapping with a third variable is the classic approach.
- Arithmetic and bitwise (XOR) swaps avoid extra space, but be careful with overflow (arithmetic) and types (XOR).
- In Python, tuple unpacking is the most idiomatic.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(1)            | O(1)             | All methods |
| Python   | O(1)            | O(1)             | All methods |

---

## ⚠️ Interview Tips / Notes
- Be ready to explain why XOR/arithmetic swaps work.
- Discuss integer overflow for arithmetic swap in Java.
- Tuple unpacking is Pythonic and preferred in interviews.

---

## 🏷 Tags
`numbers`, `python`, `java`, `swap`, `easy`, `interview`, `bitwise`, `arithmetic`

