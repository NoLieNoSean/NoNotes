---
tags:
  - ANA1
  - Lecture
date: 2024-10-8
time: 15:45
---
![[1728577113525.jpg]]
## Topological spaces

>[!Definition]
>A *topological space* is a set $X$ along with a structure called a *topology*, which is a subset $T \subset P(X)$ which is closed under (arbitrary) unions and finite intersections. We call the elements of $T$ *open sets*. 

Note that $X, \emptyset\in T$. A set $A\subset X$ is called *closed* if $A^{c}\in T$. See that these notions, as defined in terms of open sets, also make sense in topological spaces: neighborhood, limit point, closure, interior, compactness, continuity.

- A *neighborhood* of $p$ is a superset of an open set containing $p$.
- $p$ is a *limit point* of $E\subset X$ if every neighborhood of $p$ contains elements of $E$ other than $p$.
- $p$ is an *interior point* of $E \subset X$ if $p\ni S\subset E$ for an open set $S$.
- The *closure* of $E\subset X$ is the smallest closed set containing $E$.
- The *interior* of $E\subset X$ is the largest open set contained in $E$.
- $E \subset X$ is *compact* if every open cover of $E$ has a finite subcover.
- $f:X_{1}\to X_{2}$ is *continuous* if the pre-image of every open set in $X_{2}$ is open in $X_{1}$. 

A topological space is the most general type of a mathematical space that allows for the definition of limits, continuity, and connectedness.


