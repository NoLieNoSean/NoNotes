---
tags:
  - ANA1
  - Lecture
date: 2024-10-09
time: 15:55
---
![[1728577113476.jpg]]

---

Rudin, 5.1

Consider $f: [a, b]\to \mathbb{R}$
Let $x\in[a, b]$
$f'(x)=\lim_{ t \to x } \frac{{f(t)-f(x)}}{t-x}$
If the limit exists, we say $f$ is differentiable at $x$.

$E=\{ x\ | \ f'(x) \text{ exists} \}$. "$f$ is differentiable on $E$". $f':E\to R$.

Note: if $f'(x)$ exists, then define $u(t)$ by :
$$
{f(t)-f(x)}=(t-x)[f'(x)+u(t)]
$$
As $t\to 0$, $u(t)\to 0$.

Remark: Can make same definition for $f'(x)$ when $f$ is defined on $(a, b)$.

---

Rudin, 5.2

>[!Theorem]
>$f'(x)$ exists $\implies$ $f$ is continuous at $x$.

$f$ is continuous at $x$ $\iff$ $\lim_{ t \to x }f(t)=f(x)$ $\iff$ $\lim_{ t \to x } \frac{{f(t)-f(x)}}{t-x}(t-x)=f'(x)\lim_{ t \to x }(t-x)=f'(x)\cdot 0=0$.

---

Rudin, 5.3: Algebra of limits

Leibnitz Rule: $(fg)'=f'g+fg'$

Proof:
$$
\begin{align}
 & \lim_{ t \to x } \frac{{f(t)g(t)-f(x)g(x)}}{t-x} \\

= & \lim_{ t \to x } (f(t) {g(t)-g(x)})
\end{align}
$$



---


