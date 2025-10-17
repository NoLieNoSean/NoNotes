---
tags:
  - Lecture
  - TOC
date: 2025-08-06
time: 09:14
id: "241"
---

# Finite state automata

$$
A=(Q, \Sigma, \Delta, Q_{0}, Q_{F}),
$$
where $Q$ is the set of all states, $\Sigma$ is the alphabet, $\Delta \subseteq Q\times\Sigma \times Q$, $Q_{0}, Q_{F}\subseteq Q$. 

$\Delta$ can also be thought of as a function $Q\times\Sigma\to 2^{Q}$. If the image of $\Delta$ consists of only singletons, then $A$ is called a deterministic automata.

Languages recognizable by finite state automata are called "recognizable".

Exercise: design an NFA and a DFA which accepts a word if its first and second last letters are the same.


###### Key terms

Non-deterministic Finite State Automata (NFA) $\mathcal{A} = (Q, \Sigma, \Delta, Q_0, Q_F)$, run, accepting run, language of an automaton, recognizable language.

###### Exercises: 

design an NFA for the set of words with their first letter same as their second-last letter.

###### Skills to be developed:

learn to design NFA for a given language, learn to argue why some automaton is not correctly recognizing a language (give a counter example), learn to prove that some automaton is indeed correctly recognizing a language. 

###### References

 sipser 1.1 and 1.2 and kozen lecture 5(before equivalance of NFA and DFA)

###### Problems

 kozen homework 2 question 2(pg 302) , hopcroft 2.3.4, 2.2.10  
  
show that the language accepted by figure 2.6 of hopcroft is not the same as the language- "set of all binary strings where 0s and 1s are always occurred in between each other even number of times(i.e ((00)* (11)*)* (like 00110000111100 is accepted as whenever there are continuous 0s or 1s they occur even times  but 00110001111 is not accepted as there a continuous string of 3 zeroes sandwiched between two 1s)