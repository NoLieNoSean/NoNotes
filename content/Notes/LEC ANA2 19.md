---
id: "359"
date: 2025-11-19
time: 15:43
tags:
  - ANA2
  - Lecture
---
> [!Proposition]
> Let $K\subseteq L^{2}[-\pi, \pi]$ be compact. Then
> $$
> \lim_{ |n| \to \infty } \sup_{f\in K}|\hat{f}_{n}|=0.
> $$
> 
> > [!Proof]-
> > 
> > We will denote $\hat{f}_{n}$ by $\hat{f}(n)$ for national convenience. Let $\epsilon> 0$. Use totally boundedness of $K$ to write $K\subseteq \bigcup_{i=1}^{n}B(f_{i}, \epsilon)$. There exists $N_{i}$ such that $|\hat{f}_{i}(n)|<\epsilon$ for $n\geqslant N_{i}$; let $N=\max N_{i}$. For $f\in K$, and $n\geqslant N$, 
> > $$
> > \begin{align}
> > |\hat{f}(n) | & \leqslant |\hat{f}(n)-\hat{f}_{i}(n)|+|\hat{f}_{i}(n)| \\
> >  & = |(\widehat{f-f_{i}})(n)|+|\hat{f}_{i}(n)| \\
> >  & = \lVert \widehat{f-f_{i}} \rVert _{2}+|\hat{f}_{i}(n)| \\
> >  & =\lVert f-f_{i} \rVert _{2}+|\hat{f}_{i}(n)| \\
> >  & \leqslant 2\epsilon ,
> > \end{align}
> > $$
> > where the fourth equality follows from [[LEC ANA2 17#^d05d4c]]. 
> 

^5d576d


! Not really sure what I've done here.

> [!Exercise]
> Let $f\in C^{0}[-\pi, \pi]$. 
> $$
> \Delta_{f}(t):=\sup_{s, r\in[-\pi, \pi], |s-r|< t}|f(s)-f(r)|.
> $$
> Assume
> $$
> \int_{-\pi}^{\pi} \frac{\Delta_{f}(t)}{|t|} \, dt< \infty.
> $$
> Prove that $S_{N}f\to f$ uniformly. 
> 
> > [!Proof]-
> > 
> > We will mimic the proof of [[LEC ANA2 18#^8d8cda]]. 
> > 
> > $$
> > \begin{align}
> > |(S_{N}f)(t_{0})-f(t_{0})| & =\frac{1}{2\pi}\left| \int_{-\pi}^{\pi} D_{N}(t-t_{0})f(t) \, dt-\int_{-\pi}^{\pi} D_{N}(t)f(t_{0}) \, dt    \right|  \\
> >  & =\frac{1}{2\pi}\left| \int_{-\pi}^{\pi} D_{N}(t)f(t+t_{0}) \, dt-\int_{-\pi}^{\pi} D_{N}(t)f(t_{0}) \, dt    \right| \\
> >  & = \frac{1}{2\pi}  \left| \int_{-\pi}^{\pi} \left( \frac{\sin{(N+1/2)t}}{\sin t/2} \right)(f(t+t_{0})-f(t_{0})) \, dt \right|  \\
> >  & \leqslant \frac{1}{2\pi} \left[  \underbrace{ \int_{-\delta}^{\delta} \frac{|f(t+t_{0})-f(t_{0})|}{|\sin t/2|} \, dt }_{ =:\,A^{\delta}(t_{0}) }+ \underbrace{ \left|\int_{(-\delta, \delta)^{c}} \left( \frac{\sin{(N+1/2)t}}{\sin t/2} \right)(f(t+t_{0})-f(t_{0}))\,dt \right| }_{ =:\,B^{\delta}_{N}(t_{0})  } \right] 
> > \end{align}
> > $$
> > Define $M=\sup \{ (t/2)/(\sin(t/2)) : t\in[-\pi, \pi] \}$. Then, $|\sin(t/2)|\geqslant |t|/2M$. For all $t_{0}\in[-\pi, \pi]$, 
> > $$
> > \begin{align}
> > A^{\delta}(t_{0})\leqslant 2M\int_{-\delta}^{\delta} \frac{|f(t+t_{0})-f(t_{0})|}{|t|} \, dt\leqslant 2M\int_{-\delta}^{\delta} \frac{\Delta_{f}(t)}{|t|} \, dt \to 0\quad \text{as}\quad \delta\to 0. 
> > \end{align}
> > $$
> > Now, consider the family of functions $\mathcal{F}=\{ f(t+t_{0})-f(t_{0}): t_{0}\in[-\pi, \pi] \}$. Denote $f(t+t_{0})-f(t_{0})$ by $f_{t_{0}}(t)$. 
> > 1. $\mathcal{F}$ is clearly bounded by $2\lVert f \rVert_{\infty}$. 
> > 2. For $\epsilon> 0$, and $\delta> 0$ be chosen by the uniform continuity of $f$. Then, if $|t-t'|<\delta$, $|f(t+t_{0})-f(t'+t_{0})|<\epsilon$ for all $t_{0}$. Thus, $\mathcal{F}$ is [[LEC ANA2 7#^4d28b7|equicontinuous]]. 
> > 3. If $\{f_{t_{k}} \}_{k=1}^{\infty}\subseteq \mathcal{F}$ is a Cauchy sequence, let $t_{0}$ be a limit point of $\{ t_{k} \}_{k=1}^{\infty}\subseteq S_{1}$. For $\epsilon> 0$, choose $N$ such that $|t_{0}-t_{k}|<\delta$ for all $k\geqslant N$, where $\delta$ is chosen by the uniform continuity of $f$. Then, for all $k\geqslant N$, $|(f(t+t_{0})-f(t+t_{k}))+(f(t_{k})-f(t_{0}))|\leqslant 2\epsilon$ for all $t\in[-\pi, \pi]$. Thus, $\{ f_{t_{k}} \}_{k=1}^{\infty}\rightrightarrows f_{t_{0}}$. 
> > 
> > By [[LEC ANA2 7#^d4059b]], $\mathcal{F}$ is compact in $(C^{0}[-\pi, \pi], \lVert \cdot \rVert_{\infty})$. 
> > 
> > Fix $\delta> 0$ and set $K:=(-\delta, \delta)^{c}$. Define two families of continuous functions on $K$ indexed by $t_{0}\in[-\pi, \pi]$:
> > $$
> > \begin{align}
> > \mathcal{G}_{1} & :=\left\{  g_{t_{0}}(t):=f_{t_{0}}(t)\left( \frac{\cos t/2}{\sin t/2}  \right) \right\}, \\
> > \mathcal{G}_{2} & :=\{ h_{t_{0}}(t):=f_{t_{0}}(t) \} .
> > \end{align}
> > $$
> > $\mathcal{G}_{2}$, being the restriction of $\mathcal{F}$ to $K$, is compact in $C(K)$. Because $\sin t/2$ is bounded away from $0$ on $K$, the map
> > $$
> > u(t)\mapsto u(t)\left( \frac{\cos t/2}{\sin t/2} \right)
> > $$
> > is a continuous linear operator $C(K)\to C(K)$. It follows that $\mathcal{G}_{2}$, being the image of $\mathcal{G}_{1}$ under this map, is compact. 
> > 
> > Since the identity map $I:(C(K), \lVert \cdot \rVert_{\infty})\to(C(K), \lVert \cdot \rVert_{2})$ is continuous (see [[LEC ANA2 3#^226f96]]), $\mathcal{G}_{1}$ and $\mathcal{G}_{2}$ are compact in $L^{2}(K)$. As before, write:
> > $$
> > \begin{align}
> > B^{\delta}_{N}(t_{0}) & =\left| \int_{K} { g_{t_{0}}(t) }\sin Nt\,dt+\int_{K }{ h_{t_{0}}(t)}\cos Nt \,dt \right|.
> > \end{align}
> > $$
> > From [[#^5d576d]], we have
> > $$
> > \lim_{ |n| \to \infty } \sup_{g_{t_{0}}\in \mathcal{G}_{1}}|\hat{g}_{t_{0}}(n)|=0, \quad \lim_{ |n| \to \infty } \sup_{h_{t_{0}}\in \mathcal{G}_{2}}|\hat{h}_{t_{0}}(n)|=0.
> > $$
> > It follows that
> > $$
> > \lim_{ |N| \to \infty } \sup_{t_{0}\in[-\pi, \pi]}B_{N}^{\delta}=0.
> > $$
> > Finally, given $\epsilon> 0$, choose $\delta$ such that $A^{\delta}(t_{0})<\epsilon/2$ for all $t_{0}\in[-\pi, \pi]$, and choose $M$ such that $\sup_{t_{0}\in[-\pi, \pi]}B_{N}^{\delta}<\epsilon/2$ for all $N\geqslant M$. It follows that $|(S_{N}f)(t_{0})-f(t_{0})|<\epsilon$ for all $t_{0}$ for all $N\geqslant M$, i.e, $\lVert S_{N}f-f \rVert_{\infty}\to 0$ as $N\to \infty$. 
> 


---

# Convolution

For $f, g\in C^{0}[0, 2\pi]$, define
$$
(f\star g)(t):=\frac{1}{2\pi}\int_{0}^{2\pi} f(t-s)g(s) \, ds=\frac{1}{2\pi}\int_{0}^{2\pi} f(s)g(t-s) \, ds.  
$$
[[LEC PROB 10#^f84359]] can be used to show that $f\star g$ is continuous. Recall that $S_{N}f=D_{N}\star f$. Define
$$
(\sigma_{N}f)(t):=\frac{1}{N}\sum_{n=0}^{N-1} (S_{N}f)(t).
$$

> [!Proposition]
> Let $f, g\in C^{0}[0, 2\pi]$. Then, 
> $$
> (\widehat{f\star g})(n)=\hat{f}(n)\cdot \hat{g}(n).
> $$
> > [!Proof]-
> > 
> > $$
> > \begin{align}
> > (\widehat{f\star g})(n)= \frac{1}{4\pi^{2}    }\int_{0}^{2\pi} \left( \int_{0}^{2\pi} f(t-s)g(s) \, ds  \right) e^{ -in t }\, dt
> > \end{align}
> > $$
> > To use Fubini's theorem to swap the integrals, we need to show that the absolute value of the integrand is integrable:
> > $$
> > \begin{align}
> > \int_{0}^{2\pi} \int_{0}^{2\pi} |f(t-s)||g(s)| \, ds  \, dt 
> > \end{align}
> > $$
> > $|f(t-s)||g(s)|$ is non-negative and measurable, so Tonelli lets you swap the order of integration:
> > $$
> > \begin{align}
> >  & \int_{0}^{2\pi} \left( \int_{0}^{2\pi} |f(t-s)| \, dt \right)|g(s)|  \, ds \\
> >  & =\int_{0}^{2\pi} \left( \int_{0}^{2\pi} |f(u)| \, du \right)|g(s)|  \, ds  \\
> >  & =\left( \int_{0}^{2\pi} |f(u)| \, du \right)\left( \int_{0}^{2\pi} |g(s)| \, ds \right) \\
> >  & =\lVert f \rVert _{1}\lVert g \rVert _{1}.
> > \end{align}
> > $$
> > Thus, by Fubini, 
> > $$
> > \begin{align}
> > (\widehat{f\star g})(n) & = \frac{1}{4\pi^{2}}\int_{0}^{2\pi} \left( \int_{0}^{2\pi}  f(t-s)e^{ -in (t-s) } \, dt  \right) g(s)e^{ -ins }\, ds \\
> >  & = \hat{f}(n)\cdot \hat{g}(n).
> > \end{align}
> > $$

> [!Definition] Approximate identity
> $\{ g_{N} \}_{N=1}^{\infty}$ is said to be an **approximate identity** if
> 1. $g_{N}\geqslant 0$ for all $N$
> 2. $\frac{1}{2\pi}\int_{0}^{2\pi} g_{N}(s) \, ds=1$ for all $N$
> 3. $\lim_{ N \to \infty }\int_{\epsilon}^{2\pi-\epsilon} g_{N}(s) \, ds=0$ for all $\epsilon> 0$. 

> [!Proposition]
> Let $\{ g_{N} \}_{N=1}^{\infty}$ be an approximate identity. Then $g_{N}\star f\to f$ uniformly for all $f\in C^{0}[0, 2\pi]$. 
> 
> > [!Proof]-
> > 
> > $$
> > \begin{align}
> > |(g_{N}\star f-f)(t)| & =\frac{1}{2\pi} \left|\int_{0}^{2\pi} g_{N}(s)f(t-s) \, ds-\int_{0}^{2\pi} g_{N}(s)f(t) \, ds    \right|  \\
> >  & \leqslant \frac{1}{2\pi}\left| \int_{0}^{2\pi} |g_{N}(s)||f(t-s)-f(t)| \, ds  \right|.
> > \end{align}
> > $$
> > Evaluating the integral over $[\delta, 2\pi-\delta]$, we get
> > $$
> > \int_{\delta}^{2\pi-\delta} |g_{N}(s)||f(t-s)-f(t)| \, ds\leqslant  2\lVert f \rVert _{\infty}\int_{\delta}^{2\pi-\delta} |g_{N}(s)| \, ds\to 0\quad \text{as}\quad N\to \infty. 
> > $$
> > Evaluating the integral over $[\delta, 2\pi-\delta]^{c}$, we get
> > $$
> > \begin{align}
> > \int_{[\delta, 2\pi-\delta]^{c}} |g_{N}(s)||f(t-s)-f(t)| \, ds\leqslant \sup_{s\in[\delta, 2\pi-\delta]^{c}}|f(t-s)-f(t)|
> > \end{align}
> > $$
> > Given $\epsilon> 0$, choose $\delta> 0$ such that $|f(s)-f(r)|<\epsilon$ for all $|s-r|< 2\delta$. 

> [!Proposition]
> $(\sigma_{N}f)(t)=(F_{N}\star f)(t)$, where
> $$
> F_{N}(t)=\frac{1}{N}\frac{\sin ^{2}(Nt/2)}{\sin ^{2}(t/2)}.
> $$
> 
> > [!Proof]-
> > 
> > $$
> > \begin{align}
> > (\sigma_{N}f)(t) & =\frac{1}{N}\sum_{n=0}^{N-1} (S_{N}f)(t) \\
> >  & = \frac{1}{N}\sum_{n=0}^{N-1} (D_{N}\star f)(t)
> > \end{align}
> > $$
> > It follows that
> > $$
> > \begin{align}
> > F_{N} & =\frac{1}{N}\sum_{n=0}^{N-1} D_{n} \\
> >  & = \frac{1}{N}\sum_{n=0}^{N-1} \frac{\sin(N+1/2)t}{\sin t/2} \\
> >  & =\frac{1}{N\sin t/2}\sum_{n=0}^{N-1} \mathrm{Im}~e^{ i(N+1/2)t }  \\
> >  & = \frac{1}{N\sin t/2}\mathrm{Im}~\left( \frac{e^{ iNt }-1}{e^{ it/2 }-e^{ -it/2 }} \right)    \\
> >  & = \frac{-1}{2N\sin ^{2}t/2}\mathrm{Re}~(e^{ iNt }-1) \\
> >  & =\frac{\sin ^{2}(Nt/2)}{N\sin ^{2}t/2}.
> > \end{align}
> > $$

> [!Theorem] Fejér
> Let $f\in C^{0}[0, 2\pi]$. Then, $\sigma_{N}f$ converges to $f$ uniformly. 
> 
> > [!Proof]-
> > 
> > It suffices to verify 
> > $$
> > \left\{ g_{N}(t)=\frac{1}{N}\frac{\sin ^{2}(Nt/2)}{\sin ^{2}t/2} \right\} _{N=0}^{\infty}
> > $$
> > is an approximate identity. 
> 


> [!Lemma]
> Let $\{ x_{n} \}_{n=1}^{\infty}\subseteq \mathbb{C}$. Let $\overline{x}_{n}:=(x_{1}+x_{2}+\dots+x_{n})/n$. If $x_{n}\to x$, then $\overline{x}_{n}\to x$. 
> 
> > [!Proof]-
> > 
> > There exists $N_{\epsilon}$ such that $|x_{n}-x|<\epsilon$ for all $n\geqslant N_{\epsilon}$. Then, 
> > $$
> > \begin{align}
> > |\overline{x}_{n}-x| & \leqslant \sum_{k=1}^{n} \frac{|x_{k}-x|}{n}  \\
> >  &=\sum_{k=1}^{N_{\epsilon}} \frac{|x_{k}-x|}{n}+\underbrace{ \sum_{k=N_{\epsilon}+1}^{n } \frac{|x_{k}-x|}{n}  }_{ \leqslant \epsilon }.\\
> > 
> > \end{align}
> > $$
> > Choose $n$ such that $n\geqslant  \sum_{k=1}^{N_{\epsilon}}|x_{k}-x|/\epsilon$ and $n\geqslant N_{\epsilon}$. 



> [!Corollary]
> If $S_{N}f$ converges, then it must converge to $f$. 