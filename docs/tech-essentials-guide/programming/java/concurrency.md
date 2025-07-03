# Concurrency and Multithreading in Java

Understand how to leverage concurrency in Java for parallel test execution, improving efficiency and reducing test suite run times.

## Topics:

- **Threads and Runnables:** Creating and managing threads.
- **Synchronization:** `synchronized` keyword, locks, and atomic operations.
- **Thread Pools:** `ExecutorService` for managing threads.
- **Concurrency Utilities:** `CountDownLatch`, `CyclicBarrier`, `Semaphore`.
- **Parallel Test Execution:** Strategies for running Selenium/API tests in parallel.

---

## 💡 SDET Perspective on Concurrency

For SDETs, concurrency is primarily about optimizing test execution time. Running tests in parallel can drastically reduce the feedback loop, which is crucial in CI/CD pipelines. However, it also introduces complexities like thread safety, race conditions, and deadlocks that need careful handling.

---

## ✅ Threads and Runnables

Java provides two main ways to create threads:

1.  **Extending the `Thread` class:** Simple, but limits your class from extending any other class.
2.  **Implementing the `Runnable` interface:** More flexible, as your class can still extend another class. This is generally the preferred approach.

### Example: Basic Thread Creation

```java
// Option 1: Extending Thread
class MyThread extends Thread {
    private String taskName;

    public MyThread(String taskName) {
        this.taskName = taskName;
    }

    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + " - " + taskName + " started.");
        try {
            Thread.sleep(1000); // Simulate work
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            System.out.println(Thread.currentThread().getName() + " - " + taskName + " interrupted.");
        }
        System.out.println(Thread.currentThread().getName() + " - " + taskName + " finished.");
    }
}

// Option 2: Implementing Runnable (Recommended)
class MyRunnable implements Runnable {
    private String taskName;

    public MyRunnable(String taskName) {
        this.taskName = taskName;
    }

    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + " - " + taskName + " started.");
        try {
            Thread.sleep(1000); // Simulate work
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            System.out.println(Thread.currentThread().getName() + " - " + taskName + " interrupted.");
        }
        System.out.println(Thread.currentThread().getName() + " - " + taskName + " finished.");
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        // Using Thread class
        MyThread thread1 = new MyThread("Task A");
        thread1.start();

        // Using Runnable interface
        Thread thread2 = new Thread(new MyRunnable("Task B"));
        thread2.start();

        // Using Lambda (Java 8+)
        new Thread(() -> {
            System.out.println(Thread.currentThread().getName() + " - Task C started.");
            // ... work
            System.out.println(Thread.currentThread().getName() + " - Task C finished.");
        }).start();
    }
}
```

---

## ✅ Synchronization

Synchronization is used to control access to shared resources by multiple threads. It prevents race conditions and ensures data consistency.

### `synchronized` Keyword

- **Synchronized Methods:** When a method is `synchronized`, only one thread can execute that method on a given object at a time.
- **Synchronized Blocks:** Provides finer-grained control. You can synchronize on any object.

**SDET Relevance:** Protecting shared resources like test counters, report generators, or WebDriver instances (if not using `ThreadLocal`).

```java
public class Counter {
    private int count = 0;

    // Synchronized method
    public synchronized void increment() {
        count++;
        System.out.println(Thread.currentThread().getName() + ": " + count);
    }

    // Synchronized block
    public void decrement() {
        synchronized (this) { // Synchronize on the current object
            count--;
            System.out.println(Thread.currentThread().getName() + ": " + count);
        }
    }

    public int getCount() {
        return count;
    }
}

// Example usage (will show race condition if not synchronized):
// Counter counter = new Counter();
// Runnable task = () -> {
//     for (int i = 0; i < 1000; i++) {
//         counter.increment();
//     }
// };
// new Thread(task, "Thread-1").start();
// new Thread(task, "Thread-2").start();
// // After some time, counter.getCount() might not be 2000 without synchronization
```

### `ThreadLocal`

`ThreadLocal` provides thread-local variables. Each thread that accesses a `ThreadLocal` instance has its own independently initialized copy of the variable. This is crucial for parallel test execution.

**SDET Relevance:** Managing `WebDriver` instances in parallel test execution. Each test thread needs its own `WebDriver` instance to avoid conflicts.

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebDriverManager {
    // ThreadLocal stores a WebDriver instance for each thread
    private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();

    public static WebDriver getDriver() {
        if (driver.get() == null) {
            // Initialize a new WebDriver for the current thread
            driver.set(new ChromeDriver());
            // driver.get().manage().window().maximize();
        }
        return driver.get();
    }

    public static void quitDriver() {
        if (driver.get() != null) {
            driver.get().quit();
            driver.remove(); // Remove the thread-local variable
        }
    }
}

// Usage in TestNG/JUnit parallel tests:
// @BeforeMethod
// public void setup() {
//     WebDriverManager.getDriver().get("http://example.com");
// }

// @Test
// public void testSomething() {
//     WebDriver driver = WebDriverManager.getDriver();
//     // ... test steps using this thread's driver
// }

// @AfterMethod
// public void teardown() {
//     WebDriverManager.quitDriver();
// }
```

---

## ✅ Thread Pools: `ExecutorService`

Thread pools manage a collection of worker threads. They reduce the overhead of creating and destroying threads for each task and improve performance.

**SDET Relevance:** Running a fixed number of API calls or small, independent test scenarios concurrently.

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ThreadPoolExample {
    public static void main(String[] args) throws InterruptedException {
        // Create a fixed thread pool with 3 threads
        ExecutorService executor = Executors.newFixedThreadPool(3);

        for (int i = 0; i < 10; i++) {
            final int taskId = i;
            executor.submit(() -> {
                System.out.println(Thread.currentThread().getName() + " executing task " + taskId);
                try {
                    Thread.sleep(500); // Simulate work
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }

        executor.shutdown(); // Initiate orderly shutdown
        executor.awaitTermination(1, TimeUnit.MINUTES); // Wait for tasks to complete
        System.out.println("All tasks submitted to thread pool completed.");
    }
}
```

---

## ✅ Concurrency Utilities

Java provides several utility classes in `java.util.concurrent` for managing complex concurrent scenarios.

### `CountDownLatch`

A synchronization aid that allows one or more threads to wait until a set of operations being performed in other threads completes.

**SDET Relevance:** Waiting for multiple parallel API calls to complete before asserting on the combined results.

```java
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class CountDownLatchExample {
    public static void main(String[] args) throws InterruptedException {
        int numberOfTasks = 3;
        CountDownLatch latch = new CountDownLatch(numberOfTasks);
        ExecutorService executor = Executors.newFixedThreadPool(numberOfTasks);

        for (int i = 0; i < numberOfTasks; i++) {
            final int taskNum = i;
            executor.submit(() -> {
                System.out.println("Task " + taskNum + " started by " + Thread.currentThread().getName());
                try {
                    Thread.sleep((long) (Math.random() * 1000)); // Simulate work
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                System.out.println("Task " + taskNum + " finished.");
                latch.countDown(); // Decrement the latch count
            });
        }

        latch.await(); // Main thread waits until count becomes 0
        System.out.println("All tasks completed. Main thread can proceed.");
        executor.shutdown();
    }
}
```

### `CyclicBarrier`

A synchronization aid that allows a set of threads to all wait for each other to reach a common barrier point.

**SDET Relevance:** Simulating a scenario where multiple users (threads) need to reach a specific page or state before proceeding together (e.g., a load test scenario).

```java
import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class CyclicBarrierExample {
    public static void main(String[] args) {
        int parties = 3;
        CyclicBarrier barrier = new CyclicBarrier(parties, () -> {
            // This runnable is executed once the barrier is tripped
            System.out.println("All parties arrived at the barrier! Proceeding...");
        });
        ExecutorService executor = Executors.newFixedThreadPool(parties);

        for (int i = 0; i < parties; i++) {
            final int partyNum = i;
            executor.submit(() -> {
                try {
                    System.out.println("Party " + partyNum + " is doing initial work.");
                    Thread.sleep((long) (Math.random() * 1000));
                    System.out.println("Party " + partyNum + " waiting at barrier.");
                    barrier.await(); // Wait for all parties
                    System.out.println("Party " + partyNum + " passed the barrier.");

                    // Can do more work after barrier
                    Thread.sleep((long) (Math.random() * 500));
                    System.out.println("Party " + partyNum + " doing final work.");

                } catch (InterruptedException | BrokenBarrierException e) {
                    Thread.currentThread().interrupt();
                    e.printStackTrace();
                }
            });
        }
        executor.shutdown();
    }
}
```

---

## ✅ Parallel Test Execution Strategies

### TestNG Parallel Execution

TestNG provides built-in support for parallel test execution via its XML configuration file.

```xml
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd" >
<suite name="MySuite" parallel="tests" thread-count="2">

  <test name="ChromeTest">
    <parameter name="browser" value="chrome"/>
    <classes>
      <class name="com.example.tests.LoginTest"/>
      <class name="com.example.tests.ProductSearchTest"/>
    </classes>
  </test>

  <test name="FirefoxTest">
    <parameter name="browser" value="firefox"/>
    <classes>
      <class name="com.example.tests.LoginTest"/>
      <class name="com.example.tests.ProductSearchTest"/>
    </classes>
  </test>

</suite>
```

- `parallel="tests"`: Runs each `<test>` tag in a separate thread.
- `thread-count="2"`: Specifies the maximum number of threads to use.

**Key for SDETs:** When running tests in parallel, ensure that each test is independent and does not share mutable state. Use `ThreadLocal` for WebDriver instances and other thread-specific data.

### Selenium Grid

Selenium Grid allows you to run your tests on different machines against different browsers in parallel. It consists of a Hub and multiple Nodes.

- **Hub:** The central point that receives test requests and distributes them to the appropriate nodes.
- **Node:** A machine where browsers are hosted and Selenium WebDriver tests are executed.

**SDET Relevance:** Scaling test execution, running tests across various browser-OS combinations, and integrating with cloud-based testing platforms (e.g., BrowserStack, Sauce Labs).

---

## 🏷 Tags

`java`, `concurrency`, `multithreading`, `thread-pool`, `synchronized`, `threadlocal`, `sdet`, `programming`, `test-automation`, `parallel-execution`, `selenium-grid`, `testng`