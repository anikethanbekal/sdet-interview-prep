---
title: Python OOP Concepts Cheat Sheet
tags:
  - python
  - python-oop
  - sdet
  - programming
  - core-python
categories:
  - Programming
  - Language-Specific
  - Python
difficulty:
  - medium
background: bg-[#dbeafe]  # Light blue for language-specific
badge_color: text-blue-800 bg-blue-100
topic: python-oop
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet on core Object-Oriented Programming (OOP) concepts in Python, including classes, objects, inheritance, and polymorphism. Fundamental for writing structured and maintainable test automation frameworks.
---

# 📘 Python OOP Concepts

Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes in programming.

---

## ✅ Classes and Objects

- **Class**: A blueprint for creating objects.
- **Object**: An instance of a class.

```python
class Dog:
    # Class attribute
    species = "Canis familiaris"

    # Initializer / Instance attributes
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # Instance method
    def description(self):
        return f"{self.name} is {self.age} years old"

# Create an object (instance)
dog1 = Dog("Buddy", 5)

# Access attributes and methods
print(dog1.name) # "Buddy"
print(dog1.description()) # "Buddy is 5 years old"
```

---

## ✅ Inheritance

A class can inherit attributes and methods from another class.

```python
# Parent class
class Animal:
    def speak(self):
        return "Some generic sound"

# Child class
class Cat(Animal):
    def speak(self):
        return "Meow"

my_cat = Cat()
print(my_cat.speak()) # "Meow"
```

---

## ✅ Polymorphism

Polymorphism means "many forms", and in programming it refers to methods/functions/operators with the same name that can be executed on many objects or classes.

```python
class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

# Common interface
def animal_sound(animal):
    print(animal.speak())

animal_sound(Dog())
# Output: Woof!
animal_sound(Cat())
# Output: Meow!
```

---

## ✅ Encapsulation

Encapsulation is the bundling of data and methods that work on that data within one unit, like a class. In Python, encapsulation is not strictly enforced (no `private` keyword), but is done by convention using a single underscore `_` for protected members and a double underscore `__` for private members (which triggers name mangling).

```python
class Car:
    def __init__(self):
        self.__max_speed = 200 # Private variable

    def drive(self):
        print(f"Driving at {self.__max_speed} km/h")

my_car = Car()
my_car.drive() # "Driving at 200 km/h"
# print(my_car.__max_speed) # This will raise an AttributeError
```

---

## 💡 Tips for SDETs

- **Page Object Model (POM)** is a classic application of OOP in test automation. Each page of the application is a class, and the elements on the page are attributes.
- Use **inheritance** to create a `BasePage` class with common functionalities (like clicking, sending text) that all other page classes can inherit from.
- **Polymorphism** can be used to create a single test that can run against different browser drivers (e.g., Chrome, Firefox).

---

## 🏷 Tags

`python`, `python-oop`, `sdet`, `programming`, `core-python`
