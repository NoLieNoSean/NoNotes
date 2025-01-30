---
tags:
  - ANA1
  - MOC
---
**Prof:** Upendra Kulkarni
**TAs:** Aditya Sett, Ananya Ranade, Harini Rammohan, Sayandeep Shee

Reference Material:
- Principles of Mathematical Analysis, Rudin (Primary)
- Understanding Analysis, Abbot
- Analysis 1, Tao
- Introduction to Real Analysis, Bartle & Sherbert
- Analysis 1, Amann & Escher

>[!Info]- Notation
>- $B_{\delta}(p, E)$ is an open ball of radius $\delta$ centered at $p$ in a metric space $E$. If $X$ is a superset of $E$, $B_{\delta}(p, E)\equiv B_{\delta}(p, X)\cap E$. 
>- $\sqcup$ denotes disjoint union.
>- $\overline{P}$ denotes the closure of $P$ in the contextually appropriate space.

# Compiled Notes
## The real and complex number systems
- [[Ordered sets]]
- [[Bounds]]
- [[LUB property]]
- [[Fields]]
- [[Ordered fields]]
- [[The real field]]
- [[The extended real number system]]
- [[The complex field]]
- [[Euclidean spaces]]
## Basic Topology
- [[Finite, countable, and uncountable sets]]
- [[Cantor's Theorem]]
- [[Metric spaces]]
## Sequences and series
- [[Sequences and convergence]]
- [[Subsequences]]
- [[Cauchy sequences]]
- [[LimSup and LimInf]]

# Lecture Notes

Proper lecture notes start here.
- [[Analysis1_L10]] ✅ 
	- Started chapter 4. Motivated and stated 4.1. Limit points. 2.20. 3.2d. 
- [[Analysis1_L11]] ✅
	- Continuity (4.5, 4.6, 4.7, 4.12). The sequence criterion (4.2). Algebra of limits of functions (4.4). 
- [[Analysis1_L12]] skip for now
	- ~~NEED to FINISH THIS STUFF!~~ forget it. not gonna happen.
- [[Analysis1_L13]] ✅
	- Motivated and defined open and closed sets from 2.18. Proved 4.8 halfway.
- [[Analysis1_L14]] ✅
	- Finished proof of 4.8. Examples of open/closed sets. Showed that being closed implies containing all your limit points (This is Rudin's definition of being closed. We defined being closed as the complement being empty, which rudin proves in 2.23). 2.24, 2.25, 2.26.
- [[Analysis1_L15]] ✅
	- 4.9, 4.10, 4.11. 2.29, 2.28, 2.27, 2.30.
- [[Analysis1_L16]] ✅
	- Sequential/limit point compactness and their equivalence. Intrinsic property of compactness. Examples of compact sets: closed boxes in $\mathbb{R}^{k}$ are bounded. A few proofs using sequential/limit point compactness. Heine Borel.
- [[Analysis1_L17]] ✅
	- Open cover compactness, equivalence of all three versions of compactness. Proofs using OCC.
- [[Analysis1_L18]] ✅
	- More proofs using OCC. 2.36, 3.10 b, 2.42
- [[Analysis1_L19]] ✅ <- *Midsem syllabus ends here*
	- Infinite limits and limits at infinity, discontinuities, monotonic functions. 4.25, 4.26, 4.27, 4.28, 4.29, 4.30, 4.32, 4.33, 4.34
- [[Analysis1_L20]] ✅
	- Uniform continuity
- [[Analysis1_L21]] ✅
	- Topological spaces, homeomorphisms, 4.17
- [[Analysis1_L22]] ✅ <- *Quiz 2 syllabus ends here*
	- Connected sets, Intermediate value theorem, connected components, allied theorems. 
- [[Analysis1_L23]] ✅ Differentiation!
	- Derivatives, Algebra of derivatives, chain rule
- [[Analysis1_L24]] ✅
	- Mean value theorems, properties of derivatives
- [[Analysis1_L25]] ✅
	- Taylor's theorem, MVT analogue for vector valued functions
- [[Analysis1_L26]] ✅ Integration!
	- Riemann and Stieltjes integrals, partitions, 6.1 through 6.6
- [[Analysis1_L27]] ✅
	- 6.8 through 6.12
- [[Analysis1_L28]] ✅
	- Fundamental theorem of calculus, integration by parts
- [[Analysis1_L29]] ✅ <- *Midsem 2 syllabus ends here*
	- Integration of vector valued functions, rectifiable curves
- [[Analysis1_L30]] ✅ 
	- Series, convergence tests, the number $e$
- [[Analysis1_L31]] ✅
	- Root test, ratio test, power series
- [[Analysis1_L32]] ✅
	- Real analytic functions
- [[Analysis1_L33]] ✅
- [[Analysis1_L34]] 
- [[Analysis1_L35]]
- [[Analysis1_L36]]
- [[Analysis1_L37]]
- [[Analysis1_L38]]

>[!Excalidraw]-
>These notes are either in excalidraw (which cannot be rendered by Quartz) or unformatted. Refer [[#Compiled Notes]] for the content form these lectures.
>- [[Analysis1_L1]] ✅
>- [[Analysis1_L2]] ✅
>- [[Analysis1_L3]] ✅
>- [[Analysis1_L4]] ✅
>- [[Analysis1_L5]] ✅
>- [[Analysis1_L6]] ✅
>- [[Analysis1_L7]] ✅
>- [[Analysis1_L8]] ✅
>- [[Analysis1_L9]] ✅ (Done! F'ing finally)

# Homework
- [[Analysis1_HW1.pdf]]
- [[Analysis1_HW2.pdf]]
- [[Analysis1_HW3.pdf]]
- [[Analysis1_HW4.pdf]]
- [[Analysis1_HW5.pdf]]
- [[Analysis1_HW6_P1.pdf]], [[Analysis1_HW6_P2.pdf]]

%% 
# To-do
- [ ] Review quiz 1 solutions
- [ ] Review HW 1 solutions

- [ ] note 3.11 b, 4.3
- [ ] 3.21, Thm 3.7, 3.17 
- [ ] Cantor-like set on $[\sqrt{ 2 }, 2\sqrt{ 2 }]$ has no rationals.
- [ ] No set S can be in bijection with its power set (classic Cantor diagonalization argument)
- [ ] Try to prove the Schroder-Bernstein theorem: if there is an injection from S to T and an injection from T to S, then there is a bijection between S and T. Then locate a proof and see if you can read a little and complete the rest. (Check abbot)
- [ ] $a_{0}\ge a_{1}\ge \dots \ge 0$. $\lim_{ n \to \infty }a_{n}=0$. Show that $\sum(-1)^{n}a_{n}$ converges.
- [ ] Fixed point theorem
      $M$ is a complete metric space.
      $T:M\to M$ is continuous.
      $d(T(p), T(q))<k(d(p,q))$, where $k$ is a constant less than 1.
      Then, $T$ has a unique fixed point (If $T(x_{0}) = x_{0}$, then, $x_{0}$ is called a fixed point).
      It is easy to see that at most one fixed point can exist for $T$ given the distance inequality.

%%