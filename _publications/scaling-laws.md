---
title: "Scaling Laws Under the Microscope: Predicting Transformer Performance from Small Scale Experiments"
authors: "<b>Maor Ivgi</b>, Yair Carmon, Jonathan Berant"
collection: publications
permalink: /publication/scaling-laws
excerpt: 'Scaling laws are undoubtedly fascinating, but can they be harnessed for efficient model design? In this work, we explore their usefulness across a variety of language understanding tasks, and show that in some cases, they can!'
date: 2022-02-13
venue: 'Findings of EMNLP 2022'
paperurl: "https://arxiv.org/abs/2202.06387"
paperpdf: 'https://mivg.github.io/files/scaling-laws.pdf'
citation: '@misc{ivgi2022scaling, <br>
      title={Scaling Laws Under the Microscope: Predicting Transformer Performance from Small Scale Experiments},  <br>
      author={Maor Ivgi and Yair Carmon and Jonathan Berant}, <br>
      year={2022}, <br>
      eprint={2202.06387}, <br>
      archivePrefix={arXiv}, <br>
      primaryClass={cs.CL}
}'
---
Neural scaling laws define a predictable relationship between a model's parameter count and its performance after training in the form of a power law. However, most research to date has not explicitly investigated whether scaling laws can be used to accelerate model development. In this work, we perform such an empirical investigation across a wide range of language understanding tasks, starting from models with as few as 10K parameters, and evaluate downstream performance across 9 language understanding tasks. We find that scaling laws emerge at finetuning time in <i>some</i> NLP tasks, and that they can also be exploited for debugging convergence when training large models. Moreover, for tasks where scaling laws exist, they can be used to predict the performance of larger models, which enables effective model selection. However, revealing scaling laws requires careful hyperparameter tuning and multiple runs for the purpose of uncertainty estimation, which incurs additional overhead, partially offsetting the computational benefits.