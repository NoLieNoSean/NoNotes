---
id: "583"
date: 2026-10-09
time: 15:36
tags:
  - GANA1
  - Lecture
desc: Bounded operators
P1: true
---

> [!Exercise] Assignment
> Let $X$ be a compact metric space. Consider $(C(X), \lVert \cdot \rVert)$. For fixed $x_{0}\in X$. Define $\mathcal{M}=\{ f\in C(X):f(x_{0})=0 \}$. Show that $\mathcal{M}$ is closed. Show that $C(X)/\mathcal{M}\cong(\mathbb{C},\lVert \cdot \rVert)$ as Banach spaces. 


> [!Exercise] Assignment, @sunderFunctionalAnalysisSpectral1997 Exr 1.5.5
> Let $X_{0}$ be a NLS. Show that there exists a Banach space $X$ and Linear, one dimensional, and norm preserving embedding $X_{0}\hookrightarrow X$ such that $X_{0}$ is dense in $X$. If $X'$ also satisfies the same conditions, $X\cong X'$ as Banach spaces. 

^604c21

> [!Exercise] Assignment, @sunderFunctionalAnalysisSpectral1997 Exr 1.5.5
> Let $T:X\to Y$ be bounded, $Y$ Banach. Let $X\subseteq \tilde{X}$, where $\tilde{X}$ is the completion form [[#^604c21]]. Then, there exists a unique bounded operator $\tilde{T}:\tilde{X}\to Y$ such that $\tilde{T}|_{X}=T$ and $\lVert \tilde{T} \rVert=\lVert T \rVert$. 


---
# Bounded operators

Recall [[LEC CAL1 3#^ecdf17]], [[LEC CAL1 3#^b01b34]]. 

> [!Example] Finite dimensions
> Let $T\in M_{n, m}(\mathbb{C})$. Then, $T^{*}T$ is self adjoint. By [[Structure of operators in inner product spaces#^7e0cb4|the spectral theorem for self-adjoint operators]], there exists a unitary matrix $U$ (i.e., $U^{*}U=I$) such that $T^{*}T=UDU^{*}$, where $D=\text{diag}(\lambda_{1}, \dots, \lambda_{m})$ is a real diagonal matrix. Let $\lambda=\text{max}\{ \lambda_{1} , \dots, \lambda_{m}\}$. 
> 
> We'll compute $\lVert T \rVert$. 
> $$
> \begin{align}
> \sup _{\lVert x \rVert \leqslant  1}\lVert Tx \rVert ^{2} & = \sup \langle Tx, Tx \rangle  \\
>  & =\sup \langle T^{*}Tx, x \rangle  \\
>  & =\sup \langle T^{*}TUx, Ux \rangle  \\
>  & =\sup \langle U^{*}T^{*}TUx, x \rangle \\
>  & =\sup \langle Dx, x \rangle   \\
>  & =\sup \sum\lambda_{k}|x_{k}^{2}| \\
>  & =\lambda,
> \end{align}
> $$
> where the last equality can be obtained using [[LEC DGT 3#^b63347|Lagrange multipliers]]. Therefore, $\lVert T \rVert=\sqrt{ \lambda }$. 

> [!Example] Integral operators
> Here's an infinite dimensional example. Consider $T_{k}:C([0, 1])\to C([0, 1])$ as defined in [[LEC ANA2 8#^133df6]]; it is clearly linear. It is called an **integral operator**. Let $|k|\leqslant M$. Observe that for $s\in[0, 1]$, 
> $$
> \begin{align}
> |(T_{k}f)(s)| & \leqslant \int_{0}^{1} |k(s, t)||f(t)| \, dt \\
>   & \leqslant M\int_{0}^{1} |f(t)| \, dt \\
>   & =M\lVert f \rVert _{1} \\
>  & \leqslant M\lVert f \rVert _{\infty}.
> \end{align}
> $$
> It follows that $\lVert T_{k}f \rVert_{1}\leqslant \lVert T_{k}f \rVert_{\infty}\leqslant M\lVert f \rVert_{1}\leqslant M\lVert f \rVert_{\infty}$. In other words, $T_{k}:(C[0, 1], \lVert \cdot \rVert^{1})\to(C[0, 1], \lVert \cdot \rVert^{2})$ is a bounded operator for $\lVert \cdot \rVert^{i}=\lVert \cdot \rVert_{1}, \lVert \cdot \rVert_{\infty}$ for $i=1, 2$. 

^fe54b0

> [!Example] $C[0, 1]$ action on $L^{p}([0, 1])$
> Consider the normed space $(L^{p}([0, 1]), \lVert \cdot \rVert_{q})$. For $f\in C([0, 1])$, define the operator $M_{f}$ on $L^{p}([0, 1])$ by $M_{f}g=fg$. It is clear that $M_{f}g\in L^{p}([0, 1])$, since $\lVert fg \rVert_{q}\leqslant \lVert f \rVert_{\infty}\lVert g \rVert_{q}$; this also tells us that $\lVert M_{f} \rVert\leqslant \lVert f \rVert_{\infty}$. On considering $g=1$, we see that $\lVert M_{f} \rVert=\lVert f \rVert_{\infty}$. 
> 
> Incidentally, note that we also have $M_{fg}=M_{f}\circ M_{g}$. This makes $f\mapsto M_{f}$ a *representation* of $C([0, 1])$ as bounded operators on $(L^{p}([0, 1]), \lVert \cdot \rVert_{q})$. 


> [!Example] Shift operators
> Consider $S:\ell^{p}\to \ell^{p}$, $S(x_{1}, \dots, x_{n}, \dots)=(0, x_{1}, \dots, x_{n})$. Clearly, $S$ is an isometry, and hence bounded. 
> 
> There's a result which states that all isometries that are not unitary maps arise from repeated applications of shift operators. 


> [!Proposition]
> Let $X, Y$ be normed linear spaces, with $Y$ complete. Then, $B(X, Y)$, the space of all bounded linear maps $X\to Y$, is complete when equipped with the operator norm. 
> 
> > [!Proof]-
> > 
> > It is easily checked that the operator norm on $B(X, Y)$ is indeed a norm. Suppose $\{ T_{n} \}\subseteq B(X, Y)$ is Cauchy. For all $x\in X$, 
> > $$
> > \lVert (T_{n}-T_{m})x \rVert \leqslant \lVert T_{n}-T_{m} \rVert \lVert x \rVert ,
> > $$
> > so $\{ T_{n}x \}\subseteq Y$ is Cauchy. Define $T:X\to Y$ by
> > $$
> > Tx=\lim_{ n \to \infty }T_{n}x. 
> > $$
> > Clearly, $T$ is linear. 
> > 
> > Fix $c> 0$. Let $N\in \mathbb{N}$ be such that $\lVert T_{n}-T_{m} \rVert< c$ for all $n, m\geqslant N$. For all $\lVert x \rVert\leqslant 1$, 
> > $$
> > \begin{align}
> > \lVert Tx \rVert  & \leqslant \lVert (T-T_{N})x \rVert+\lVert T_{N}x \rVert  \\
> >  & =\lim_{ m \to \infty } \lVert (T_{m}-T_{N})x \rVert +\lVert T_{N}x \rVert  \\
> >  & \leqslant \lim_{ m \to \infty } \lVert T_{m}-T_{N} \rVert +\lVert T_{N} \rVert  \\
> >  & \leqslant c+\lVert T_{N} \rVert .
> > \end{align}
> > $$
> > Thus, $T$ is bounded. 
> > 
> > For all $\lVert x \rVert\leqslant 1$, 
> > $$
> > \begin{align}
> > \lVert (T-T_{n})x \rVert  & =\lim_{ m \to \infty } \lVert (T_{m}-T_{n})x \rVert \leqslant \lim_{ m \to \infty } \lVert T_{m}-T_{n} \rVert \\
> > \implies \lVert T-T_{n} \rVert  & \leqslant \lim_{ m \to \infty } \lVert T_{m}-T_{n} \rVert,
> > \end{align}
> > $$
> > so $\lVert T-T_{n} \rVert\to 0$. 
> 




