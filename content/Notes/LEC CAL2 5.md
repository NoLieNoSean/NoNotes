---
tags:
  - CAL2
  - Lecture
  - Processed
date: 2025-08-19
time: 10:30
id: "196"
---
# Integrating over Jordan measurable sets

> [!Definition]
> If $C\subset \mathbb{R}^{n}$, the **characteristic function** $\chi_{C}$ of $C$ is defined by
> $$
> \chi_{C}=\begin{cases}
> 0 & x\not\in C \\
> 1 & x \in C.
> \end{cases}
> $$
> The support of $\chi _C$ is given by $\overline{C}$. 

> [!Definition]
> Assume $C\subset \mathbb{R}^{n}$ is bounded, that is, $C\subseteq R$ for some rectangle $R$. Let $f:\mathbb{R}^{n}\to \mathbb{R}$ be bounded on $R$. $f$ is said to be integrable over $C$ if $f\chi_{C}$ is integrable over $R$, in which case we define 
> $$
> \int_{C}f:=\int_{R}f\chi_{C}.
> $$

^97bced

Check that $R$ can be replaced by any rectangle $R'$ which also contains $C$ and on which $f$ is bounded.

$f$ and $\chi_{C}$ being integrable is a simple and often used sufficient condition for $f\chi_{C}$ being integrable.

The boundary $\partial C$ of a set $C\subseteq \mathbb{R}^{n}$ is defined to be $\overline{C}\setminus C^{\circ}$.

> [!Theorem]
> Let $C\subseteq R$ as above. Then $\chi_{C}:R\to \mathbb{R}$ is integrable on $R$ $\iff$ the boundary of $C$ has measure zero.
> 
> > [!Proof]-
> > [[LEC CAL2 3, 4#^9809c8|It suffices to show]] that $\partial C$ is the set of discontinuities of $\chi_{C}$. This is simple enough: $x\in \partial C$ $\iff$ $x\not\in C^{\circ}$ and $x$ is a limit point of $C$ $\iff$ every neighborhood of $x$ contains a point of $C$ and a point of $C^{c}$ $\iff$ $\chi_{C}$ is discontinuous at $x$.
> 

> [!Definition]
> A bounded set is called **Jordan measurable** if its boundary has measure zero.

Note that the boundaries of Jordan measurable sets also have content zero since they are compact.

The integral $\int_{C}1=\int_{R}\chi_{C}$ is called the ($n$-dimensional) content/volume of $C$.