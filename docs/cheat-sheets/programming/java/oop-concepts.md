---
title: Java OOP Concepts Cheat Sheet
tags:
  - java
  - oop
  - sdet
  - programming
  - core-java
categories:
  - Programming
  - Language-Specific
  - Java
difficulty:
  - medium
background: bg-[#dbeafe]  # Light blue for language-specific
badge_color: text-blue-800 bg-blue-100
topic: oop
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet on core Object-Oriented Programming (OOP) concepts in Java, including Encapsulation, Inheritance, and Polymorphism. Fundamental for writing structured and maintainable test automation frameworks.
---

# 📘 Java OOP Concepts

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code.

---

## 🧠 Core Concepts

| Concept | Description |
|---|---|
| **Encapsulation** | The bundling of data (attributes) and methods that operate on the data into a single unit (a class). It restricts direct access to some of an object's components. |
| **Inheritance** | A mechanism in which one object acquires all the properties and behaviors of a parent object. It represents an "is-a" relationship. |
| **Polymorphism** | The ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object. |
| **Abstraction** | The concept of hiding the complex implementation details and showing only the essential features of the object. |

---

## ✅ Encapsulation

Achieved by declaring the instance variables of a class as `private` and providing public `getter` and `setter` methods to access and modify their values.

```java
public class Car {
    private String model;

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}
```

---

## ✅ Inheritance

Uses the `extends` keyword to inherit from a class.

```java
// Parent class
class Vehicle {
    public void start() {
        System.out.println("Vehicle is starting...");
    }
}

// Child class
class Car extends Vehicle {
    // Car inherits the start() method
}

Car myCar = new Car();
myCar.start(); // "Vehicle is starting..."
```

---

## ✅ Polymorphism

Can be achieved through method overriding and method overloading.

### Method Overriding

A child class provides a specific implementation of a method that is already provided by its parent class.

```java
class Animal {
    public void makeSound() {
        System.out.println("Some generic sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

Animal myDog = new Dog();
myDog.makeSound(); // "Woof!"
```

### Method Overloading

Multiple methods having the same name but different in parameters.

```java
class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }
}
```

---

## 💡 Tips for SDETs

- **Encapsulation** is key to the Page Object Model (POM) design pattern, where web page elements are kept private and accessed via public methods.
- **Inheritance** is used to create base test classes with common setup (`@BeforeTest`) and teardown (`@AfterTest`) methods, which specific test classes can extend.
- **Polymorphism** allows you to write more flexible and reusable test code. For example, you could have a `WebDriver` reference that can hold a `ChromeDriver`, `FirefoxDriver`, or `SafariDriver` object.

---

## 🏷 Tags

`java`, `oop`, `sdet`, `programming`, `core-java`
