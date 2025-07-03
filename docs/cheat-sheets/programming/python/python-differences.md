---
title: Key Python Differences Cheat Sheet
tags:
  - python
  - python-differences
  - sdet
  - programming
  - core-python
  - interview-questions
categories:
  - Programming
  - Language-Specific
  - Python
  - Interview Questions
difficulty:
  - medium
background: bg-[#dbeafe]  # Light blue for language-specific
badge_color: text-blue-800 bg-blue-100
topic: python-differences
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet that clarifies the differences between commonly confused concepts in Python. This is a frequent source of questions in technical interviews for SDETs.
---

# 📘 Key Python Differences

This cheat sheet provides a quick reference for the key differences between important Python concepts.

---

## ✅ `is` vs. `==`

| Operator | Description |
|---|---|
| `is` | Compares the memory address (identity) of two objects. It checks if two references point to the same object. |
| `==` | Compares the content (value) of two objects. |

---

## ✅ List vs. Tuple

| Feature | List | Tuple |
|---|---|---|
| **Mutability** | Mutable (can be changed) | Immutable (cannot be changed) |
| **Syntax** | `[1, 2, 3]` | `(1, 2, 3)` |
| **Performance** | Slightly slower than tuples | Slightly faster than lists |
| **Use Case** | For collections of items that may need to change | For collections of items that should not change |

---

## ✅ `.py` vs. `.pyc` files

| Extension | Description |
|---|---|
| `.py` | The source code file for a Python program. |
| `.pyc` | The compiled bytecode of a Python program. Python compiles `.py` files into `.pyc` files to speed up execution. |

---

## ✅ `range` vs. `xrange` (Python 2)

| Function | Description |
|---|---|
| `range` | In Python 3, `range` is its own type that generates numbers on demand (like `xrange` in Python 2). In Python 2, `range` returns a list. |
| `xrange` | In Python 2, `xrange` returns a generator object that generates numbers on demand, which is more memory-efficient for large ranges. `xrange` does not exist in Python 3. |

---

## ✅ `__init__` vs. `__new__`

| Method | Description |
|---|---|
| `__new__` | The first method to be called in object creation. It is responsible for creating and returning a new instance of the class. You rarely need to override this. |
| `__init__` | The initializer method for an object. It is called after `__new__` has created the object, and it is used to initialize the object's attributes. |

---

## ✅ `list.sort()` vs. `sorted()`

| Function/Method | Description |
|---|---|
| `list.sort()` | A method of the `list` class that sorts the list in-place (modifies the original list) and returns `None`. |
| `sorted()` | A built-in function that returns a new sorted list from the items in an iterable, leaving the original iterable unchanged. |

---

## 🏷 Tags

`python`, `python-differences`, `sdet`, `programming`, `core-python`, `interview-questions`
