---
tags:
  - Lecture
  - TOC
date: 2025-08-06
time: 09:14
---

# Finite state automata

$$
A=(Q, \Sigma, \Delta, Q_{0}, Q_{F}),
$$
where $Q$ is the set of all states, $\Sigma$ is the alphabet, $\Delta \subseteq Q\times\Sigma \times Q$, $Q_{0}, Q_{F}\subseteq Q$. 

$\Delta$ can also be thought of as a function $Q\times\Sigma\to 2^{Q}$. If the image of $\Delta$ consists of only singletons, then $A$ is called a deterministic automata.

Languages recognizable by finite state automata are called "recognizable".

Exercise: design an NFA and a DFA which accepts a word if its first and second last letters are the same.