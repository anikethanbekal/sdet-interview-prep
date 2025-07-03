---
title: Key Java Definitions Cheat Sheet
tags:
  - java
  - java-definitions
  - sdet
  - programming
  - core-java
  - interview-questions
categories:
  - Programming
  - Language-Specific
  - Java
  - Interview Questions
difficulty:
  - medium
background: bg-[#dbeafe]  # Light blue for language-specific
badge_color: text-blue-800 bg-blue-100
topic: java-definitions
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet that provides clear definitions and examples for fundamental Java terminology. An essential quick-reference guide for SDETs preparing for technical interviews.
---

# 📘 Key Java Definitions

This cheat sheet provides clear definitions and code examples for core Java terms.

---

## ✅ JDK vs. JRE vs. JVM

| Acronym | Stands For | Description |
|---|---|---|
| **JVM** | Java Virtual Machine | An abstract machine that provides the runtime environment in which Java bytecode can be executed. It is platform-dependent. |
| **JRE** | Java Runtime Environment | A software package that contains what is required to run a Java program. It includes the JVM, libraries, and other supporting files. |
| **JDK** | Java Development Kit | A software development kit required to develop Java applications. It includes the JRE, compilers, debuggers, and other development tools. |

---

## ✅ Garbage Collection

**Definition:**
Garbage Collection is the process of automatically freeing up memory that is no longer in use by a program. When an object is no longer referenced by any part of the program, the Java Virtual Machine's garbage collector reclaims the memory occupied by that object.

**Example:**
You don't explicitly free memory in Java; the garbage collector handles it.

```java
public void myMethod() {
    String s1 = new String("Hello");
    String s2 = new String("World");
    s1 = s2; // The original "Hello" string is now eligible for garbage collection
}
```

---

## ✅ POJO (Plain Old Java Object)

**Definition:**
A POJO is a simple Java object that is not bound by any special restriction. It does not need to extend any particular class or implement any particular interface. It is used for increasing the readability and reusability of a program.

**Example:**

```java
public class Employee {
    public String name;
    public int id;
}
```

---

## ✅ JavaBean

**Definition:**
A JavaBean is a special type of POJO that follows certain conventions:
1.  It must implement the `Serializable` interface.
2.  It must have a public no-argument constructor.
3.  All its properties must be private, with public `getter` and `setter` methods.

**Example:**

```java
import java.io.Serializable;

public class EmployeeBean implements Serializable {
    private String name;
    private int id;

    public EmployeeBean() { // No-arg constructor
    }

    public String getName() { // Getter
        return name;
    }

    public void setName(String name) { // Setter
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
```

---

## ✅ Serialization

**Definition:**
Serialization is the process of converting an object's state into a byte stream, which can then be saved to a file, sent over a network, or stored in a database. The reverse process is called deserialization.

**Example:**

```java
import java.io.*;

// EmployeeBean from the previous example must implement Serializable

// Serialize
FileOutputStream fos = new FileOutputStream("employee.ser");
ObjectOutputStream oos = new ObjectOutputStream(fos);
oos.writeObject(new EmployeeBean());
oos.close();

// Deserialize
FileInputStream fis = new FileInputStream("employee.ser");
ObjectInputStream ois = new ObjectInputStream(fis);
EmployeeBean bean = (EmployeeBean) ois.readObject();
ois.close();
```

---

## ✅ Reflection

**Definition:**
Reflection is an API that is used to examine or modify the behavior of methods, classes, and interfaces at runtime. It is a powerful feature, often used in test frameworks (e.g., JUnit, TestNG) to invoke test methods dynamically.

**Example:**

```java
import java.lang.reflect.Method;

MyClass myObj = new MyClass();
Class<?> clazz = myObj.getClass();

// Get and invoke a method by its name
Method method = clazz.getMethod("myMethodName");
method.invoke(myObj);
```

---

## ✅ Generics

**Definition:**
Generics provide a way to create classes, interfaces, and methods that can work with different data types while providing compile-time type safety. This is heavily used in the Collections Framework.

**Example:**

```java
import java.util.ArrayList;
import java.util.List;

// Using generics with a List
List<String> myList = new ArrayList<>();
myList.add("Hello");
// myList.add(123); // This would cause a compile-time error

String myString = myList.get(0);
```

---

## 🏷 Tags

`java`, `java-definitions`, `sdet`, `programming`, `core-java`, `interview-questions`
