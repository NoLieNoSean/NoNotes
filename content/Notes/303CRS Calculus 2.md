---
tags:
  - MOC
  - CAL2
---
CMI, Aug-Nov 2025, Krishna Hanumanthu
@ramadasMULTIDIMENSIONALINTEGRALCALCULUS, @spivakCalculusManifoldsModern1965 ([errata](https://www.jirka.org/spivak-errata.html)), @rudinPrinciplesMathematicalAnalysis1976, @apostolMathematicalAnalysis1985, @pughRealMathematicalAnalysis2015, @duistermaatMultidimensionalRealAnalysis2004a

---

# Lectures

## Integration in $\mathbb{R}^{n}$

[[LEC CAL2 2]] ✅ Review
[[LEC CAL2 3, 4]] ✅ Integration on rectangles
[[LEC CAL2 5]] ✅ Integration on Jordan measurable sets
[[LEC CAL2 6]] ✅ Fubini's theorem

Intermezzo: [[203CRS Calculus 1|CAL 1]] review

> [!Theorem]
> Let $f:X\to \mathbb{R}^{n}$, where $X\subseteq \mathbb{R}^{n+m}$ is open, be $C^{1}$. Let $Z$ be the zero set of $f$. Let $f'(x, y)=[A_{x}~~A_{y}]$. Assume $A_{x}$ is invertible for all $(x, y)\in Z$. Then $M$ is a manifold of $\dim m$. 

The function $f:\mathbb{R}^{3}\to \mathbb{R}$ defined by $f(x, y, z)=x^{2}+y^{2}+z^{2}-1$ does not satisfy these hypotheses: $A_{x}=[2x]$ is not invertible for $x=0$. However, at these points, we can solve for $z$ or $y$ instead; all three of these cannot be simultaneously zero. So, the zero set of $f$ is a manifold, right?

[[LEC CAL2 7]] Partitions of unity
[[LEC CAL2 8]] Change of variables

# Tutorials

[[TUT CAL2 1]] $S^{1}$ has measure zero in $\mathbb{R}^{2}$
[[TUT CAL2 2]] Sard's Theorem
[[TUT CAL2 3]] The Rank Theorem

---

If $F:[0, 1]\times U\to\mathbb{R}$ is continuous, and $G(x)=\int_{0}^{1} F(t, x) \, dx$, then 
$$
\frac{\partial G(x)}{\partial x_{i}}=\int_{0}^{1} \frac{\partial F(t, x)}{\partial x_{i}} \, dt 
$$
