---
id: "125"
---

fixed length encoding, variable length encoding:

An encoding is a **prefix free code** if no code of a character is a prefix of another character code.

It can be proved that the optimal data compression achievable by a character code can always be achieved with a prefix code.

Huffman encoding.

![[Pasted image 20250924124502.png]]

Each prefix code can be represented as a tree. The tree of an optimal encoding must be a full binary tree. 
$$
B(T)=\sum_{c\in C}f(c)d_{T}(c).
$$
$C$ is alphabet, $f(c)$ is the frequency of $c\in C$, and $d_{T}(c)$ is the depth of $c$ in $T$.

> [!Lemma]
> Let $x$ and $y$ be two characters with the lowest frequencies in $C$. Then there exists an optimal prefix code for $C$ in which the codewords for $x$ and $y$ have the same length and differ only in the last bit.

