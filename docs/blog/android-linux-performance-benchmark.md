---
title: "ARM64 Performance Tested: Can a Mobile Processor Handle Everyday Linux Development?"
description: "CoreMark, SQLite compilation, and parallel-build results from NimoteCode Local Linux on Android, assessing whether ARM64 can handle everyday Linux development tasks."
date: "2026-11-04"
author: "NimoteCode Team"
tags: ["ARM64", "Android", "Linux", "mobile development", "performance testing"]
---

# ARM64 Performance Tested: Can a Mobile Processor Handle Everyday Linux Development?

In the past few years, the performance improvement of ARM processors on the mobile side has been quite obvious.

Today's mobile phone SoCs not only have multiple high-performance cores, but also considerable memory bandwidth and integer computing capabilities. But for developers, running scores are not always the most important indicator.

A more practical question is: **if a complete Linux development toolchain is placed in an ARM64 environment, how much real development work can it handle?**

For example, how long does it take for GCC to compile a real project? Can eight cores effectively shorten build times? Does a mobile processor’s high scores in CPU benchmarks mean that the actual development experience is good enough?

**In order to answer these questions, I used my old mobile phone OnePlus Ace5 to install NimoteCode in the local linux environment and conducted several sets of tests, including CoreMark, SQLite source code compilation, and multi-file parallel construction.**

The purpose is that I want to verify that, regardless of the compatibility issues of the Linux environment deployed on the mobile phone, can Android phones actually be used for development if they are installed with Linux? Is the performance up to standard or not?

The actual test results were more interesting than I expected.

## 1. Test environment: Local linux deployed by NimoteCode, using built-in Ubuntu

This test uses Ubuntu 24.04.4 LTS, running in an ARM64 container environment.

The hardware configuration is as follows:

| Item | Configuration |
| ------ | --------------------------------------------------- |
| Operating system | Ubuntu 24.04.4 LTS |
| Architecture | ARM64 / AArch64 |
| CPU | 8 cores |
| Core configuration | 5 × Cortex-A720 + 1 × Cortex-A725 + 2 × Cortex-A520 |
| Memory | 10 GiB |
| Compiler | GCC 13.3.0 |
| Build tool | GNU Make |
| CPU benchmark | CoreMark v1.01 |
| Compilation test | SQLite 3.54.1 |

This is a typical ARM heterogeneous multicore configuration: high-performance cores for compute-intensive work and energy-efficient cores for low-power tasks.

There are some limitations to the test environment. The container blocks some CPU frequency and system hardware information, and the running frequency cannot be accurately obtained through the regular sysfs interface.

An indirect estimate of about 2.34 GHz was obtained using a dependent addition chain, but since instruction latency and actual scheduling behavior cannot be fully confirmed, this value is not used as a basis for formal performance analysis.

**It should be noted that this data comes from the PRoot environment of NimoteCode on the real Android machine. Therefore, it reflects the computing and compilation capabilities of the current ARM64 test environment and cannot be directly regarded as the actual test results of Android Local Linux.**

Therefore, it reflects the computing and compilation capabilities of the current ARM64 test environment and cannot be directly regarded as the actual test results of Android Local Linux.

For instructions on installing and setting up Local Linux in NimoteCode, see <https://nimotecode.com/docs/local-linux>.

![local linux deploy](/images/placeholders/local-linux-deploy-snapshot.png)

**The actual test directly allows deepseek-flash to perform environment deployment and actual testing.**

![deepseek-flash run benchmark](/images/placeholders/benchmarktest.png)

## 2. CoreMark: Single-core is about 23,400, multi-core is over 144,000

First test the basic computing power of the CPU.

CoreMark is a processor benchmark test provided by EEMBC that involves workloads such as integer operations, linked list operations, matrix calculations, and state machines.

Unlike some benchmarking tools that focus on graphics performance, CoreMark focuses more on the performance of the processor when performing general computing tasks.

This test resulted in:

| Test | First run | Second run |
| ------------- | ------- | ------- |
| Single-core CoreMark | 23,103 | 23,764 |
| 8-thread CoreMark | 143,087 | 145,375 |

The single-core score is about 23,400, and the 8-thread total score is about 144,200.

<Metrics: about 23,400 single-core / about 144,200 multi-core / scaling ratio of about 6.15×>

What's worth noting here is the multi-threaded scalability.

Instead of the ideal 8x improvement, 8 CPU cores resulted in about a 6.15x increase in throughput.

This is not surprising.

On the one hand, this processor adopts a heterogeneous architecture, and there are performance differences between Cortex-A520 and large cores; on the other hand, multi-threaded tasks may also be affected by frequency allocation, memory access, scheduling and power consumption limitations.

However, for a mobile processor with only 8 physical cores, an expansion ratio of more than 6 times at least shows that under the current test load, parallel computing can indeed effectively utilize multiple cores.

Of course, CoreMark primarily represents throughput capabilities for a specific computing workload. It doesn't directly answer how efficiently a GCC, Git, or Python project actually runs.

Therefore, the next test is more meaningful.

## 3. SQLite compilation: real projects deserve more attention than running scores

In order to avoid testing only synthetic loads, the amalgamation source code of SQLite 3.54.1 was selected for compilation this time.

SQLite is a very mature embedded database project, and its amalgamation version consolidates a large amount of implementation code into a single C source file.

The source code used this time is about 271,131 lines, which can bring practical lexical analysis, syntax analysis, optimization and code generation work to the compiler.

Test GCC's `-O0` and `-O2` optimization levels separately.

| Build configuration | Time |
| ------------- | ------ |
| GCC `-O0` | 7.6 seconds |
| GCC `-O2`, first run | 34.0 seconds |
| GCC `-O2`, second run | 35.0 seconds |

The most interesting thing is the difference between `-O0` and `-O2`.

When optimization is not turned on, compilation only takes about 7.6 seconds; after turning on `-O2`, the time increases to about 34–35 seconds.

**Optimized compilation takes approximately 4.5 times longer than non-optimized compilation.**

This is not just a matter of CPU speed.

GCC will perform a more complex optimization process under `-O2`, which requires additional analysis of code structure, control flow and data dependencies, and generates more efficient machine code.

Large single-file compilations also place significant pressure on caches, memory accesses, and compiler internal data structures.

This also explains why the processor performs well in basic CPU benchmarks, but still takes considerable time when faced with heavier optimization compilation tasks.

This result is of great reference value for daily development.

Assuming that the developer is maintaining a small C tool, fixing a piece of business logic, or modifying the compilation configuration, non-optimizing builds usually provide a shorter feedback cycle.

And when the task becomes a complete optimized build of a large code base, the wait time can increase significantly.

This is also a practical issue that needs to be considered in the mobile development environment: **Not all code tasks require desktop-level computing power, but different tasks have very different requirements for local computing resources. **

## 4. Parallel compilation: How much benefit can 8 cores bring?

Single-file SQLite compilation mainly tests a single compilation process and cannot fully reflect the advantages of multi-core.

Therefore, another set of tests was also conducted.

Construct a test load of approximately 75,001 lines of C code, split it into independent compilation units, and measure serial and parallel build times with GNU Make.

The result is as follows:

| Build method | Time | Relative performance |
| ------ | ------ | ----- |
| Serial compilation | 9.98 seconds | 1.00× |
| 8 parallel jobs | 1.60 seconds | 6.24× |

From nearly 10 seconds to 1.6 seconds, the difference is noticeable.

This result is also relatively close to the previous CoreMark multi-core expansion ratio.

However, this does not mean that all projects can obtain more than 6 times speedup using `make -j8`.

Real projects also contain header file dependencies, linking, generated code, file system operations, and build steps that cannot be parallelized.

Some projects may even experience diminishing returns as they add parallel tasks due to memory pressure, I/O contention, and thermal constraints.

In addition, the synthetic code load used this time cannot completely replace large-scale real projects such as LLVM and Chromium.

But at least it can be confirmed: ARM64 multi-core has obvious parallel construction benefits for tasks that can be split into multiple independent compilation units. **

## 5. Why can’t CPU running scores directly represent Linux development experience?

At this point, a very important phenomenon can actually be observed.

The performance of the same set of ARM64 hardware in different tests varies greatly.

CoreMark demonstrates considerable integer computing capabilities, and multi-thread expansion is also ideal; however, the optimized compilation of SQLite still takes tens of seconds.

The reason is not complicated: development workloads are far more complex than single-CPU benchmarks.

For example:

**Compile C/C++ projects**, mainly involving compiler calculations, memory access, process scheduling, and file reading and writing.

**Running Git**, in addition to calculating hashes, may also traverse files, read metadata, and frequently access the storage system.

**Installing software dependencies** will mix network requests, decompression, verification, script execution and small file operations.

**Running a Python or Node.js toolchain**, in turn involves interpreter or runtime startup, module loading, dependency resolution, and extensive file system access.

Therefore, a CPU with a high CoreMark score does not necessarily prove that its development experience is good.

Especially when running a Linux user-mode environment on Android, additional considerations need to be made about the operating mechanism.

For example PRoot.

PRoot can provide a Linux user-mode file system environment without obtaining Android root permissions, but it is not a virtual machine or a native Linux kernel.

It needs to handle process execution and some system call related operations. These additional overheads may have an impact on tasks that frequently access the file system and create processes.

This brings up a question worthy of separate measurement:

How much difference will the performance of the same piece of C code differ when executed in the Android native environment and the PRoot Ubuntu environment?

The answer cannot be given based on the previous CoreMark and SQLite data alone.

To answer this question, we need to measure the performance of native and PRoot environments using comparable compiler configurations on the same Android device.

## 6. What is the real value of Linux development on mobile devices?

After completing these sets of tests, I feel that the actual workflow is more worthy of attention in the mobile development environment than pursuing a certain CPU score.

Mobile devices don't need to take on all desktop development tasks.

But if it can already run a complete compiler, interpreter and basic Linux tool chain, then many lightweight development operations that originally relied on computers could theoretically be completed locally.

For example:

*   Temporarily modify a piece of code, compile and verify the results.
*   View and manage changes in your local Git repository.
*   Run scripts, process text, or debug small tools.
*   Complete some development work without a remote server connection.

This is also the direction I have been focusing on when developing NimoteCode.

**NimoteCode is a mobile IDE for Android and iOS. It initially focused on SSH remote development, and later gradually added Android Local Linux.**

> It provides an Ubuntu user-mode environment through PRoot on supported Android devices, without requiring root permissions or additional installation of independent terminal applications.
>
> Rather than simply providing a Linux shell, NimoteCode connects local Linux workspaces to existing file browsers, editors, terminals, Git, and AI-assisted development processes. The tool chain still needs to be installed according to project needs, and there are compatibility limitations for some debugging and system-level functions.

This design is not to package the phone into a high-performance workstation, but to allow developers to complete some truly useful work on the mobile device.

Of course, whether it is easy to use also depends on factors such as file operations, compilation time, keyboard interaction, process stability, and Android background life cycle.

None of this can be proven by just one CPU benchmark.

## 7. Conclusion at this stage: ARM64 already has practical development capabilities, but the boundaries need to be measured.

Looking back on this test, several results are worthy of attention.

| Metric | Result |
| --------------- | --------- |
| Single-core CoreMark | About 23,400 |
| 8-thread CoreMark | About 144,200 |
| Multicore scaling ratio | About 6.15× |
| SQLite `-O0` build | 7.6 seconds |
| SQLite `-O2` build | 34–35 seconds |
| Parallel multi-file build speed-up | About 6.24× |

These data at least show that in this ARM64 Ubuntu container environment, GCC can complete the compilation of real C projects of a certain scale, and multi-core can also bring obvious performance gains to independent compilation tasks.

But they don't directly prove Android PRoot's performance, nor are they sufficient to tell which generation of Intel or AMD desktop CPUs the processor is equivalent to.

There are several limitations to the test: CoreMark needs to further verify the complete operating parameters; there is no x86 comparison under the same conditions; long-term continuous load testing has not yet been conducted; Git, APT, small file I/O and Android PRoot overhead are not included in this data.

A more worthwhile follow-up test is to compare the real build times of the native running environment, Termux and PRoot Ubuntu on the same Android device, and observe the performance changes under sustained load.

From a practical development perspective, I am increasingly inclined to understand mobile Linux this way:

**It doesn't necessarily need to replace a computer, but it should keep developers from having to go back to the computer for every simple code change, compile verification, and Git operation.**

For lightweight tasks, local execution reduces reliance on the network and remote servers; for larger builds, a workstation or server with a stronger SSH connection still makes more sense.

There is no conflict between the two ways of working.

Perhaps the real direction worth exploring for mobile IDEs in the future is not to simply copy desktop IDEs, but to allow local Linux, remote development and AI tool chains to be naturally connected in the same workflow.

This is more worthy of continuous verification than simply discussing the running scores of mobile phone processors.

***

**Tests and References**

*   CoreMark： <https://www.eembc.org/coremark/>
*   SQLite 3.54.1 source code： <https://www.sqlite.org/download.html>
*   NimoteCode Android Local Linux doc:  <https://nimotecode.com/docs/local-linux>
*   NimoteCode offical website： [https://nimotecode.com](https://nimotecode.com/)

*The test data is based on the Local Linux:Ubuntu environment deployed by NimoteCode described in this article. Results are not representative of performance on other devices and do not constitute a performance guarantee for the Android PRoot environment. *
