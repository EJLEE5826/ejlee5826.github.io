---
layout: cv
permalink: /cv/
title: CV
nav: true
nav_order: 2
---
<div class="pub-tabs" role="tablist" aria-label="CV language">
  <button type="button" role="tab" id="tab-en" aria-controls="en" aria-selected="true">English</button>
  <button type="button" role="tab" id="tab-ko" aria-controls="ko" aria-selected="false">한국어</button>
</div>
<div class="pub-panel" id="en" role="tabpanel" aria-labelledby="tab-en" lang="en">
{% include cv_body.liquid cv=site.data.cv_en %}
</div>
<div class="pub-panel" id="ko" role="tabpanel" aria-labelledby="tab-ko" lang="ko">
{% include cv_body.liquid cv=site.data.cv_ko %}
</div>
<script>
  // Same tab behaviour as the Publications page; #ko opens the Korean CV.
  (function () {
    var tabs = document.querySelectorAll(".pub-tabs [role=tab]");
    function show(id, push) {
      tabs.forEach(function (t) {
        var on = t.getAttribute("aria-controls") === id;
        t.setAttribute("aria-selected", on);
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      if (push) history.replaceState(null, "", id === "en" ? location.pathname : "#" + id);
    }
    tabs.forEach(function (t) {
      t.addEventListener("click", function () { show(t.getAttribute("aria-controls"), true); });
    });
    show(location.hash === "#ko" ? "ko" : "en", false);
  })();
</script>
