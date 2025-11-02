---
id: "332"
date: 2025-10-26
time: 21:11
tags:
  - ALG3
---
# Integral extensions of rings

This is a generalization to rings of [[LEC ALG3 15#Field extensions|algebraic extensions of fields]]. 

> [!Definition]
> Suppose $S$ is a subring of a commutative ring $R$. 
> 1. $r\in R$ is **integral over $S$** if $r$ is the root of a monic polynomial in $S[x]$. 
> 2. The ring $R$ is an **integral extension** of $S$ or just **integral over** $S$ if every $r\in R$ is integral over $S$. 
> 3. The integral closure of $S$ in $R$ is the set of elements of $R$ that are integral over $S$. 
> 4. The ring $S$ is said to be **integrally closed in $R$** if $S$ is equal to its integral closure in $R$. The integral closure of an integral domain $S$ in its field of fractions is called the **normalization** of $S$. An integral domain is called **integrally closed** or **normal** if it is integrally closed in its field of fractions. 

> [!Lemma]
> Let $R$ be an integral domain and $S\subseteq R$ be a UFD. Let $r\in R$ be integral over $S$; let $f(x)\in S[x]$ be a monic irreducible polynomial such that $f(r)=0$. Then, $S[r]\cong S[x]/(f(x))$.
> 
> > [!Proof]-
> > 
> > Let $\varphi:S[x]\to S[r]$ be defined by $x\mapsto r$. We will first show that $\ker\varphi$ is principally generated. We know that $\ker\varphi$ is nonempty since $f(x)\in \ker\varphi$. Let $g(x)$ be the smallest degree polynomial in $\ker\varphi$. Since we can write $g(x)=c(g)g'(x)$ and $g(r)=0$ implies $g'(r)=0$, we can WLOG assume $c(g)=1$. Let $p(x)\in \ker\varphi$. Let $\overline{S}$ be the field of fractions of $S$. We have
> > $$
> > p(x)=\overline{q}(x)g(x)+\overline{m}(x),
> > $$
> > where $\overline{q}(x), \overline{m}(x)\in \overline{S}[x]$ and $\text{deg}\,\overline{m}(x)< \text{deg}\,g(x)$. Write $\overline{m}(x)=\alpha m(x)$, where $\alpha\in \overline{S}$ and $m(x)\in S[x]$. Since $m(r)=0$, $m(x)=0$ to maintain the minimality of $g(x)$. It follows that $g(x)$ divides $p(x)$ in $\overline{S}[x]$. Since $S$ is a UFD, it follows ([[LEC ALG3 10#^d96427]].4) that $g(x)$ divides $p(x)$ in $S[x]$. Thus, $\ker\varphi=(g(x))$. 
> > 
> > Now, $g(x)$ divides $f(x)$. Since $f(x)$ is irreducible, it follows that $g(x)$ and $f(x)$ are associates, so $\ker\varphi=(g(x))=(f(x))$. 

^ebe532

For example, If $\omega\in \mathbb{C}$ is integral over $\mathbb{Z}$, and $f(x)\in \mathbb{Z}[x]$ is a monic irreducible polynomial such that $f(\omega)=0$, then $\mathbb{Z}[\omega]\cong \mathbb{Z}[x]/(f(x))$. 

---

# Quadratic integer rings

> [!Definition]
> Let $D$ be a squarefree integer.  $\mathcal{O}_{\mathbb{Q}(\sqrt{ D })}$ is the integral closure of $\mathbb{Z}$ in $\mathbb{Q}\sqrt{ D }$, and is called a quadratic integer ring. 

> [!Proposition]
> $\mathcal{O}_{\mathbb{Q}(\sqrt{ D })}=\mathbb{Z}[\omega]$, where
> $$
> \omega=\begin{cases}
> \sqrt{ D } & D\equiv 2, 3 \mod 4 \\
>  \frac{1+\sqrt{ D }}{2} & D\equiv 1\mod 4.
> \end{cases}
> $$


See @hughesAnswerWhyQuadratic2015 for a proof.

