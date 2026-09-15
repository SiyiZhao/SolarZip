---
title: 宇宙学中的“初始条件”
tags:
  - cosmology
  - physics
createTime: 2025/05/10 15:56:06
permalink: /blog/cosmoics/
draft: true
---

![](/images/logo.jpeg)

## Initial Conditions (ICs)

如果你关注过“暴胀”“原初非高斯性”等话题，你可能见过“初始条件” (Initial Conditions, ICs) 这个词。事实上，它在不同的语境下有不同的含义，而不像字面看起来那么 trivial 。

在进入宇宙学的 context 之前，我们可以先回顾物理学给“初始条件”赋予的原本含义。
当我们研究某个系统的**动力学**时，除了需要知道描述“系统如何随时间演化”的动力学方程，还需要知道系统在某个特定时刻的状态，这样才能用动力学方程求解系统接下来的演化行为。这个额外的“系统在某个特定时刻的状态”，就是我们说的“初始条件”，或者说，系统在时间维度上的单边“边界条件”。比如在经典力学中，我们需要给出初始时刻每个粒子的位置和速度；在量子力学中，我们需要给出每个粒子的初始波函数。

### Naïve Understanding

在宇宙学的“标准”语境里，对“初始条件”最直接的理解基于我们对“宇宙中的不均匀性的来源”的理解： Inflation 时期的 quantum fluctuations 因为指数膨胀被拽出视界，固定成了经典涨落，在 Inflation 结束后依次重新返回视界内并藉由引力增长，形成了宇宙中的“大尺度结构” (Large Scale Structure, LSS)。
**那么“初始条件”就应该指 Inflation 结束时的 scalar perturbation 。** 
这些涨落整体的幅度在 $10^{-5}$ 量级，接近于高斯分布，因而近似可以被两点统计性质完全描述。因为其功率谱是简单的 power-law 形式，“原初涨落”的统计性质可以进一步简化为两个参数： power-law index $n_{\rm s}$ 和某个特征频率 $k_{\rm pivot}$ 处的功率谱幅度 $A_{\rm s}$。这两个参数可以作为 $\Lambda$CDM 模型的参数加入到标准的宇宙学分析里。

### N-body Simulation 的初始条件

标准的宇宙学分析其实包括两套，针对现代宇宙学历史上两个最主要的可观测效应：光子的各向异性，和物质的不均匀性。（插一句， Dodelson 的 《Modern Cosmology》 第二版便是以此思路安排关于“宇宙中的涨落”的讨论。）前者对应的观测目标是 Cosmic Microwave Background (CMB)，是上世纪后半叶到本世纪初期宇宙学的主要观测手段；后者对应的观测目标是 Large Scale Structure (LSS)，是在本世纪后来居上的新探针，包括针对星系的测光和光谱巡天、弱引力透镜、中性氢 21 cm 线巡天等观测方法。


### Structure Evolution 的 ICs 

[TBD]

当我们考虑原初非高斯性，特别是 squeezed-limit bispectra 的时候，相对论效应变得重要起来。因为 squeezed-limit bispectra 描述了一个 long mode 和两个 short modes 的耦合关系，long mode 的波长可以接近 horizon size，导致 Newtonian 近似不再成立。 

另一方面， small scale 进入视界较早，可能在 radiation- dominated era 就已经进入视界了。因此我们在求解结构演化的初始条件时，也需要考虑早期的演化。但大多数工作都没考虑？

## PNG 

### Primordial non-Gaussianity & "Initial" non-Gaussianity