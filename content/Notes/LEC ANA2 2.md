---
tags:
  - ANA2
  - Lecture
date: 2025-08-22
time: 15:32
---







Examples of metrics on $C[0, 1]$ ($\subset B[0, 1]$), $C^{1}[0, 1]$, $C^{k}[0, 1]$, and $C^{\infty}[0, 1]$.
$$
\lVert f \rVert _{1, \infty}=\lVert f \rVert _{\infty}+\lVert f' \rVert _{\infty}.
$$
$$
\lVert f \rVert _{k, \infty}=\lVert f \rVert _{\infty}+\sum_{i=1}^{k} \lVert f^{(k)} \rVert _{\infty}.
$$
$$
d(f, g)=\sum_{k=0}^{\infty} \frac{1}{k} \frac{\lVert f^{(k)}-g^{(k)} \rVert_{\infty}}{1+\lVert f^{(k)} -g^{(k)}\rVert _{\infty}}
$$
^ this is not obtained from a norm.

If $(X, d)$ is a metric space, we can define a bounded metric
$$
d_{0}(x, y)=\frac{d(x, y)}{1+d(x, y)}.
$$
Convergence and open sets are preserved.

---

The $1$-norm on $\mathscr{R}[0, 1]$ (Riemann integrable functions on $[0, 1]$) is a pseudo norm: $\lVert f \rVert_{1}=0$ does not imply $f=0$.

For any pseudonorm

---

Defined a topology. Set of all open sets in a metric space is a topology.

Exercise: In $C[0, 1]$, fix $f_{0}, g_{0}$. Show that $\{ h:g_{0}(t)< h(t)< f_{0}(t)\quad \forall t \}$ is open in $C[0, 1]$.

---


Haussdorf metric


