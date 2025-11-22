---
title: desilike 初体验 —— 高度集成的观测宇宙学门户工具包
tags:
  - cosmology
  - observation
createTime: 2025/06/30 19:03:32
permalink: /blog/desilike/
---


今天大概看了下 [desilike](https://github.com/cosmodesi/desilike) ，跑了 [tutorial](https://github.com/cosmodesi/desilike-tutorials) 中的 intro notebook 。（还有一个 bindings 的 notebook ，需要和其它 inference code 比如 [cobaya](https://github.com/CobayaSampler/cobaya) 做嫁接时再仔细看。） 在跑的过程中也大体看了下 desilike 自身的代码。也算是第一次亲眼见识了，现如今**乍一看很庞杂的观测宇宙学数据分析**，居然真的可以用一个简单的 python 包集成。当然，准确地来说， desilike 仅专注于 ==宇宙学 inference== 的部分，而不涉及观测数据的处理和 clustering 的测量，这部分或许仍要诉诸 [LSS](https://github.com/desihub/LSS) 等工具包，但就 inference 的部分， desilike 不仅包含了两点统计（甚至部分 bispectrum ）的多种模型，从简单的 template 和  perturbation theory 到新潮些的 EFT ，还有简单估算 covariance 的能力，理论部分还加入了简单的 emulator ， inference 的部分更是有 likelihood 模块，还和多种 sampling 算法都做了 binding 及内化集成。可以说只要交出 observable ， desilike 就几乎可以做接下来的所有分析。

而具体到 theories 和 observables 部分，下面又细分 galaxy clustering, Lya, 和 weak lensing ，涵盖星系巡天的三大主要方法。

……

整个库组织方式非常简单清晰，基本是跟着最简单的 intro notebook 跑下来一遍就懂整体的思路了，**常见的用法**也都能在这个 notebook 中找到示例。更重要的是，看清了整体的代码结构后，再在其中增加什么功能也有信心了。

总之，对于初学宇宙学 inference 来说， desilike 应该是一款很好的“门户工具”，从这里出发，可以顺藤摸瓜到： 1. 大量理论模型，既有早期 BAO templete，发展一点的 ShapeFit，又有多种 EFT code ； 2. inference 的几大块 —— sampling, likelihood, 和 covariance estimation 。
当然，虽然这篇随笔只“想到哪儿写到哪儿”地随意码了些简单的初体验，但可能也是在一些对 EFT models, sampling 的提前了解基础上的感发，对于“真正的萌新”，体验可能有所不同，欢迎交流。