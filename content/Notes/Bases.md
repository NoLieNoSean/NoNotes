---
tags:
  - ALG1
---

## Definition

>[!Definition]
>A system of vectors $\mathbf{v}_{1}, \mathbf{v}_{2}, \mathbf{v}_{3},\cdots \mathbf{v}_{n} \in V$, where $V$ is a [[Vector spaces|vector space]], is called a *basis* of $V$ if any $\mathbf{v}\in V$ can be uniquely expressed as a [[Linear Combinations|linear combination]] of the system. 

>[!Note]
>Given a vector space $V$ and a set of basis vectors, any vector in $V$ is uniquely determined by the coefficients in its decomposition in terms of the basis vectors. So, we can stack the coefficients in a column and operate on them like we do with elements of $\mathbb{F}^n$. This allows us to translate any statement about vectors in $\mathbb{F}^n$ to a vector space $V$ with a given basis.

---
## Building up to a basis

The existence and uniqueness of linear combinations requirements of bases can be analyzed separately.
### Spanning systems

>[!Definition]
>A system of vectors $\mathbf{v}_{1},\mathbf{v}_{2},\dots,\mathbf{v}_{p} \in V$ is called a *spanning (aka complete, generating) system* in $V$ if any vector $\mathbf{v} \in V$ admits a representation as a linear combination of the vectors. 

This differs from a basis in that it does not require the representations to be unique. 

### Linearly independent systems

>[!Definition]
>A system of vectors $\mathbf{v}_{1},\mathbf{v}_{2},\dots,\mathbf{v}_{p} \in V$ is called *linearly independent* iff the equation $x_{1}\mathbf{v}_{1}+x_{2}\mathbf{v}_{2} + \dots + x_{p}\mathbf{v}_{p} = \mathbf{0}$ (with unknowns $x_{k}$) has only trivial solution. 

By definition, a basis is a linearly independent system. 

A system of vectors is called *linearly dependent* if $\mathbf{0}$ can be expressed as a non-trivial linear combination of the vectors.

---
### New, equivalent definition of basis
It is clear from the definition of a basis that a basis is both spanning and linearly independent. It can also be proved (LADW, p10) that if a set is spanning and linearly independent, it is a basis. Thus, *A system of vectors is a basis if and only if it is a spanning system and linearly independent.*

>[!Remark] Any (finite) generating system contains a basis.
>Suppose $\mathbf{v}_{1},\mathbf{v}_{2},\dots,\mathbf{v}_{p} \in V$ is a generating set. If it is linearly independent, we are done. If not, then there exists a vector $v_{k}$ which can be expressed as a linear combination of the vectors $\mathbf{v}_{j \ne k}$. So, any linear combination of the vectors $\mathbf{v}_{1},\mathbf{v}_{2},\dots,\mathbf{v}_{p}$ can be represented as a linear combination of the same vectors without $v_{k}$(just replace $v_{k}$ with its expression as a linear combination of the other vectors). Thus, $v_{k}$ can be removed from the set while retaining the spanning property of the set. If we keep repeatedly removing such vectors from the set, we must end up with a basis (we cannot reach the null set as we are preserving completeness on every removal).


---
## Standard basis in $\mathbb{F}^n$

$$\mathbf{e}_{1}:=\left(\begin{array}{c}1\\0\\0\\\vdots\\0\end{array}\right),\quad\mathbf{e}_{2}:=\left(\begin{array}{c}0\\1\\0\\\vdots\\0\end{array}\right),\quad\mathbf{e}_{3}:=\left(\begin{array}{c}0\\0\\1\\\vdots\\0\end{array}\right),\ldots,\quad\mathbf{e}_{n}:=\left(\begin{array}{c}0\\0\\0\\\vdots\\1\end{array}\right)$$

---

## Standard basis in $\mathbb{P}^n$

$$\mathbf{e}_0:=1,\quad\mathbf{e}_1:=t,\quad\mathbf{e}_2:=t^2,\quad\mathbf{e}_3:=t^3,\quad\ldots,\quad\mathbf{e}_n:=t^n$$
