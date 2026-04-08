---
id: "441"
date: 2026-03-29
time: 14:41
tags:
---
We will now look at nonlinear autonomous systems of differential equations
$$
\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x})
$$

^450f7c

where $\mathbf{f}:E\to \mathbb{R}^{n}$ and $E$ is an open subset of $\mathbb{R}^{n}$. Under certain conditions on the function $\mathbf{f}$, the nonlinear system [[#^450f7c]] has a unique solution through each point $\mathbf{x}_{0}\in E$ defined on a maximal interval of existence $(\alpha, \beta)\subseteq \mathbb{R}$. 

- In general, [[#^450f7c]] will have a solution if the function $\mathbf{f}$ is continuous. However, continuity of $\mathbf{f}$ is not sufficient to guarantee uniqueness of the solution. 
- Another way in which nonlinear systems differ from linear systems is that even when $\mathbf{f}$ in [[#^450f7c]] is defined and continuous for all $\mathbf{x}\in \mathbb{R}^{n}$, the solution $\mathbf{x}(t)$ may become unbounded at some finite time $t\in\beta$; i.e, the solution may only exist on some proper subinterval $(\alpha, \beta)\subseteq \mathbb{R}$. 
# The existence-uniqueness theorem

> [!Definition]
> Suppose that $\mathbf{f}\in C(E)$ where $E$ is an open subset of $\mathbb{R}^{n}$. Then $\mathbf{x}(t)$ is a solution of the differential equation [[#^450f7c]] on an interval $I$ if $\mathbf{x}(t)$ is differentiable on $I$ and if for all $t\in I$, $\mathbf{x}(t)\in E$ and 
> $$
> \mathbf{x}'(t)=\mathbf{f}(\mathbf{x}(t)).
> $$
> And given $\mathbf{x}_{0}\in E$, $\mathbf{x}(t)$ is a solution of the IVP
> $$
> \begin{align}
> \dot{\mathbf{x}} & =\mathbf{f}(\mathbf{x}) \\
> \mathbf{x}(t_{0}) & =\mathbf{x}_{0}
> \end{align}
> $$
> on an interval $I$ if $t_{0}\in I$, $\mathbf{x}(t_{0})=\mathbf{x}_{0}$ and $\mathbf{x}(t)$ is a solution of the differential equation [[#^450f7c]] on the interval $I$. 

> [!Lemma]
> Let $E$ be an open subset of $\mathbb{R}^{n}$ and let $\mathbf{f}:E\to \mathbb{R}^{n}$. If $\mathbf{f}\in C^{1}(E)$, $\mathbf{f}$ is locally [[LEC CAL1 10#^659739|Lipschitz]] on $E$. 

> [!Theorem] Fundamental Existence-Uniqueness Theorem
> Let $E$ be an open subset of $\mathbb{R}^{n}$ containing $\mathbf{x}_{0}$ and assume that $\mathbf{f}\in C^{1}(E)$. Then there exists an $a> 0$ such that the IVP
> $$
> \begin{align}
> \dot{\mathbf{x}} & =\mathbf{f}(\mathbf{x}) \\
> \mathbf{x}(0) & =\mathbf{x}_{0}
> \end{align}
> $$
> has a unique solution $\mathbf{x}(t)$ on the interval $[-a, a]$. 

Picard's method of successive approximations is used to prove this theorem; it is based on the fact that $\mathbf{x}(t)$ is a solution of the IVP
$$
\begin{align}
\dot{\mathbf{x}} & =\mathbf{f}(\mathbf{x}) \\
\mathbf{x}(0) & =\mathbf{x}_{0}
\end{align}
$$
iff $\mathbf{x}(t)$ is a continuous function that satisfies the integral equation
$$
\mathbf{x}(t)=\mathbf{x}_{0}+\int_{0}^{t} \mathbf{f}(\mathbf{x}(s)) \, ds.
$$
The successive approximations to the solution of this integral equation are defined by the sequence of functions
$$
\begin{align}
\mathbf{u}_{0}(t) & =\mathbf{x}_{0} \\
\mathbf{u}_{k+1}(t) & =\mathbf{x}_{0}+\int_{0}^{t}\mathbf{f}(\mathbf{u}_{k}(s))  \, ds
\end{align}
$$
for $k=0, 1, 2, \dots$. 


> [!Exercise] ✦
> Use the method of successive approximations to show that if the matrix valued function $A(t)$ is continuous on $[-a_{0}, a_{0}]$ then there exists an $a> 0$ such that the initial value problem
> $$
> \begin{align}
> \dot{\Phi} & =A(t)\Phi  \\
> \Phi(0) & =I
> \end{align}
> $$
> has a unique fundamental matrix solution $\Phi(t)$ on $[-a, a]$. 

^689702

# Dependence on Initial conditions and parameters

We will now examine the dependence of the solution of the initial value problem
$$
\begin{align}
\dot{\mathbf{x}} & =\mathbf{f}(\mathbf{x}) \\
\mathbf{x}(0) & =\mathbf{y}
\end{align}
$$
on the initial condition $\mathbf{y}$. More generally, if the differential equation depends on a parameter $\boldsymbol{\mu}\in \mathbb{R}^{m}$, i.e., the the function $\mathbf{f}(\mathbf{x})$ is replaced by $\mathbf{f}(\mathbf{x}, \boldsymbol{\mu})$, then the solution $\mathbf{u}(t, \mathbf{y}, \boldsymbol{\mu})$ will also depend on $\boldsymbol{\mu}$. Roughly speaking, the dependence of the solution $\mathbf{u}(t, \mathbf{y}, \boldsymbol{\mu})$ on the initial condition $\mathbf{y}$ and the parameter $\boldsymbol{\mu}$ is as continuous as the function $\mathbf{f}$. 

> [!Lemma] Gronwall
> Suppose that $g(t)$ is a continuous real valued function that satisfies $g(t)\geqslant 0$ and
> $$
> \begin{align}
> g(t)\leqslant  C+K\int_{0}^{t} g(s) \, ds 
> \end{align}
> $$
> for all $t\in[0, a]$ where $C$ and $K$ are ==positive constants==. It then follows that for all $t\in[0, a]$, 
> $$
> g(t)\leqslant Ce^{ Kt }.
> $$

> [!Theorem] Dependence on initial conditions
> Let $E$ be an open subset of $\mathbb{R}^{n}$ containing $\mathbf{x}_{0}$ and assume that $\mathbf{f}\in C^{1}(E)$. Then there exists an $a> 0$ and a $\delta> 0$ such that for all $\mathbf{y}\in B(\mathbf{x}_{0}, \delta)$ the IVP
> $$
> \begin{align}
> \dot{\mathbf{x}} & =\mathbf{f}(\mathbf{x}) \\
> \mathbf{x}(0) & =\mathbf{y}
> \end{align}
> $$
> has a unique solution $\mathbf{u}(t, \mathbf{y})$ with $\mathbf{u}\in C^{1}(G)$ where $G=[-a, a]\times B(\mathbf{x}_{0}, \delta)\subseteq \mathbb{R}^{n+1}$; furthermore, for each $\mathbf{y}\in B(\mathbf{x}_{0}, \delta)$, $\mathbf{u}(t, \mathbf{y})$ is a twice continuously differentiable function of $t$ for $t\in[-a, a]$.

^7d478a


> [!Corollary]
> Under the hypothesis of the above theorem, 
> $$
> \Phi(t, \mathbf{y})=\frac{ \partial \mathbf{u} }{ \partial \mathbf{y} } (t, \mathbf{y})
> $$
> for $t\in[-a, a]$ and $\mathbf{y}\in B(\mathbf{x}_{0}, \delta)$ iff $\Phi(t, \mathbf{y})$ is the fundamental matrix solution of
> $$
> \begin{align}
> \dot{\Phi} & =D\mathbf{f}[\mathbf{u}(t, \mathbf{y})]\Phi \\
> \Phi(0, \mathbf{y}) & =I
> \end{align}
> $$
> for $t\in[-a, a]$ and $\mathbf{y}\in B(\mathbf{x}_{0}, \delta)$. 
> 
> > [!Proof]-
> > 
> > $(\implies)$ Fix $\mathbf{y}$. Recall that $\mathbf{u}(t, \mathbf{y})$ solves
> > $$
> > \begin{align}
> >  \frac{ \partial \mathbf{u} }{ \partial t } (t, \mathbf{y}) & =\mathbf{f}(\mathbf{u}(t, \mathbf{y})) \\
> >  \mathbf{u}(0, \mathbf{y}) & =\mathbf{y}.
> > \end{align}
> > $$
> > Differentiate both sides with respect to $\mathbf{y}$. Then by the chain rule, 
> > $$
> > \begin{align}
> > \frac{ \partial  }{ \partial t }\left( \frac{ \partial \mathbf{u} }{ \partial \mathbf{y} }  \right) & =D\mathbf{f}(\mathbf{u}(t, \mathbf{y}))\frac{ \partial \mathbf{u} }{ \partial \mathbf{y} }.
> > \end{align}
> > $$
> > So $\Phi$ satisfies
> > $$
> > \dot{\Phi}=D\mathbf{f}[\mathbf{u}(t, \mathbf{y})]\Phi.
> > $$
> > Also, from the initial condition $\mathbf{u}(0, \mathbf{y})=\mathbf{y}$, differentiating with respect to $\mathbf{y}$ gives $\Phi(0, \mathbf{y})=I$. 
> > 
> > $(\impliedby)$ Use [[#^689702]]. 
> 

> [!Theorem] Dependence on Parameters
> Let $E$ be an open subset of $\mathbb{R}^{n+m}$ containing the point $(\mathbf{x}_{0}, \boldsymbol{\mu}_{0})$ where $\mathbf{x}_{0}\in \mathbb{R}^{n}$ and $\boldsymbol{\mu}_{0}\in \mathbb{R}^{m}$ and assume that $\mathbf{f}\in C^{1}(E, \mathbb{R}^{n})$. It then follows that there exists an $a> 0$ and a $\delta> 0$ such that for all $\mathbf{y}\in B(\mathbf{x}_{0}, \delta)$ and $\boldsymbol{\mu}\in B(\boldsymbol{\mu}_{0}, \delta)$, the initial value problem
> $$
> \begin{align}
> \dot{\mathbf{x}} & =\mathbf{f}(\mathbf{x}, \boldsymbol{\mu}) \\
> \mathbf{x}(0) & = \mathbf{y}
> \end{align}
> $$
> has a unique solution $\mathbf{u}(t, \mathbf{y}, \boldsymbol{\mu})$ with $\mathbf{u}\in C^{1}(G)$, where $G=[-a, a]\times B(\mathbf{x}_{0}, \delta)\times B(\boldsymbol{\mu}_{0}, \delta)$. 

This follows immediately from [[#^7d478a]] by replacing $\mathbf{x}_{0}$, $\mathbf{x}$, $\dot{\mathbf{x}}$, and $\mathbf{y}$ by the vectors $(\mathbf{x}_{0}, \boldsymbol{\mu}_{0})$, $(\mathbf{x}, \boldsymbol{\mu})$, $(\dot{\mathbf{x}}, \mathbf{0})$, and $(\mathbf{y}, \boldsymbol{\mu})$ and $\mathbf{f}$ with $(\mathbf{f}, \mathbf{0})$. 


# Maximal interval of existence

Consider the IVP
$$
\begin{align}
\dot{\mathbf{x}} & =\mathbf{f}(\mathbf{x}) \\
\mathbf{x}(0) & =\mathbf{x}_{0}.
\end{align}
$$

^af443f

> [!Lemma]
> Let $E$ be an open subset of $\mathbb{R}^{n}$ containing $\mathbf{x}_{0}$ and suppose $\mathbf{f}\in C^{1}(E)$. Let $\mathbf{u}_{1}(t)$ and $\mathbf{u}_{2}(t)$ be solutions of the IVP [[#^af443f]] on the intervals $I_{1}$ and $I_{2}$. Then $0\in I_{1}\cap I_{2}$ and if $I$ is any open interval containing $0$ and contained in $I_{1}\cap I_{2}$, it follows that $\mathbf{u}_{1}(t)=\mathbf{u}_{2}(t)$ for all $t\in I$. 

> [!Theorem]
> Let $E$ be an open subset of $\mathbb{R}^{n}$ and assume that $\mathbf{f}\in C^{1}(E)$. Then for each point $\mathbf{x}_{0}\in E$, there is a maximal interval $J$ on which the initial value problem [[#^af443f]] has a unique solution; i.e., if the IVP has a solution $\mathbf{y}(t)$ on an interval $I$ than $I\subseteq J$ and $\mathbf{y}(t)=\mathbf{x}(t)$ for all $t\in I$. Furthermore, $J$ is open. $J$ is called the **maximal interval of existence** of the solution $\mathbf{x}(t)$ of the IVP [[#^af443f]].

# Flow of a differential equation

> [!Definition]
> Let $E$ be an open subset of $\mathbb{R}^{n}$ and let $\mathbf{f}\in C^{1}(E)$. For $\mathbf{x}_{0}\in E$, let $\phi(t, \mathbf{x}_{0})$ be the solution of the initial value problem [[#^af443f]] defined on its maximal interval of existence $I(\mathbf{x}_{0})$. Then for $t\in I(\mathbf{x}_{0})$, the set of mappings $\phi_{t}$ defined by 
> $$
> \phi_{t}(\mathbf{x}_{0})=\phi(t, \mathbf{x}_{0})
> $$
> is called the **flow of the differential equation** $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x})$. The flow $\phi$ is is defined on the set
> $$
> \Omega=\{ (t, \mathbf{x}_{0})\in\mathbb{R}\times E: t\in I(\mathbf{x}_{0}) \}\subseteq \mathbb{R}\times E.
> $$
> 

> [!Theorem] Smoothness of flows
> Let $E$ be an open subset of $\mathbb{R}^{n}$ and let $\mathbf{f}\in C^{1}(E)$. Then $\Omega$ is an open subset of $\mathbb{R}\times E$ and $\phi\in C^{1}(E)$. 

> [!Theorem]
> Let $E$ be an open set of $\mathbb{R}^{n}$ and let $\mathbf{f}\in C^{1}(E)$. Then for all $\mathbf{x}_{0}\in E$, if $t\in I(\mathbf{x}_{0})$ and $s\in I(\phi_{t}(\mathbf{x}_{0}))$, then $s+t\in I(\mathbf{x}_{0})$ and
> $$
> \phi_{s+t}(\mathbf{x}_{0})=\phi_{s}(\phi_{t}(\mathbf{x}_{0})).
> $$
> 

^6b7040

> [!Theorem]
> Let $E$ be an open set of $\mathbb{R}^{n}$ and let $\mathbf{f}\in C^{1}(E)$. If $(t, \mathbf{x}_{0})\in \Omega$ then there exists a neighborhood $U$ of $\mathbf{x}_{0}$ such that $\{ t \}\times U\subseteq \Omega$. It then follows that the set $V=\phi_{t}(U)$ is open in $E$ and that
> $$
> \phi_{-t}(\phi_{t}(\mathbf{x}))=\mathbf{x}\quad \forall \mathbf{x}\in U
> $$
> and
> $$
> \phi_{t}(\phi_{-t}(\mathbf{y}))=\mathbf{y}\quad \forall \mathbf{y}\in V.
> $$
> 

^2e5ed9

> [!Remark]
> Time along each trajectory can be rescaled so that for all $\mathbf{x}_{0}\in E$, the solution $\phi(t, \mathbf{x}_{0})$ of the initial value problem [[#^af443f]] is defined for all $t\in \mathbb{R}$. Once this rescaling has been made, it follows that $\Omega=\mathbb{R}\times E$, $\phi\in C^{1}(\mathbb{R}\times E)$, $\phi_{t}\in C^{1}(E)$ for all $t\in \mathbb{R}$ and the three properties from [[#^6b7040]] and [[#^2e5ed9]] hold for all $t\in \mathbb{R}$ and $\mathbf{x}\in E$. Nice!

$$
\mathbf{f}(\mathbf{x})=\begin{bmatrix}
-x_{1} \\
x_{2}+x_{1}^{2}
\end{bmatrix}.
$$
What is the general method to compute the solution to the IVP $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x})$ and $\mathbf{x}(0)=\mathbf{c}$ for nonlinear systems like this?
# Variational equation



