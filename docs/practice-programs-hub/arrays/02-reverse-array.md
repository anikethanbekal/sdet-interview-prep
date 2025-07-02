---
title: Reverse an Array
tags:
  - java
  - python
  - arrays
  - easy
  - language-syntax
categories:
  - Programming
  - Interview
difficulty: easy
background: bg-[#e0f2fe]
badge_color: text-blue-800 bg-blue-100
topic: arrays
date: 2025-07-02
author: Anikethan Bekal
intro: |
  This is a basic array manipulation problem often asked in interviews to test understanding of iteration and swapping techniques.
---

# 🧠 Problem: Reverse an Array

Given an array of integers, reverse the array in place.

**Category**: Arrays  
**Difficulty**: Easy  
**Tags**: arrays, reverse, iteration

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 2, 3, 4, 5]`)
- **Output**: The reversed array (e.g., `[5, 4, 3, 2, 1]`)
- **Constraints**:
  - Array is non-empty.
  - Elements can be positive, negative, or zero.

---

## 🧪 Example(s)
```text
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
```

---

## 🧪 Test Cases
| Input           | Output         |
|------------------|----------------|
| [1, 2, 3, 4, 5] | [5, 4, 3, 2, 1] |
| [-1, -2, -3]    | [-3, -2, -1]    |
| [0, 0, 0]       | [0, 0, 0]       |
| [100]           | [100]           |

---

## ☕ Java Solution
```java
public class ReverseArray {
    public static void reverse(int[] arr) {
        int start = 0, end = arr.length - 1;
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        reverse(arr);
        System.out.println("Reversed array: " + Arrays.toString(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def reverse_array(arr):
    start, end = 0, len(arr) - 1
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1

# Example usage
arr = [1, 2, 3, 4, 5]
reverse_array(arr)
print(f"Reversed array: {arr}")
```

---

## 🔍 Explanation
- **Java**:
  - Uses two pointers (`start` and `end`) to swap elements until they meet in the middle.
- **Python**:
  - Similar approach using two pointers to swap elements.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Swaps elements in place |
| Python   | O(n)            | O(1)             | Swaps elements in place |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Single-element arrays.
  - Arrays with all identical elements.
- Avoid using built-in functions like `[::-1]` unless explicitly allowed.
- Explain the in-place nature of the solution (no extra space used).

---

## 🏷 Tags
`arrays`, `python`, `java`, `reverse`, `easy`, `interview`, `iteration`
---
