--- Day 3: Perfectly Spherical Houses in a Vacuum ---
Santa is delivering presents to an infinite two-dimensional grid of houses.

He begins by delivering a present to the house at his starting location, and then an elf at the North Pole calls him via radio and tells him where to move next. Moves are always exactly one house to the north (^), south (v), east (>), or west (<). After each move, he delivers another present to the house at his new location.

However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once. How many houses receive at least one present?

For example:

> delivers presents to 2 houses: one at the starting location, and one to the east.
^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.









































-->
<body>
<header><div><h1 class="title-global"><a href="/">Advent of Code</a></h1><nav><ul><li><a href="/2015/about">[About]</a></li><li><a href="/2015/events">[Events]</a></li><li><a href="https://teespring.com/stores/advent-of-code" target="_blank">[Shop]</a></li><li><a href="/2015/auth/login">[Log In]</a></li></ul></nav></div><div><h1 class="title-event">&nbsp;&nbsp;&nbsp;<span class="title-event-wrap">int y=</span><a href="/2015">2015</a><span class="title-event-wrap">;</span></h1><nav><ul><li><a href="/2015">[Calendar]</a></li><li><a href="/2015/support">[AoC++]</a></li><li><a href="/2015/sponsors">[Sponsors]</a></li><li><a href="/2015/leaderboard">[Leaderboard]</a></li><li><a href="/2015/stats">[Stats]</a></li></ul></nav></div></header>

<div id="sidebar">
</div><!--/sidebar-->

<main>
<article class="day-desc"><h2>--- Day 3: Perfectly Spherical Houses in a Vacuum ---</h2><p>Santa is delivering presents to an infinite two-dimensional grid of houses.</p>
<p>He begins by delivering a present to the house at his starting location, and then an elf at the North Pole calls him via radio and tells him where to move next.  Moves are always exactly one house to the north (<code>^</code>), south (<code>v</code>), east (<code>&gt;</code>), or west (<code>&lt;</code>).  After each move, he delivers another present to the house at his new location.</p>
<p>However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once.  How many houses receive <em>at least one present</em>?</p>
<p>For example:</p>
<ul>
<li><code>&gt;</code> delivers presents to <code>2</code> houses: one at the starting location, and one to the east.</li>
<li><code>^&gt;v&lt;</code> delivers presents to <code>4</code> houses in a square, including twice to the house at his starting/ending location.</li>
<li><code>^v^v^v^v^v</code> delivers a bunch of presents to some very lucky children at only <code>2</code> houses.</li>
</ul>
</article>
<p>To play, please identify yourself via one of these services:</p>
<p><a href="/auth/github">[GitHub]</a> <a href="/auth/google">[Google]</a> <a href="/auth/twitter">[Twitter]</a> <a href="/auth/reddit">[Reddit]</a> <span class="quiet">- <a href="/about#faq_auth">[How Does Auth Work?]</a></span></p>
</main>

<!-- ga -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-69522494-1', 'auto');
ga('set', 'anonymizeIp', true);
ga('send', 'pageview');
</script>
<!-- /ga -->
</body>
</html>