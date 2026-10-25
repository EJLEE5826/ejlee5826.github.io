---
layout: page
permalink: /projects/
title: Projects
nav: true
nav_order: 2
images:
  lightbox2: true
---
<div class="pub-tabs" role="tablist" aria-label="Projects language">
  <button type="button" role="tab" id="tab-ko" aria-controls="ko" aria-selected="true">한국어</button>
  <button type="button" role="tab" id="tab-en" aria-controls="en" aria-selected="false">English</button>
</div>
<div class="pub-panel" id="ko" role="tabpanel" aria-labelledby="tab-ko" lang="ko">
{% include projects_list.liquid data=site.data.projects_ko prefix='ko-' %}
</div>
<div class="pub-panel" id="en" role="tabpanel" aria-labelledby="tab-en" lang="en" hidden>
{% include projects_list.liquid data=site.data.projects_en prefix='' %}
</div>

<script defer src="{{ '/assets/js/pub-lightbox-strip.js' | relative_url }}"></script>
<script>
  // Same tab behaviour as the CV page: Korean by default; #en and English anchors (#hycal) open English.
  (function () {
    var tabs = document.querySelectorAll(".pub-tabs [role=tab]");
    function show(id, push) {
      tabs.forEach(function (t) {
        var on = t.getAttribute("aria-controls") === id;
        t.setAttribute("aria-selected", on);
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      if (push) history.replaceState(null, "", id === "ko" ? location.pathname : "#" + id);
    }
    tabs.forEach(function (t) {
      t.addEventListener("click", function () { show(t.getAttribute("aria-controls"), true); });
    });
    function fromHash() {
      var hash = location.hash.slice(1);
      show(!hash || hash === "ko" || hash.indexOf("ko-") === 0 ? "ko" : "en", false);
      // The target was hidden when the browser tried to jump to it.
      var target = hash && hash !== "ko" && hash !== "en" && document.getElementById(hash);
      if (target) target.scrollIntoView();
    }
    window.addEventListener("hashchange", fromHash);
    fromHash();
  })();
</script>
