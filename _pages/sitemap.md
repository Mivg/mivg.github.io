[comment]: <> (---)

[comment]: <> (layout: archive)

[comment]: <> (title: "Sitemap")

[comment]: <> (permalink: /sitemap/)

[comment]: <> (author_profile: true)

[comment]: <> (---)

[comment]: <> ({% include base_path %})

[comment]: <> (A list of all the posts and pages found on the site. For you robots out there is an [XML version]&#40;{{ base_path }}/sitemap.xml&#41; available for digesting as well.)

[comment]: <> (<h2>Pages</h2>)

[comment]: <> ({% for post in site.pages %})

[comment]: <> (  {% include archive-single.html %})

[comment]: <> ({% endfor %})

[comment]: <> (<h2>Posts</h2>)

[comment]: <> ({% for post in site.posts %})

[comment]: <> (  {% include archive-single.html %})

[comment]: <> ({% endfor %})

[comment]: <> ({% capture written_label %}'None'{% endcapture %})

[comment]: <> ({% for collection in site.collections %})

[comment]: <> ({% unless collection.output == false or collection.label == "posts" %})

[comment]: <> (  {% capture label %}{{ collection.label }}{% endcapture %})

[comment]: <> (  {% if label != written_label %})

[comment]: <> (  <h2>{{ label }}</h2>)

[comment]: <> (  {% capture written_label %}{{ label }}{% endcapture %})

[comment]: <> (  {% endif %})

[comment]: <> ({% endunless %})

[comment]: <> ({% for post in collection.docs %})

[comment]: <> (  {% unless collection.output == false or collection.label == "posts" %})

[comment]: <> (  {% include archive-single.html %})

[comment]: <> (  {% endunless %})

[comment]: <> ({% endfor %})

[comment]: <> ({% endfor %})
