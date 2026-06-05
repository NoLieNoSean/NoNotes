---
id: "462"
date: 2026-06-01
time: 16:07
tags:
---
> [!Abstract]
> We develop the theory of Euclidean and abstract simplicial complexes, and show that 1, 2, and 3-manifolds are triangulable. 
# Euclidean simplicial complexes

An **affine map** between vector spaces is a map $f:V\to W$ of the form $f(x)=a(x)+b$, where $a$ is a linear map and $b\in W$. 

> [!Definition] Simplex
> 1. Let $S=\{ v_{0}, \dots, v_{k} \}\subseteq \mathbb{R}^{n}$ be in general position. The **simplex** with vertex set $S$ is the convex hull of $S$ with the subspace topology. 
> 2. The integer $k$ is called the **dimension** of the simplex. 
> 3. Let $\sigma$ be a simplex. Each simplex with nonempty vertex set $S'\subseteq S$ is called a **face** of $\sigma$. The $k-1$ dimensional faces of a $k$-simplex are called its **boundary faces**. 
> 4. We definite the **boundary** of a simplex to be the union of its boundary faces, and its **interior** to be the simplex minus its boundary. 

The interior of a $k$-simplex is sometimes called an **open** $k$-simplex. Note that an open simplex is generally not an open subset of $\mathbb{R}^{n}$, and the interior and boundary of $\sigma$ as a simplex may not be equal to its topological interior and boundary as a subset of $\mathbb{R}^{n}$. 

> [!Definition] SImplicial map
> A map $f:\sigma\to \tau$ between simplices is called a **simplicial map** if it is the restriction of an affine map that takes vertices of $\sigma$ to vertices of $\tau$. 

> [!Proposition]
> 4. Simplicial maps between a given pair of simplices are in bijection with maps between their vertices. 
> 5. Any two $k$-simplices are homeomorphic by a simplicial homeomorphism. 
> 6. Every $k$-simplex is homeomorphic to $\overline{\mathbb{B}^{k}}$. 

^3f7ad3

Thus, a $k$-simplex is a $k$-dimensional manifold with boundary. 

> [!Definition]
> The boundary of a simplex is the union of its boundary faces, and its interior is the simplex minus the boundary. 

> [!Definition] Euclidean simplicial complex
> A **(Euclidean) simplicial complex** is a collection $K$ of simplices ==in some Euclidean space== $\mathbb{R}^{n}$ satisfying the following:
> 1. If $\sigma\in K$, then every face of $\sigma$ is in $K$. 
> 2. The intersection of any two simplices in $K$ is either empty or a face of each. 
> 3. Every point in a simplex of $K$ has a neighborhood that intersects at most finitely many simplices of $K$. 
> 
> The **dimension** of $K$ is the maximum dimension of any simplex in $K$. 
> 
> Given a Euclidean complex $K$, the union of all the simplices in $K$ with the subspace topology is denoted by $|K|$ and called the **(Euclidean) polyhedron** of $K$. 

> [!Definition]
> 4. Let $K$ be a Euclidean simplicial complex. Any subset $K'\subseteq K$ this is itself a simplicial complex is called a **subcomplex** of $K$. In particular, for any nonnegative integer $k$, the subset $K^{(k)}\subseteq K$ consisting of all simplices of dimension less than or equal to $k$ is a subcomplex, called the $k$-skeleton of $K$. 
> 5. Let $K$ and $L$ be two Euclidean complexes. A continuous map $f:|K|\to |L|$ whose restriction to each simplex of $K$ is a simplicial map to a simplex of $L$ is called a **simplicial map**, and is denoted by $f:K\to L$. The restriction of $f$ to $K^{(0)}$ is called the **vertex map** of $f$. 

# Abstract simplicial complexes

> [!Proposition]
> Let $K$ and $L$ be Euclidean simplicial complexes. Let $f_{0}:K^{(0)}\to L^{(0)}$ be a bijective map such that $\{ v_{0}, \dots, v_{k} \}$ are the vertices of a simplex of $K$ iff $\{ f_{0}(v_{0}), \dots, f_{0}(v_{k}) \}$ are the vertices of a simplex of $L$. Then, $|K|$ and $|L|$ are homeomorphic by a *simplicial map*. 

Thus, a simplicial complex is completely determined, up to simplicial homeomorphism, by knowledge of which sets of vertices span simplices. 

Motivated by this observation, we define

> [!Definition] Abstract simplicial complex
> 1. An **(abstract) simplicial complex** is a collection $\mathcal{K}$ of nonempty finite sets called **(abstract) simplices** subject to one condition: if $\sigma\in \mathcal{K}$, then every nonempty subset of $\sigma$ is in $\mathcal{K}$. 
> 2. Any element of a simplex $\sigma\in \mathcal{K}$ is called a **vertex** of $\sigma$, and any nonempty subset of $\sigma$ is called a **face** of $\sigma$. 
> 3. The dimension of an abstract simplex consisting of $k+1$ vertices is defined to be $k$. The dimension of a simplicial complex is the maximum of the dimensions of its simplices, if it exists. 
> 4. We say that $\mathcal{K}$ is a **finite complex** if $\mathcal{K}$ is a finite set, and **locally finite** if every vertex belongs to only finitely many simplices. 

> [!Definition] Simplicial map
> Given two abstract complexes $\mathcal{K}, \mathcal{L}$, a map $f:\mathcal{K}\to \mathcal{L}$ is called a **simplicial map** if it is of the form $f(\{ v_{0}, \dots, v_{k} \})=\{ f_{0}(v_{0}), \dots, f_{0} (v_{k})\}$ for some map $f_{0}:\mathcal{K}^{(0)}\to \mathcal{L}^{(0)}$, called the **vertex map** of $f$ (which must have the property that $\{ f(v_{0}), \dots, f(v_{k}) \}\in \mathcal{L}$ whenever $\{ v_{0}, \dots, v_{k} \}\in \mathcal{K}$ ). 
> 
> A simplicial map $f$ is called an **isomorphism** if $f_{0}$ is a bijection and $\{ v_{0}, .., v_{k} \}$ is a simplex of $\mathcal{K}$ iff $\{ f_{0}(v_{0}), \dots, f_{0}(v_{k}) \}$ is a simplex of $\mathcal{L}$. 

^32a8ce

> [!Definition] Vertex scheme
> Given a Euclidean simplicial complex $K$, let $\mathcal{K}$ denote the set of all those finite subsets $\{ v_{0}, \dots, v_{k} \}\subseteq K^{(0)}$ that consist of the vertices of some simplex of $K$. It is immediate that $\mathcal{K}$ is an abstract simplicial complex, called the **vertex scheme** of $K$. 

^bdba91

Thus, two Euclidean simplicial complexes are simplicially homeomorphic iff their vertex schemes are isomorphic. 
## Topologizing abstract simplicial complexes

> [!Definition] Geometric realization of an abstract simplex
> Let $\{ v_{0}, \dots, v_{k} \}$ be an abstract simplex. Define its **geometric realization** to be the $k$-simplex $\langle v_{0}, \dots, v_{k} \rangle$ in the finite-dimensional vector space $\mathbb{R}\langle v_{0}, \dots, v_{k} \rangle$. This is homeomorphic to a Euclidean $k$-simplex. We will denote the geometric realization of an abstract simplex $\sigma$ by $|\sigma|$.

> [!Definition] Geometric realization of an abstract complex
> Let $\mathcal{K}$ be an abstract simplicial complex. Let $|\mathcal{K}|$ denote the union of all the geometric realizations of the simplices of $\mathcal{K}$, with points in two simplices identified whenever they have the same expression as linear combinations of vertices. 
> 
> Let $\coprod_{\sigma\in \mathcal{K}}|\sigma|$ be the disjoint union of the geometric realizations of all the simplices of $\mathcal{K}$, with the disjoint union topology. Let $\pi:\coprod_{\sigma\in \mathcal{K}}|\sigma|\to |\mathcal{K}|$ be the natural map that sends $|\sigma|$ to itself. We give $|\mathcal{K}|$ the [[The quotient topology#^4fa85d|quotient topology]] with respect to $\pi$. [^1]
> 
> With this topology, $|\mathcal{K}|$ is called the **geometric realization** of $\mathcal{K}$. 

^551fbf

> [!Definition]
> Given any collection $\{ S_{\alpha} \}_{\alpha\in A}$ of subspaces of a topological space $X$ whose union is $X$, the topology of $X$ is said to be **coherent** with the subspaces $S_{\alpha}$ if a set is open in $X$ iff its intersection with each $S_{\alpha}$ is open in $S_{\alpha}$. 

Clearly, given a collection $\{ S_{\alpha} \}_{\alpha\in A}$ of subsets of a set $X$ and topologies $\tau_{\alpha}$ for each $S_{\alpha}$, there is a unique topology on $X$ that is coherent with the collection $\{ (S_{\alpha}, \tau_{\alpha}) \}_{\alpha\in A}$. 

> [!Lemma]
> The topology of $|\mathcal{K}|$ is the unique topology coherent with the collection of subspaces $\{ |\sigma|:\sigma\in \mathcal{K} \}$. 

> [!Definition]
> Any [[#^32a8ce|simplicial map]] $f:\mathcal{K}\to \mathcal{L}$ between abstract complexes induces a continuous map $|f|:|\mathcal{K}|\to |\mathcal{L}|$, where $|f|$ restricted to each simplex $|\sigma|$ is just the Euclidean simplicial map determined by the vertex map of $f$. 

> [!Lemma]
> If $\mathcal{K}$ is the [[#^bdba91|vertex scheme]] of a Euclidean simplicial complex $K$, then the [[#^551fbf|geometric realization]] of $\mathcal{K}$ is homeomorphic to $|K|$. 
> 
> ```latex
> % latex-id: 046a-a238-f267-4657-b797
> \begin{document}
> % https://q.uiver.app/#q=WzAsNCxbMCwwLCJLIl0sWzEsMCwiXFxtYXRoY2Fse0t9Il0sWzEsMSwifFxcbWF0aGNhbHtLfXwiXSxbMCwxLCJ8S3wiXSxbMCwxXSxbMCwzXSxbMSwyXSxbMywyLCJcXHNpbSIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dXQ== 
> \[\begin{tikzcd} K & {\mathcal{K}} \\ {|K|} & {|\mathcal{K}|} \arrow[from=1-1, to=1-2] \arrow[from=1-1, to=2-1] \arrow[from=1-2, to=2-2] \arrow["\sim"', tail reversed, from=2-1, to=2-2] \end{tikzcd}\]
> \end{document}
> ```

> [!Question]
> When is an abstract simplicial complex the vertex scheme of an Euclidean simplicial complex? That is, what are the conditions required on $\mathcal{K}$ for $|\mathcal{K}|$ to embed into $\mathbb{R}^{n}$ for some $n$?
> 
> This is possible iff $\mathcal{K}$ is finite-dimensional, locally finite, and countable. Showing that these are necessary is easy; proving sufficiency takes work. See @leeIntroductionTopologicalManifolds2000 Prob 5-5.

> [!Remark]
> The reason why Euclidean simplicial complexes require local finiteness, but abstract simplices do not

> [!Definition] Polyhedron and triangulation
> Any topological space that is homeomorphic to the geometric realization of an $n$-dimensional simplicial complex is called an $n$-dimensional **polyhedron**. A particular homeomorphism is called a **triangulation** of $X$. Any space that admits a triangulation (i.e., any polyhedron) is said to be **triangulable**. 

^d8556a

> [!Proposition]
> Let $\mathcal{K}$ be a simplicial complex. Then $|\mathcal{K}|$ is connected iff $\mathcal{K}$ is edge path connected, in which case any tow vertices can be jointed by a reduced edge path. 


[^1]: #q Why can't we just take the subspace topology here? Is it because the complex may not be finite dimensional?

# Triangulation theorems

> [!Definition]
> A **Graph** is a $1$-dimensional [[#^d8556a|polyhedron]] with a given triangulation. A **subgraph** of a graph is the polyhedron of a $1$-dimensional subcomplex. 

> [!Lemma]
> Suppose $X$ is a topological space, and $G_{1}, \dots, G_{k}$ are finitely many closed subspaces of $X$ whose union is $X$. Then, the topology of $X$ is coherent with these subspaces. 

> [!Theorem] @leeIntroductionTopologicalManifolds2000 5.10, 5.11
> Every $1$-manifold can be [[#^d8556a|triangulated]] by a $1$-dimensional simplicial complex $\mathcal{K}$ such that each vertex of $\mathcal{K}$ lies on exactly two edges.
> 
> > [!Proof]-
> > 
> > 1. Construct sequence of graphs
> > 2. Claim: Either $e$ intersects each of the edges of $G_{n}$ only at vertices, or $e$ is entirely contained in one of the edges of $G_{n}$. 
> > 3. Throw away edges of $S$ contained in $G_{n}$; define $G_{n+1}=G_{n}\cup S$. 
> > 4. Use sequence of graphs to triangulate $M$. 
> 

> [!Theorem] @moiseGeometricTopologyDimensions1977 8.3
> Every $2$-manifold admits a triangulation by a $2$-dimensional simplicial complex, in which each edge lies on exactly two $2$-simplices.

It is possible to prove these, although we will not:

> [!Theorem]
> Every $3$-manifold is triangulable.

> [!Proposition]
> In every triangulated manifold, every $(n-1)$-simplex is a face of no more than tow $n$-simplices. 
