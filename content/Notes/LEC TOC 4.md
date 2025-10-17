---
tags:
  - TOC
  - Lecture
date: 2025-08-11
time: 09:15
id: "243"
---
##### **Key Terms**

Deterministic Finite State Automata (DFA), Nondeterministic Finite State Automata (NFA), ε-NFA, ε-closures, Product Construction, Closure Properties (Intersection). 

##### **Skills to be developed** 

In this lecture, we learned about NFAs with ε-transitions, where the automaton can move between states without reading any input symbol. We introduced the concept of the ε-closure of a state, which is the set of states reachable from it by taking zero or more ε-transitions. We also discussed a method to remove ε-transitions while preserving the language recognized by the automaton. This shows that DFAs, NFAs, and ε-NFAs are equally powerful in terms of the languages they can accept. Next, we studied the product construction of two automata. This construction allows us to track the runs of both automata simultaneously and can be used to construct an automaton that recognizes the intersection of their languages.

##### **References**

###### For ε-NFA

@sipserIntroductionTheoryComputation2013 Section 1.2 under the subsection _The Equivalence of NFAs and DFAs_ on page 56.

###### For Product Construction  

@sipserIntroductionTheoryComputation2013 Section 1.1 under the subsection _The Regular Operations, Theorem 1.25._ Page 45.  (It is used for union, but can also be used for intersection) 

##### **Practice Problems**

$a^{-1}(L(A))=\{ w\ | \ aw\in L(A) \}$.

1) Given an automata A accepting the language L(A) construct an automata for a-1L(A). 

2) Given a ε-NFA, if we take the set of final states and replace it with the ε-closures of those states, will the resulting automaton accept the same language? why or why not?