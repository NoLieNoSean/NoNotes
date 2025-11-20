---
id: "359"
date: 2025-11-19
time: 15:43
tags:
  - ANA2
  - Lecture
---
[!Proposition]
Let $K\subseteq L^{2}[-\pi, \pi]$ be compact. Then
$$
\lim_{ |n| \to \infty } \sup_{f\in K}|\hat{f}_{n}|=0.
$$

[!Proof]-

Goes as expected: use totally boundedness, followed by the triangle inequality.


---

[!Exercise]

Let $f\in C(S_{1})$. Define
$$
\Delta_{f}(t):=\sup_{s, r\in[-\pi, \pi], |s-r|< t}.
$$
Assume
$$
\int_{-\pi}^{\pi} \frac{\Delta_{f}(t)}{|t|} \, dt< \infty.
$$
Prove that $S_{N}f\to f$ uniformly. 

---

# Convolution

For $f, g\in C(S_{1})$, define
$$
(f\star g)(t):=\frac{1}{2\pi}\int_{0}^{2\pi} f(t-s)g(s) \, ds=\frac{1}{2\pi}\int_{0}^{2\pi} f(s)g(t-s) \, ds.  
$$
