---
id: "361"
date: 2025-11-28
time: 16:19
tags:
  - MOC
  - manifolds
draft: false
---
@tuIntroductionManifolds2011, @leeIntroductionTopologicalManifolds2000, @leeIntroductionSmoothManifolds2013

@leeIntroductionTopologicalManifolds2000 :
- Not a book on general topology
- Does not cover higher homotopy groups
- No Homology theory
- Meant as a prereq to an alg top course.

@leeIntroductionSmoothManifolds2013 :
- I have had to omit or barely touch on a number of important topics, such as complex manifolds, infinite-dimensional manifolds, connections, geodesics, curvature, fiber bundles, sheaves, characteristic classes, and Hodge theory

---

# Preliminaries

When working in $\mathbb{R}^{n}$, just use the standard basis, ffs. 





```latex 
% latex-id: f99b-5022-5814-4351-8f8b

\begin{tikzcd}
&&Y\ar[ddl, bend right, "f_{2}"']\ar[ddr, bend left, "f_{3}"]\ar[ddrr, bend left, "f_{4}"]\ar[ddll, bend right, "f_{1}"']\ar[d, "\exists!f"]&&\\
&&\prod X\ar[dr, "\pi_{3}"']\ar[dl, "\pi_{2}"]\ar[dll, "\pi_{1}"']\ar[drr, "\pi_{4}"]&&\\
X_{\alpha_{1}}&X_{\alpha_{2}}&\dots&X_{\alpha_{3}}&X_{\alpha_{5}}\\
\end{tikzcd} 
w2123123123123123123
```



```latex

% latex-id: 7fa0-2ad7-d641-4c14-a469
\begin{tikzcd}
&&Y\ar[ddl, bend right, "f_{2}"']\ar[ddr, bend left, "f_{3}"]\ar[ddrr, bend left, "f_{4}"]\ar[ddll, bend right, "f_{1}"']\ar[d, "\exists!f"]&&\\
&&\prod X\ar[dr, "\pi_{3}"']\ar[dl, "\pi_{2}"]\ar[dll, "\pi_{1}"']\ar[drr, "\pi_{4}"]&&\\
X_{\alpha_{1}}&X_{\alpha_{2}}&\dots&X_{\alpha_{3}}&X_{\alpha_{5}}\\
\end{tikzcd}
v3
```




> [!NOTE]
> 
> > [!NOTE]
> > [!Example]
> > 
> > hello
> > ```latex 
> > % latex-id: bc1f-f0d3-b772-4c04-92e4
> > 
> > \begin{tikzcd}
> > &&Y\ar[ddl, bend right, "f_{2}"']\ar[ddr, bend left, "f_{3}"]\ar[ddrr, bend left, "f_{4}"]\ar[ddll, bend right, "f_{1}"']\ar[d, "\exists!f"]&&\\
> > &&\prod X\ar[dr, "\pi_{3}"']\ar[dl, "\pi_{2}"]\ar[dll, "\pi_{1}"']\ar[drr, "\pi_{4}"]&&\\
> > X_{\alpha_{1}}&X_{\alpha_{2}}&\dots&X_{\alpha_{3}}&X_{\alpha_{5}}\\
> > \end{tikzcd}  
> > w1123123
> > ```

```latex
% latex-id: 51cf-c964-2fec-476f-9689
\usetikzlibrary {arrows.meta,automata,positioning}
\begin{tikzpicture}[->,>={Stealth[round]},shorten >=1pt,
                    auto,node distance=2cm,on grid,semithick,
                    inner sep=2pt,bend angle=45]
  \node[initial,state] (A)                    {$q_a$};
  \node[state]         (B) [above right=of A] {$q_b$};
  \node[state]         (D) [below right=of A] {$q_d$};
  \node[state]         (C) [below right=of B] {$q_c$};
  \node[state]         (E) [below=of D]       {$q_e$};

  \path [every node/.style={font=\footnotesize}]
        (A) edge              node {0,1,L} (B)
            edge              node {1,1,R} (C)
        (B) edge [loop above] node {1,1,L} (B)
            edge              node {0,1,L} (C)
        (C) edge              node {0,1,L} (D)
            edge [bend left]  node {1,0,R} (E)
        (D) edge [loop below] node {1,1,R} (D)
            edge              node {0,1,R} (A)
        (E) edge [bend left]  node {1,0,R} (A);
\end{tikzpicture}
```


```latex

% latex-id: 60f8-b8f2-43de-4695-81ab

\begin{tikzpicture} 
\draw[line width=1pt,green,rounded corners=4pt] 
  l-system
  [l-system={
    rule set={X -> X+YF+,Y->-FX-Y},
    axiom=FX, 
    angle=90,
    order=11, 
    step=10pt
    }
  ];
\draw[line width=1pt,red,rounded corners=4pt, rotate=90] 
  l-system
  [l-system={
    rule set={X -> X+YF+,Y->-FX-Y},
    axiom=FX, 
    angle=90,
    order=11, 
    step=10pt
    }
  ];  
\draw[line width=1pt,blue,rounded corners=4pt, rotate=180] 
  l-system
  [l-system={
    rule set={X -> X+YF+,Y->-FX-Y},
    axiom=FX, 
    angle=90,
    order=11, 
    step=10pt
    }
  ];  
\draw[line width=1pt,orange,rounded corners=4pt, rotate=270] 
  l-system
  [l-system={
    rule set={X -> X+YF+,Y->-FX-Y},
    axiom=FX, 
    angle=90,
    order=11, 
    step=10pt
    }
  ];  

\end{tikzpicture}
```
