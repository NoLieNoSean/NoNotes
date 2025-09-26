
# Greedy algorithms

For a greedy approach to be viable, the problem must have
- optimal substructure, that is, a solution of a subproblem is contained in the solution of the parent problem.
- the greedy choice property: a globally optimal solution can be arrived at by locally optimal choices.

[!Example] Minimum spanning tree
Recall [[LEC DMAT 19#Kruskal's algorithm for MSTs]]. 

Optimal substructure: Let $T$ be a MST of $G$, and $e\in T$. If $T'$ is a MST of $G\setminus e$, then $T_{e}=T'\cup \{ e \}$ is a MST of $G$.

Proof: Let $T^{*}$ be a MST of $G$ that contains $e$. $T^{*}\setminus e$ is a spanning tree of $G'$. $W(T')\leq W(T^{*}\setminus e)=W(T^{*})-W(e)$. Thus, $W(T_{e})=W(T^{'})+W(e)\leq W(T^{*})$.

This gives us a generic algorithm:
1. Find select a "safe edge" $e$.
2. Contract the edge $e$.
3. Recurse on $G\setminus e$.
4. Expand and add $e$.

Greedy choice property: Given any $S\subseteq V$, $(V, S\setminus V)$ is a cut of $G$. 

Claim: For any cut $(S, V\setminus S)$ in a graph $G=(V, E, W)$ any least weight crossing edge is in some spanning tree.

Prim's algorithm