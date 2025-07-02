---
title: Find the Second Largest Element in an Array
tags:
  - java
  - python
  - arrays
  - medium
  - language-syntax
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-03
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests array manipulation and understanding of iteration techniques.
---

# 🧠 Problem: Find the Second Largest Element in an Array

Given an array of integers, find the second largest element.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, iteration, second-largest

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 5, 3, 9, 2]`)
- **Output**: The second largest integer in the array (e.g., `5`)
- **Constraints**:
  - Array must have at least two distinct elements.
  - Elements can be positive, negative, or zero.

---

## 🧪 Example(s)
```text
Input: [1, 5, 3, 9, 2]
Output: 5
```

---

## 🧪 Test Cases
| Input           | Output |
|------------------|--------|
| [1, 5, 3, 9, 2] | 5      |
| [-1, -5, -3]    | -3     |
| [0, 0, 0]       | None   |
| [100, 200]      | 100    |

---

## ☕ Java Solution
```java
public class SecondLargestElement {
    // Approach: Single pass to find largest and second largest
    public static Integer findSecondLargest(int[] arr) {
        if (arr.length < 2) return null; // Not enough elements
        int largest = Integer.MIN_VALUE, secondLargest = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }
        return secondLargest == Integer.MIN_VALUE ? null : secondLargest;
    }

    public static void main(String[] args) {
        int[] arr = {1, 5, 3, 9, 2};
        System.out.println("Second largest element: " + findSecondLargest(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_second_largest(arr):
    # Approach: Single pass to find largest and second largest
    if len(arr) < 2:
        return None  # Not enough elements
    largest, second_largest = float('-inf'), float('-inf')
    for num in arr:
        if num > largest:
            second_largest, largest = largest, num
        elif num > second_largest and num != largest:
            second_largest = num
    return second_largest if second_largest != float('-inf') else None

# Example usage
arr = [1, 5, 3, 9, 2]
print(f"Second largest element: {find_second_largest(arr)}")
```

---

## 🔍 Explanation
- **Java**:
  - Iterates through the array once.
  - Maintains two variables: `largest` and `secondLargest`.
  - Updates `secondLargest` only if the current number is smaller than `largest` but larger than `secondLargest`.
- **Python**:
  - Similar approach using two variables: `largest` and `second_largest`.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Single pass through the array |
| Python   | O(n)            | O(1)             | Single pass through the array |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Arrays with all identical elements.
  - Arrays with fewer than two distinct elements.
- Avoid sorting the array as it increases time complexity to `O(n log n)`.

---

## 🏷 Tags
`arrays`, `python`, `java`, `second-largest`, `medium`, `interview`, `iteration`
---
