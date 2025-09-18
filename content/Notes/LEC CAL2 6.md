---
tags:
  - CAL2
  - Lecture
  - Processed
date: 2025-08-26
time: 10:30
---
Exercise: if $f:[0, 1]\to \mathbb{R}$ is continuous, show that $\Gamma_{f}$ has measure zero (use uniform continuity). Then, assume $f$ is Riemann integrable. Show again that $\Gamma_{f}$ has measure zero. Also true if the domain is a subset of $\mathbb{R}^{n}$.

# Fubini's theorem

> [!Theorem] Fubini's Theorem
> 
> Let $A\subseteq \mathbb{R}^{n}$ and $B\subseteq \mathbb{R}^{m}$ be closed rectangles. Let $f:A\times B\to \mathbb{R}$ be integrable. For $x\in A$ let $g_{x}:B\to \mathbb{R}$ be defined by $g_{x}(y)=f(x, y)$. Let
> $$
> \mathcal{L}(x):=\underline{\int_{B}}g_{x}, \quad \mathcal{U}(x):=\overline{\int_{B}}g_{x}.
> $$
> Then, $\mathcal{L}$ and $\mathcal{U}$ are integrable on $A$ and
> $$
> \int_{A\times B}f=\int_{A}\mathcal{L}=\int_{A}\mathcal{U}.
> $$
> 
> > [!Proof]-
> > Let $P_{A}$ be a partition of $A$ and $P_{B}$ be a partition of $B$. Together they give a partition $P$ of $A\times B$. 
> > Note that for $x\in S_{A}$, $m_{S_{A}\times S_{B}}\leq m_{S_{B}}(g_{x})$. 
> > 
> > Then, 
> > $$
> > \begin{align}
> > L(P, f) & =\sum_{S}m_{S}(f)\cdot \text{Vol}(S) \\
> >  & =\sum_{S_{A}\times S_{B}}m_{S_{A}\times S_{B}}\cdot \text{Vol}(S_{A})\text{Vol}( S_{B}) \\
> >  & =\sum_{S_{A}}\left[ \sum_{S_{B}}m_{S_{A}\times S_{B}}\text{Vol}(S_{B}) \right] \text{Vol}(S_{A}) \\
> > \end{align}
> > $$
> > 
> > 
> > For each $S_{A}$ in the sum, for each $x\in S_{A}$, we have $m_{S_{A}\times S_{B}}\leq m_{S_{B}}(g_{x})$, so
> > $$
> > \sum_{S_{B}}m_{S_{A}\times S_{B}}\text{Vol}(S_{B})\leq\sum_{S_{B}}m_{S_{B}}(g_{x})\text{Vol}(S_{B}) =L(P_{B}, g_{x})\leq  \mathcal{L}(x).
> > $$
> > It follows that
> > $$
> > \sum_{S_{B}}m_{S_{A}\times S_{B}}\text{Vol}(S_{B})\leq\inf_{x\in S_{A}}\mathcal{L}(x)=m_{S_{A}}(\mathcal{L}).
> > $$
> > Thus, 
> > $$
> > L(P, f)\leq \sum_{S_{A}}m_{S_{A}}(\mathcal{L})\text{Vol}(S_{A})=L(P_{A}, \mathcal{L}).
> > $$
> > Now,
> > $$
> > \begin{align}
> > L(P, f)\overset{1}{\leq} L(P_{A}, \mathcal{L})\leq U(P_{A}, \mathcal{L})\leq U(P_{A}, \mathcal{U})\overset{2}{\leq} U(P, f).
> > \end{align}
> > $$
> > We have proved $(1)$, and $(2)$ is analogous. Since $f$ is integrable, we have $\sup \{ L(P, f) \}=\inf \{ U(P, f) \}=\int_{A\times B}f$. Hence,
> > $$
> > \sup \{ L(P_{A}, \mathcal{L}) \}=\inf \{ U(P_{A}, \mathcal{L}) \}=\int_{A\times B}f,
> > $$
> > that is, $\mathcal{L}$ is integrable on $A$ and $\int_{A\times B}f=\int_{A}\mathcal{L}$. The assertion for $\mathcal{U}$ follows from a symmetric argument. 
> > 

^2ceca8

