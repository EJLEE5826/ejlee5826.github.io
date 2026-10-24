---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 1
images:
  lightbox2: true
---

<div class="pub-tabs" role="tablist" aria-label="Publication type">
  <button type="button" role="tab" id="tab-international" aria-controls="international" aria-selected="true">International</button>
  <button type="button" role="tab" id="tab-domestic" aria-controls="domestic" aria-selected="false">Domestic</button>
</div>

<div class="publications">
  <div class="pub-panel" id="international" role="tabpanel" aria-labelledby="tab-international">

{% bibliography %}

  </div>
  <div class="pub-panel" id="domestic" role="tabpanel" aria-labelledby="tab-domestic">

{% include domestic_publications.liquid heading=false %}

  </div>
</div>

<script>
  // Without JS both panels stay visible; with JS only the selected one shows (#domestic opens that tab).
  (function () {
    var tabs = document.querySelectorAll(".pub-tabs [role=tab]");
    function show(id, push) {
      tabs.forEach(function (t) {
        var on = t.getAttribute("aria-controls") === id;
        t.setAttribute("aria-selected", on);
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      if (push) history.replaceState(null, "", id === "international" ? location.pathname : "#" + id);
    }
    tabs.forEach(function (t) {
      t.addEventListener("click", function () { show(t.getAttribute("aria-controls"), true); });
    });
    show(location.hash === "#domestic" ? "domestic" : "international", false);
  })();
</script>
<script defer src="{{ '/assets/js/pub-lightbox-strip.js' | relative_url }}"></script>
