---
tags:
  - ALG2
  - Lecture
date: 2025-01-30
time: 9:10
---
## Third isomorphism theorem

> [!Theorem] Third Isomorphism Theorem
> Let $G$ be a group and let $H\triangleleft G$, $K\triangleleft G$, and $H<K$. Then, $K/H\triangleleft G/H$ and 
> $$
> \frac{{G/H}}{K/H}\cong G/K.
> $$

> **Proof**
> First, observe that $H\triangleleft G$ and $H< K< G$ implies $H\triangleleft K$. So, $K/H$ is a group.
> Consider $kH\in K/H$, $gH\in G/H$. 
> $$
> \begin{align}
> (gH)(kH)(gH)^{-1} & =gHkHg^{-1}H \\
>  & =gkg^{-1}H 
> \end{align}
> $$
> Since $K$ is a normal subgroup, $gkg^{-1}\in K$. Thus, $gkg^{-1}H\in K/H$. Since conjugation is an invertible operation, this gives $(gH)(K/H)(gH)^{-1}=K/H$, i.e. $K/H\triangleleft G/H$. 
> 
> Now, consider the map $\phi: G/H\to G/K$ defined by $gH\mapsto gK$. This map is well defined, since if $g$ is in a coset $aK$, $gH$ is also necessarily in $aK$. $\phi$ is also surjective, since for every $aK\in G/K$, $aH\mapsto aK$. 
> 
> $\phi$ is an homomorphism: $\phi((gH)\circ (g'H))=gg'K$, $\phi(gH)\phi(g'H)=gg'K$. The kernel of $\phi$ is the set of all cosets of $H$ contained in $K$, $K/H$. 
> 
> From the [[ALG2_L4#First isomorphism theorem|first isomorphism theorem]], $\frac{G/H}{K/H}\cong G/K$. 

Note that if only $H<G$, $K<G$, and $H<K$ are true, we can still define $\phi:G/H\to G/K$ as we did above, but as a set theoretic function. Note that $G/H$ and $G/K$ are only sets of cosets here, not groups. Our reasoning that $\phi$ is well defined did not use the normality of $H$ or $K$, and thus is still valid.

---
## Direct products

> [!Definition]
> Let $G$ and $G'$ be two groups. The product set $G\times G'$, the set of pairs of elements $(a, a')$ with $a$ in $G$ and $a'$ in $G'$, can be made into a group, known as the *product group*, by component wise multiplication:
> $$
> (a, a')(b, b')=(ab, a'b').
> $$
> The pair $(1_{G}, 1_{G'})$ is the identity, and the inverse of $(a, a')$ is $(a^{-1}, a'^{-1})$. The associative law in $G\times G'$ follows from the fact that it holds in $G$ and $G'$. 

The group $G\times G'$ is related to $G$ and $G'$ by inclusion and projection maps:
![[Pasted image 20250211162149.png|300]]

Here, $i$ is the inclusion map $g\mapsto(g, 1_{G'})$ and $p$ is the projection map $(g, g')\mapsto g$. Ditto for $i'$ and $p'$. 

> [!Theorem] Proposition
> $\mathbb{Z}_{mn}\cong \mathbb{Z}_{m}\times \mathbb{Z}_{n}$ when $(m, n)=1$.

> **Proof** $(1, 1)$ generates $\mathbb{Z}_{m}\times \mathbb{Z}_{n}$, and has order $mn$. 

### Recognizing direct products

> [!Theorem]
> Let $H$ and $K$ be subgroups of a group $G$, and let $f:H\times K\to G$ be the multiplication map, defined by $f(h, k)=hk$. Its image is the set $HK=\{ hk\ | \ h\in H, k\in K \}$. 
> 1. $f$ is injective iff $H\cap K=\{ 1 \}$.
> 2. $f$ is a homomorphism iff elements of $K$ commute with elements of $H$.
> 3. $HK<G$ iff $HK=KH$. Useful to note here that
> 	-  $H\leq N_{G}(K)$ $\implies$ $HK=KH$.
> 	-  In particular, if $K\triangleleft G$, $HK=KH$ for all $H< G$.
> 4. $f$ is an isomorphism iff $H\cap K=\{ 1 \}$, $HK=G$, $H\triangleleft G$, and $K\triangleleft G$.

> [!Warning]
> Note that $HK=KH$ does not imply that the elements of $H$ commute with the elements of $K$. Also, 3.1 is not a two way implication.

> **Proof of 1**
> Let $H\cap K=\{ 1 \}$. Then, $f(h, k)=f(h', k')\implies$ $hk=h'k'\implies$ $h'^{-1}h=k'k^{-1}$. Notice that since $h'^{-1}h\in H$ and $k'k^{-1}\in K$, it must be that both are equal to $1$. Thus, $h'^{-1}h=1\implies h'=h$ and $k'k^{-1}=1 \implies k'=k$.
> On the other hand, if $g\in H\cap K$, $g\ne 1$, we have $(g, 1)\mapsto g$ and $(1, g)\mapsto g$, making $f$ not injective.
> 
> **Proof of 2**
> $$
> \begin{align}
>  & f((h, k)\circ(h', k'))  =f(h, k)\circ f(h', k') \\
> \iff  &  hh'kk'  =hkh'k' \\
> \iff  & h'k  =kh' ~~~~\forall h,h'\in H, k,k'\in K
> \end{align}
> $$
> 
> **Proof of 3**
> 3.1 and 3.2 should be obvious. Given $HK=KH$, $HK$ is closed under multiplication, since $HKHK=HHKK=HK$. Also, $(hk)^{-1}=k^{-1}h^{-1}$ is in $KH=HK$. The reverse implication is also easy to prove.
> 
> **Proof of 4**
> The first two conditions ensure $f$ is injective and surjective, making it bijective. According to $(2)$, $f$ is a homomorphism iff $hk=kh$ for all $h\in H$ and $k\in K$. Consider the commutator $(k^{-1}hk)h^{-1}=k^{-1}(hkh^{-1})$. Since $H$ is normal, the left side is in $H$, and since $K$ is normal, the right side is in $K$. Knowing that $H\cap K=\{ 1 \}$, we get $k^{-1}hkh^{-1}=1$. 

> [!Theorem] Proposition
> $$
> |HK|= \frac{|H||K|}{|H\cap K|}.
> $$

> **Proof**
> Notice that $HK$ is a union of a subset of the left cosets of $K$:
> $$
> HK=\bigcup_{h\in h}^{} hK.
> $$
> Since each coset of $K$ had $|K|$ elements, it suffices to find the number of distinct cosets of the form $hK$, $h\in H$. But, $h_{1}K=h_{2}K$ $\iff$ $h_{2}^{-1}h_{1}\in K$ $\iff$ $h_{2}^{-1}h_{1}\in H\cap K$ $\iff$ $h_{1}(H\cap K)=h_{2}(H\cap K)$. Thus, $h_{1}$ and $h_{2}$ belong to the same coset of $K$ if and only if they also belong to the same coset of $H\cap K$. Thus, the number of distinct cosets of the form $hK$ is equal to the index of $H\cap K$ in $H$. Thus,
> $$
> |HK|= \left( \frac{{|H|}}{|H\cap K|} \right)|K|.
> $$

---
## Example: Chinese remainder theorem

> [!Theorem] Chinese remainder theorem
> If positive integers $m$ and $n$ are co-prime,
> $$
> \frac{\mathbb{Z}}{mn\mathbb{Z}}\cong \frac{\mathbb{Z}}{m\mathbb{Z}}\times \frac{\mathbb{Z}}{n\mathbb{Z}}.
> $$

**Proof**
Consider the map
$$
\phi:\frac{\mathbb{Z}}{mn\mathbb{Z}}\to \frac{\mathbb{Z}}{m\mathbb{Z}}\times \frac{\mathbb{Z}}{n\mathbb{Z}}
$$
defined by
$$
a+mn\mathbb{Z}\mapsto(a+m\mathbb{Z}, a+n\mathbb{Z}).
$$
> [!Note]- Showing that $\phi$ is well defined and is a homomorphism
> To check that $\phi$ is well defined, let $a_{1}+mn\mathbb{Z}=a_{2}+mn\mathbb{Z}$. Then, $a_{1}-a_{2}\in mn\mathbb{Z}$, i.e. $a_{1}-a_{2}=mnz$ for some $z\in \mathbb{Z}$. This can be rewritten an $a_{1}-a_{2}=m(nz)$, so, $a_{1}-a_{2}\in m\mathbb{Z}$. Thus, $a_{1}+m\mathbb{Z}=a_{2}+m\mathbb{Z}$. Similarly, $a_{1}+n\mathbb{Z}=a_{2}+n\mathbb{Z}$. 
> 
> $\phi$ is an homomorphism:
> $$
> \begin{align}
>  & \phi((a_{1}+mn\mathbb{Z})+(a_{2}+mn\mathbb{Z}))  \\
>  & =\phi(a_{1}+a_{2}+mn\mathbb{Z}) \\
>   &  =(a_{1}+a_{2}+m\mathbb{Z}, a_{1}+a_{2}+n\mathbb{Z}).
> \end{align}
> $$
> $$
> \begin{align}
>  & \phi(a_{1}+mn\mathbb{Z})+\phi(a_{2}+mn\mathbb{Z}) \\
>  & =(a_{1}+m\mathbb{Z}, a_{1}+n\mathbb{Z})(a_{2}+m\mathbb{Z}, a_{2}+n\mathbb{Z}) \\
>  & =(a_{1}+a_{2}+m\mathbb{Z}, a_{1}+a_{2}+n\mathbb{Z}). 
> \end{align}
> $$

> [!Note]- Establishing that $\ker \phi={\text{lcm}(m, n)\mathbb{Z}}/{mn\mathbb{Z}}$
> The kernel of $\phi$ is given by
> $$
> \begin{align}
>  & \ker\phi  \\
>  & = \{ a+mn\mathbb{Z}\ | \  a+m\mathbb{Z}=m\mathbb{Z}, a+n\mathbb{Z}=n\mathbb{Z} \} \\
>  & =\{ a+mn\mathbb{Z}\ | \  a\in m\mathbb{Z}, a\in n\mathbb{Z} \} \\
>  & =\{ a+mn\mathbb{Z}\ | \  a\in m\mathbb{Z}\cap n\mathbb{Z} \}  \\
>  & =\{ a+mn\mathbb{Z}\ | \  a\in \text{lcm}(m, n)\mathbb{Z} \}  \\
>  & = \frac{\text{lcm}(m, n)\mathbb{Z}}{mn\mathbb{Z}}.
> \end{align}
> $$

For the forward implication, since the size of the domain and codomain are equal, we only have to show either surjectivity or injectivity to have bijectivity. We can show injectivity right here: if $\text{lcm}(m, n)=mn$, $\ker \phi=\{ 1 \}$.

Alternatively, we can first prove a more general result:

> [!Note]- Establishing that $\mathbb{Z}/\text{lcm}(m, n)\mathbb{Z}\cong \mathrm{Im}~\phi$
> From the first isomorphism theorem,
> $$
> \begin{align}
>  & \frac{\mathbb{Z}/mn\mathbb{Z}}{\ker\phi}\cong \mathrm{Im}~\phi \\
> \implies &  \frac{\mathbb{Z}/mn\mathbb{Z}}{\text{lcm}(m, n)\mathbb{Z}/mn\mathbb{Z}}\overset{\overline{\phi}}{\cong} \mathrm{Im}~\phi,
> \end{align}
> $$
> the isomorphism being defined by $\overline{\phi}\left( a+\frac{\text{lcm}(m, n)\mathbb{Z}}{mn\mathbb{Z}} \right)=\phi(a)$. From the third isomorphism theorem,
> $$
> \frac{\mathbb{Z}}{\text{lcm}(m, n)\mathbb{Z}}\overset{\tilde{\phi}}{\cong}\frac{\mathbb{Z}/mn\mathbb{Z}}{\text{lcm}(m, n)\mathbb{Z}/mn\mathbb{Z}}\overset{\overline{\phi}}{\cong} \mathrm{Im}~\phi,
> $$
> with $\tilde{\phi}$ being defined by $\tilde{\phi}(a+\text{lcm}(m, n)\mathbb{Z})=a+\frac{\text{lcm}(m, n)\mathbb{Z}}{mn\mathbb{Z}}$. Thus, $\phi_{1}\equiv \overline{\phi}\circ \tilde{\phi}$, $\phi_{1}(a+\text{lcm}(m, n))=(a+m\mathbb{Z}, a+n\mathbb{Z})$ is an isomorphism.

We can now show surjectivity by noting that $\mathrm{Im}~\phi$ must be isomorphic to a subgroup of $\mathbb{Z}/m\mathbb{Z}\times \mathbb{Z}/n\mathbb{Z}$ (which has order $mn$) of order $\text{lcm}(m, n)$. If $\text{lcm}(m, n)=mn$, the only subgroup $\mathrm{Im}~\phi$ can be isomorphic to is the entire codomain, making $\phi$ surjective, and hence an isomorphism.

---
... or you could proceed like Clare did. We have the exact sequence
$$
1_{\frac{\mathbb{Z}}{\text{lcm(m, n)}\mathbb{Z}}}\to \frac{\mathbb{Z}}{\text{lcm}(m, n)\mathbb{Z}}\xrightarrow{\phi_{1}} \frac{\mathbb{Z}}{m\mathbb{Z}}\times \frac{\mathbb{Z}}{n\mathbb{Z}}
$$
where $\phi_{1}$ is injective (note that its codomain has been extended). We know that $\text{lcm}(m, n)=mn$ when $m$ and $n$ are co-prime, so let's try to make $\phi_{1}$ an isomorphism. To achieve this, all we need to do is to make $\phi_{1}$ surjective. If we can construct another homomorphism $\phi_{2}$ in the sequence such that $\mathrm{Im}~\phi_{1}=\ker\phi_{2}$ and such that $\ker \phi_{2}=\mathbb{Z}/m\mathbb{Z}\times \mathbb{Z}/n\mathbb{Z}$, we will be done.

Define
$$
\phi_{2}: \frac{\mathbb{Z}}{m\mathbb{Z}}\times \frac{\mathbb{Z}}{n\mathbb{Z}}\to \frac{\mathbb{Z}}{m\mathbb{Z}+n\mathbb{Z}}
$$
by $\phi_{2}(a+m\mathbb{Z}, b+n\mathbb{Z})=a-b+m\mathbb{Z}+n\mathbb{Z}$. (The notation here is a little misleading, so remember that $m\mathbb{Z}+n\mathbb{Z}$ is actually a product of two groups. It is a group since the multiplication map $f:m\mathbb{Z}\times n\mathbb{Z}\to \mathbb{Z}$ is a homomorphism. Since we are working with an abelian group, all subgroups are normal subgroups, so the quotient is defined).

To check $\phi_{2}$ is well defined, let $(a_{1}+m\mathbb{Z}, b_{1}+n\mathbb{Z})=(a_{2}+m\mathbb{Z}, b_{2}+n\mathbb{Z})$. Then, $a_{1}-a_{2}\in m\mathbb{Z}$ and $b_{1}-b_{2}\in n\mathbb{Z}$. It follows that
$$
\begin{align}
 & a_{1}-a_{2}-(b_{1}-b_{2})\in m\mathbb{Z}+n\mathbb{Z} \\
\implies & (a_{1}-b_{1})-(a_{2}-b_{2})\in m\mathbb{Z}+n\mathbb{Z} \\
\implies &  a_{1}-b_{1}+m\mathbb{Z}+n\mathbb{Z}=a_{2}-b_{2}+m\mathbb{Z}+n\mathbb{Z}.
\end{align}
$$
$\phi_{2}$ is a homomorphism:
$$
\begin{align}
\phi_{2}(a_{1}+a_{2}+m\mathbb{Z}, b_{1}+b_{2}+n\mathbb{Z})&=a_{1}+a_{2}-b_{1}-b_{2}+m\mathbb{Z}+n\mathbb{Z} \\
&=\phi_{2}(a_{1}+m\mathbb{Z}, b_{1}+n\mathbb{Z})+\phi_{2}(a_{2}+m\mathbb{Z}, b_{2}+n\mathbb{Z})
\end{align}
$$
Clearly, $\phi_{2}$ is surjective, since $\phi_{2}(k+m\mathbb{Z}, n\mathbb{Z})=k+m\mathbb{Z}+n\mathbb{Z}$ for all $k\in \mathbb{Z}$ (this will be useful soon).

Now we will show that $\mathrm{Im}~\phi_{1}=\ker\phi_{2}$.
$$
\begin{align}
 & \mathrm{Im}~\phi_{1}=\{ (a+m\mathbb{Z}, a+n\mathbb{Z})\ | \  a\in \mathbb{Z} \}, \\
 & \ker\phi_{2}=\{ (a+m\mathbb{Z}, b+n\mathbb{Z})\ | \  a-b\in m\mathbb{Z}+n\mathbb{Z} \}.
\end{align}
$$
$\mathrm{Im}~\phi_{1} \subseteq\ker\phi_{2}$ should be obvious. If $(a+m\mathbb{Z}, b+n\mathbb{Z})\in\ker\phi_{2}$, $a-b=mz_{1}+nz_{2}$, i.e. $a-mz_{1}=b+nz_{2}=: c$. $(a+m\mathbb{Z}, b+n\mathbb{Z})=(a-mz_{1}+m\mathbb{Z}, b+nz_{2}+n\mathbb{Z})=(c+m\mathbb{Z}, c+n\mathbb{Z})$. Thus, $\ker\phi_{2}\subseteq \mathrm{Im}~\phi_{1}$.

Finally, we've got everything. If $\phi_{1}$ is an isomorphism, $\ker\phi_{2}=\mathrm{Im}~\phi_{1}=\mathbb{Z}/m\mathbb{Z}\times \mathbb{Z}/n\mathbb{Z}$, so $\mathrm{Im}~\phi_{2}=\left\{  1_{\frac{\mathbb{Z}}{m\mathbb{Z}+n\mathbb{Z}}}  \right\}$. Since $\phi_{2}$ is surjective, $\frac{\mathbb{Z}}{m\mathbb{Z}+n\mathbb{Z}}=\mathrm{Im}~\phi_{2}$. This implies $m$ and $n$ generate $\mathbb{Z}$, which implies $\text{gcd}(m, n)=1$ or $\text{lcm}(m, n)=mn$.

Conversely, if $\text{gcd}(m, n)=1$, then $\frac{\mathbb{Z}}{m\mathbb{Z}+n\mathbb{Z}}$ is the trivial group, and $\mathrm{Im}~\phi_{1}=\ker\phi_{2}=\frac{\mathbb{Z}}{m\mathbb{Z}}\times \frac{\mathbb{Z}}{n\mathbb{Z}}$, making $\phi_{1}$ an isomorphism.