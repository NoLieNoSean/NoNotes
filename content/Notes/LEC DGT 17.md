---
id: "588"
date: 2026-10-16
time: 10:30
tags:
  - Lecture
  - DGEO
pics: true
desc: symmetries of the curvature tensor, Curvature and infinitesimal holonomy
P2: true
---
# Symmetries of the curvature tensor

> [!Proposition]
> The $(1, 3)$-curvature tensor $R$ satisfies
> $$
> R(W, X)Y+R(X, Y)W+R(Y, W)X=0.
> $$
> 
> > [!Proof]-
> > 
> > Expand the left-hand side:
> > $$
> > \begin{aligned} & R(X,Y)Z+R(Y,Z)X+R(Z,X)Y\\ ={}& \nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z\\ &+\nabla_Y\nabla_ZX-\nabla_Z\nabla_YX-\nabla_{[Y,Z]}X\\ &+\nabla_Z\nabla_XY-\nabla_X\nabla_ZY-\nabla_{[Z,X]}Y. \end{aligned}
> > $$
> > Group terms according to the outer covariant derivative:
> > $$
> > \begin{aligned} ={}& \nabla_X(\nabla_YZ-\nabla_ZY)\\ &+\nabla_Y(\nabla_ZX-\nabla_XZ)\\ &+\nabla_Z(\nabla_XY-\nabla_YX)\\ &-\nabla_{[X,Y]}Z -\nabla_{[Y,Z]}X -\nabla_{[Z,X]}Y. \end{aligned}
> > $$
> > Use the fact that $\nabla$ is torsion free ([[LEC DGT 7#^269bec]].4):
> > $$
> > \begin{aligned} ={}&\nabla_X[Y,Z]-\nabla_{[Y,Z]}X\\ &+\nabla_Y[Z,X]-\nabla_{[Z,X]}Y\\ &+\nabla_Z[X,Y]-\nabla_{[X,Y]}Z\\ ={}&[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]], \end{aligned}
> > $$
> > which is zero by the Jacobi identity. (We've shown that $(\mathfrak{X}(M), [,])$ is a $\mathbb{R}$-Lie algebra at [[LEC DGT 4#^5180d1]]). 
> 

^68a42f

> [!Proposition]
> The $(0, 4)$-[[LEC DGT 16#^e854a7|curvature tensor]] $\text{Rm}$ has the following symmetries:
> 1. Antisymmetry in the first two arguments:
>    $\text{Rm}(X, Y, Z, W)=-\text{Rm}(Y, X, Z, W)$
> 2. Antisymmetry in the last two arguments:
>    $\text{Rm}(X, Y, Z, W)=-\text{Rm}(X, Y, W, Z)$
> 3. Pair symmetry:
>    $\text{Rm}(X, Y, Z, W)=\text{Rm}(Z, W, X, Y)$.
> 
> > [!Proof]-
> > 
> > (1) This follows immediately from the definition of $R$. 
> > 
> > Indeed, 
> > $$
> >  \begin{aligned} R(Y,X)Z &=\nabla_Y\nabla_XZ-\nabla_X\nabla_YZ -\nabla_{[Y,X]}Z\\ &=\nabla_Y\nabla_XZ-\nabla_X\nabla_YZ +\nabla_{[X,Y]}Z\\ &=-R(X,Y)Z. \end{aligned}
> > $$
> > ---
> > 
> > (2) We use the [[LEC DGT 7#^269bec|metric compatibility]] of $\nabla$. We will show that
> > $$
> > \langle R(X, Y)Z, W \rangle +\langle Z, R(X, Y)W \rangle =0.
> > $$
> > First, from [[LEC DGT 4#^5180d1]].2, we have
> > $$
> > D_{X}D_{Y}\langle Z, W \rangle -D_{Y}D_{X}\langle Z, W \rangle -D_{[X, Y]}\langle Z, W \rangle =0.
> > $$
> > Expand the first term using metric compatibility:
> > $$
> > \begin{align}
> > D_{X}D_{Y}\langle Z, W \rangle  & =D_{X}(\langle \nabla_{Y}Z, W \rangle +\langle Z, \nabla_{Y}W \rangle ) \\
> >  & =\langle \nabla_{X}\nabla_{Y}Z, W \rangle +\langle \nabla_{Y}Z, \nabla_{X}W \rangle  \\
> >  &  \quad \quad +\langle \nabla_{X}Z, \nabla_{Y}W \rangle +\langle Z, \nabla_{X}\nabla_{Y}W \rangle .
> > \end{align}
> > $$
> > Similarly, 
> > $$
> > \begin{align}
> > D_{Y}D_{X}\langle Z, W \rangle  & = \langle \nabla_{Y}\nabla_{X}Z, W \rangle +\langle \nabla_{X}Z, \nabla_{Y}W \rangle  \\
> >  & \quad \quad +\langle \nabla_{Y}Z, \nabla_{X}W \rangle +\langle Z, \nabla_{Y}\nabla_{X}W \rangle .
> > \end{align}
> > $$
> > Subtracting, the mixed terms cancel: 
> > $$
> > \begin{align}
> > D_{X}D_{Y}\langle Z, W \rangle -D_{Y}D_{X}\langle Z, W \rangle  & =\langle \nabla_{X}\nabla_{Y}Z-\nabla_{Y}\nabla_{X}Z, W \rangle  \\
> >  & \quad \quad +\langle Z, \nabla_{X}\nabla_{Y} W-\nabla_{Y}\nabla_{X}W\rangle 
> > \end{align}
> > $$
> > We also have
> > $$
> > \begin{align}
> > D_{[X, Y]}\langle Z, W \rangle  & =\langle \nabla_{[X, Y]}Z, W \rangle +\langle Z, \nabla_{[X, Y]}W \rangle .
> > \end{align}
> > $$
> > 
> > Combining the equations, we get 
> > $$
> > \begin{align}
> > \langle \nabla_{X}\nabla_{Y}Z-\nabla_{Y}\nabla_{X}Z-\nabla_{[X, Y]}Z, W \rangle  +\langle Z, \nabla_{X}\nabla_{Y} W-\nabla_{Y}\nabla_{X}W-\nabla_{[X, Y]}W\rangle =0
> > \end{align}
> > $$
> > 
> > ---
> > 
> > (3) is an algebraic consequence of the previous three identities.
> > 
> > For convenience, write
> > $$R_{abcd}:=\operatorname{Rm}(a,b,c,d).$$
> > We already know that
> > $$R_{abcd}=-R_{bacd}, \qquad R_{abcd}=-R_{abdc},$$
> > and [[#^68a42f]] gives
> > $$R_{abcd}+R_{bcad}+R_{cabd}=0. \tag{B}$$
> > 
> > We apply the above to four different triples.
> > 
> > **First**, apply it to $(a,b,c)$, paired with $d$:
> > $$R_{abcd}+R_{bcad}+R_{cabd}=0.$$
> > Using antisymmetry in the first two arguments,
> > $$\boxed{R_{acbd}=R_{abcd}+R_{bcad}.} \tag{I}$$
> > **Second**, apply it to $(a,b,d)$, paired with $c$:
> > $$R_{abdc}+R_{bdac}+R_{dabc}=0.$$
> > Using both antisymmetries,
> > 
> > $$\boxed{R_{adbc}=R_{bdac}-R_{abcd}.} \tag{II}$$
> > **Third**, apply it to $(c,d,a)$, paired with $b$:
> > $$R_{cdab}+R_{dacb}+R_{acdb}=0.$$
> > Again using antisymmetry,
> > $$\boxed{R_{acbd}=R_{cdab}+R_{adbc}.} \tag{III}$$
> > **Fourth**, apply it to $(c,d,b)$, paired with $a$:
> > $$R_{cdba}+R_{dbca}+R_{bcda}=0.$$
> > This gives
> > $$\boxed{R_{bcad}=R_{bdac}-R_{cdab}.} \tag{IV}$$
> > Now compare (I) and (III):
> > $$R_{abcd}+R_{bcad} = R_{cdab}+R_{adbc}.$$
> > Substitute (II) and (IV):
> > 
> > $$R_{abcd}+(R_{bdac}-R_{cdab}) = R_{cdab}+(R_{bdac}-R_{abcd}).$$
> > Cancel $R_{bdac}$ and rearrange:
> > $$2R_{abcd}=2R_{cdab}.$$
> > Thus
> > $$\boxed{ \operatorname{Rm}(X,Y,Z,W) = \operatorname{Rm}(Z,W,X,Y). }$$
> > 
> 


---

# Curvature and infinitesimal holonomy

> [!Lemma]
> Recall [[LEC DGT 11#^92ef37]]. Let $\Gamma:J\times I\to M$ be smooth, $S=\partial _s\Gamma$, $T=\partial_{t}\Gamma$. Let $V$ be a vector field along $\Gamma$. Then, 
> $$
> D_{s}D_{t}V-D_{t}D_{s}V=R(S, T)V.
> $$
> 
> > [!Proof]-
> > 
> > Let $\varphi:\Omega\to U$ be a local parameterization. Let
> > $$
> > \begin{align}
> >  & E_{i}(s, t)=\varphi_{i}|_{\Gamma(s, t)} , \\
> >  & V(s, t)=V^{i}(s, t)E_{i},\\
> >  & (\gamma^{1}, \dots, \gamma^{n})=\varphi ^{-1}\circ\Gamma.
> > \end{align}
> > $$
> > It is easy to see that [[LEC DGT 8#^5959ee]].2 continues to hold for the version of $D_{t}$ defined in [[LEC DGT 11#^92ef37]], so we have
> > $$
> > \begin{align}
> > D_{t}V & =\partial_{t}V^{i}E_{i}+V^{i}D_{t}E_{i}.\\ \\
> > D_{s}D_{t}V & =\partial_{st}V^{i}E_{i}+\partial_{t}V^{i}D_{s}E_{i} \\
> >  & \quad \quad + \partial_{s}V^{i}D_{t}E_{i}+V^{i}D_{s}D_{t}E_{i} \\
> >  \\
> > D_{t}D_{s}V & =\partial_{ts}V^{i}E_{i}+\partial_{s}V^{i}D_{t}E_{i} \\
> >  & \quad \quad+ \partial_{t}V^{i}D_{s}E_{i} +V^{i}D_{t}D_{s}E_{i}.
> > \end{align}
> > $$
> > The difference is
> > $$
> > \begin{align}
> > D_{s}D_{t}V-D_{t}D_{s}V & =V^{i}(D_{s}D_{t}E_{i}-D_{t}D_{s}E_{i}).
> > \end{align}
> > $$
> > ---
> > 
> > For any vector field $W$ defined on $\Gamma$ by $\tilde{W}\circ\Gamma$ for $\tilde{W}\in \mathfrak{X}(M)$, by [[LEC DGT 8#^5959ee]].3, we have
> > $$
> > \begin{align}
> > D_{t}W(s, t) & =D_{t}W_{s}(t)=\nabla_{\partial_{t}\Gamma(s, t)}\tilde{W}=\nabla_{T}\tilde{W}|_{\Gamma(s, t)}. \\
> > D_{s}W(s, t) & =D_{s}W^{t}(s)=\nabla_{\partial_{s}\Gamma(s, t)}\tilde{W}=\nabla_{S}\tilde{W}|_{\Gamma(s, t)}.
> > \end{align}
> > $$
> > Since $T=\partial_{t}\gamma^{j}\varphi_{j}|_{\Gamma}$ and $S=\partial_{s}\gamma^{k}\varphi_{k}|_{\Gamma}$ we can write
> > $$
> > \begin{align}
> > D_{t}E_{i} & =\nabla_{T}\varphi_{i}|_{\Gamma}=\partial_{t}\gamma^{j}\nabla_{\varphi_{j}}\varphi_{i}|_{\Gamma} \\
> > D_{s}E_{i} & =\nabla_{S}\varphi_{i}|_{\Gamma}=\partial_{s}\gamma^{k}\nabla_{\varphi_{k}}\varphi_{i}|_{\Gamma}.
> > \end{align}
> > $$
> > We now compute $D_{s}D_{t}E_{i}$ and $D_{t}D_{s}E_{i}$:
> > $$
> > \begin{align}
> > D_{s}D_{t}E_{i} & =\partial_{st}\gamma^{j}\nabla_{\varphi_{j}}\varphi_{i}|_{\Gamma}+\partial_{t}\gamma^{j}\underbrace{ D_{s}\nabla_{\varphi_{j}}\varphi_{i} |_{\Gamma}  }_{ =\nabla_{S}\nabla_{\varphi_{j}}\varphi_{i}|_{\Gamma} } \\
> >  & =\partial_{st}\gamma^{j}\nabla_{\varphi_{j}}\varphi_{i}|_{\Gamma}+\partial_{t}\gamma^{j}\partial_{s}\gamma^{k}\nabla_{\varphi_{k}}\nabla_{\varphi_{j}}\varphi_{i}|_{\Gamma}. \\\\
> >  D_{t}D_{s}E_{i} & =\partial_{ts}\gamma^{k}\nabla_{\varphi_{k}}\varphi_{i}|_{\Gamma}+\partial_{s}\gamma^{k}\partial_{t}\gamma^{j}\nabla_{\varphi_{j}}\nabla_{\varphi_{k}}\varphi_{i}|_{\Gamma}.
> > \end{align}
> > $$
> > Subtracting the two, and using the facts that $[\varphi_{i}, \varphi_{j}]=0$ ([[LEC DGT 4#^5180d1]].1) and $R$ is $C^{\infty}(M)$-multilinear ([[LEC DGT 15#^a4f2fa]]), we get
> > $$
> > \begin{align}
> > D_{s}D_{t}E_{i}-D_{t}D_{s}E_{i} & =\partial_{t}\gamma^{j}\partial_{s}\gamma^{k}(\nabla_{\varphi_{k}}\nabla_{\varphi_{j}}\varphi_{i}-\nabla_{\varphi_{j}}\nabla_{\varphi_{k}}\varphi_{i})|_{\Gamma} \\
> >  & = \partial_{t}\gamma^{j}\partial_{s}\gamma^{k}R(\varphi_{k}, \varphi_{j})\varphi_{i}|_{\Gamma} \\
> >  & =R(S, T)E_{i}.
> > \end{align}
> > $$
> > Therefore, 
> > $$
> > D_{s}D_{t}V-D_{t}D_{s}V=V^{i}R(S, T)E_{i}=R(S, T)V.
> > $$
> > 
> 

^fe167e

> [!Proposition]
> Let $p\in M$, $u, v\in T_{p}M$. Let $\Gamma:I\times I\to M$ be smooth with $\Gamma(0, 0)=p$, $u=\partial_{s}\Gamma(0, 0)$, $v=\partial_{t}\Gamma(0, 0)$. 
> 
> Let $P(\delta, \epsilon):T_{p}M\to T_{p}M$ denote parallel transport along the loop $\Gamma(0, 0)\to \Gamma(0, \epsilon)\to \Gamma(\delta, \epsilon)\to \Gamma(\delta, 0)\to \Gamma(0, 0)$ in $M$. 
> 
> Then, for $w\in T_{p}M$, we have
> $$
> \lim_{ \delta, \epsilon \to 0 } \frac{P(\delta, \epsilon)w-w}{\delta\epsilon}=R(u, v)w.
> $$
> 
> > [!Proof]-
> > 
> > Suppose $I=(-1, 1)$. Define a vector field $W$ along $\Gamma$ as follows. Define $W$ on $\{ 0 \}\times I$ using PT of $w$ along $t\mapsto\Gamma(0, t)$. Define $W$ on $I\times I$ using PT of $W(0, t)$ along $s\mapsto\Gamma(s, t)$. Thus, 
> > $$
> > W(s, t)=P_{0, t}^{s, t}P_{0, 0}^{0, t}w.
> > $$
> > It is clear that $D_{s}W\equiv 0$ and $D_{t}W(0, t_{0})=0$ for all $t_{0}$. Let $X=D_{t}W\in \mathfrak{X}(\Gamma)$. 
> > 
> > Observe that, by [[#^fe167e]], $D_{s}X=R(S, T)W$. We will compute $D_{s}X(0, 0)$.
> > 
> > We have, by [[LEC DGT 9#^a37c42]], 
> > $$
> > D_{s}X(0, 0)=\lim_{ \delta \to 0 } \frac{P_{\delta, 0}^{0, 0}X(\delta, 0)-X(0, 0)}{\delta}.
> > $$
> > Also, 
> > $$
> > \begin{align}
> > X(s, 0) & =D_{t}W(s, 0) \\
> >  & =\lim_{ \epsilon \to 0 } \frac{P_{s, \epsilon}^{s, 0}W(s, \epsilon)-W(s, 0)} {\epsilon} \\
> >  \implies P_{s, 0}^{0, 0}X(s, 0) & =\lim_{ \epsilon \to 0 }\frac{P_{s, 0}^{0, 0}P_{s, \epsilon}^{s, 0}W(s, \epsilon)-P_{s, 0}^{0, 0}W(s, 0)}{\epsilon}.
> > \end{align}
> > $$
> > Therefore, 
> > $$
> > \begin{align}
> > D_{s}X (0, 0) & =\lim_{ \delta \to 0 }\lim_{ \epsilon \to 0 }  \frac{P_{\delta, 0}^{0, 0}P_{\delta, \epsilon}^{\delta, 0}W(\delta, \epsilon)-P_{\delta, 0}^{0, 0}W(\delta, 0)-P_{0, \epsilon}^{0, 0}W(0, \epsilon)+W(0, 0)}{\delta\epsilon} \\
> >  & =\lim_{ \delta \to 0 }\lim_{ \epsilon \to 0 }  \frac{P_{\delta, 0}^{0, 0}P_{\delta, \epsilon}^{\delta, 0}P_{0, \epsilon}^{\delta, \epsilon}P_{0, 0}^{0, \epsilon}w-w-w+w}{\delta\epsilon} \\
> >  & =\lim_{ \delta \to 0 }\lim_{ \epsilon \to 0 }  \frac{P(\delta, \epsilon)w-w}{\delta\epsilon}.
> > \end{align}
> > $$
> > Note that $P(\delta, \epsilon)w-w$ is a smooth map from from a neighborhood of $(0, 0)\in \mathbb{R}^{2}$ to $T_{p}M$, with $P(\delta, 0)w-w=P(0, \epsilon)w-w=0$ by definition. Thus, by [[#^5870c9]], 
> > $$
> > R(u, v)w=D_{s}X(0, 0)=\lim_{ (\delta, \epsilon) \to 0 } \frac{P(\delta, \epsilon)w-w}{\delta\epsilon}.
> > $$
> > 
> 

^a9b208

The following calculus lemma justifies the joint limit in the proof of [[#^a9b208]]. 

> [!Lemma]
> Let $F$ be a smooth map form a neighborhood of $(0, 0)\in \mathbb{R}^{2}$ into a vector space $V$, satisfying $F(\delta, 0)=F(0, \epsilon)=0$. Then, 
> $$
> \lim_{(\delta,\epsilon)\to(0,0)} \frac{F(\delta,\epsilon)}{\delta\epsilon}
> $$
> exists and is equal to $\partial_{s}\partial_{t}F(0, 0)$. 
> 
> > [!Proof]-
> > 
> > Since $F$ is smooth, $\partial_{s}\partial_{t}$ exists and is continuous in a neighborhood of $(0, 0)$. Applying the fundamental theorem of calculus twice, 
> > $$
> >  \begin{aligned} F(\delta,\epsilon) 
> >  &=F(\delta,\epsilon)-F(\delta,0) -F(0,\epsilon)+F(0,0)\\
> >  & =\int_{0}^{\epsilon} \partial_{t}F(\delta, t)\, dt-\int_{0}^{\epsilon} \partial_{t}F(0, t) \, dt   \\
> >  &=\int_0^\epsilon\int_0^\delta \partial_s\partial_tF(s,t)\,dt\,ds. \end{aligned} 
> > $$
> > We therefore have
> > $$
> >  \begin{aligned} &\left\| \frac{F(\delta,\epsilon)}{\delta\epsilon} -\partial_s\partial_tF(0,0) \right\|\\ &\quad\leq \sup_{\substack{s\in(0,\delta)\\ t\in(0,\epsilon)}} \left\| \partial_s\partial_tF(s,t) -\partial_s\partial_tF(0,0) \right\|. \end{aligned} 
> > $$
> > By continuity of the mixed partial at the origin, the right-hand side tends to zero as $(\delta,\epsilon)\to(0,0)$.
> > 
> > Therefore,
> > $$
> > \lim_{(\delta,\epsilon)\to(0,0)} \frac{F(\delta,\epsilon)}{\delta\epsilon} = \partial_s\partial_tF(0,0).
> > $$
> > 
> 

^5870c9








