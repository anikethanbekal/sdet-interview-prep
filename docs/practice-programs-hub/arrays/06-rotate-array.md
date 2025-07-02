---
title: Rotate an Array
tags:
  - java
  - python
  - arrays
  - medium
  - rotation
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-06
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests array manipulation and understanding of rotation techniques.
---

# 🧠 Problem: Rotate an Array

Given an array of integers, rotate the array to the right by `k` positions.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, rotation, iteration

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 2, 3, 4, 5]`) and an integer `k` (e.g., `2`)
- **Output**: The rotated array (e.g., `[4, 5, 1, 2, 3]`)
- **Constraints**:
  - Array is non-empty.
  - `k` can be greater than the array length.

---

## 🧪 Example(s)
```text
Input: arr = [1, 2, 3, 4, 5], k = 2
Output: [4, 5, 1, 2, 3]
```

---

## 🧪 Test Cases
| Input               | Output         |
|----------------------|----------------|
| [1, 2, 3, 4, 5], 2  | [4, 5, 1, 2, 3] |
| [1, 2, 3, 4, 5], 5  | [1, 2, 3, 4, 5] |
| [1, 2, 3, 4, 5], 7  | [4, 5, 1, 2, 3] |
| [-1, -2, -3], 1     | [-3, -1, -2]    |

---

## ☕ Java Solution
```java
public class RotateArray {
    // Approach: Reverse parts of the array
    public static void rotate(int[] arr, int k) {
        k = k % arr.length; // Handle cases where k > arr.length
        reverse(arr, 0, arr.length - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, arr.length - 1);
    }

    private static void reverse(int[] arr, int start, int end) {
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
        int k = 2;
        rotate(arr, k);
        System.out.println("Rotated array: " + Arrays.toString(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def rotate_array(arr, k):
    # Approach: Slice the array
    k = k % len(arr)  # Handle cases where k > len(arr)
    return arr[-k:] + arr[:-k]

# Example usage
arr = [1, 2, 3, 4, 5]
k = 2
rotated = rotate_array(arr, k)
print(f"Rotated array: {rotated}")
```

---

## 🔍 Explanation
- **Java**:
  - Uses the reverse technique:
    1. Reverse the entire array.
    2. Reverse the first `k` elements.
    3. Reverse the remaining elements.
- **Python**:
  - Uses slicing to split the array into two parts and concatenate them.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | In-place rotation using reverse |
| Python   | O(n)            | O(n)             | Creates a new array using slicing |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - `k = 0` (no rotation).
  - `k > len(arr)` (handle modulo operation).
- Explain the difference between in-place and out-of-place rotation.

---

## 🏷 Tags
`arrays`, `python`, `java`, `rotation`, `medium`, `interview`, `iteration`
---
