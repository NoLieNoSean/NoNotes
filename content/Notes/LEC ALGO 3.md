---
tags:
  - ALGO
  - Lecture
date: 2025-08-13
time: 12:15
---
# General recursion trees

Refer @ericksonAlgorithms2019 [p. 32]

$$
T(n)=aT\left( \frac{n}{b} \right)+f(n).
$$
Let $f(n)=n^{d}$. Time spent doing non recursive work is given by
$$
n^{d}+a\left( \frac{n}{b} \right)^{d}+a^{2}\left( \frac{n}{b^{2}} \right)^{d}+\dots+a^{\log_{b}n}\left( \frac{n}{b^{\log_{b}n}} \right)^{d}
$$
The leaves take $a^{\log_{b}n}=n^{\log_{b}a}$ time. Thus, total time is given by
$$
\begin{align}
n^{\log_{b}a}+\frac{n^{\log_{b}a}-n^{d}b^{d}}{\left( \frac{a}{b^{d}}-1 \right) b^{d}}
\end{align}
$$
If $\frac{a}{b^{d}}> 1$, then $T(n)=O(n^{\log_{b}a})$. If $\frac{a}{b^{d}}< 1$, then $T(n)=O(n^{d})$. If $\left( \frac{a}{b^{d}} \right)=1$, then $T(n)=O(n^{d}\log n)$.

---

# Divide and conquer algorithms

Fast integer multiplication