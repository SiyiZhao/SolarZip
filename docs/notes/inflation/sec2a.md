---
title: Sec.2a
createTime: 2025/05/05 17:06:31
permalink: /inflation/dbsec2a/
---

::: note 注
Baumann 的书第一章主要是对历史和观测的一些简要介绍，我们从第二章  *Inflation in Effective Field Theory (EFT)* 开始读。

:::

## Inflation 理论的构建

Inflation 的能标很高，要解释其中涉及的 **现象** ，我们需要含引力的量子场论。
从更加“基本”的理论或原理导出 Inflation action 是理论研究的核心问题。一般来说有两种途径：
- 一种是 top-down 的方法，直接从 “ UV 完备的理论” （比如弦论）中导出低能下的结果；
- 另一种是 bottom-up 的思路，从低能理论出发，把涉及更高能标的部分用一些有效参数来代表。

最终得到的是能标介于现有理论（比如 QFT ）和 “ UV 完备的理论” 之间的，工作在 inflation 能标的有效场论 (EFT)。


## EFT 的原则 

当达到一定的能标，新的自由度参与进来时，低能理论不再工作，需要高能的新理论。

### Action

cutoff scale $\Lambda$ 介于 inflation 能标 $M$ 和更高能标 $M_{\rm UV}$ 之间。EFT 的 action 应该包含所有在 $\Lambda$ 以下的自由度 (DoF) ，并且满足所有的对称性 (symmetry) 。

1. DoF
   1. light DoF: $m < \Lambda$, included in EFT.
   2. heavy DoF: $m > \Lambda$, integrate out. (If not know, or can not compute, just parametrize their effects.)

#### top-down, integrate out heavy DoF by path integral.

path integral heavy DoF 的时候， loops of heavy DoF 会带来 non-local 的 quantum 效应。但是在 low energy limit ($E\ll \Lambda < M$) 下，non-local 的效应可以用 local operators 来近似。

因为这些 operators 的效应正比于 $(E/M)^{\delta_i-4}$，又可以进一步分为 relavent ($\delta_i < 4$) 和 irrelevant ($\delta_i > 4$) 两类。随着 dimension $\delta_i$ 的增大，operator 的效应越来越小。对于给定的精度，只需要考虑有限个 operators。

#### bottom-up, parametrize ignorance

$$
\mathcal{L}_{\mathrm{eff}}[\phi]=\mathcal{L}_l[\phi]+\sum_i c_i \frac{\mathcal{O}_i[\phi]}{\Lambda^{\delta_i-4}},
$$
where the prefactors $c_i$ are dimensionless Wilson coefficients, and $\mathcal{O}_i$ are all operators, of dimension $\delta_i$, allowed by the symmetries of the UV theory.

### Naturalness