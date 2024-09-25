---
tags:
  - ANA1
  - Lecture
---
2024-09-25, Wednesday
1537

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
 \left( \bigcup_{x \in K} U_{x} \right)\cap\left( \bigcap_{x \in K}V_{x} \right)=\emptyset.
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
## Proof of compactness of $[a, b]$ using [[LUB property]] of $\mathbb{R}$





---

Noted alternate defn of open cover compactness:

$K$ is compact if $\left( \bigcap_{\alpha}C_{\alpha} \right)\cap K=\phi$, where $C_{\alpha}$ are closed sets, a finite collection of $C_{\alpha}$ has the same property.

Contrapositive: $K$ is compact. Suppose $\{ C_{\alpha} \}_{\alpha \in I}$ is a family of closed sets such that every finite intersection $C_{\alpha_{1}}\cap C_{\alpha_{2}}\dots \cap C_{\alpha_{n}}\cap K\ne \phi$. Then, $\left( \bigcap_{\alpha\in I}C_{\alpha} \right)\cap K\ne \phi$. 

Upshot: Suppose $\{ K_{\alpha} \}_{\alpha \in I}$ is a family of compact sets such that every finite intersection $K_{\alpha_{1}}\cap\dots \cap K_{\alpha_{n}}\ne \phi$, then $\cap_{\alpha \in I}K_{\alpha}\ne \phi$. 

Special case: If $K_{1}\supset K_{2}\supset K_{3}\dots$, each $K_{i}$ compact and non empty, then $\bigcap K_{i}\ne \phi$. 

3.10
3.7


