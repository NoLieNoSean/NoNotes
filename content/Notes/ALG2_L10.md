## Semidirect product

For two groups $H$ and $K$, the most basic construction of a group that contains copies of $H$ and $K$ as subgroups is the [[ALG2_L6#Direct products|direct product]] $H\times K$. We can embed $H$ and $K$ into $H\times K$ "on the axes" by $h\mapsto(h, 1)$ and $k\mapsto (1, k)$ for $h\in H$ and $k\in K$. 

We can also use the direct product to decompose groups not initially constructed as a direct product. Given a group $G$ with subgroups $H$ and $K$, to recognize whether $G$ can be written as the direct product of $H$ and $K$, we first observe some properties of the embeddings of $H$ and $K$ into their direct product $H\times K$:
- they generate $H\times K$: $(h, k)=(h, 1)(1, k)$,
- they intersect trivially: $(h, 1)=(1, k)\implies h=1, k=1$,
- they commute element-wise: $(h, 1)(1, k)=(1, k)(h, 1)$.
These properties can be turned around to craft a recognition theorem for a group $G$ to look like a direct product of two subgroups $H$ and $K$, as we did previously: 

> [!Theorem]
> Let $G$ be a group with subgroups $H$ and $K$ where
> 1. $G=HK$
> 2. $H\cap K=\{ 1 \}$ in $G$,
> 3. $hk=kh$ for all $h\in H$ and $k\in K$.
> 
> Then the map $H\times K\to G$ by $(h, k)\mapsto hk$ is an isomorphism.

Note that in place of the third condition, we required $H\triangleleft G$ and $K\triangleleft G$ [[ALG2_L6#Direct products|here]]. However, $H\triangleleft G, K\triangleleft G, H\cap K=\{ 1 \}\implies hk=kh~~\forall h\in H, k\in K$, so we're good.

There's another way to construct a group using two groups $H$ and $K$, called the semidirect product. Interesting features include:
1. It may be nonabelian even if $H$ and $K$ are abelian (note that $H\times K$ is abelian iff $H$ and $K$ are abelian), and
2. there may be multiple nonisomorphic semidirect products using the same two groups.

> [!Definition]
> Given any two groups $H$ and $K$ and a group homomorphism $\phi:K\to\text{Aut}(H)$, we can construct a new group $H\rtimes_{\phi}K$, called the *semidirect product* of $H$ and $K$ with respect to $\phi$, defined as follows:
> 1. As a set, $H\rtimes_{\phi}K$ is the same as $H\times K$. 
> 2. $(h_{1}, k_{1})\circ(h_{2}, k_{2})\equiv(h_{1}\phi_{k_{1}}(h_{2}), k_{1}k_{2})$.

### Recognizing semidirect products

> [!Theorem]
> Let $G$ be a group with subgroups $H$ and $K$ such that
> 1. $G=HK$,
> 2. $H\cap K=\{ 1 \}$, and
> 3. $H\triangleleft G$. 
> 
> Let $\varphi:K\to \text{Aut}(H)$ be conjugation: $\varphi_{k}(h)=khk^{-1}$. Then, $\varphi$ is a homomorphism and the map $H\rtimes_{\varphi}K\to G$ by $(h, k)\mapsto hk$ is an isomorphism.

