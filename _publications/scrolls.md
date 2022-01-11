---
title: "SCROLLS: Standardized CompaRison Over Long Language Sequences"
authors: "Uri Shaham, Elad Segal, <b>Maor Ivgi</b>, Avia Efrat, Ori Yoran, Adi Haviv, Ankit Gupta, Wenhan Xiong, Mor Geva, Jonathan Berant, Omer Levy"
collection: publications
permalink: /publication/scrolls
excerpt: 'SCROLLS is a suite of datasets that require synthesizing information over long texts. The benchmark includes seven natural language tasks across multiple domains, including summarization, question answering, and natural language inference.'
date: 2022-01-11
venue: 'Preprint'
homepage: 'https://scrolls-benchmark.com'
code: 'https://github.com/tau-nlp/scrolls'
paperurl: "https://arxiv.org/abs/2104.05062"
paperpdf: 'https://mivg.github.io/files/scrolls.pdf'
citation: '@misc{shaham2022scrolls, <br>
    title={SCROLLS: Standardized CompaRison Over Long Language Sequences}, <br>
    author={Uri Shaham and Elad Segal and Maor Ivgi and Avia Efrat and Ori Yoran and Adi Haviv and Ankit Gupta and Wenhan Xiong and Mor Geva and Jonathan Berant and Omer Levy}, <br>
    year={2022}, <br>
    eprint={2201.03533}, <br>
    archivePrefix={arXiv}, <br>
    primaryClass={cs.CL} <br>
}'
---
NLP benchmarks have largely focused on short texts, such as sentences and paragraphs, even though long texts comprise a considerable amount of natural language in the wild. We introduce SCROLLS, a suite of tasks that require reasoning over long texts. We examine existing long-text datasets, and handpick ones where the text is naturally long, while prioritizing tasks that involve synthesizing information across the input. SCROLLS contains summarization, question answering, and natural language inference tasks, covering multiple domains, including literature, science, business, and entertainment. Initial baselines, including Longformer Encoder-Decoder, indicate that there is ample room for improvement on SCROLLS. We make all datasets available in a unified text-to-text format and host a live leaderboard to facilitate research on model architecture and pretraining methods.