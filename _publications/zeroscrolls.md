---
title: "ZeroSCROLLS: A Zero-Shot Benchmark for Long Text Understanding"
authors: "Uri Shaham, <b>Maor Ivgi</b>, Avia Efrat, Jonathan Berant, Omer Levy"
collection: publications
permalink: /publication/zeroscrolls
excerpt: 'ZeroSCROLLS is a suite of datasets that require synthesizing information over long texts. The benchmark includes ten natural language tasks across multiple domains, including summarization, question answering, aggregated sentiment classification and information reordering.'
date: 2023-05-24
venue: 'Arxiv preprint'
paperurl: "https://arxiv.org/abs/2305.14196"
paperpdf: 'https://arxiv.org/pdf/2305.14196.pdf'
citation: '@misc{shaham2023zeroscrolls, <br>
      title={ZeroSCROLLS: A Zero-Shot Benchmark for Long Text Understanding},  <br>
      author={Uri Shaham and Maor Ivgi and Avia Efrat and Jonathan Berant and Omer Levy}, <br>
      year={2023}, <br>
      eprint={2305.14196}, <br>
      archivePrefix={arXiv}, <br>
      primaryClass={cs.CL} <br>
}'
---
We introduce ZeroSCROLLS, a zero-shot benchmark for natural language understanding over long texts, which contains only test sets, without training or development data. We adapt six tasks from the SCROLLS benchmark, and add four new datasets, including two novel information fusing tasks, such as aggregating the percentage of positive reviews. Using ZeroSCROLLS, we conduct a comprehensive evaluation of both open-source and closed large language models, finding that Claude outperforms ChatGPT, and that GPT-4 achieves the highest average score. However, there is still room for improvement on multiple open challenges in ZeroSCROLLS, such as aggregation tasks, where models struggle to pass the naive baseline. As the state of the art is a moving target, we invite researchers to evaluate their ideas on the live ZeroSCROLLS leaderboard