---
title: "In-Context Learning with Long-Context Models: An In-Depth Exploration"
authors: "Amanda Bertsch, <b>Maor Ivgi</b>, Uri Alon, Jonathan Berant, Matthew R. Gormley, Graham Neubig"
collection: publications
permalink: /publication/long-icl
excerpt: 'We explore the effectiveness of long-context models using large in-context demonstration sets, revealing that their success largely stems from referencing similar examples, and we uncover unique behaviors of many-shot in-context learning in this new research.'
date: 2024-04-30
venue: 'NAACL 2025. <b>Language Modeling SAC Award at NAACL 2025</b>'
paperurl: 'https://arxiv.org/abs/2405.00200'
paperpdf: 'https://arxiv.org/pdf/2405.00200.pdf'
citation: "@article{bertsch2024iclearning, <br>
  title={In-Context Learning with Long-Context Models: An In-Depth Exploration}, <br>
  author={Amanda Bertsch and Maor Ivgi and Uri Alon and Jonathan Berant and Matthew R. Gormley and Graham Neubig}, <br>
  journal={arXiv:2405.00200}, <br>
  year={2024}, <br>
}"
---
As model context lengths continue to increase, the number of demonstrations that can be provided in-context approaches the size of entire training datasets. We study the behavior of in-context learning (ICL) at this extreme scale on multiple datasets and models. We show that, for many datasets with large label spaces, performance continues to increase with hundreds or thousands of demonstrations. We contrast this with example retrieval and finetuning: example retrieval shows excellent performance at low context lengths but has diminished gains with more demonstrations; finetuning is more data hungry than ICL but can sometimes exceed long-context ICL performance with additional data. We use this ICL setting as a testbed to study several properties of both in-context learning and long-context models. We show that long-context ICL is less sensitive to random input shuffling than short-context ICL, that grouping of same-label examples can negatively impact performance, and that the performance boosts we see do not arise from cumulative gain from encoding many examples together. We conclude that although long-context ICL can be surprisingly effective, most of this gain comes from attending back to similar examples rather than task learning.