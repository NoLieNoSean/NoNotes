---
id: "224"
---

# Directed graphs

> [!Definition]
> A **Topological sort** of a digraph $G$ is an ordering of all its vertices in a sequence such that for every edge $(a, b)$, vertex $u$ comes before vertex $v$ in the sequence.

A digraph admits a tolopogical sorting iff it is a **directed acyclic graphs**.

> [!Definition]
> A **source** is a vertex with no incoming edge, and a **sink** is a vertex with no outgoing edge.

A digraph with no cycles has a sink.

---

> [!Definition]
> An **Eulerian tour** is a graph $G$ is a closed walk that uses every edge of $G$ exactly once.

> [!Definition]
> A **cycle decomposition** of a graph $G$ is a partition of $E(G)$ into cycles.

> [!Claim]
> A graph $G$ has a cycle decomposition iff every vertex has an even degree.

Proof of $\impliedby$
Induction on number of edges.
Base case: $0$ edges. 
Suppose $G$ has $m> 0$ edges. Pick any component of $G$ which has an edge in it.
That component has minimum degree $2$, so it contains a cycle $C$. Note that in $G\setminus C$ (keep the vertices, delete the edges) all the degrees are still even. Use induction hypothesis.

> [!Claim]
> A connected graph (isolated vertices are okay) has an Eulerian tour iff every vertex in that graph has an even degree.

Given a graph with a cycle decomposition, we will build a Eulerian tour. Maintain two entities:
- A partial tour (PT) which is a closed walk not using an edge more than once.
- A set of unprocessed cycles $U$, which is a cycle decomposition of the edges that are not part of $PT$.
Initially, we have $PT$ to be one of the cycles in our cycle decomposition and $U$ be the remaining cycles.

One by one, we'll remove cycles from $U$ and incorporate them into $PT$.

At each step, find a cycle in $U$ that contains one of the vertices visited by $PT$. There must be such a cycle, otherwise $G$ would contain two connected components.

---

# Hamiltonian cycles

No nice equivalent condition.

necessary conditions: 
- graph having cut vertex cannot be hamiltonian.
- A bipartite graph in which the two parts hare different sizes cannot be hamiltonian.

A graph _G_ is said to be _t_-tough for a given [real number](https://en.wikipedia.org/wiki/Real_number "Real number") t if, for every [integer](https://en.wikipedia.org/wiki/Integer "Integer") _k_ > 1, _G_ cannot be split into _k_ different [connected components](https://en.wikipedia.org/wiki/Connected_component_\(graph_theory\) "Connected component (graph theory)") by the removal of fewer than _tk_ vertices.

All hamiltonian graphs are tough.

however, not all tough graphs are hamiltonian.

Sufficient condition: If $G$ has $n\geq 3$ vertices and minimum degree of $G$ is $\geq \frac{n}{2}$, then $G$ is Hamiltonian (Dirac's theorem).

> [!Theorem]
> graph $G$ with $n$ vertices. Suppose $s$ and $t$ are two non-adjacent vertices with $deg(s)+deg(t)\geq n$. If $G+st$ has a hamiltonian cycle, then so does $G$.

Dirac's theorem can be proved from this. 