---
tags:
  - ALG2
id: "10"
date: March 2025
---
Consider the symmetries of a cube with faces labelled $F, B, L, R, U,$ and $D$. 
![[Pasted image 20250330124602.jpeg]]
Consider the position above to be the "identity" position. How do we represent the symmetries of this object? Of course, I could just show you an image of the cube in that symmetry orientation, but ideally, one would strive for a string representation. Here's one way to encoded a symmetry $\sigma$ of the cube as a string: Let the first letter denote the face of the identity cube where $\sigma$ takes the face $F$ of the identity cube. For example, if we rotated the cube left about the $z$ axis by 90 degrees, our text representation would begin with $L$. Similarly, the subsequent characters indicate where the faces $B$, $L$, $R$, $U$, and $D$ have moved. The text representation of the identity cube is $F B L R U D$, and the text representation of a 90 degree left rotation about the $z$ axis is $LRBFUD$. 

This encoding scheme captures the spatial transformation by describing how the faces of the _identity_ cube are rearranged. Interestingly, permutations of the entries in this string correspond to spatial permutations of the cube’s faces (see [[LEC ALG2 9#Conjugacy in Sn|here]] for the distinction between entry and place permutations). For example, the edge symmetry $(U\ D)(L\ B)(F\ R)$ permutes the elements of the string representation entry-wise, but always corresponds to the same spacial transformation of the cube. This is because the permutation acts on the positions of the identity cube’s faces, not the letters printed on them.

For a complete list of the symmetries of the cube, see [[LEC DMAT 14#An example 2-colourings of a cube|here]]. 

