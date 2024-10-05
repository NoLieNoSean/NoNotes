>[!Theorem]
>If $p$ is prime and $p  \nmid a$, then $a^{p-1}\equiv  1\mod p$. 

>**Proof**
>Assume $p$ is prime and $p\nmid a$. $a$ is congruent to one of $1, 2, \dots ,p-1 \mod p$. Multiply all of these by $a$: $a, 2a, \dots, (p-1)a$. We will show that this is a rearrangement of the congruence classes we started with. Clearly, none of $a, 2a, \dots, (p-1)a$ can be congruent to $0 \mod p$. We will now show that all of the new congruence classes are distinct. Pick two values: $ra$, $sa$. If $ra\equiv sa \mod p$, $(r-s)a\equiv0\mod p$. Thus, $p\mid r-s$, which can only happen if $r=s$:
>$$
>\begin{align*}
>  & 0<r<p \\
> 0<s<p  \implies & -p<-s<0 \\ \\
>  \therefore -p<r-s<p.
>\end{align*}
>$$
>Thus, $a, 2a, \dots, (p-1)a$ is a rearrangement of $1, 2, \dots ,p-1 \mod p$. Thus, 
>$$
>\begin{align*}
>a\cdot 2a\cdot \dots \cdot (p-1)a & \equiv 1\cdot 2\cdot \dots \cdot p-1 \mod p \\
>(p-1)!~a^{p-1} & \equiv(p-1)!\mod p \\
>a^{p-1} & \equiv 1 \mod p,
>\end{align*}
>$$
>since $p\nmid (p-1)!$. ❏

>[!Example]
>```hs
>ghci> a=[1..10]
>[1,2,3,4,5,6,7,8,9,10]
>ghci> map (\x-> mod x 11) (map (*2) a)
>[2,4,6,8,10,1,3,5,7,9]
>ghci> map (\x-> mod x 11) (map (*3) a)
>[3,6,9,1,4,7,10,2,5,8]
>ghci> map (\x-> mod x 11) (map (*4) a)
>[4,8,1,5,9,2,6,10,3,7]
>ghci> map (\x-> mod x 11) (map (*5) a)
>[5,10,4,9,3,8,2,7,1,6]
>ghci> map (\x-> mod x 11) (map (*6) a)
>[6,1,7,2,8,3,9,4,10,5]
>ghci> map (\x-> mod x 11) (map (*7) a)
>[7,3,10,6,2,9,5,1,8,4]
>ghci> map (\x-> mod x 11) (map (*8) a)
>[8,5,2,10,7,4,1,9,6,3]
>ghci> map (\x-> mod x 11) (map (*9) a)
>[9,7,5,3,1,10,8,6,4,2]
>ghci> map (\x-> mod x 11) (map (*10) a)
>[10,9,8,7,6,5,4,3,2,1]
>```
>Can be packaged up in a matrix:
>$$
>\begin{bmatrix}
>1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\
>2&4&6&8&10&1&3&5&7&9 \\
>3&6&9&1&4&7&10&2&5&8 \\
>4&8&1&5&9&2&6&10&3&7 \\
>5&10&4&9&3&8&2&7&1&6 \\
>6&1&7&2&8&3&9&4&10&5 \\
>7&3&10&6&2&9&5&1&8&4 \\
>8&5&2&10&7&4&1&9&6&3 \\
>9&7&5&3&1&10&8&6&4&2 \\
>10&9&8&7&6&5&4&3&2&1
>\end{bmatrix}
>$$

**Example 1.1.9:** It can be deduced from Fermat's little theorem that every element in $(\mathbb{Z}/p\mathbb{Z})^{\times}$ has an inverse: For any $a\in (\mathbb{Z}/p\mathbb{Z})^{\times}$, one of $a, 2a, \dots, (p-1)a$ must be $1$. We can also see why this doesn't work when $p$ is not prime. For example, if $p=10$, the matrix is
$$

\begin{bmatrix}
1&2&3&4&5&6&7&8&9 & *\\
2&4&6&8&0&2&4&6&8\\
3&6&9&2&5&8&1&4&7 & *\\
4&8&2&6&0&4&8&2&6\\
5&0&5&0&5&0&5&0&5\\
6&2&8&4&0&6&2&8&4\\
7&4&1&8&5&2&9&6&3 & *\\
8&6&4&2&0&8&6&4&2\\
9&8&7&6&5&4&3&2&1 & *\\
\end{bmatrix}.
$$
Only elements which are co-prime with 10 have inverses. Those not co-prime with 10 fall into cycles, and can never reach $10k+1$ since they always reach $10k$. 






