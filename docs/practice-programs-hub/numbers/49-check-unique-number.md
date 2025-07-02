---
title: Check Unique Number
---

> **Number Problem 49: Check Unique Number**

<div style="background: #e3f2fd; padding: 12px 18px; border-radius: 8px; margin-bottom: 18px;">
A unique number is a number in which all digits are different.
</div>

### Example

- Input: `1234`
- Output: `True` (all digits are unique)

---

## Java Solutions
```java
// Unique number check
String s = Integer.toString(n);
Set<Character> set = new HashSet<>();
boolean isUnique = true;
for (char c : s.toCharArray()) {
    if (!set.add(c)) {
        isUnique = false;
        break;
    }
}
```

## Python Solutions
```python
# Unique number check
s = str(n)
is_unique = len(set(s)) == len(s)
``` 

---

## 🔍 Explanation
- A unique number has all distinct digits.
- Use a set to check for duplicates while iterating through digits.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(d)            | O(d)             | d = number of digits |
| Python   | O(d)            | O(d)             | d = number of digits |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases (single digit, leading zeros).
- Useful for problems involving digit uniqueness.

---

## 🏷 Tags
`numbers`, `python`, `java`, `unique`, `easy`, `interview`, `set`

