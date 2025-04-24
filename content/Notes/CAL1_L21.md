## Functions with non-zero Jacobian determinant

###### Theorem 1
> [!Theorem]
> Let $B=B_{r}(\mathbf{a})\subseteq \mathbb{R}^{n}$, and let $\mathbf{f}$ be a mapping of $\overline{B}$ into $\mathbb{R}^{n}$. Assume:
> 1. $\mathbf{f}$ is continuous on $\overline{B}$;
> 2. all partial derivatives $D_{j}f_{i}(\mathbf{x})$ in $B$;
> 3. $\mathbf{f}(\mathbf{x})\ne \mathbf{f}(\mathbf{a})$ for all $\mathbf{x}\in \overline{B}\setminus B$;
> 4. $\mathbf{f}'(\mathbf{x})$ is invertible for all $\mathbf{x}\in B$.
> 
> Then, $\mathbf{f}(B)$ contains a neighborhood of $\mathbf{f}(\mathbf{a})$.
> 
> > [!Proof]-
> > 
> > Let $\partial B$ denote the boundary $\overline{B}\setminus B$ of the ball $B$. 
> > 
> > Define $g$ on $\partial B$ by $g(\mathbf{x})=\lVert \mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{a}) \rVert$. Observe that $g$ is continuous. Since $\partial B$ is compact, the follows from the extreme value theorem that $g$ attains a minimum value $m$ on $\partial B$. $m> 0$ by hypothesis. 
> > 
> > Let $T\equiv B_{m/2}(\mathbf{f}(\mathbf{a}))$. We will show that $T\subseteq f(B)$. Let $\mathbf{y}\in T$. Define $h$ on $\overline{B}$ by
> > $$
> > h(\mathbf{x})=\lVert \mathbf{f}(\mathbf{x})-\mathbf{y} \rVert .
> > $$
> > Again, $h$ is continuous on a compact set, and hence attains a minimum value. Note that $h(\mathbf{a})<m/2$. Thus, the minimum value of $h$ must also be less than $m/2$. For any $\mathbf{x}\in \partial B$,
> > $$
> > \begin{align}
> > \lVert \mathbf{f}(\mathbf{x})-\mathbf{y} \rVert  & \geq  \lVert \mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{a}) \rVert -\lVert \mathbf{f}(\mathbf{a})-\mathbf{y} \rVert    
> >   \geq m -\frac{m}{2} 
> >   =\frac{m}{2}.
> > \end{align}
> > $$
> > Thus, $h$ must attain its minimum at a point $\mathbf{c}\in B$. 
> > 
> > At this point $h^{2}$ also has a minimum. Since
> > $$
> > \begin{align}
> > h^{2}(\mathbf{x})=\lVert \mathbf{f}(\mathbf{x})-\mathbf{y} \rVert ^{2}=\sum_{i=1}^{n} (f_{i}(\mathbf{x})-y_{i})^{2},
> > \end{align}
> > $$
> > and since each partial derivative $D_{k}(h^{2})$ must be zero at $\mathbf{c}$, we have
> > $$
> > \begin{align}
> > \sum_{i=1}^{n} (f_{i}(\mathbf{c})-y_{i})D_{j}f_{i}(\mathbf{c})=0\quad\text{ for }j=1, \dots, n.
> > \end{align}
> > $$
> > This is equivalent to the matrix equation
> > $$
> > \mathbf{D}\mathbf{f}(\mathbf{c})(\mathbf{f}(\mathbf{c})-\mathbf{y})=\mathbf{0}.
> > $$
> > Since $\det \mathbf{D}\mathbf{f}(\mathbf{c})\ne 0$, it follows that $\mathbf{f}(\mathbf{c})=\mathbf{y}$. Therefore, $\mathbf{y}\in \mathbf{f}(B)$.
> 
###### Theorem 2
> [!Theorem]
> Let $\mathbf{f}$ be a mapping of an open set $A\subseteq \mathbb{R}^{n}$ into $\mathbb{R}^{n}$. Assume:
> 1. $\mathbf{f}$ is continuous on $A$ and all partial derivatives $D_{j}f_{i}$ exist on $A$;
> 2. $\mathbf{f}$ is injective on $A$;
> 3. $\mathbf{f}'(\mathbf{x})$ is invertible for every $\mathbf{x}\in A$,
> 
> Then $\mathbf{f}$ is an open mapping on $A$.
> 
> > [!Proof]-
> > 
> > Let $E\subseteq A$ be open. If $\mathbf{b}\in \mathbf{f}(E)$, then $\mathbf{b}=\mathbf{f}(\mathbf{a})$ for some $\mathbf{a}\in E$. There is a ball $B_{r}(\mathbf{a})\subseteq E$ on which $\mathbf{f}$ satisfies the hypotheses of [[#Theorem 1]]. Thus, $\mathbf{f}(E)$ contains a neighborhood of $\mathbf{b}$.
> 
###### Theorem 3
> [!Theorem]
> Let $\mathbf{f}$ be a mapping of an open set $S\subseteq \mathbb{R}^{n}$ into $\mathbb{R}^{n}$. Assume:
> 1. $\mathbf{f}$ is a $C^{1}$ mapping on $S$;
> 2. $\mathbf{f}'(\mathbf{a})$ is invertible for some $\mathbf{a}\in S$. 
> 
> Then there is an $n$-ball $B(\mathbf{a})$ on which $\mathbf{f}$ is injective.
> 
> > [!Proof 1]-
> > 
> > Let $\mathbf{Z}_{1}, \dots, \mathbf{Z}_{n}$ be $n$ points in $S$ and let $\mathbf{Z}\equiv(\mathbf{Z}_{1};\dots;\mathbf{Z}_{n})$ denote the points in $\mathbb{R}^{n^{2}}$ whose first $n$ components are the components of $\mathbf{Z}_{1}$, whose next $n$ components are the components of $\mathbf{Z}_{2}$, and so on. Define a real valued function $h$ as follows:
> > $$
> > h(\mathbf{Z})=\det[D_{j}f_{i}(\mathbf{Z}_{i})].
> > $$
> > Note that $h$ is defined on $S^{n}$ and continuous on $S^{n}$, because each $D_{j}f_{i}$ is continuous on $S$ and a determinant is a polynomial in the entries of the matrix. Let $\mathbf{Z}$ be the special point in $\mathbb{R}^{n^{2}}$ obtained by putting
> > $$
> > \mathbf{Z}_{1}=\mathbf{Z}_{2}=\dots=\mathbf{Z}_{n}=\mathbf{a}.
> > $$
> > Then $h(\mathbf{Z})=\det\mathbf{D}\mathbf{f}(\mathbf{a})\ne 0$, and hence, by continuity, there is some $B_{\delta}(\mathbf{Z})\subseteq \mathbb{R}^{n^{2}}$ such that $\mathbf{W}\in B(\mathbf{Z})$ implies $h(\mathbf{W})\ne 0$. Now, If $\mathbf{W}_{1}... ,\mathbf{W}_{n}\in B(\mathbf{a})\equiv B_{\delta/\sqrt{ n }}(\mathbf{a})$,
> > $$
> > \begin{align}
> > \lVert \mathbf{W}-\mathbf{Z} \rVert & =\sqrt{ \lVert \mathbf{W}_{1}-\mathbf{Z}_{1} \rVert^{2} +\dots+\lVert \mathbf{W}_{n}-\mathbf{Z}_{n} \rVert ^{2} } \\
> >  & =\sqrt{ \lVert \mathbf{W}_{1}-\mathbf{a} \rVert^{2} +\dots+\lVert \mathbf{W}_{n}-\mathbf{a} \rVert^{2}  } \\
> >  & \leq\delta,
> > \end{align}
> > $$
> > so $\mathbf{W}\in B(\mathbf{Z})$. So, $\mathbf{W}_{1}... ,\mathbf{W}_{n}\in B(\mathbf{a})$ implies $\det[D_{j}f_{i}(\mathbf{W}_{i})]\ne 0$.
> > 
> > We will prove that $\mathbf{f}$ is injective on $B(\mathbf{a})$. Assume the contrary, that is, assume $\mathbf{f}(\mathbf{x})=\mathbf{f}(\mathbf{y})$ for some $\mathbf{x}\ne \mathbf{y}\in B(\mathbf{a})$. Since $B(\mathbf{a})$ is convex, $L(\mathbf{x}, \mathbf{y})\subseteq B(\mathbf{a})$, and we can apply the [[CAL1_L18#The mean value theorem|mean value theorem]] (recall that $\mathbf{f}$ is differentiable on $S$) to write for every $\boldsymbol{\alpha}\in \mathbb{R}^{n}$,
> > $$
> > \begin{align}
> > \mathbf{0}=\boldsymbol{\alpha}\cdot (\mathbf{f}(\mathbf{y})-\mathbf{f}(\mathbf{x})) & =\boldsymbol{\alpha}\cdot(\mathbf{f}'(\mathbf{z})(\mathbf{y}-\mathbf{x}))
> > \end{align}
> > $$
> > for some $\mathbf{z}\in L(\mathbf{x}, \mathbf{y})$. Taking $\boldsymbol{\alpha}=\mathbf{e}_{1}, \dots, \mathbf{e}_{n}$, we get the equations
> > $$
> > 0=\nabla f_{i}(\mathbf{Z}_{i})\cdot(\mathbf{y}-\mathbf{x})\quad\text{ for }i=1, \dots, n,
> > $$
> > where each $\mathbf{Z}_{i}\in L(\mathbf{x}, \mathbf{y})\subseteq B(\mathbf{a})$. This is equivalent to writing
> > $$
> > \begin{bmatrix}
> > \nabla f_{1}(\mathbf{Z}_{1}) \\
> > \vdots \\
> > \nabla f_{n}(\mathbf{Z}_{n})
> > \end{bmatrix}
> > (\mathbf{y}-\mathbf{x})=\mathbf{0}
> > $$
> > or
> > $$
> > [D_{j}f_{i}(\mathbf{Z}_{i})](\mathbf{y}-\mathbf{x})=\mathbf{0}.
> > $$
> > However, $\det[D_{j}f_{i}(\mathbf{Z}_{i})]\ne 0$, which is a contradiction.
> 
> > [!Proof 2]-
> > Define $A\equiv \mathbf{f}'(\mathbf{a})$, and choose $\lambda$ so that $2\lambda \lVert A^{-1} \rVert=1$.
> > Since $\mathbf{f}'$ is continuous at $\mathbf{a}$, there is an open ball $U\subseteq E$, with center $\mathbf{a}$, such that
> > $$
> > \lVert \mathbf{f}'(\mathbf{x})-A \rVert <\lambda\quad(\mathbf{x}\in U).
> > $$
> > We associate to each $\mathbf{y}\in \mathbb{R}^{n}$ a function $\varphi$, defined by
> > $$
> > \varphi(\mathbf{x})=\mathbf{x}+A^{-1}(\mathbf{y}-\mathbf{f}(\mathbf{x}))\quad(\mathbf{x}\in E).
> > $$
> > Note that $\mathbf{f}(\mathbf{x})=\mathbf{y}$ iff $\mathbf{x}$ is a fixed point of $\varphi$. 
> > 
> > Since $\varphi'(\mathbf{x})=I-A^{-1}(\mathbf{f}'(\mathbf{x}))=A^{-1}(A-\mathbf{f}'(\mathbf{x}))$, we have for $\mathbf{x}\in U$:
> > $$
> > \begin{align}
> > \lVert \varphi'(\mathbf{x}) \rVert  & =\lVert A^{-1}(A-\mathbf{f}'(\mathbf{x})) \rVert  \\
> >  & \leq \lVert A^{-1} \rVert \lVert A-\mathbf{f}'(\mathbf{x}) \rVert  \\
> >  & < \frac{1}{2} \quad (\mathbf{x}\in U). 
> > \end{align}
> > $$
> > Using the first result from [[CAL1_L18#Functions with bounded and zero total derivative|here]],
> > $$
> > \lVert \varphi(\mathbf{x}_{1})-\varphi(\mathbf{x}_{2}) \rVert \leq \frac{1}{2}\lVert \mathbf{x}_{1} -\mathbf{x}_{2}\rVert\quad (\mathbf{x}_{1}, \mathbf{x}_{2}\in U).
> > $$
> > It follows that $\varphi$ cannot have more than one fixed point (Note that this does not require the Banach contraction principle; assuming the existence of two fixed points easily yields a contradiction). Thus, $\mathbf{f}(\mathbf{x})=\mathbf{y}$ for at most one $\mathbf{x}\in U$. Thus, $\mathbf{f}$ is injective in $U$.
> 
> 
###### Theorem 4
> [!Theorem]
> Let $\mathbf{f}$ be a mapping of an open set $A\subseteq \mathbb{R}^{n}$ into $\mathbb{R}^{n}$. Assume:
> 1. $\mathbf{f}$ is a $C^{1}$ mapping on $A$;
> 2. $\mathbf{f}'(\mathbf{x})$ is invertible for all $\mathbf{x}\in A$.
> 
> Then $\mathbf{f}$ is an open mapping on $A$.
> 
> > [!Proof]-
> > Let $S$ be any open subset of $A$. If $\mathbf{x}\in S$ there is a ball $B(\mathbf{x})\subseteq S$ in which $\mathbf{f}$ is injective by [[#Theorem 3]]. By [[#Theorem 2]], $\mathbf{f}(B(\mathbf{x}))$ is open in $\mathbb{R}^{n}$. But we can write $S=\bigcup_{\mathbf{x}\in S}B(\mathbf{x})$. Applying $\mathbf{f}$ on both sides, we find $\mathbf{f}(S)=\bigcup_{\mathbf{x}\in S}\mathbf{f}(B(\mathbf{x}))$, so $\mathbf{f}(S)$ is open.
> 

The hypotheses made in this corollary ensure that each point $\mathbf{x}\in E$ has a neighborhood in which $\mathbf{f}$ is injective. This may be expressed by saying that $\mathbf{f}$ is locally injective in $E$. But this does not imply that $\mathbf{f}$ is injective on $E$!
## Inverse function theorem

The inverse function theorem roughly states that a [[CAL1_L16#When does the total derivative exist?|continuously differentiable]] mapping $\mathbf{f}$ is invertible in a neighborhood of any point $\mathbf{x}$ at which the linear transformation $\mathbf{f}'(\mathbf{x})$ is invertible.

> [!Theorem]
> Suppose $\mathbf{f}$ is a $C^{1}$ mapping of an open set $E\subseteq \mathbb{R}^{n}$ into $\mathbb{R}^{n}$, and $\mathbf{f}'(\mathbf{a})$ is invertible for some $\mathbf{a}\in E$. Then,
> 1. there exist open sets $U$ and $V$ in $\mathbb{R}^{n}$ such that $\mathbf{a}\in U$, $\mathbf{f}(\mathbf{a})\in V$, $\mathbf{f}$ is injective on $U$, and $\mathbf{f}(U)=V$;
> 2. the inverse $\mathbf{g}$ of $\mathbf{f}$ (which exists by $(1)$), defined in $V$ by $\mathbf{g}(\mathbf{f}(\mathbf{x}))=\mathbf{x}$ for $\mathbf{x}\in U$, is a $C^{1}$ mapping.
> 

[!Proof]-
Let $U$ be the open ball centered at $\mathbf{a}$ on which $\mathbf{f}$ is injective, as given by [[#Theorem 3]]. 

Next, put $V\equiv f(U)$, and pick $\mathbf{y}_{0}\in V$. Then $\mathbf{y}_{0}=\mathbf{f}(\mathbf{x}_{0})$ for some $\mathbf{x}_{0}\in U$. Let $B$ be an open ball with center at $\mathbf{x}_{0}$ and radius $r> 0$, so small that its closure $\overline{B}$ lies in $U$. We will show that $\mathbf{y}\in V$ whenever $|\mathbf{y}-\mathbf{y}_{0}|<\lambda r$. This will prove that $V$ is open.








[!Proof]-
The map $\mathbf{x}\mapsto \det \mathbf{f}'(\mathbf{x})$ is continuous on $S$ since each $D_{j}f_{i}$ is continuous on $\mathbf{x}$. Since $\det \mathbf{f}'(\mathbf{a})\ne 0$, there exists a ball $B_{1}(\mathbf{a})$ in which $\mathbf{f}'(\mathbf{x})$ is invertible for each $\mathbf{x}$. Also, from [[#Theorem 3]], there exists a ball $B(\mathbf{a})\subseteq B_{1}(\mathbf{a})$ on which $\mathbf{f}$ is injective. Let $B$ be a ball with center $\mathbf{a}$ and radius less than $B(\mathbf{a})$. Then, by [[#Theorem 1]], $\mathbf{f}(B)$ contains a ball $V$ with center at $\mathbf{f}(\mathbf{a})$. Define $U\equiv\mathbf{f}^{-1}(V)\cap B$, which is open since both $\mathbf{f}^{-1}(V)$ and $B$ are open. Since $U\subseteq \overline{B}$ and $V\subseteq \mathbf{f}(\overline{B})$, $(1)$ is proved.


$\mathbf{f}$ is injective and continuous on $\overline{B}$, a compact set. [[ANA1_L21#Continuous bijective maps on compact sets are homeomorphisms|It follows]] that $\mathbf{g}\equiv \mathbf{f}^{-1}:\mathbf{f}(\overline{B})\to \overline{B}$ is continuous on its domain.


