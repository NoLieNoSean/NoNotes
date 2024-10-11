---
tags:
  - ANA1
  - MOC
---
**TAs:** Aditya Sett, Ananya Ranade, Harini Rammohan, Sayandeep Shee 

>[!Info] Notation
>- $B_{\delta}(p, E)$ is an open ball of radius $\delta$ centered at $p$ in a metric space $E$. If $X$ is a superset of $E$, $B_{\delta}(p, E)\equiv B_{\delta}(p, X)\cap E$. 

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
- [[Convergence of a series]]
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
	- NEED to FINISH THIS STUFF!
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
- [[Analysis1_L19]] ✅<- *Mid term syllabus ends here.*
- [[Analysis1_L20]]
- [[Analysis1_L21]] 
- [[Analysis1_L22]]
- [[Analysis1_L23]]

>[!Excalidraw]-
>These notes are either in excalidraw (which is not rendered by Quartz) or unformatted. Refer [[#Compiled Notes]] for the content form these lectures.
>- [[Analysis1_L1]] ✅
>- [[Analysis1_L2]] ✅
>- [[Analysis1_L3]] ✅
>- [[Analysis1_L4]] ✅
>- [[Analysis1_L5]] ✅
>- [[Analysis1_L6]] ✅
>- [[Analysis1_L7]] ✅
>- [[Analysis1_L8]] ✅
>- [[Analysis1_L9]] ✅ (Done! F'ing finally)

# Tutorials
- [[Analysis1_T2]]
- [[Analysis1_T3]]
- [[Analysis1_T4]]


# To-do


- [ ] Revise notes 
- [ ] Abbot chapters 3, 4
- [ ] 1.21, 3.20. Lecture 12
- [ ] Rudin chapters 2, 3, 4. Link up.
- [ ] Chapter 2, 3, 4 problems
- [ ] Compile Lecture 19
- [ ] Review quiz 1 solutions
- [ ] Review HW 1 solutions


- [ ] note 3.11 b, 4.3
- [ ] 3.21, Thm 3.7, 3.17 



# Rudin sections
2. Basic topology
	1. Definition of function
	2. allied definitions to 1
	3. equivalence relation
	4. Definitions of finite, countable, etc 
	5. $\mathbb{Z}$ is countable
	6. A finite set cannot be equivalent to one of its proper subsets
	7. Definition of sequence
	8. Theorem: Every infinite subset of a countable set A is countable
	9. Arbitrary unions and intersections
	10. Examples for 9
	11. Properties of unions and intersections
	12. Infinite union of countable sets in countable
	13. $\mathbb{Q}$ is countable
	14. Set of all binary sequences is uncountable
	15. **Metric spaces**
	16. Examples for 15
	17. segments, intervals, and balls
	18. the plethora of definitions this chapter is known for
	19. Theorem. Every neighborhood is an open set.
	20. Theorem. If p is a limit point of a set E, then every neighborhood of p contains infinitely many points of E.
	21. Examples of closed, open, perfect and bounded sets.
	22. Complement of infinite union is intersection of complements
	23. A set E is open if and only if its complement is closed.
	24. Theorems on unions and intersections of open and closed sets.
	25. Emphasis of finiteness of some collections in 24
	26. Definition of closure
	27. Theorems about closure
	28. Closed sets in R contain their suprema and infima
	29. Openness is relative
	30. Subspace topology
	31. Definition: open cover
	32. Definition: open cover compactness
	33. Compactness is intrinsic
	34. Theorem: Compact sets are closed.
	    [[Analysis1_L16#Characterization of compact sets]] 
	35. Theorem: Closed subsets of compact sets are compact. 
	    [[Analysis1_L16#Closed subsets of compact sets are compact]]
	    [[Analysis1_L17#Closed subsets of compact sets are compact]]
	36. Theorem: If {Kα} is a collection of compact subsets of a metric space X such that the intersection of every finite sub-collection of {Kα} is nonempty, then $\cap$ Kα is nonempty.
	37. Theorem: If E is an infinite subset of a compact set K, then E has a limit point in K.
	38. Nested interval property
	39. Nested k-cell property
	40. Every k-cell is compact
	41. Heine-Borel
	42. Every bounded infinite subset of Rk has a limit point in Rk. 
3. Numerical sequences and series
	1. **Definition. Convergence**
	2. Basic theorems about convergent sequences in metric spaces
	3. Algebraic limit theorem
	4. Slot-wise convergence, ALT for vectors
	5. definition. subsequence
	6. Theorems. bounded sequence in $\mathbb{R}^{k}$ contains convergent subsequence, sequence in compact metric space contains convergent subsequence
	7. Theorem. The subsequential limits of a sequence (pn) in a metric space form a closed subset of X.
	8. **Definition. Cauchy sequence**
	9. Definition. Diameter
	10. Theorems. $E$ and closure of $E$ have same diameter. Something like the NIP, but for metric spaces.
	11. Theorems about convergence and Cauchy sequences
	12. Definition. Complete metric space
	13. Definition. Monotonically increasing/decreasing sequences.
	14. Theorem. If monotonic, convergent $\iff$ bounded.
	15. Definition of a sequence converging to $±\infty$
	16. Definition of limsup and liminf
	17. Theorems about limsup and liminf
	18. examples for 16
	19. Theorem. inequality retention for limsup and liminf
	20. Some limits proved using the sandwich theorem and clever estimations
4. Continuity
	1. Definition of limit of a function
	2. Recasting 4.1 in terms of sequences
	3. Definitions of function algebra
	4. Algebra of limits of functions
	5. Continuity
	6. Special case of 4.5 (when p is a limit point)
	7. Composition of continuous functions
	8. Alternate definition of continuity using open sets + corollary
	9. 


- [ ] No set S can be in bijection with its power set (classic Cantor diagonalization argument)
- [ ] Try to prove the Schroder-Bernstein theorem: if there is an injection from S to T and an injection from T to S, then there is a bijection between S and T. Then locate a proof and see if you can read a little and complete the rest. (Check abbot)
- [ ] $a_{0}\ge a_{1}\ge \dots \ge 0$. $\lim_{ n \to \infty }a_{n}=0$. Show that $\sum(-1)^{n}a_{n}$ converges.
- [ ] Fixed point theorem
      $M$ is a complete metric space.
      $T:M\to M$ is continuous.
      $d(T(p), T(q))<k(d(p,q))$, where $k$ is a constant less than 1.
      Then, $T$ has a unique fixed point (If $T(x_{0}) = x_{0}$, then, $x_{0}$ is called a fixed point).
      It is easy to see that at most one fixed point can exist for $T$ given the distance inequality.

# Homework
- [[Analysis1_HW1.pdf]]
- [[Analysis1_HW2.pdf]]
- [[Analysis1_HW3.pdf]]
- [[Analysis1_HW4.pdf]]