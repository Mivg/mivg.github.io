---
title: "DoG is SGD's Best Friend: A Parameter-Free Dynamic Step Size Schedule"
authors: "<b>Maor Ivgi</b>, Oliver Hinder, Yair Carmon"
collection: publications
permalink: /publication/dog
excerpt: 'DoG is a tuning-free dynamic SGD step size formula, backed by strong theoretical guarantees and empirically demonstrated over many domains and model-architectures to achieve comparable results to well-tuned SGD with best-practice learning-rate schedule.'
date: 2023-02-08
venue: 'ICML (2023)'
code: 'https://github.com/formll/dog'
paperurl: 'https://arxiv.org/abs/2302.12022'
paperpdf: 'https://mivg.github.io/files/dog.pdf'
citation: "@article{ivgi2023dog, <br>
  title={{D}o{G} is {SGD}'s Best Friend: A Parameter-Free Dynamic Step Size Schedule}, <br>
  author={Maor Ivgi and Oliver Hinder and Yair Carmon}, <br>
  journal={arXiv:2302.12022}, <br>
  year={2023}, <br>
}"
---
We propose a tuning-free dynamic SGD step size formula, which we call Distance over Gradients (DoG). The DoG step sizes depend on simple empirical quantities (distance from the initial point and norms of gradients) and have no ``learning rate'' parameter. Theoretically, we show that a slight variation of the DoG formula enjoys strong parameter-free convergence guarantees for stochastic convex optimization assuming only <i>locally bounded</i> stochastic gradients. Empirically, we consider a broad range of vision and language transfer learning tasks, and show that DoG's performance is close to that of SGD with tuned learning rate. We also propose a per-layer variant of DoG that generally outperforms tuned SGD, approaching the performance of tuned Adam.