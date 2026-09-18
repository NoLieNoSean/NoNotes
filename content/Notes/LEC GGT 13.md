---
id: "565"
date: 2026-09-16
time: 11:54
tags:
  - GGT
  - Lecture
---
Let $X$ be a metric space. Let $A, B\subseteq X$ be compact. Define the Hausdorff distance $d_{H}(A, B)$ to be
$$
d_{H}(A, B):=\inf _{A\subseteq V_{\epsilon}(B),\,B\subseteq V_{\epsilon}(A)}\epsilon. 
$$
Denote by $\mathcal{C}X$ the set of all compact subsets of $X$. Then $(\mathcal{C}X, d_{H})$ is a metric space. 

%% proves the metric space claim %%

[!Lemma]
Suppose $X$ is compact and $\epsilon> 0$ be arbitrary. Then there exists $N=N(\epsilon)$ such that for any compact set $C$, there exists a finite set $S\subseteq C$ such that $d_{H}(C, S)<\epsilon$ and $|S|\leqslant N$. 

[!Proof]-

Cover $X$ by open balls of radius $\epsilon/2$. There exists $N=N(\epsilon)$ such that $N$ many balls $B_{j}$ are sufficient to cover $X$. 

Given $C\subseteq X$, choose $c_{j}\in C\cap B_{j}$ for each $j$ if $C\cap B_{j}\ne \emptyset$. Then $S=\{ c_{j} \}$ will do. 

[!Lemma]
Let $X$ be a compact metric space. Then $(\mathcal{C}X, d_{H})$ is a compact metric space. 

[!Proof]-

diagonal sequence


%% pictures %%

$D_{H}(X_{1}, X_{2})=\inf \{ \epsilon:X_{1}\cong_{\epsilon}X_{2} \}$. $D_{H}$ is a pseudometric. Due to gromov. 
