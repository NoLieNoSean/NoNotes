All rings are commutative with $1$.
# Problem 11

Let $R$ be a PID.

> [!Exercise]
> Let $I\ne (0)$ be a proper ideal in $R$. Show that $I=P_{1}\dots P_{n}$ for some maximal ideals $P_{1}, \dots, P_{n}$.
> 
> > [!Proof]-
> > Suppose $I=(f)$. Since $R$ is a [[LEC ALG3 9#^97c00a|UFD]], we can write $f$ as a product of irreducibles $p_{1}p_{2}\dots p_{n}$. Each $p_{i}$ is [[LEC ALG3 9#^414a66|prime]], so each $(p_{i})$ is a [[LEC ALG3 7#^662472|prime ideal]], and hence each $(p_{i})$ is [[LEC ALG3 4#^340b52|maximal]]. It is now easy to see that $I=(p_{1})(p_{2})\dots(p_{n})$.
> 

^389f77

> [!Exercise]
> An ideal $Q$ in $R$ is said to be primary if $ab\in Q$ and $a\not\in Q$ implies $b^{n}\in Q$ for some $n\geq 1$. Show that an ideal $Q$ is primary iff $Q=(f^{n})$ for some irreducible element $f$.
> 
> > [!Proof]-
> > Let $Q=(g)$ where $g=p_{1}p_{2}\dots p_{n}$ for irreducibles $p_{1}, \dots, p_{n}$. Suppose $Q$ is primary. Suppose $p_{i}$ and $p_{j}$ are not associates. Let $p_{i}$ have $l$ associates in $p_{1}, \dots, p_{n}$. Let $a:=p_{i}^{l}$ and $b:=p_{1}p_{2}\dots p_{n}/p_{i}^{l}$. Then, $ab=g\in Q$. However, $p_{j}$ does not divide $a^{k}$ for any $k\geq 1$, and $p_{i}$ does not divide $b^{k}$ for any $k\geq 1$. So, $g$ does not divide $a^{k}$ or $b^{k}$ for any $k\geq 1$, a contradiction. Thus, every pair in $p_{1}, \dots, p_{n}$ is a pair of associates. It follows that $Q=(p_{1}^{n})$.
> > 
> > Suppose $Q=(f^{n})$. If $ab\in Q$, $f$ must divide $a$ or $b$, so $a^{n}\in Q$ or $b^{n}\in Q$.
> 
> 

^cf1276

> [!Exercise]
> Suppose $Q_{1}, \dots, Q_{n}$ are distinct primary ideals. Show that $Q_{1}\dots Q_{n}=Q_{1}\cap\dots \cap Q_{n}$.  
> 
> > [!Proof]-
> > [[LEC ALG3 6#^1c5a62|It suffices to show]] that $Q_{1}, \dots, Q_{n}$ are pairwise comaximal. Let $Q_{i}=(f_{i}^{n_{i}})=(f_{i})^{n_{i}}$. $(f_{i})$ is prime and hence maximal for each $i$. So, $(f_{i})$ and $(f_{j})$ are comaximal for all $i\ne j$. In any commutative ring, $I+J=R$ implies $I^{m}+J^{k}=R$ for all ideals $I, J\subseteq R$ and positive integers $m, k$ (just raise the identity $\alpha+\beta=1$ to the power $m+k$). Thus, it follows that $(f_{i})^{n_{i}}$ and $(f_{j})^{n_{j}}$ are comaximal for all $i\ne j$.
> 

^7bd246

> [!Exercise]
> Show that every proper ideal $I$ in $R$ can be expressed as a finite intersection of primary ideals.
> 
> > [!Proof]-
> > Write $I=(p_{1})(p_{2})\dots(p_{n})$ where $p_{i}$ are irreducible, by [[#^389f77]]. Let $q_{1}, \dots, q_{k}$ be the unique elements among $p_{1}, \dots, p_{n}$ up to association. Then, we can write $I=(q_{1})^{n_{1}}(p_{2})^{n_{2}}\dots(q_{k})^{n_{k}}$. Let $Q_{i}:=(q_{i})^{n_{i}}=(q_{i}^{n_{i}})$ and note that $Q_{i}$ is primary by [[#^cf1276]]. By [[#^7bd246]], we have $I=Q_{1}\dots Q_{k}=Q_{1}\cap\dots \cap Q_{k}$.
> 

^bb9980


[!Exercise]
Suppose $I=Q_{1}\cap\dots \cap Q_{n}$, where $Q_{i}=(f_{i}^{n})$ and $f_{i}$ is irreducible for all $i=1, \dots, n$. Let $\sqrt{ I }=\{ r\in R:r^{m}\in I\text{ for some integer } m\geq 1 \}$. Describe $\sqrt{ I }$ in terms of $f_{1}, \dots, f_{n}$.

[!Exercise]
Show that $R/I\cong R/Q_{1}\times R/Q_{2}\times\dots \times R/Q_{n}$. Is it possible to write $R/I$ as a direct product of fields?

[!Exercise]
For any ideal $I$ in $R$, show that there are only finitely many maximal ideals that contain $I$.