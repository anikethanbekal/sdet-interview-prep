---
title: Find Longest Palindromic Subarray
tags:
  - java
  - python
  - arrays
  - hard
  - dynamic-programming
categories:
  - Programming
  - Interview
difficulty: hard
background: bg-[#fde68a]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-24
author: Anikethan Bekal
intro: |
  This is a challenging interview question for SDET roles that tests understanding of array manipulation and dynamic programming techniques.
---

# 🧠 Problem: Find Longest Palindromic Subarray

Given an array of integers, find the longest palindromic subarray.

**Category**: Arrays  
**Difficulty**: Hard  
**Tags**: arrays, dynamic-programming, palindromic-subarray

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 2, 3, 2, 1]`)
- **Output**: The longest palindromic subarray (e.g., `[1, 2, 3, 2, 1]`)
- **Constraints**:
  - Array can contain positive and negative integers.

---

## 🧪 Example(s)
```text
Input: [1, 2, 3, 2, 1]
Output: [1, 2, 3, 2, 1]
```

---

## 🧪 Test Cases
| Input              | Output       |
|---------------------|--------------|
| [1, 2, 3, 2, 1]     | [1, 2, 3, 2, 1] |
| [1, 2, 3, 4, 5]      | [1]         |
| [5, 4, 3, 2, 1, 2, 3, 4, 5] | [5, 4, 3, 2, 1, 2, 3, 4, 5] |
| [-1, -2, -3, -2, -1] | [-1, -2, -3, -2, -1] |

---

## ☕ Java Solution
```java
public class LongestPalindromicSubarray {
    // Approach: Expand around center
    public static int[] findLongestPalindromicSubarray(int[] arr) {
        int start = 0, maxLength = 1;
        for (int i = 1; i < arr.length; i++) {
            int low = i - 1, high = i;
            while (low >= 0 && high < arr.length && arr[low] == arr[high]) {
                if (high - low + 1 > maxLength) {
                    start = low;
                    maxLength = high - low + 1;
                }
                low--;
                high++;
            }
            low = i - 1;
            high = i + 1;
            while (low >= 0 && high < arr.length && arr[low] == arr[high]) {
                if (high - low + 1 > maxLength) {
                    start = low;
                    maxLength = high - low + 1;
                }
                low--;
                high++;
            }
        }
        int[] result = new int[maxLength];
        System.arraycopy(arr, start, result, 0, maxLength);
        return result;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 1};
        int[] result = findLongestPalindromicSubarray(arr);
        System.out.println("Longest palindromic subarray: " + Arrays.toString(result));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_longest_palindromic_subarray(arr):
    # Approach: Expand around center
    def expand_around_center(left, right):
        while left >= 0 and right < len(arr) and arr[left] == arr[right]:
            left -= 1
            right += 1
        return left + 1, right - 1

    start, end = 0, 0
    for i in range(len(arr)):
        l1, r1 = expand_around_center(i, i)
        l2, r2 = expand_around_center(i, i + 1)
        if r1 - l1 > end - start:
            start, end = l1, r1
        if r2 - l2 > end - start:
            start, end = l2, r2
    return arr[start:end + 1]

# Example usage
arr = [1, 2, 3, 2, 1]
print(f"Longest palindromic subarray: {find_longest_palindromic_subarray(arr)}")
```

---

## 🔍 Explanation
- **Expand Around Center**:
  - Considers each element and pair of elements as potential centers of a palindrome.
  - Expands outward while elements are equal.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n^2)          | O(n)             | Expands around each center |
| Python   | O(n^2)          | O(n)             | Expands around each center |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with no palindrome (return single element).
  - Array with all identical elements.
- Explain why dynamic programming is avoided for simplicity.

---

## 🏷 Tags
`arrays`, `python`, `java`, `palindromic-subarray`, `hard`, `interview`, `dynamic-programming`
---
