---
id: "327"
date: 2025-10-23
time: 14:01
tags:
---

``` Macaulay2
GenExtremal= (q, b)-> (
    Q=set {1};
    for i from 1 to q  do Q=Q+set{i};
    B=set {1};
    for i from 1 to b  do B=B+set{i};
    V={{{}}};
    for i from 0 to q do (
        s = V#i;
        Elist = {};
        for j from 0 to #s-1 do(
            for k from 1 to b do(
                Elist = append(Elist, append(s#j, k));
            );
        );
        V=append(V, Elist);
    );

    PS= subsets Q;
    Vars = {};
    for i from 1 to #PS-1 do(
        for func in V#(#PS#i) do(
            Vars = append(Vars, x_{PS#i, func});
        );
    );

    R = QQ[Vars];
    IdealGens = {};
    for i from 1 to q do (
        e_i=1;
        for j from 0 to #PS-1 do (
            if isSubset(set{i},PS#j) then (
                for func in V#(#PS#j) do (
                    e_i=e_i*x_{PS#j, func};
                );
            );
        );
      
        IdealGens=IdealGens|{e_i};
    );

    return monomialIdeal(IdealGens);
)
```