---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-10-25
time: 10:30
---
![[1729857829763.jpg]]

> [!Recall]
> For any bounded $f:[a, b]\to \mathbb{R}$, a partition $P$ of $[a, b]$, a refinement $P^{*}$ of $P$, and monotone increasing function $\alpha:[a, b]\to \mathbb{R}$, we have
> $$
> \begin{align}
> m(\alpha(b)-\alpha(a)) &  \leq  \\ \\
> 
> L(P, f, \alpha)\leq L(P^{*}, f, \alpha) & \leq  \\ \\
> 
> \underline{\int_{a}^{b}} f \, d\alpha   \leq \overline{\int_{a}^{b}} f \, d\alpha  &   \leq  \\ \\
> 
> U(P^{*}, f, \alpha)\leq U(P, f, \alpha) & \leq  \\ \\
> 
>  M(\alpha(b)-\alpha(a)).  & 
> \end{align}
> $$

---
## Which functions are integrable?

>[!Example] Example of a non integrable function
>Consider the function $f$ on $\mathbb{R}$ which is $1$ at rational inputs and $0$ at irrational inputs. For any partition, each $M_{i}=1$ and each $m_{i}=0$. Thus, the upper Riemann integral will be $(b-a)$, while the lower Riemann integral will be $0$. Thus, this function is not integrable over any interval.

### Continuous functions

Rudin, 6.8

> [!Theorem]
> If $f:[a, b]\to \mathbb{R}$ is continuous on $[a, b]$ then $f\in\mathscr{R}(\alpha)$ on $[a, b]$.

> **Proof**
> Note that [[LEC ANA1 20#Continuous functions defined on compact sets are uniformly continuous|since]] $[a, b]$ is [[LEC ANA1 17#Absolute and relative definitions of open cover compactness|compact]], $f$ is [[LEC ANA1 20#Uniform continuity|uniformly continuous]] on $[a, b]$. We will use the [[LEC ANA1 26#A criterion for integrability|the criterion for integrability]] to show $f\in\mathscr R$. Let $\epsilon>0$. We can find $\delta>0$ such that whenever $|s-t|<\delta$, $|f(s)-f(t)|<\epsilon$. Choose $P$ such that each $\Delta x_{i}<\delta$. Thus, in $[x_{i-1}, x_{i}]$, $M_{i}-m_{i}<\epsilon$. Therefore, 
> $$
> \begin{align}
> U(P, f, \alpha)-L(P, f, \alpha) = & \ \sum_{i=1}^{n} (M_{i}-m_{i})\Delta\alpha_{i}< \epsilon(\alpha(b)-\alpha(a)).
> \end{align}
> $$
> Thus, $f\in\mathscr R(\alpha)$. ❏

Note that $M_{i}-m_{i}$ cannot be equal to $\epsilon$, since $f$ actually attains these extrema in $[x_{i-1}, x_{i}]$ due to the [[LEC ANA1 16#Extreme value theorem|extreme value theorem]] (this doesn't impact the proof in any way; just an observation). 
### Monotonic functions

>[!Theorem]
>If $f:[a, b]\to \mathbb{R}$ is monotone on $[a, b]$ then $f\in\mathscr R$.

> **Proof**
> Let $f$ be monotone increasing. For any $P$, we have
> $$
> \begin{align}
> U(P, f)= & \ f(x_{1})\Delta x_{1}+f(x_{2})\Delta x_{2}+\dots+f(x_{n})\Delta x_{n} \\
> L(P, f)= & \ f(x_{0})\Delta x_{1}+f(x_{1})\Delta x_{2}+\dots+f(x_{n-1})\Delta x_{n}
> \end{align}
> $$
> Consider $P$ such that all $\Delta x_{i}$ are equal to $\frac{{b-a}}{n}$ for some $n\in \mathbb{N}$. Then, 
> $$
> U(P, f)-L(P, f)=(f(x_{n})-f(x_{0})) \frac{{b-a}}{n}.
> $$
> $n$ can be made arbitrarily large to meet any $\epsilon$ challenge. ❏

Note that it does not matter whether $f$ is continuous or not.

Rudin, 6.9

>[!Theorem]
>If $f:[a, b]\to \mathbb{R}$ is monotone on $[a, b]$ and $\alpha$ is continuous on $[a, b]$ then $f\in\mathscr R(\alpha)$.

> **Proof**
> Let $f$ be monotone increasing. For any $P$, we have
> $$
> \begin{align}
> U(P, f, \alpha)= & \ f(x_{1})\Delta \alpha_{1}+f(x_{2})\Delta \alpha_{2}+\dots+f(x_{n})\Delta \alpha_{n} \\
> L(P, f, \alpha)= & \ f(x_{0})\Delta \alpha_{1}+f(x_{1})\Delta \alpha_{2}+\dots+f(x_{n-1})\Delta \alpha_{n}
> \end{align}
> $$
> Now, if we are to pull the same trick as we did in the previous proof, we need $\alpha$ to play nice, i.e, 
> $$
> \forall n\in \mathbb{N}, \forall {0}\leq i\leq n, \exists x_{i}\in[a, b] \text{ such that } \alpha(x_{i})=\alpha(a)+ \frac{i}{n}(\alpha(b)-\alpha(a)).
> $$
> 
> This is similar to the conclusion of the [[LEC ANA1 22#Intermediate value theorem|intermediate value theorem]], but there is a key difference in that we only require $x_{i}$ to exist for a specific subset of rational numbers, and not all numbers in $[\alpha(a), \alpha(b)]$. However, the intermediate value theorem holding would suffice. We can ensure this by requiring $\alpha$ to be continuous (If a monotone function has IVP, then it must be continuous), as done in the hypothesis of this theorem. So, we can proceed to write
> $$
> U(P, f, \alpha)-L(P, f, \alpha )=(f(x_{n})-f(x_{0})) \frac{{\alpha(b)-\alpha(a)}}{n},
> $$
> and make $n$ as small as we like to meet any $\epsilon$ challenge. ❏

Note that $\alpha$ being a derivative also works - [[LEC ANA1 24#Properties of derivatives|derivatives have the IVP]].
### Continuous functions with finitely many transgressions

Rudin, 6.10

> [!Theorem]
> Suppose $f$ is continuous on $[a, b]$ except at finitely many points, and $f$ is bounded on $[a, b]$. Then, $f\in\mathscr{R}$ on $[a, b]$.

> **Proof**
> It suffices to consider the case when $f$ is discontinuous at only one point in $[a, b]$, say $p$. Let $\epsilon>0$. Now, let $k\in(p-\epsilon, p)$ and $k'\in(p, p+\epsilon)$. $f$ is uniformly continuous on $[a, k]\cup[k', b]$, so we can choose $\delta$ such that $s, t\in[a, k]\cup[k', b], |s-t|<\delta\implies |f(s)-f(t)|<\epsilon$. Now, choose a partition $P$ such that $x_{j-1}=k$ and $x_{j}=k'$ for some $j$, and $\Delta x_{i}<\delta$ for all $i\ne j$. Let $M=\sup |f(x)|$. Note that $M_{j}-m_{j}\leq {2}M$. Then,
> $$
> \begin{align}
> U(P, f)-L(P, f)= & \ \sum_{i=1}^{j-1} (M_{i}-m_{i})(x_{i}-x_{i-1}) \\
>  & \ +(M_{j}-m_{j})(x_{j}-x_{j-1}) \\
>  & \ +\sum_{i=j+1}^{n} (M_{i}-m_{i})(x_{i}-x_{i-1}) \\
> \leq  & \ \epsilon(x_{j-1}-a)+2M(2\epsilon) +\epsilon(b-x_{j}) \\
> =  & \ \epsilon(-(x_{j}-x_{j-1})+b-a+4M) \\
> < & \ \epsilon(b-a+4M)
> \end{align}
> $$
> ❏

> [!Theorem]
> Suppose $f:[a, b]\to \mathbb{R}$ is continuous on $[a, b]$ except at finitely many points, and $\alpha$ is continuous at those points. Then, $f\in\mathscr{R}(\alpha)$ on $[a, b]$.

> **Proof**
> Note that again, it would suffice to consider the case where $f$ is discontinuous only at a single point in $[a, b]$, say $p$. Exactly the same set up as in the previous proof.
> $$
> \begin{align}
> U(P, f, \alpha)-L(P, f, \alpha)=  & \ \sum_{i=1}^{j-1} (M_{i}-m_{i})\Delta\alpha_{i} \\
>   & \ +(M_{j}-m_{j})\Delta\alpha_{j}\\
>   & \ +\sum_{i=j+1}^{n} (M_{i}-m_{i})\Delta\alpha_{i} \\
> \end{align}
> $$
> The fact that $M_{j}-m_{j}<2M$ remains. $\alpha$ being continuous implies $\Delta x_{j}\to 0$ $\implies$ $\Delta\alpha_{j}\to 0$. Thus, we can proceed to bound the expression on the right as we did in the previous proof. ❏

> **Rudin's proof**
> Let $\epsilon_{1}, \epsilon_{2}>0$. Let $E$ be the set of points in $[a, b]$ where $f$ is discontinuous. Since $\alpha$ is continuous, we can construct intervals $[k_{p}, k_{p}']$ for each $p\in E$ such that $\sum_{p\in E} \alpha(k_{p}')-\alpha(k_{p})<\epsilon_{1}$. Let $A=\bigcup_{p\in E}(k_{p}, k_{p}')$. The restriction of $f$ to $[a, b]\setminus A$ is uniformly continuous. Thus, we can choose a $\delta>0$ such that $s, t\in[a, b]\setminus A, |s-t|<\delta\implies |f(s)-f(t)|<\epsilon_{2}$. Now, construct a partition $P$ such that for all $p\in E$ there exists $i$ such that $x_{i-1}=k_{p}\in P$ and $x_{i}=k_{p}'\in P$, and for all $x_{i}\ne k_{p}'$ for any $p\in E$, $\Delta x_{i}<\delta$. As always, we have $M=\sup |f(x)|$. 
> $$
> \begin{align}
> U(P, f, \alpha)-L(P, f, \alpha) & \ < 2M\epsilon_{1}+\epsilon_{2}(\alpha(b)-\alpha(a)-\epsilon_{1}) \\
>  & \ < 2M\epsilon_{1}+\epsilon_{2}(\alpha(b)-\alpha(a))
> \end{align}
> $$
> Since $\epsilon_{1}$ and $\epsilon_{2}$ can be made arbitrarily small, it follows that $U(P, f, \alpha)-L(P, f, \alpha)<\epsilon$ for all $\epsilon>0$. ❏

Note that you could have made the same argument with a single $\epsilon$. I choose to use two different variables to semantically indicate that they are bounding different quantities.
### Compositions of integrable functions with continuous functions

Rudin, 6.11

> [!Theorem]
> Suppose $f\in\mathscr R(\alpha)$ on $[a, b]$, $m\leq f \leq M$, $\phi$ is continuous on $[m, M]$, and $h(x)=\phi(f(x))$ on $[a, b]$. Then, $h\in\mathscr{R}(\alpha)$ on $[a, b]$.  

> **Proof**
> Let $\epsilon>0$. We have to show that there exists a partition $P'$ of $[a, b]$ such that 
> $$
> \begin{align}
> U(P', h, \alpha)-L(P', h, \alpha)<\epsilon \\ 
> \end{align}
> $$
> Since $\phi$ is uniformly continuous on $[m, M]$, there exists $\delta>0$ such that $|s-t|<\delta$ $\implies$ $|\phi(s)-\phi(t)|<\boxed{\epsilon_{1}}$ for any $\epsilon_{1}>0$.  
> 
> Since $f\in\mathscr{R}$ on $[a, b]$, there exists a partition $P=\{x_{0}, x_{1}, x_{2}, \dots, x_{n} \}$ such that 
> $$
> \begin{align}
> U(P, f, \alpha)-L(P, f, \alpha)<\boxed{\epsilon_{2}}
> \end{align}
> $$
> for any $\epsilon_{2}>0$ (we will choose $\epsilon_{1}$ and $\epsilon_{2}$ to fit our needs later). Now, 
> $$
> \begin{align}
> U(P, f, \alpha)-L(P, f, \alpha)=\sum_{i=1}^{n} (M_{i}-m_{i})\Delta\alpha_{i}
> \end{align}
> $$
> where $M_{i}=\sup f([x_{i-1}, x_{i}])$ and $m_{i}=\inf f([x_{i-1}, x_{i}])$. Let us try to use this partition $P$ for $h$ and see what comes out of it. 
> $$
> \begin{align}
> U(P, h, \alpha)-L(P, h, \alpha)=\sum_{i=1}^{n} (M_{i}'-m_{i}')\Delta\alpha_{i}
> \end{align}
> $$
> where $M'_{i}=\sup h([x_{i-1}, x_{i}])$ and $m'_{i}=\inf h([x_{i-1}, x_{i}])$. Notice that if $M_{i}-m_{i}<\delta$ for some $i$, $|f(x)-f(y)|<\delta$ for all $x, y\in[x_{i-1}, x_{i}]$, so $|\phi(f(x))-\phi(f(y))|<\epsilon_{1}$, i.e, $M_{i}'-m_{i}'<\epsilon_{1}$. Of course, this is not going to happen for all $i$. Let the set $A$ contain all $i's$ for which $M_{i}-m_{i}<\delta$, and $B$ contain all $i$'s for which $M_{i}-m_{i}\geq \delta$. Then, 
> $$
> \begin{align}
> \sum_{i=1}^{n} (M_{i}'-m_{i}')\Delta\alpha_{i} & =\sum_{i\in A}(M_{i}'-m_{i}')\Delta\alpha_{i}+\sum_{i\in B}(M_{i}'-m_{i}')\Delta\alpha_{i} \\ 
>  & < \epsilon_{1}(\alpha(b)-\alpha(a))+\sum_{i\in B}(M_{i}'-m_{i}')\Delta\alpha_{i} \\ 
> \end{align}
> $$
> Halfway there! Since we cannot make $M_{i}-m_{i}$ arbitrarily small for $i\in B$, let us instead focus on $\sum_{i\in B}\Delta\alpha_{i}$. Since $\delta\leq M_{i}-m_{i}$, we have
> $$
> \delta \sum_{i\in B}\Delta\alpha_{i}\leq \sum_{i\in B}(M_{i}-m_{i})\Delta\alpha_{i}<\epsilon_{2} 
> 
> $$
> $$
> \implies \sum_{i\in B}\Delta\alpha_{i}< \frac{\epsilon_{2}}{\delta}
> $$
> $\phi$, being continuous on a closed interval, is bounded. Thus, we can put $M'_{i}-m_{i}'<K$ for all $i$ for some positive constant $K$. This gets us 
> $$
> \begin{align}
> \sum_{i\in B}(M_{i}'-m_{i}')\Delta\alpha_{i} <\frac{K\epsilon_{2}}{\delta}
> \end{align}
> $$
> Thus, we have
> $$
> \begin{align}
> U(P, h, \alpha)-L(P, h, \alpha)< \epsilon_{1}(\alpha(b)-\alpha(a))+ \frac{K\epsilon_{2}}{\delta}
> \end{align}
> $$
> In hindsight, choosing $\epsilon_{2}=\delta^{2}$ would have been advantageous. Say we had done that. This gets us
> $$
> U(P, h, \alpha)-L(P, h, \alpha)< \epsilon_{1}(\alpha(b)-\alpha(a))+ K\delta
> $$
> In hindsight, choosing $\delta$ such that $\delta<\epsilon_{1}$ would have been great. Let's pretend we did that.
> $$
> \begin{align}
> U(P, h, \alpha)-L(P, h, \alpha)< \epsilon_{1}(\alpha(b)-\alpha(a)+K)
> \end{align}
> $$
> In hindsight, choosing $\epsilon_{1}=\epsilon/(\alpha(a)-\alpha(b)+K)$ would have been super smart. Say we were super smart. This finally gets us
> $$
> U(P, h, \alpha)-L(P, h, \alpha)< \epsilon
> $$
> 🎉🎉🎉 ❏

>[!Info]
>The most general characterization of integrability goes like $f\in\mathscr R$ iff it is almost everywhere continuous.

---
## Properties of the integral

Rudin, 6.12
### a

> [!Theorem]
> If $f\in\mathscr R(\alpha)$, for every constant $c$ we have $cf\in\mathscr R(\alpha)$ and
> $$
> \int_{a}^{b} cf \, d\alpha =c\int_{a}^{b} f \, d\alpha. 
> $$
> 

> [!Theorem]
> If $f_{1}\in\mathscr R(\alpha)$ and $f_{2}\in\mathscr R(\alpha)$ on $[a, b]$, then
> $$
> f_{1}+f_{2}\in\mathscr R(\alpha),
> $$
> $$
> \int_{a}^{b} f_{1}+f_{2} \, d\alpha =\int_{a}^{b} f_{1} \, d\alpha +\int_{a}^{b} f_{2} \, d\alpha. 
> $$
> 

> **Proof**
> Let $\epsilon>0$. Find partitions $P_{1}$ and $P_{2}$ which satisfy the criterion for integrability for $f_{1}$ and $f_{2}$ respectively for $\epsilon$. Let $P=P_{1}\cup P_{2}$ be their common refinement. 
>
> >[!important] Note
> >
> > For $f_{1}$ and $f_{2}$ defined on $X \subset \mathbb{R}$, we have
> >$$
> >\inf_{x \in X} f_{1}(x) + \inf_{x \in X} f_{1}(x) \leq \inf_{x \in X} (f_{1} + f_{2})(x)
> >$$
> >**Proof:**
> > For any $x \in X$ we have
> > $$
> > \inf_{t \in X} f_{1}(t) \leq f_{1}(x) \qquad\qquad \inf_{t \in X} f_{2}(t) \leq f_{2}(x)
> > $$
> > Adding these we get
> > $$
> > \inf_{t \in X} f_{1}(t)+\inf_{t \in X} f_{2}(t) \leq (f_{1}+f_{2})(x)
> > $$
> > Taking the infimum over all $x$ on the RHS, we get our desired result.
>
> Using the above result we can write
> $$
> \begin{align}
> U(P, f_{1}+f_{2}, \alpha)\leq U(P, f_{1}, \alpha)+U(P, f_{2}, \alpha), \\
> L(P, f_{1}+f_{2}, \alpha)\geq L(P, f_{1}, \alpha)+L(P, f_{2}, \alpha). \\
> \end{align}
> $$
> Thus, we have
> $$
> \begin{align}
> U(P, f_{1}+f_{2}, \alpha)-L(P, f_{1}+f_{2}, \alpha)\leq & \ U(P, f_{1}, \alpha)-L(P, f_{1},\alpha)+ \\
>  & \ U(P, f_{2}, \alpha)-L(P, f_{2}, \alpha) \\
> < & \ 2\epsilon.
> \end{align}
> $$
> Therefore, $f_{1}+f_{2}\in \mathscr R(\alpha)$.
> 
> For the same $P$, we have
> $$
> U(P, f_{1}, \alpha)< \int_{a}^{b} f_{1} \, d\alpha+\epsilon. 
> $$
> A similar equation exists for $f_{2}$. Thus, we have
> $$
> \int_{a}^{b} f_{1}+f_{2} \, d\alpha\leq U(P, f_{1}+f_{2}, \alpha)< \int_{a}^{b} f_{1} \, d\alpha +\int_{a}^{b} f_{2} \, d\alpha+2\epsilon.  
> $$
> ❏
### b

> [!Theorem]
> If $f_{1}\in\mathscr R(\alpha)$ and $f_{2}\in\mathscr R(\alpha)$ on $[a, b]$ and $f_{1}(x)\leq f_{2}(x)$, then
> $$
> \int_{a}^{b} f_{1} \, d\alpha\leq \int_{a}^{b} f_{2} \, d\alpha. 
> $$
### c

> [!Theorem]
> If $f\in\mathscr R(\alpha)$ on $[a, b]$ and if $a<c<b$, then $f\in\mathscr R(\alpha)$ on $[a, c]$ and on $[c, b]$, and
> $$
> \int_{a}^{c} f \, d\alpha+\int_{c}^{b} f \, d\alpha=\int_{a}^{b} f \, d\alpha .  
> $$

> **Proof**
> Let $\epsilon>0$. Pick partition $P$ of $[a, b]$ such that $c\in P$ and $U(P, f, \alpha)_{[a, b]}-L(P, f, \alpha)_{[a, b]}<\epsilon$. The definitions of $U$ and $L$ tell us that this implies
> $$
> \begin{align}
>  & (U(P, f, \alpha)_{[a, c]}-L(P, f, \alpha)_{[a, c]})+ \\
> & (U(P, f, \alpha)_{[c, b]}-L(P, f, \alpha)_{[c, b]})< \epsilon
> \end{align}
> $$
> where the elements of $P$ not in the pertinent interval are ignored. Since both quantities are positive, each one must be less than $\epsilon$. Thus, $f\in\mathscr R(\alpha)$ on $[a, c]$ and $[c, b]$. Again, 
> $$
> \int_{a}^{b} f \, d\alpha \leq U(P, f, \alpha)_{[a, c]}+U(P, f, \alpha)_{{[c, b]}}<\int_{a}^{c} f \, d\alpha+\int_{c}^{b}f  \, d\alpha+2\epsilon
> $$
> ❏
### d

> [!Theorem]
> If $f\in\mathscr R(\alpha)$ on $[a, b]$ and if $|f(x)|\leq M$ on $[a, b]$, then
> $$
> \left|\int_{a}^{b} f \, d\alpha \right|\leq M[\alpha(b)-\alpha(a)].
> $$
### e

> [!Theorem]
> If $f\in\mathscr R(\alpha)$ and $c$ is a positive constant, then $f\in\mathscr R(c\alpha)$ and
> $$
> \int_{a}^{b} f \, d(c\alpha) =c\int_{a}^{b} f \, d\alpha.
> $$
> 

> [!Theorem]
> If $f\in\mathscr R(\alpha_{1})$ and $f\in\mathscr R(\alpha_{2})$, then $f\in\mathscr R(\alpha_{1}+\alpha_{2})$, and
> $$
> \int_{a}^{b} f \, d(\alpha_{1}+\alpha_{2} )=\int_{a}^{b} f \, d\alpha_{1} +\int_{a}^{b} f \, d\alpha_{2} .
> $$
> 
