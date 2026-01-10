---
id: "376"
date: 2026-01-08
time: 14:10
tags:
---
[!Recall]
$f:X\to Y$ is continuous
$\iff$ $f^{-1}(\text{open in }Y)$ is open in $X$
$\iff$ $f^{-1}(\text{closed in }Y)$ is closed in $X$
$\iff$ $f(\overline{A})\subseteq\overline{f(A)}$ for all $A\subseteq X$
$\iff$ $f$ is continuous at each $x\in X$. 

[!Remark]
To check $f$ is continuous, it is enough to check $f^{-1}(\text{of each basis elt})$ is open.

Local formulation of continuity: If $\{ V_{\alpha} \}_{\alpha\in I}$ is an open cover of $X$ then $f:X\to Y$ is continuous $\iff$ $f\ | \ _{V_{\alpha}}:V_{\alpha}\to Y$ is continuous for all $\alpha$. This "pasting lemma" also works when