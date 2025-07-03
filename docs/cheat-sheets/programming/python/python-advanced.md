---
title: Advanced Python Topics Cheat Sheet
tags:
  - python
  - python-advanced
  - sdet
  - programming
  - core-python
  - comprehensions
  - decorators
categories:
  - Programming
  - Language-Specific
  - Python
difficulty:
  - hard
background: bg-[#fee2e2]  # Light red for advanced topics
badge_color: text-red-800 bg-red-100
topic: python-advanced
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet covering advanced Python topics relevant to SDETs, including list comprehensions, decorators, and generators. These topics are crucial for writing concise, efficient, and elegant Python code.
---

# 📘 Advanced Python Topics for SDETs

This cheat sheet covers advanced topics that are highly beneficial for experienced SDETs.

---

## ✅ List Comprehensions

A concise way to create lists.

```python
# Traditional way
squares = []
for x in range(10):
    squares.append(x**2)

# List comprehension
squares = [x**2 for x in range(10)]

# With a condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]
```

---

## ✅ Dictionary and Set Comprehensions

Similar to list comprehensions, but for dictionaries and sets.

```python
# Dictionary comprehension
sq_dict = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Set comprehension
sq_set = {x**2 for x in range(5)}
# {0, 1, 4, 9, 16}
```

---

## ✅ Decorators

A decorator is a function that takes another function as an argument, adds some kind of functionality, and then returns another function.

```python
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_whee():
    print("Whee!")

say_whee()
```

---

## ✅ Generators

Generators are a simple way of creating iterators. They are written like regular functions but use the `yield` keyword to return data.

```python
def my_generator():
    for i in range(3):
        yield i

gen = my_generator()
print(next(gen)) # 0
print(next(gen)) # 1
print(next(gen)) # 2
```

---

## ✅ `*args` and `**kwargs`

Used to pass a variable number of arguments to a function.

- `*args` is used to send a non-keyworded variable length argument list.
- `**kwargs` allows you to pass keyworded variable length of arguments.

```python
def my_func(*args, **kwargs):
    for arg in args:
        print(arg)
    for key, value in kwargs.items():
        print(f"{key}: {value}")

my_func(1, 2, 3, name="Alice", age=30)
```

---

## 💡 Tips for SDETs

- Use **list comprehensions** to process lists of web elements from Selenium in a single, readable line.
- **Decorators** can be used to add logging, timing, or retry logic to your test functions.
- **Generators** are useful for creating large sequences of test data without storing them all in memory at once.

---

## 🏷 Tags

`python`, `python-advanced`, `sdet`, `programming`, `core-python`, `comprehensions`, `decorators`, `generators`
