---
tags: 
date: "2025-09-19"
time: "11:59"
id: "124"
---
We looked at merge sort ($O(n\log n)$, $O(n)$), Insertion sort ($O(n^{2})$, $O(1)$), and quick sort $(O(n^{2}), O(1))$. 

# Heap sort

$A[1..n]$ is an array to be sorted. Define parent$(i)=\lfloor i/2 \rfloor$, left$(i)=2i$, right$(i)=2i+1$. This makes the array into what's called at *heap*. A max heap satisfies $A[\text{parent(i)}]\geq A[i]$, and a min heap satisfies $A[\text{parent(i)}]< A[i]$. 

*max heapify* is a recursive trickle down subroutine that max heapifies a heap given that the left and right subheaps of the root are max heaps, in $O(\log n)$ time. Heap sort calls max heapify $n$ times, starting from the leaves and working its way upwards.

---

> [!Theorem]
> Any comparison based sort algorithm requires $\Omega(n\log n)$ comparisons in the worst case.




