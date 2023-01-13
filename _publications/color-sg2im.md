---
title: "Scene Graph to Image Generation with Contextualized Object Layout Refinement"
authors: "<b>Maor Ivgi</b>, Yaniv Benny, Avichai Ben-David, Jonathan Berant, and Lior Wolf"
collection: publications
permalink: /publication/color-sg2im
excerpt: 'A novel approach to gradually generate realistic image layouts from scene-graphs by attending to all objects in the generated layout simultaneously.'
date: 2020-09-23
venue: 'ICIP 2020'
code: 'https://github.com/yanivbenny/COLoR'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/9506651'
paperpdf: 'https://mivg.github.io/files/color-sg2im.pdf'
citation: '@inproceedings{ivgi2021scene, <br>
  title={Scene Graph to Image Generation with Contextualized Object Layout Refinement}, <br>
  author={Ivgi, Maor and Benny, Yaniv and Ben-David, Avichai and Berant, Jonathan and Wolf, Lior}, <br>
  booktitle={2021 IEEE International Conference on Image Processing (ICIP)}, <br>
  pages={2428--2432}, <br>
  year={2021}, <br>
  organization={IEEE}
}'
---
Generating images from scene graphs is a challenging task that attracted substantial interest recently. Prior works have approached this task by generating an intermediate layout description of the target image. However, the representation of each object in the layout was generated independently, which resulted in high overlap, low coverage, and an overall blurry layout. We propose a novel method that alleviates these issues by generating the entire layout description gradually to improve inter-object dependency. We empirically show on the COCO-STUFF dataset that our approach improves the quality of both the intermediate layout and the final image. Our approach improves the layout coverage by almost 20 points and drops object overlap to negligible amounts.