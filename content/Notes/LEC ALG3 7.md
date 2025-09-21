---
tags:
  - ALG3
  - Lecture
  - Processed
date: 2025-08-26
time: 10:21
---
# Irreducible and prime elements

> [!Definition]
> Let $a, b\in R$. We say $a\ | \ b$ if there is an element $r\in R$ such that $b=ar$. If $a\ | \ b$ and $b\ | \ a$, we say $a$ and $b$ are associates.

> [!Proposition]
> Let $a, b\in R$.
> 1. $a\ | \ b\iff(b)\subseteq(a)$.
> 2. $a$ and $b$ are associates $\iff$ $(a)=(b)$.
> 3. $u$ is a unit $\iff$ $u\ | \ a$ for all $a\in R$.
> 4. Association is an equivalence relation.

> [!Definition]
> An element $a$ is **irreducible** if $a$ is not a unit and $a=a_{1}a_{2}$ implies $a_{1}$ is a unit or $a_{2}$ is a unit.
> An element $p$ is **prime** if $p\ | \ ab$ implies $p\ | \ a$ or $p\ | \ b$.

Every prime is irreducible in an integral domain. The converse is true for [[LEC ALG3 9#^9fb28b|unique factorization domains]], and in particular for PIDs, as we will show below.

> [!Example]
> 1. $(1+i)$ and $(1-i)$ are associates in the ring of Gaussian integers. 
> 2. $(\overline{2})$ and $(\overline{3})$ are associates in $\mathbb{Z}/8\mathbb{Z}$. 
> 3. In $\mathbb{Z}[\sqrt{ -5 }]$, $\langle 6 \rangle=\langle 2 \rangle\langle 3 \rangle=\langle 1-\sqrt{ -5 } \rangle\langle 1+\sqrt{ -5 } \rangle$, where $2$, $3$, and $1\pm \sqrt{ -5 }$ are irreducible - factorization is not unique!

> [!Proposition]
> Let $R$ be an integral domain, $a, b\in R$, $a, b\ne 0$. Then, 
> 1. $a$ is prime $\iff$ $\langle a \rangle$ is a nonzero prime ideal. (ID hypothesis not required.)
> 2. If $R$ is not a field, then $b$ is irreducible  $\iff$ $\langle b \rangle$ is maximal in the set of all proper principal ideals.
> 3. Every prime element is irreducible.
> 4. If $R$ is a PID, $p$ is prime $\iff$ $p$ is irreducible.
> 5. Every associate of an irreducible/prime element is irreducible/prime.
> 
> > [!Proof]-
> > 
> > $(1)$ Suppose $a$ is prime. Let $\alpha\beta\in \langle a \rangle$. $\alpha\beta=ar$. $a\ | \ ar=\alpha\beta$, so $a\ | \ \alpha\beta$, so $a\ | \ \alpha$ or $a\ | \ \beta$, whence $\alpha\in \langle a \rangle$ or $\beta\in \langle a \rangle$. 
> > 
> > Conversely, suppose $\langle a \rangle$ is prime and $a\ | \ \alpha\beta$ for some $\alpha, \beta\in R$. This implies $\alpha\beta\in \langle a \rangle$, so $\alpha\in \langle a \rangle$ or $\beta\in \langle a \rangle$, whence $a\ | \ \alpha$ or $a\ | \ \beta$. 
> > 
> > ---
> > 
> > $(2)$ Suppose $b$ is irreducible and $\langle b \rangle\subseteq \langle c \rangle$ for $c\in R$. Since $b\in \langle c \rangle$, $b=cr$, and either $c$ or $r$ is a unit. If $c$ is a unit, $\langle c \rangle=R$. If $r$ is a unit, we can write $c=br^{-1}$, so $\langle c \rangle\subseteq \langle b \rangle$ and $\langle b \rangle=\langle c \rangle$. 
> > 
> > Conversely, suppose $\langle b \rangle$ is maximal in the set of all principle ideals. If $b=b_{1}b_{2}$, then $\langle b \rangle\subseteq \langle b_{1} \rangle$. $\langle b_{1} \rangle$ is forced to be $R$ (in which case $b_{1}$ is a unit) or $\langle b \rangle$. In the latter case, $b_{1}=br$, and $b=brb_{2}$. Since $R$ is an integral domain, we have $rb_{2}=1$, so $b_{2}$ is a unit.
> > 
> > ---
> > 
> > $(3)$. Let $p$ be prime and $p=ab$. Then, $p\ | \ a$ or $p\ | \ b$. WLOG, consider the first case. Then, $pr=a$. Then, $p=ab=prb$, so $p(1-rb)=0$. Since $R$ is an integral domain, we have $1=rb$, so $b$ is a unit.
> > 
> > ---
> > 
> > $(4)$ Suppose $R$ is a PID. Let $p\in R$ be irreducible. Since we are in a PID, $(2)$ implies that $\langle \alpha \rangle$ is a maximal ideal. So, $\langle \alpha \rangle$ is prime, so $\alpha$ is prime by $(1)$. 
> > 
> > > [!Note]
> > > 
> > > PIDs are not the only class of rings with this property; consider $\mathbb{Z}[x]$ as an example. It is not a PID, but every irreducible element is prime (recall our [[TUT ALG3 2#^f129e6|characterization]] of the prime ideals of $\mathbb{Z}[x]$!)
> > 
> > ---
> > 
> > $(5)$ Let $a$ be irreducible and $a$ and $b$ be associates. $a=bu$ for some unit $u$. If $b$ is not irreducible then $b=b_{1}b_{2}$, so $a=b_{1}b_{2}u=(b_{1})(b_{2}u)$, so $a$ is not irreducible.
> 

^662472

Example of an irreducible element which is not prime: Consider $2$ in $\mathbb{Z}[\sqrt{ -5 }]$. $2\cdot 3=(1+\sqrt{ 5 })(1-\sqrt{ 5 })$, and $2$ does not divide either $1+\sqrt{ 5 }$ or $1-\sqrt{ 5 }$. It is easily seen that $2$ is irreducible.