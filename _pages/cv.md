---
layout: cv
permalink: /cv/
title: CV
nav: true
nav_order: 3
---
<div class="pub-tabs" role="tablist" aria-label="CV language">
  <button type="button" role="tab" id="tab-ko" aria-controls="ko" aria-selected="true">한국어</button>
  <button type="button" role="tab" id="tab-en" aria-controls="en" aria-selected="false">English</button>
</div>
<div class="pub-panel" id="ko" role="tabpanel" aria-labelledby="tab-ko" lang="ko">
{% include cv_body.liquid cv=site.data.cv_ko %}
</div>
<div class="pub-panel" id="en" role="tabpanel" aria-labelledby="tab-en" lang="en" hidden>
{% include cv_body.liquid cv=site.data.cv_en %}
</div>
<script>
  // Same tab behaviour as the Publications page; Korean by default, #en opens the English CV.
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
    show(location.hash === "#en" ? "en" : "ko", false);
  })();
</script>
