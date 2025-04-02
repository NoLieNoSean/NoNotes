---
draft: true
---
# Problem 1


---
# Problem 2


---
# Problem 3

If we delete a node $v$ from a tree (together with all edges that end there), we get a graph whose connected components are trees. We call these connected components  
the branches at node $v$. Prove that every tree has a node such that every branch at this node contains at most half the nodes of the tree.

Let $T$ be a tree on $n$ nodes. Pick an arbitrary vertex $\mathbf{v}_{0}$ of $T$. Let $C^{0}_{1}, C^{0}_{2}, \dots, C^{0}_{k_{0}}$ be the branches at $\mathbf{v}_{0}$. If $|C^{0}_{i}|\leq \left\lfloor  \frac{n}{2}  \right\rfloor$ for each $1\leq i\leq k_{0}$, we are done. Else, let $|C^{0}_{\alpha}|=\left\lfloor  \frac{n}{2}  \right\rfloor+\lambda_{0}$, for some $1\leq\alpha\leq k_{0}$ and positive integer $\lambda_{0}$. Let $\mathbf{v}_{1}$ be the vertex that connects $C^{0}_{\alpha}$ to $\mathbf{v}_{0}$. Define $C^{1}_{1}\equiv T\setminus C^{0}_{\alpha}$, and let $C^{1}_{2}, \dots, C^{1}_{k_{1}}$ be the remaining branches at $\mathbf{v}_{1}$. Note that $|C^{1}_{1}|=n-\left\lfloor  \frac{n}{2}  \right\rfloor-\lambda_{0}\leq \left\lfloor  \frac{n}{2}  \right\rfloor$. 

If $|C^{1}_{i}|\leq \left\lfloor  \frac{n}{2}  \right\rfloor$ for each $2\leq i\leq k_{1}$, we are done. Else, let $|C^{1}_{\beta}|=\left\lfloor  \frac{n}{2}  \right\rfloor+\lambda_{1}$, for some $2\leq\beta\leq k_{1}$ and positive integer $\lambda_{1}$. Note that $\lambda_{1}<\lambda_{0}$. Thus, if we continue in this manner, we are guaranteed to find a node $\mathbf{v}$ such that every branch contains at most half the nodes of the tree in no more than $\lambda_{0}$ steps. 

---
# Problem 4


---
# Problem 5


---
# Problem 6


---
# Problem 7


---
# Problem 8


