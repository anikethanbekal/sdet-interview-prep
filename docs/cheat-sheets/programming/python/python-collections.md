---
title: Python Collections Cheat Sheet
tags:
  - python
  - python-collections
  - list
  - tuple
  - set
  - dictionary
  - sdet
  - programming
  - core-python
categories:
  - Programming
  - Language-Specific
  - Python
difficulty:
  - easy
background: bg-[#dbeafe]  # Light blue for language-specific
badge_color: text-blue-800 bg-blue-100
topic: python-collections
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet on Python's built-in collections: Lists, Tuples, Sets, and Dictionaries. Understanding their differences and use cases is fundamental for any Python programmer.
---

# 📘 Python Collections

Python provides four main built-in collection data types.

---

## ✅ Lists

Ordered, mutable (changeable) collections. Allow duplicate members.

```python
my_list = ["apple", "banana", "cherry"]

# Accessing items
print(my_list[1])  # "banana"

# Changing items
my_list[1] = "orange"

# Adding items
my_list.append("mango")

# Removing items
my_list.remove("apple")

# Length
print(len(my_list))
```

---

## ✅ Tuples

Ordered, immutable (unchangeable) collections. Allow duplicate members.

```python
my_tuple = ("apple", "banana", "cherry")

# Accessing items
print(my_tuple[1])  # "banana"

# Cannot change items
# my_tuple[1] = "orange"  # This will raise a TypeError

# Length
print(len(my_tuple))
```

---

## ✅ Sets

Unordered, mutable collections. Do not allow duplicate members.

```python
my_set = {"apple", "banana", "cherry"}

# Adding items
my_set.add("orange")

# Removing items
my_set.remove("banana")

# No duplicates
my_set.add("apple")
print(my_set) # {'cherry', 'apple', 'orange'}

# Length
print(len(my_set))
```

---

## ✅ Dictionaries

Unordered, mutable collections of key-value pairs. Keys must be unique.

```python
my_dict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}

# Accessing items
print(my_dict["model"])  # "Mustang"
print(my_dict.get("model")) # "Mustang"

# Changing items
my_dict["year"] = 2020

# Adding items
my_dict["color"] = "red"

# Removing items
del my_dict["year"]
# or
my_dict.pop("year")

# Length
print(len(my_dict))
```

---

## 💡 Tips for SDETs

- Use **Lists** to store a sequence of web elements returned by Selenium.
- Use **Tuples** for data that should not change, like configuration constants.
- Use **Sets** to find unique elements, for example, to verify that a filter on a UI returns unique results.
- Use **Dictionaries** to represent JSON objects from API responses or to store test data in a key-value format.

---

## 🏷 Tags

`python`, `python-collections`, `list`, `tuple`, `set`, `dictionary`, `sdet`, `programming`, `core-python`
