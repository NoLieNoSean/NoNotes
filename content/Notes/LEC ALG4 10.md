---
id: "403"
date: 2026-02-06
time: 11:52
tags:
  - ALG4
  - Lecture
---
# More on the Jordan canonical form

When defining a [[LEC ALG4 9#^d71679|Jordan block]], we referred to its diagonal entry by 'eigenvalue'. Now we see why. 

> [!Theorem]
> Let $k$ be an algebraically closed field. Let $V$ be a finite dimensional $k$-vector space. Let $\lambda\in k$. Let $T:V\to V$ be $k$-linear. Then $T$ has a JCF $J$ with a Jordan block with eigenvalue $\lambda$ $\iff$ $\lambda$ is an [[LEC ALG1 17#^6c94b7|eigenvalue]] of $T$. 
> 
> > [!Proof]-
> > 
> > $(\implies)$ Since $J$ is a lower triangular matrix, [[LEC ALG1 15#^d66e29|its determinant is given by the product of its diagonal entries]]. Thus, $(x-\lambda)$ divides the [[LEC ALG1 18#^e5c62f|characteristic polynomial]] of $T$, and by [[LEC ALG1 18#^70f7de]] $\lambda$ is an eigenvalue of $T$.
> > 
> > $(\impliedby)$ Conversely, if $\lambda$ is an eigenvalue of $T$, then $\lambda$ is a root of the characteristic polynomial of $T$, and hence must appear on the diagonal of $J$ since it is triangular. 
> 

We now discuss the extent to which the JCF matrix of a linear operator, the existence of which is guaranteed by [[LEC ALG4 9#^261664]], is unique. [[LEC ALG1 18#Eigenstuff of abstract operators|Recall]] that matrices which represent the same abstract linear operator in different bases are [[LEC ALG1 18#^1f9fb5|similar]]. Thus, given a matrix in JCF, we need to characterize the JCF matrices in its orbit under conjugation. 

> [!Proposition]
> Let $A$ and $B$ be matrices in JCF. Then $A$ is similar to $B$ iff $B$ can be obtained by permuting the Jordan blocks of $A$. 
> 
> > [!Proof]-
> > 
> > This follows from the following facts:
> > 1. All permutations of the blocks of a block diagonal matrix can be obtained by conjugating by block permutation matrices. 
> > 2. Similar matrices have the same characteristic polynomial, so they must have the same eigenvalues $\lambda_{1}, \dots, \lambda_{k}$ [^1]. [[Jordan Form|Recall]] that the number of Jordan blocks of $A$ with eigenvalue $\lambda_{i}$ of size at least $j$ is $\dim\ker(A-\lambda_{i}I)^{j}-\dim\ker(A-\lambda_{i}I)^{j-1}$. Again, since $A$ and $B$ are similar, we have $\dim\ker(A-\lambda_{i}I)^{j}=\dim\ker(B-\lambda_{i}I)^{j}$ for all $i, j$. 
> 
> 

We now prove the Cayley-Hamilton theorem. 

[!Theorem] Cayley-Hamilton
Let $k$ be algebraically closed. Let $V$ be a finite dimensional $k$-vector space. Let $T:V\to V$ be $k$-linear and let $c_{T}$ be the characteristic polynomial of $T$. Then $c_{T}(T)=0$. 



[^1]: However, the characteristic polynomial does not tell us anything about their geometric multiplicities!
