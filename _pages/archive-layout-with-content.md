[comment]: <> (---)

[comment]: <> (title: "Archive Layout with Content")

[comment]: <> (layout: archive)

[comment]: <> (permalink: /archive-layout-with-content/)

[comment]: <> (---)

[comment]: <> (A variety of common markup showing how the theme styles them.)

[comment]: <> (# Header one)

[comment]: <> (## Header two)

[comment]: <> (### Header three)

[comment]: <> (#### Header four)

[comment]: <> (##### Header five)

[comment]: <> (###### Header six)

[comment]: <> (## Blockquotes)

[comment]: <> (Single line blockquote:)

[comment]: <> (> Quotes are cool.)

[comment]: <> (## Tables)

[comment]: <> (| Entry            | Item   |                                                              |)

[comment]: <> (| --------         | ------ | ------------------------------------------------------------ |)

[comment]: <> (| [John Doe]&#40;#&#41;    | 2016   | Description of the item in the list                          |)

[comment]: <> (| [Jane Doe]&#40;#&#41;    | 2019   | Description of the item in the list                          |)

[comment]: <> (| [Doe Doe]&#40;#&#41;     | 2022   | Description of the item in the list                          |)

[comment]: <> (| Header1 | Header2 | Header3 |)

[comment]: <> (|:--------|:-------:|--------:|)

[comment]: <> (| cell1   | cell2   | cell3   |)

[comment]: <> (| cell4   | cell5   | cell6   |)

[comment]: <> (|-----------------------------|)

[comment]: <> (| cell1   | cell2   | cell3   |)

[comment]: <> (| cell4   | cell5   | cell6   |)

[comment]: <> (|=============================|)

[comment]: <> (| Foot1   | Foot2   | Foot3   |)

[comment]: <> (## Definition Lists)

[comment]: <> (Definition List Title)

[comment]: <> (:   Definition list division.)

[comment]: <> (Startup)

[comment]: <> (:   A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.)

[comment]: <> (#dowork)

[comment]: <> (:   Coined by Rob Dyrdek and his personal body guard Christopher "Big Black" Boykins, "Do Work" works as a self motivator, to motivating your friends.)

[comment]: <> (Do It Live)

[comment]: <> (:   I'll let Bill O'Reilly [explain]&#40;https://www.youtube.com/watch?v=O_HyZ5aW76c "We'll Do It Live"&#41; this one.)

[comment]: <> (## Unordered Lists &#40;Nested&#41;)

[comment]: <> (  * List item one )

[comment]: <> (      * List item one )

[comment]: <> (          * List item one)

[comment]: <> (          * List item two)

[comment]: <> (          * List item three)

[comment]: <> (          * List item four)

[comment]: <> (      * List item two)

[comment]: <> (      * List item three)

[comment]: <> (      * List item four)

[comment]: <> (  * List item two)

[comment]: <> (  * List item three)

[comment]: <> (  * List item four)

[comment]: <> (## Ordered List &#40;Nested&#41;)

[comment]: <> (  1. List item one )

[comment]: <> (      1. List item one )

[comment]: <> (          1. List item one)

[comment]: <> (          2. List item two)

[comment]: <> (          3. List item three)

[comment]: <> (          4. List item four)

[comment]: <> (      2. List item two)

[comment]: <> (      3. List item three)

[comment]: <> (      4. List item four)

[comment]: <> (  2. List item two)

[comment]: <> (  3. List item three)

[comment]: <> (  4. List item four)

[comment]: <> (## Buttons)

[comment]: <> (Make any link standout more when applying the `.btn` class.)

[comment]: <> (## Notices)

[comment]: <> (**Watch out!** You can also add notices by appending `{: .notice}` to a paragraph.)

[comment]: <> ({: .notice})

[comment]: <> (## HTML Tags)

[comment]: <> (### Address Tag)

[comment]: <> (<address>)

[comment]: <> (  1 Infinite Loop<br /> Cupertino, CA 95014<br /> United States)

[comment]: <> (</address>)

[comment]: <> (### Anchor Tag &#40;aka. Link&#41;)

[comment]: <> (This is an example of a [link]&#40;http://github.com "Github"&#41;.)

[comment]: <> (### Abbreviation Tag)

[comment]: <> (The abbreviation CSS stands for "Cascading Style Sheets".)

[comment]: <> (*[CSS]: Cascading Style Sheets)

[comment]: <> (### Cite Tag)

[comment]: <> ("Code is poetry." ---<cite>Automattic</cite>)

[comment]: <> (### Code Tag)

[comment]: <> (You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.)

[comment]: <> (### Strike Tag)

[comment]: <> (This tag will let you <strike>strikeout text</strike>.)

[comment]: <> (### Emphasize Tag)

[comment]: <> (The emphasize tag should _italicize_ text.)

[comment]: <> (### Insert Tag)

[comment]: <> (This tag should denote <ins>inserted</ins> text.)

[comment]: <> (### Keyboard Tag)

[comment]: <> (This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` tag.)

[comment]: <> (### Preformatted Tag)

[comment]: <> (This tag styles large blocks of code.)

[comment]: <> (<pre>)

[comment]: <> (.post-title {)

[comment]: <> (  margin: 0 0 5px;)

[comment]: <> (  font-weight: bold;)

[comment]: <> (  font-size: 38px;)

[comment]: <> (  line-height: 1.2;)

[comment]: <> (  and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;)

[comment]: <> (})

[comment]: <> (</pre>)

[comment]: <> (### Quote Tag)

[comment]: <> (<q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer)

[comment]: <> (### Strong Tag)

[comment]: <> (This tag shows **bold text**.)

[comment]: <> (### Subscript Tag)

[comment]: <> (Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.)

[comment]: <> (### Superscript Tag)

[comment]: <> (Still sticking with science and Isaac Newton's E = MC<sup>2</sup>, which should lift the 2 up.)

[comment]: <> (### Variable Tag)

[comment]: <> (This allows you to denote <var>variables</var>.)

[comment]: <> ({% include base_path %})

[comment]: <> ({% for post in site.pages %})

[comment]: <> ({% include archive-single.html %})

[comment]: <> ({% endfor %})