---
tags:
  - ANA1
  - Lecture
date: 2024-10-26, Saturday
time: 9:30
---
![[1729920845842.jpg]]

## Integration of vector valued functions

> [!Definition]
> Let $f_{1}, f_{2}, \dots, f_{k}:[a, b]\to \mathbb{R}$. Let $\mathbf{f}:[a, b]\to \mathbb{R}^{k}$ defined by $\mathbf{f}(x)=(f_{1}(x), f_{2}(x), \dots, f_{k}(x))$. 
> We say $\mathbf{f}\in\mathscr{R}$ if $f_{j}\in\mathscr{R}$ for all $1\leq j \leq k$. If this is the case, we define
> $$
> \int_{a}^{b} \mathbf{f} \, dx =\left( \int_{a}^{b} f_{1} \, dx ,\dots, \int_{a}^{b} f_{k} \, dx  \right).
> $$

Similar definition exists for the Stieltjes integral. Note that parts [[Analysis1_L27#a|a]], [[Analysis1_L27#c|c]] and [[Analysis1_L27#e|e]] of the properties of integrals are valid for these integrals, and so is the [[Analysis1_L28#Integration and differentiation|fundamental theorem of calculus]]:

> [!Theorem]
> Let $\mathbf{f}:[a, b]\to \mathbb{R}^{k}$. If $\mathbf{f}\in\mathscr R$ on $[a, b]$ and if there is a differentiable function $\mathbf{F}:[a, b]\to \mathbb{R}^{k}$ such that $\mathbf{F}'=\mathbf{f}$, then
> $$
> \int_{a}^{b} \mathbf{f}(x) \, dx =\mathbf{F}(b)-\mathbf{F}(a).
> $$

### Analogue of 6.13b

> [!Theorem]
> Let $\mathbf{f}:[a, b]\to \mathbb{R}^{k}$. If $\mathbf{f}\in\mathscr{R}$, then
> $$
> |\mathbf{f}|\in\mathscr{R}\text{ and } \left|\int_{a}^{b} \mathbf{f} \, dx\right|\leq \int_{a}^{b} |\mathbf{f}| \, dx  .
> $$

**Proof**
$|\mathbf{f}|=\sqrt{ f_{1}^{2}+f_{2}^{2}+\dots f_{k}^{2} }$. By definition, each $f_{i}\in\mathscr{R}$. It [[Analysis1_L27#Compositions of integrable functions with continuous functions|follows]] that $f_{i}^{2}$ is integrable for each $i$, since $x^{2}$ is continuous (alternatively, the [[Analysis1_L28#Product of integrable functions is integrable|product of two integrable functions is integrable]]). Also, note that $x^{2}$ is bijective and continuous on $[0, \infty)$. Thus, $\sqrt{ x }$ is continuous on $[0, \infty)$. It follows that $|\mathbf{f}|\in\mathscr{R}$.  