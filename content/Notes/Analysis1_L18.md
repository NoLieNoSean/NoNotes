---
tags:
  - ANA1
  - Lecture
  - Processed
---
2024-09-25, Wednesday
1537

---
![[IMG_20240925_164725.jpg]]

---
## Proof of Rudin, 2.34 using open cover compactness

Alternate proof of [[Analysis1_L16#Characterization of compact sets|compact sets being closed]] using open cover compactness (we [[Analysis1_L17#An exercise in working with open cover compactness|proved boundedness]] using OCC in L17). 

Rudin, 2.34

>[!Theorem]
>Let $C$ be a compact subset of $X$. Then $C$ is closed in $X$.

>**Proof**
>We will show $X\setminus C$ is open in $X$. Let $x \in X\setminus C$. We have to show that a neighborhood of $x$ in $X$ is contained in $X\setminus C$. For every $y\in C$ find disjoint open sets $U_{y}$ containing $x$ and $V_{y}$ containing $y$. Then, $\bigcup_{y \in C}V_{y}\supset C$. Now, observe that
>$$
>\begin{align*}
>\left( \bigcap_{y\in C}U_{y} \right)\cap\left( \bigcup_{y\in C}V_{y} \right)=\emptyset.
>\end{align*}
>$$
>[[Analysis1_L14#Open and closed sets under intersections and unions|Recall]] that *finite* intersections of open sets are open. Since $C$ is compact, there exists a *finite* subcover $\{ V_{y}\ |\ y\in K\subset C \}$ of $C$, i.e, $\bigcup_{y\in K}V_{y}\supset C$. Since $K$ is finite, $\bigcap_{y\in K}U_{y}$ is open in $X$. So, 
>$$
>\begin{align*}
> & \left( \bigcap_{y\in K}U_{y} \right)\cap\left( \bigcup_{y\in K}V_{y} \right)=\emptyset \\
>\implies  & \left( \bigcap_{y\in K}U_{y} \right)\cap C=\emptyset  \\
>\implies  & \left( \bigcap_{y\in K}U_{y} \right)\subset X\setminus C.
>\end{align*}
>$$
>❏

Note that we actually ended up proving a stronger result: For every $x \in X\setminus C$, there exist disjoint open sets $U\ni x$ and $V\supset C$, where $U=\bigcap_{y\in K}U_{y}$ and $V=\bigcup_{y\in K}V_{y}$.  

**Exercise:** Show that for two disjoint compact sets $C_{1}$ and $C_{2}$, there exist disjoint open sets $U_{1}$ and $U_{2}$ such that $U_{1}\supset C_{1}$ and $U_{2} \supset C_{2}$. 

>**Proof**
>It follows from the previous theorem that for every $x \in C_{1}$, there exist disjoint open sets $U_{x}$ and $V_{x}$ such that $U_{x}\ni x$ and $V_{x}\supset C_{2}$. Clearly, $\{ U_{x}\ |\ x \in C_{1} \}$ is an open cover of $C_{1}$. Since $C_{1}$ is compact, there exists a finite subcover $\{ U_{x}\ |\ x \in K\subset C_{1} \}$. Now, observe that
>$$
>\begin{align*}
>\left( \bigcup_{x \in K} U_{x} \right)\cap\left( \bigcap_{x \in K}V_{x} \right)=\emptyset.
>\end{align*}
>$$
>Setting $U_{1}=\bigcup_{x \in K}U_{x}$ and $U_{2}=\bigcap_{x \in K}V_{x}$ works, because
>- $U_{1}\cap U_{2}=\emptyset$.
>- $U_{1}$ is open, since any union of open sets is open.
>- $U_{2}$ is open, since a finite intersection of open sets is open and $K$ is finite.
>- $\bigcup_{x \in K}U_{x}\supset C_{1}$ and $\bigcap_{x \in K}V_{x}\supset C_{2}$.
>
>❏

---
## Proof of compactness of closed intervals in R using [[LUB property]]

>**Proof**
>Consider an open cover $B=\{ V_{\alpha} \}_{\alpha \in I}$ of $[a, b]$. Define $S$ to be the set of all $x\in [a, b]$ such that $[a, x]$ can be covered by a finite subcover of $B$. This set is non empty because $a\in S$. Let $s=\sup S$. Assume $s<b$. There exists a $V_{s}\in B$ containing $s$. Since $V_{s}$ is open, it must also contain an open interval around $s$, say $(s-\epsilon, s+\epsilon)$. Now, $[a, s-\epsilon]$ must have a finite subcover $\{ V_{\beta} \}_{\beta \in J\subset I}$. Thus, $\{ V_{\beta} \}_{\beta\in J\subset I}\cup \{ V_{s} \}$ covers $\left[ a, s+\frac{\epsilon}{2} \right]$. So, $s+\frac{\epsilon}{2}\in S$. This contradicts the hypothesis that $s$ is the supremum of $S$. Hence, $s= b$. ❏ 

---
## Rudin, 2.36

Let $B=\{ V_{\alpha} \}_{\alpha \in I}$, be a collection of open sets in $X$. Then,  $K\subset X$ is compact iff
$$
\begin{align*}
\bigcup_{\alpha \in I}V_{\alpha}\supset K\implies \exists\ \text{ finite }J\subset I \text{ such that } \bigcup_{\beta \in J}V_{\beta}\supset K.
\end{align*}
$$
Now, we will rephrase the hypothesis in terms of closed sets $V_{\alpha}^{c}$. 
$$
\begin{align*}
 & \bigcup_{\alpha \in I}V_{\alpha} =\left( \bigcap_{\alpha \in I}V_{\alpha}^{c} \right)^{c}\supset K \\
\iff  & \left( \bigcap_{\alpha \in I}V_{\alpha}^{c} \right)\cap K=\emptyset.
\end{align*}
$$
Ditto for the conclusion.
$$
\begin{align*}
 & \bigcup_{\beta \in J}V_{\beta}\supset K \\
\iff  & \left( \bigcap_{\beta \in J}V_{\beta}^{c} \right)\cap K=\emptyset.
\end{align*}
$$
Thus, we can say $K$ is compact iff, for a collection of closed sets $B'=\{ K_{\alpha} \}_{\alpha\in I}$, 
$$
\begin{align*}
\left( \bigcap_{\alpha \in I}K_{\alpha} \right)\cap K=\emptyset \implies \exists\ \text{ finite }J\subset I \text{ such that } \left( \bigcap_{\beta \in J}K_{\beta} \right)\cap K=\emptyset.
\end{align*}
$$
We can consider all $K_{\alpha}$ to be compact subsets of $X$, since [[#Proof of Rudin, 2.34 using open cover compactness|compact sets are in particular closed sets]]. Now, say $K$ is compact. Augment $B'$ such that it now contains $K$ (update $I$ and $J$ accordingly). This gives us
$$
\begin{align*}
 \bigcap_{\alpha \in I}K_{\alpha} =\emptyset \implies \exists\text{ finite }J\subset I \text{ such that } \bigcap_{\beta \in J}K_{\beta}=\emptyset.
\end{align*}
$$
Take the contrapositive of this statement.
$$
\begin{align*}
\forall\text{ finite }J\subset I \text{ such that } \bigcap_{\beta \in J}K_{\beta}\ne \emptyset \implies \bigcap_{\alpha \in I}K_{\alpha}\ne \emptyset.
\end{align*}
$$
This is essentially Rudin, 2.36.

>[!Theorem]
>If $\{ K_{\alpha} \}$ is a set of compact subsets of a metric space $X$ such that the intersection of every finite subcollection of $\{ K_{\alpha} \}$ is nonempty, then $\cap \ K_{\alpha}$ is nonempty.

### Analogue of nested interval property in metric spaces

A special case of the above theorem is the analogue of the [[The real field#Nested interval property|nested interval property]] in metric spaces.

>[!Theorem] Corollary
>If $\{ K_{n} \}$ is a sequence of non empty compact sets such that $K_{n} \supset K_{n+1}$, then $\bigcap K_{i}$ is nonempty.
>

#### Rudin, 3.10 b

If we have the additional constraint that $\lim_{ n \to \infty }\text{diam } K_{n}=0$, then $\bigcap K_{i}$ contains only one element.

>[!Theorem]
>If $\{ K_{n} \}$ is a sequence of non empty compact sets such that $K_{n} \supset K_{n+1}$, and if  $\lim_{ n \to \infty }\text{diam } K_{n}=0$, then $\bigcap K_{i}$ contains only one element.

>**Proof**
>$\bigcap K_{i}$ is non empty, so it has some element $p$. Let it also have another element $q$. There exists $N$ such that for all $n\ge N$, $\text{diam }K_{n}<d(q, p)$. Thus, we are forced to conclude $q=p$. ❏

---
## Weierstrass theorem, rephrased

Rudin, 2.42

>[!Theorem]
>Every bounded infinite subset of $\mathbb{R}^{k}$ has a limit point in $\mathbb{R}^{k}$.

>**Proof**
>Let $S\subset \mathbb{R}^{k}$ be bounded and infinite. Since it is bounded, you can enclose it in a box, [[Analysis1_L17#Closed intervals in R are open cover compact|which is compact]] ([[Analysis1_L17#Equivalence with limit point compactness|in particular]], [[Analysis1_L16#Limit point compactness|limit point compact]]), which guarantees that $S$ has a limit point in the box. ❏


