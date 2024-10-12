---
tags:
  - ANA1
  - Lecture
  - Processed
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

Note that all of our previous proofs using open cover compactness for theorems on metric spaces are applicable verbatim to topological spaces.

---
## Homeomorphisms

An isomorphism between two spaces is a *set theoretic bijection* which also *preserves the structure* of the space in both directions. For example, one way to think about the structure of a [[Vector spaces|vector space]] $V$ is the unique decomposition of any vector as a linear combination of a [[Bases#Definition|basis]] $B$ of $V$. Preserving the structure is akin preserving the this unique linear combination for all vectors in the image. The class of functions that satisfy this requirement are [[Algebra1_L11#Linear maps|linear maps]]. Recall that, if $T:V\to W$ is a bijective linear map,  $\mathbf{v}$ and $T(\mathbf{v})$ have the same decomposition in terms of $B$ and $T(B)$. Now, the inverse of any set theoretic bijection is always a bijection, so $T^{-1}:W\to V$ is a bijection. But, we also require $T^{-1}$ to be a linear map! Fortunately, it so happens that $T$ being a bijective linear map is forces $T^{-1}$ to also be linear:
$$
\begin{align}
\mathbf{v}_{1}+\mathbf{v}_{2}  & =\mathbf{v}_{1}+\mathbf{v}_{2} \\
TT^{-1}\mathbf{v}_{1} +TT^{-1}\mathbf{v}_{2} & =\mathbf{v}_{1}+\mathbf{v}_{2} & T\text{ is bijective} \\
T(T^{-1}\mathbf{v}_{1}+T^{-1}\mathbf{v}_{2}) & =\mathbf{v}_{1}+\mathbf{v}_{2} & T\text{ is linear}\\ 
T^{-1}\mathbf{v}_{1}+T^{-1}\mathbf{v}_{2} & =T^{-1}(\mathbf{v}_{1}+\mathbf{v}_{2}) & T\text{ is bijective}\\ \\
c\mathbf{v} & =c\mathbf{v} \\
c(TT^{-1}\mathbf{v}) & =c\mathbf{v} & T\text{ is bijective}\\
T(cT^{-1}\mathbf{v}) & =c\mathbf{v}  & T\text{ is linear}\\
cT^{-1}\mathbf{v} & =T^{-1}c\mathbf{v}& T\text{ is bijective}
\end{align}
$$
Thus, begin a bijective linear map is sufficient to be an isomorphism between two vector spaces. 

In metric spaces, the structure is defined by the distances between every pair of points. Preserving the structure is akin to preserving these distances, i.e, if $f:X\to Y$ is an isomorphism of metric spaces, $d_{X}(p, q)=d_{Y}(f(p), f(q))$. Thus, an isomorphism of metric spaces, called an *isometry*, is a bijective distance preserving function (even here, it so happens that the inverse automatically preserves distances).

In a topological space, the structure is defined by $T$, the set of all open sets. Thus, preserving the structure is akin to ensuring that open sets are mapped to open sets by the function and its inverse. Let $f:X\to Y$ be such a bijective function. Let the set of open sets be $T_{X}\subset P(X)$ and $T_{Y}\subset P(Y)$. Then, we have $S\in T_{X}\implies f(S)\in T_{Y}$ and $R\in T_{Y}\implies f^{-1}(R)\in T_{X}$. The first statement says that the preimage of an open set in $X$ under $f^{-1}$ (the preimage of $f^{-1}$ is $f$) is open in $Y$, i.e, $f^{-1}$ is continuous. Similarly, the second statement says that $f$ is continuous. However, unlike for the analogous classes of maps for vector spaces and metric spaces, $f$ being bijective and continuous DOES NOT imply $f^{-1}$ is continuous. As an example, consider the map $f:[0, 2\pi)\to \{ (x, y)\ |\ x^{2}+y^{2}=1 \}$ defined by $f(t)=(\cos t, \sin t)$. $f$ is bijective and continuous. However, $f^{-1}$ is not continuous as $[0, \pi)$ is open in $[0, 2\pi)$, but $f([0, \pi))$ is not open in the codomain (it does not contain a neighborhood of $(1, 0)$). Since one is not implied by the other, we must explicitly require that an isomorphism of topological spaces, called a *homeomorphism*, is a bijective map $f$ such that $f$ and $f^{-1}$ are both continuous.

Note: Since all metric spaces are topological spaces, homeomorphisms can exist between metric spaces. 

### Continuous maps on compact sets are homeomorphisms

However, If the domain is compact, it is in fact true that a bijective continuous map is a homeomorphism. 

Rudin, 4.17

>[!Theorem]
>Let $X$ be compact. Then, if $f:X\to Y$ is continuous, $f^{-1}$ is continuous, i.e, $f$ is a homeomorphism.

>**Proof**
>We have to prove that $f^{-1}$ is continuous, i.e, $f(U)$ is open for every open $U\subset X$, i.e, $f(C)$ is closed for every closed $C\subset X$ (Since $f$ is bijective, it preserves complements). Let $C\subset X$ be closed. [[Analysis1_L17#Closed subsets of compact sets are compact|Since]] $X$ is compact, $C$ must be compact. It [[Analysis1_L17#Another exercise in working with open cover compactness|follows]] that $f(C)$ is a compact subset of $Y$. So, $f(C)$ [[Analysis1_L18#Proof of Rudin, 2.34 using open cover compactness|must be]] closed in $Y$. ❏

Note that the function begin bijective was only used to obtain the target "$f(C)$ is closed for every closed $C\subset X$". Thus, we have also proved that continuous maps from compact sets are *closed maps*, i.e, they map closed sets to closed sets.

>[!Theorem]
>Continuous maps from compact sets are closed maps.

>[!Warning]
>Do not mistake homeomorphisms with [[Algebra1_L13#Homomorphisms|homomorphisms]].

>[!Info]
>Let $f:X\to Y$.
>$P_{1}$: $f(U)$ is open in $Y$ for all $U$ open in $X$.
>$P_{2}$: $f(C)$ is closed in $Y$ for all $C$ closed in $X$.
>$P_{3}$: $f^{-1}(U)$ is open in $X$ for all $U$ open in $Y$.
>$P_{4}$: $f^{-1}(C)$ is closed in $X$ for all $C$ closed in $Y$.
>
>$f$ is called an open map if it satisfies $P_{1}$, and a closed map if it satisfies $P_{2}$.
>If $f$ is bijective, $P_{1}\iff P_{2}$. 
>$f$ is continuous $\iff P_{3}\iff P_{4}$.

