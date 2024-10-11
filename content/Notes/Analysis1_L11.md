---
tags:
  - Lecture
  - ANA1
  - Processed
---
2024-09-11, Wednesday
1530

---

![[1726055561814.jpg]]
![[1726055561810.jpg]]

---

## Recall and orient

>[!Recall]
>- High school definition of continuity: $f$ is continuous at $x=p$ iff $\lim_{ x \to p }f(x)=f(p)$. This will be modified. 
>- The [[Analysis1_L10#Definition of limit of a function in metric spaces|definition]] of limit of a function from yesterday. Recall why we required $p$ to be a limit point.  
>
>

To-do:
- [x] Relating limit of function with sequences (this will allow us to import the algebraic properties we proved for limits of sequences)
- [ ] open and closed sets

---
## Continuity

Few things to note:
- While defining the limit of a function at a point $p$, we wanted it to be such that we could pick $p$ from outside the domain of $f$. In contrast, we want $f$ being defined at $p$ as a prerequisite for $f$ being continuous at $p$.
- We do not want to restrict $p$ to be a limit point of the domain of $f$, since we would like to comment on whether $f$ is continuous or not at any point in its domain. 
### Continuity at a point

#### Definition

Rudin, 4.5
>[!Definition]
>Let $X$ and $Y$ be metric spaces, $E\subset X$, $f:E\to Y$, $p\in E$. 
>Then $f$ is said to be *continuous* at $p$ if for every $\epsilon>0$ there exists a $\delta>0$ such that $d_{X}(x, p)<\delta$, $x\in E$ implies  $d_{Y}(f(x), f(p))<\epsilon$. 

#### How it compares to limit of $f$ at a point

Compare the above with the definition of the limit of a function as $x$ approaches $p$, restated here from yesterday:

Rudin, 4.1
>[!Definition]
>Let $X$ and $Y$ be metric spaces, $E\subset X$, $f:E\to Y$, $p$ is a limit point of $E$.
>We write *$\lim_{ x \to p }f(x)= q$* , $q\in Y$ if for every $\epsilon>0$ there exists a $\delta>0$ such that $0<d_{X}(x, p)<\delta$ implies $d_{Y}(f(x), q)<\epsilon$.

Note the differences:
1. 4.1 requires $p$ to be a limit point, 4.5 doesn't.
2. 4.5 requires $p\in E$, 4.1 doesn't.
3. 4.5 says $d_{Y}(f(x), f(p))<\epsilon$, and 4.1 says $d_{Y}(f(x), q)<\epsilon$.
4. 4.5 says $d_{X}(x, p)<\delta$, 4.1 says $0<d_{X}(x, p)<\delta$. We do not want to take any position about $f(p)$ when working with the limit of $f$ at $p$. It may not exist, it may exist and be not equal to $q$, or it may be equal to $q$ - we do not care, and more importantly, we don't want to say anything about it. However, in 4.5, we are checking $d_{Y}(f(x), f(p))<\epsilon$ for every $x$ that passes the test $d_{X}(x, p)<\delta$, and $d_{Y}(f(p), f(p))<\epsilon$ is always true, regardless of what $f$ and $p$ are. While we do not lose anything by excluding the $x=p$ case, adding the $0<$ restriction does not accomplish anything, and just clutters the definition. It does have some semantic value when $p$ is an isolated point though, as explained below.

#### How does this definition interact with limit points?

##### Case 1: $p$ is a limit point of $E$
Rudin, 4.6
Say that $f$ is continuous at $p$, and $p$ is a limit point of $E$. Given the latter, 4.5 is a stricter statement than 4.1 - It says that the limit at $p$ exists, and that it equals $f(p)$ (point 3 above). This is essentially the familiar high school definition: $f$ is continuous at $p$ iff $\lim_{ x \to p }f(x)=f(p)$. 
##### Case 2: $p$ is an isolated point of $E$
Say $f$ is continuous at $p$, and $p$ is not a limit point of $E$, i.e, $p$ is an isolated point. 

Recall the definition of a limit point, restated from yesterday:

>[!Definition]
>Given $E\subset X$, a point $p\in X$ is a *limit point* of $E$, if for all $\delta>0$, $B_{\delta}(p)\cap E$ contains a point other than $p$. 

If $p$ is not a limit point, then there must exist $\delta>0$ such that $B_{\delta}(p)\cap E$ contains no point other than $p$ (note that $B_{\delta}(p)$ always contains $p$). However, since the definition goes $d_{X}(x, p)<\delta$ and not $0<d_{X}(x, p)<\delta$, $x=p$ passes the filter, and the "such that" clause becomes non-vacuously true. Note that even if we had the tighter version, the "such that" clause would still be vacuously true for this $\delta$. Thus, $f$ is continuous at $p$ (in fact, ANY function with domain $E$ is continuous at $p$). Also, it follows that $f$ is continuous at all isolated points in its domain.

#### Balls and neighborhoods

We can recast 4.5 like so:

>[!Definition]
>Let $X$ and $Y$ be metric spaces, $E\subset X$, $f:E\to Y$, $p\in E$. 
>Then $f$ is said to be *continuous* at $p$ if for every $\epsilon>0$ there exists a $\delta>0$ such that $f(B_{\delta}(p, E))\subset B_{\epsilon}(f(p), Y)$.

$$
\begin{align}
& f(B_{\delta}(p, E))\subset B_{\epsilon}(f(p), Y) \\
\implies & B_{\delta}(p, E)\subset f^{-1}(B_{\epsilon}(f(p), Y))
\end{align}
$$
So, continuity at $p$ means $f^{-1}(\text{Any ball around } f(p))$ contains a ball of non zero radius around $p$, i.e, is a neighborhood of $p$. 

#### A further simplification of the definition

Rudin, 4.12

The previous definitions defined $f$ on a subset $E$ of a metric space $X$. However, (unlike the definition of limit) the definition of continuity does not involve the points of $X$ not in $E$ in any manner. This, combined with the knowledge that any subset of a metric space is a metric space, allows us to directly define $f$ on some metric space $E$. 

(I promise, this is the last time I'll be restating this)

>[!Definition]
>Let $E$ and $Y$ be metric spaces, $f:E\to Y$, $p\in E$. 
>Then $f$ is said to be *continuous* at $p$ if for every $\epsilon>0$ there exists a $\delta>0$ such that $f(B_{\delta}(p, E))\subset B_{\epsilon}(f(p), Y)$.

#### Composition of functions continuous at a point

Rudin, 4.7
>[!Theorem]
>Suppose $X$, $Y$, $Z$ are metric spaces, and $f:X\to Y$, $g:Y\to Z$.
>If $f$ is continuous at a point $p\in X$ and if $g$ is continuous at the point $f(p)\in Y$ then $g\circ f$ is continuous at $p$.

Note that the result from the previous section has been used to simplify the theorem from how it appears in Rudin. 

>**Proof**
>Since $g$ is continuous at $f(p)$, there must exist $\delta'>0$ such that $g(B_{\delta'}(f(p), Y))\subset B_{\epsilon}(g(f(p)), Z)$. Similarly, since $f$ is continuous at $p$, there must exist $\delta>0$ such that $f(B_{\delta}(p, X))\subset B_{\delta'}(f(p), Y)$. Thus, we have $g(f(B_{\delta}(p, X)))\subset g(B_{\delta'}(f(p), Y))\subset B_{\epsilon}(g(f(p)), Z)$, and we are done. ❏

### Continuous functions

#### Definition
>[!Definition]
>If $f$ is continuous at every point of $E$, then $f$ is said to be *continuous* on $E$. If $E$ happens to be the domain of $f$, then $f$ is just said to be continuous.

#### Example
For example, consider the function $f:\mathbb{R}\setminus \mathbb{N}\to \mathbb{R}$, defined by $f(x) = \lfloor x \rfloor$. 
Given any point $p$ in the domain of the function, we can pick 
$$
\delta=\frac{\min(p-\lfloor p \rfloor, \lceil p \rceil-p)}{2}.
$$
For every $x\in(p-\delta, p+\delta)$, $f(x)=\lfloor p \rfloor$, and thus $|f(p)-f(x)|=0$, which will satisfy any $\epsilon$. So, $f$ is continuous.  

---
## Sequence criterion

Rudin, 4.2
>[!Theorem]
>Let $X$ and $Y$ be metric spaces, $E\subset X$, $f:E\to Y$, $p$ is a limit point of $E$.
>Then, $\lim_{ x \to p }f(x)=q$ iff for every sequence $(p_{n})$ in $E\setminus \{ p \}$ such that  $\lim_{ n \to \infty }p_{n}=p$, it is the case that  $\lim_{ n \to \infty }f(p_{n})=q$.

>**Proof of $\Longrightarrow$**
>Take a given sequence $(p_{n})\to p$. Let $\epsilon>0$. Want to find $N$ such that for all $n>N$, $d(f(p_{n}), q)<\epsilon$. Since $\lim_{ x \to p }f(x)=q$, there must exist $\delta$ such that $0<d(p_{n},p)<\delta\implies d(f(p_{n}),q)<\epsilon$. Take $N$ such that for all $n>N$, $0<d(p_{n}, p)<\delta$, which ensures $d(f(p_{n}), q)<\epsilon$. ❏
>
>**Proof of $\Longleftarrow$**
>Proof by contradiction. Suppose $\lim_{ x \to p }f(x)=q$ is false (see how this is different from having $\ne$ here). Then, there exists a "bad" $\epsilon$ such that for all $\delta>0$, there exists some $x$ such that $0<d(x, p)<\delta$ and $d(f(x), q)\geq \epsilon$. 
>Let $(\delta_{i})=1, \frac{1}{2}, \frac{1}{3}, ..$, get $x_{i}$ such that $0<d(x_{i}, p)< \delta_{i}$ but $d(f(x_{i}), q)\ge \epsilon$. Then $x_{i}\to p$, but $f(x_{i})\not\to q$. $\Rightarrow\Leftarrow$ ❏

The usefulness of this theorem will become apparent when we define algebraic properties of limits in the next section.

>[!Info]
>For the second part of the proof, we are given are statements about sequences, and what we need to show involves balls. This suggests that we should try to employ proof by contradiction, since there is no straightforward way to turn a statement about all sequences that converge to a point into one about all points within balls centered at a point.
### Uniqueness of limit of a function

>[!Theorem] Corollary
>If $f$ has a limit at $p$, this limit is unique.

Follows from Rudin, 4.2 combined with Rudin, 3.2d ([[Sequences and convergence#Uniqueness of a limit|uniqueness of limit of a sequence]]).

---
## Algebra of limits of functions

Note that functions must be real/complex/vector valued for us to be able to do any algebra with them. 

Rudin, 4.4
>[!Theorem]
>Suppose $X$ is a metric space, $E\subset X$, $p$ is a limit point of $E$, $f:E\to \mathbb{C}$, $g:E\to \mathbb{C}$, and $\lim_{ x \to p }f(x)=a$, $\lim_{ x \to p }g(x)=b$. 
>Then, 
>1. $\lim_{ x \to p }(f+g)(x)=a+b$
>2. $\lim_{ x \to p }(fg)(x)=ab$
>3. $\lim_{ x \to p } \left( \frac{f}{g} \right)(x)= \frac{a}{b}$, if $b\ne 0$.

>**Proof**
>For every $(p_{n})\to p$ in $E\setminus \{ p \}$, we have $(f(p_{n}))\to a$ and $(g(p_{n}))\to b$, courtesy 4.2(=>). Then, the [[Sequences and convergence#Algebraic limit theorem|algebra of limits of sequences]] tells us that $(f(p_{n})+g(p_{n}))\to a+b$. This implies $\lim_{ x \to p }(f(x)+g(x))=a+b$, also because of 4.2(<=). ❏

Similar proofs for (2) and (3).

>[!Info]
>In (3), we have only required the limit of $g$ at $p$ to be non-zero, because this guarantees a $\delta$ window about $p$ where $g$ must be non-zero. 

Have a peek at Rudin, 4.9.

---
## Epilogue

Briefly discussed Rudin, 4.9 to 4.12 (Assigned reading). Noted the use of slot-wise convergence in proving 4.10.

Noted that in the space of $f:\mathbb{R}\to \mathbb{R}$, $f(x) = x$ and $f(x)=1$ are continuous functions. Realized how this in conjunction with Rudin, 4.9  implied all that polynomials and rational functions (with the usual restrictions on the denominator) are continuous.
