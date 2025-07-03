---
title: Advanced Java Topics Cheat Sheet
tags:
  - java
  - advanced-java
  - sdet
  - programming
  - core-java
  - multithreading
  - jdbc
categories:
  - Programming
  - Language-Specific
  - Java
difficulty:
  - hard
background: bg-[#fee2e2]  # Light red for advanced topics
badge_color: text-red-800 bg-red-100
topic: advanced-java
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet covering advanced Java topics relevant to SDETs, including multithreading, JDBC for database interaction, and an introduction to build tools like Maven. These topics are crucial for building sophisticated test frameworks and handling complex testing scenarios.
---

# 📘 Advanced Java Topics for SDETs

This cheat sheet covers advanced topics that are highly beneficial for experienced SDETs.

---

## 🧠 Multithreading

Multithreading allows concurrent execution of two or more parts of a program for maximum utilization of the CPU. This is particularly useful for running tests in parallel.

### Creating Threads

1.  **Extending the `Thread` class:**

    ```java
    class MyThread extends Thread {
        public void run() {
            System.out.println("Thread is running.");
        }
    }

    MyThread t1 = new MyThread();
    t1.start();
    ```

2.  **Implementing the `Runnable` interface (Recommended):**

    ```java
    class MyRunnable implements Runnable {
        public void run() {
            System.out.println("Thread is running.");
        }
    }

    Thread t1 = new Thread(new MyRunnable());
    t1.start();
    ```

### `synchronized` Keyword

The `synchronized` keyword is used to create synchronized blocks or methods, ensuring that only one thread can execute that code at a time.

```java
public synchronized void myMethod() {
    // ... thread-safe code
}
```

---

## ✅ JDBC (Java Database Connectivity)

JDBC is an API for connecting and executing queries on a database.

### Steps to Connect to a Database

1.  **Load the driver:** `Class.forName("com.mysql.cj.jdbc.Driver");`
2.  **Create a connection:** `Connection con = DriverManager.getConnection(url, user, password);`
3.  **Create a statement:** `Statement stmt = con.createStatement();`
4.  **Execute the query:** `ResultSet rs = stmt.executeQuery("SELECT * FROM users");`
5.  **Process the result set:**
    ```java
    while (rs.next()) {
        System.out.println(rs.getInt(1) + "  " + rs.getString(2));
    }
    ```
6.  **Close the connection:** `con.close();`

---

## ✅ Build & Dependency Management (Maven)

Maven is a powerful project management tool that is based on POM (Project Object Model). It is used for projects build, dependency and documentation.

### `pom.xml` Example

This is the core of a Maven project.

```xml
<project ...>
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0-SNAPSHOT</version>

    <dependencies>
        <!-- Selenium Dependency -->
        <dependency>
            <groupId>org.seleniumhq.selenium</groupId>
            <artifactId>selenium-java</artifactId>
            <version>4.10.0</version>
        </dependency>
        <!-- TestNG Dependency -->
        <dependency>
            <groupId>org.testng</groupId>
            <artifactId>testng</artifactId>
            <version>7.7.1</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

### Common Maven Commands

| Command | Description |
|---|---|
| `mvn clean` | Deletes the `target` directory (compiled code and build artifacts). |
| `mvn compile` | Compiles the source code of the project. |
| `mvn test` | Run the tests for the project. |
| `mvn package` | Takes the compiled code and packages it in its distributable format, such as a JAR. |
| `mvn install` | Installs the package into the local repository, for use as a dependency in other projects locally. |

---

## 💡 Tips for SDETs

- Use **multithreading** with test frameworks like TestNG to run your UI or API tests in parallel, significantly reducing execution time.
- Use **JDBC** to programmatically interact with your application's database to set up test data before a test run or to verify that data was correctly updated after a test.
- Master **Maven** or Gradle to manage your test automation project's dependencies and to integrate your tests into a CI/CD pipeline.

---

## 🏷 Tags

`java`, `advanced-java`, `sdet`, `programming`, `core-java`, `multithreading`, `jdbc`, `maven`
