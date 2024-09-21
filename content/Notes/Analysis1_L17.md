---
tags:
  - Lecture
  - ANA1
---
2024-09-20, Friday
1400

---

## Open cover compactness

### Open covers and subcovers

>[!Definition]
>Let $E\subset X$. An *open cover* of $E$ is a collection $\{ V_{\alpha} \}_{\alpha \in I}$ of open sets in $X$ such that 
>$$
>\bigcup_{\alpha \in I}V_{\alpha}\supset E.
>$$
>A *subcover* of $\{ V_{\alpha} \}_{\alpha \in I}$ is a subset $\{ V_{\beta} \}_{\beta \in J\subset I}$ with
>$$
>\bigcup_{\beta \in J}V_{\beta}\supset E.
>$$

### Absolute and relative definitions of open cover compactness

#### Absolute definition for a metric space $Y$

>[!Definition] Definition 1
>$E$ is *open cover compact* if every open cover of $E$ has a finite subcover.

#### Relative defintion for $E\subset X$

>[!Definition] Definition 2
>$E$ is *open cover compact* in $X$ is every open cover of $E$ in $X$ has a finite subcover.

#### Equivalence 

$E$ is open cover compact as per definition 1 as a metric space in its own right $\iff$ $E$ is an open cover compact subset of $X$ as per 2.

>**Proof of $\implies$**
>
>Proof of $\Longleftarrow$
>
>$E$ is an open cover compact subset of $X$. Let $W\equiv\{ W_{\alpha} \}_{\alpha \in I}$ be an open cover of $E$ by sets open in $E$. We need to show that a finite subset of $W$ covers $E$. We know from our study of [[Analysis1_L15#Subspace topology|subspace topology]] that for each $W_{\alpha}$ there must exist $V_{\alpha}\subset X$ open in $X$ such that $W_{\alpha}=E\cap V_{\alpha}$. Since $W_{\alpha}\subset V_{\alpha}$ for all $\alpha$, $V\equiv\{ V_{\alpha} \}_{\alpha\in I}$ covers $E$ in $X$. From the hypothesis, there exists a finite subcover $\{ V_{\beta} \}_{\beta \in J\subset I}$ of $V$ covering $E$. Thus, 
>$$
>\begin{align*}
>\bigcup_{\beta \in J}V_{\beta} & \supset E \\
>\left( \bigcup_{\beta \in J}V_{\beta} \right)\cap E & \supset E \\
>\bigcup_{\beta \in J}(V_{\beta}\cap E) & \supset E \\
>\bigcup_{\beta \in J}W_{\beta} & \supset E.
>\end{align*}
>$$
>❏

