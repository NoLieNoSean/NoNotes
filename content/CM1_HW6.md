`Vasudeva S Nanjangud`

## 5.81
Let the two masses be $m_{1}$ and $m_{2}$, with $m_{1}$ moving to the right with a velocity $\mathbf{u}_{1}$ and $m_{2}$ stationary.
![[Pasted image 20240927232739.png|200]]
The position of the CM is given by $\mathbf{r}'=\frac{{m\mathbf{r}_{1}+m\mathbf{r}_{2}}}{2m}=\frac{{\mathbf{r}_{1}+\mathbf{r}_{2}}}{2}$, where $\mathbf{r}_{1}$ and $\mathbf{r}_{2}$ are the positions of $m_{1}$ and $m_{2}$ with respect to the lab frame. The velocity of the CM is $\mathbf{u}'=\frac{d\mathbf{r}'}{dt}=\frac{\mathbf{u}_{1}}{2}$. It follows that $\mathbf{u}_{1}'=\frac{\mathbf{u}_{1}}{2}$ and $\mathbf{u}_{2}'=-\frac{\mathbf{u}_{1}}{2}$, where $\mathbf{u}_{1}'$ and $\mathbf{u}_{2}'$ are the velocities of $m_{1}$ and $m_{2}$ respectively in the CM frame. 

Let the velocities of $m_{1}$ and $m_{2}$ after the collision be $\mathbf{v}_{1}'$ and $\mathbf{v}_{2}'$ in the CM frame. Say $\mathbf{v}_{1}'$ makes an angle $\theta$ with the horizontal in the CM frame. Since the initial momentum was zero, it follows from the conservation of momentum that $\mathbf{v}_{2}'$ must make an angle $\theta-\pi$ with the horizontal and have the same magnitude as $\mathbf{v}_{1}'$. Thus, $\mathbf{v}_{1}'=-\mathbf{v}_{2}'\equiv \mathbf{v}'$.
![[Pasted image 20240927212300.png|400]]
Angles are measured counterclockwise from the horizontal axis.

Also, since KE is conserved in the CM frame, $2\left( \frac{1}{2}m \frac{{|\mathbf{u}_{1}|^{2}}}{4} \right)=2\left( \frac{1}{2}m {|\mathbf{v}'|^{2}} \right)$. So, $|\mathbf{v}'|=\frac{|\mathbf{u}_{1}'|}{2}$. 

Let the final velocities of the masses in the lab frame be $\mathbf{v}_{1}$ and $\mathbf{v}_{2}$ respectively. We know that $\mathbf{v}_{1}=\mathbf{u}'+\mathbf{v}_{1}'=\frac{\mathbf{u}_{1}}{2}+\mathbf{v}'$ and $\mathbf{v}_{2}=\mathbf{u}'+\mathbf{v}_{2}'=\frac{\mathbf{u}_{1}}{2}-\mathbf{v}'$. 
![[Pasted image 20240927230356.png|400]]
Elementary geometry tells us that $\mathbf{v}_{1}$ and $\mathbf{v}_{2}$ must be inclined at $\frac{\theta}{2}$ and $\frac{\theta}{2}-\frac{\pi}{2}$ to the horizontal axis. Hence, they are perpendicular. The magnitudes of the final velocities can be obtained using the law of cosines.
$$
\begin{align}
|\mathbf{v}_{1}|=\sqrt{ \frac{|\mathbf{u}_{1}|^{2}}{4}+ \frac{|\mathbf{u}_{1}|^{2}}{4}+\frac{|\mathbf{u}_{1}|^{2}}{2}\cos\theta}=\frac{|\mathbf{u}_{1}|}{2}\sqrt{ 2+2\cos\theta }=|\mathbf{u}_{1}|\cos \frac{\theta}{2} \\
|\mathbf{v}_{2}|=|\mathbf{u}_{1}|\sin \frac{\theta}{2}
\end{align}
$$

---

## 5.91
Consider the system at an arbitrary time $t$, when the chain is not completely extended. Since the heap is in free fall, it has fallen by a distance $\frac{1}{2}gt^{2}$. The force applied at the top end can be expressed as the sum of the force required to hold this $\frac{1}{2}gt^{2}$ length of chain at rest ($F_{1}$), and the force required to induce the change in momentum experienced by the part of the chain which comes to rest during a time interval $dt$ ($F_{2}$).

The first part of the force,  $F_{1}=(\text{mass of still chain})g=\left( \frac{1}{2}gt^{2}\sigma \right)g$.

To find the second part of the force, we must find the change in momentum of the piece of chain that comes to rest in $dt$. The finial momentum is $0$. The initial momentum is $dm\ v=(\sigma |v|\ dt)(v)=-\sigma(gt)^{2}dt$. Thus,
$$
F_{2}=\frac{dp}{dt}=\frac{{0-(-\sigma(gt)^{2}dt)}}{dt}=\sigma(gt)^{2}
$$
So, 
$$
F=F_{1}+F_{2}=\frac{1}{2}\sigma(gt)^{2}+\sigma(gt)^{2}=\frac{3}{2}\sigma(gt)^{2}.
$$
Now, the chain will unravel completely when $\frac{1}{2}gt^{2}=L \implies t=\sqrt{ \frac{2L}{g} }$. So, for $t\ge\sqrt{ \frac{2L}{g} }$, $F_{2}=0$, and $F_{1}$ becomes constant at $L\sigma g$. Thus, we have
$$
F=\begin{cases}
\frac{3}{2}\sigma(gt)^{2} & t<\sqrt{ \frac{2L}{g} } \\
L\sigma g  & t\ge \sqrt{ \frac{2L}{g} }
\end{cases}.
$$
