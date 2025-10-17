---
tags:
  - TOC
id: "26"
---

> [!Definition]
> A **finite automaton** is a 5-tuple $(Q, \Sigma, \delta, q_{0}, F)$, where
> 1. $Q$ is a finite set of states,
> 2. $\Sigma$ is a finite set called the alphabet,
> 3. $\delta:Q\times\Sigma\to Q$ is the transition function,
> 4. $q_{0}\in Q$ is the start state, and
> 5. $F\subseteq Q$ is the set of accept states.

The set of all strings over an alphabet $\Sigma$ is denoted $\Sigma^{*}$. Any subset $L\subseteq\Sigma^{*}$ is called a language over the alphabet $\Sigma$. For nondeterministic finite automata, $\delta:Q\times\Sigma_{\epsilon}\to 2^{Q}$.

If $A$ is the set of all strings that machine $M$ accepts, we say that $A$ is the language of machine $M$, denoted by $L(M)=A$. 

We say that two automata are **equivalent** if they recognize the same language.

> [!Theorem]
> Every nondeterministic finite automaton has an equivalent deterministic finite automaton.

> [!Definition]
> A language is called a **recognizable language** if some finite automaton recognizes it.

Most references calls these "regular languages". 

> [!Definition]
> Let $A$ and $B$ be languages. We define the regular operations **union**, **concatenation**, and **star** as follows:
> 1. $A\cup B\equiv \{ x\ | \ x\in A \text{ or }x\in B\}$.
> 2. $A\circ B=\{ xy\ | \ x\in A\text{ and }y\in B \}$.
> 3. $A^{*}=\{ x_{1}\dots x_{k}\ | \ k\geq 0\text{ and each }x_{i}\in A \}$.

Note that $\epsilon\in A^{*}$ for all $A$. 

> [!Theorem]
> The class of recognizable languages is closed under regular operations.
> 
> > [!Proof]-
> > Let $L_{1}$ and $L_{2}$ be regular languages recognized by $N_{1}$ and $N_{2}$ respectively. 
> > 
> > **Closure under union**
> > We have to demonstrate an $N$ which recognizes $L_{1}\cup L_{2}$. One method is to use the product construction and have $(q_{1}, q_{2})\in Q_{N}$ be an accept state of $N$ if $q_{1}\in F_{1}$ or $q_{2}\in F_{2}$. Alternatively, use the following NFA construction:
> > 
> > ![[Pasted image 20250818192725.png]]
> > 
> > **Closure under concatenation**
> > 
> > ![[Pasted image 20250818192816.png]]
> > 
> > **Closure under star**
> > 
> > ![[Pasted image 20250818192900.png]]
> > 
> 

^172290

> [!Definition]
> Given an alphabet $\Sigma$, say that $R$ is a **regular expression** if $R$ is
> 1. $a$ for some $a\in\Sigma$, 
> 2. $\epsilon$, 
> 3. $\emptyset$,
> 4. $(R_{1}\cup R_{2})$, where $R_{1}$ and $R_{2}$ are regular expressions,
> 5. $(R_{1}R_{2})$, where $R_{1}$ and $R_{2}$ are regular expressions, or
> 6. $(R_{1}^{*})$, where $R_{1}$ is a regular expression.
> 

> [!Definition]
> Given an alphabet $\Sigma$, the set of **rational languages** are the smallest class of languages such that
> 1. it contains $\{ \epsilon \}$, $\emptyset$, and $\{ a \}$ for all $a\in\Sigma$, and
> 2. it is closed under the regular operations. 

^3062b2

This is precisely the class of languages described by regular expressions.

> [!Theorem]
> The class of recognizable languages is equal to the class of rational languages. That is, a language is recognized by a automaton iff it is described by a regular expression.
> 
> > [!Proof]-
> > Proving that a language described by a regular expression is recognizable is trivial: we can easily construct automata which recognize the languages in the first point of [[#^3062b2]], and we have already shown in [[#^172290]] that recognizable languages are closed under regular operations.
> > 
> > See @sipserIntroductionTheoryComputation2013 1.60 for a proof of the converse using generalized nondeterministic finite automata (NFAs with REs labelling transition arrows instead of alphabets).

> [!Example] More NFA constructions
> A **homomorphism** is a function $h:\Sigma^{*}\to\Gamma^{*}$ such that $h(uv)=h(u)h(v)$, and $h(\epsilon)=\epsilon$. 
> Show that recognizable languages are also closed under intersection, complement, homomorphisms, and inverse homomorphisms.
> 
> Let $L_{1}$ and $L_{2}$ be regular languages recognized by $N_{1}$ and $N_{2}$ respectively. 
> 
> **Closure under complement**
> 
> Complement $F_{N}$.
> 
> **Closure under intersection**
> 
> $L_{1}\cap L_{2}=(L_{1}\cup L_{2})^{c}$. We have shown that recognizable languages are closed under union and complement. Alternatively, use the product construction, but make it such that  $(q_{1}, q_{2})\in Q_{N}$ is an accept state of $N$ if $q_{1}\in F_{1}$ *and* $q_{2}\in F_{2}$. 
> 
> **Closure under homomorphisms**
> 
> First, we have to prove that if $L\subseteq\Sigma^{*}$ is a recognizable and $h:\Sigma^{*}\to\Gamma^{*}$ is a homomorphism, then $h(L)\subseteq\Gamma^{*}$ is also recognizable.
> 
> Let $A$ be an NFA over $\Sigma$ recognizing $L$. Replace every edge in $A$ labelled $a\in\Sigma$ with a path which reads $h(a)\in\Gamma^{*}$. 
> 
> Next, we have to prove that if $M\subseteq\Gamma^{*}$ is recognizable, then $h^{-1}(M)\subseteq\Sigma^{*}$ is also recognizable.
> 
> Let $B$ be an NFA over $\Gamma$ recognizing $M$. Create a copy $B'$ of $B$. Remove all transitions in $B'$. Connect two states $\alpha, \beta$ in $B'$ with an arrow labelled $a\in\Sigma$ if $\beta$ can be reached from $\alpha$ on reading $h(a)$ in $B$.

^6beea1

