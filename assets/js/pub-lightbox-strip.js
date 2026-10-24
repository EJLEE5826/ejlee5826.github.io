// Thumbnail strip under the al_img_tools lightbox for papers with several figures.
// The adapter keeps its state private, so this watches the image it shows: whenever
// the src changes, the strip is rebuilt from the figures in the same .preview-col,
// and a strip click re-opens the adapter on that figure's (possibly hidden) link.
document.addEventListener("DOMContentLoaded", () => {
  // Runs after the adapter's own DOMContentLoaded handler has built the overlay.
  setTimeout(() => {
    const overlay = document.querySelector(".al-lightbox-overlay");
    const image = overlay && overlay.querySelector(".al-lightbox-image");
    if (!image) return;

    const strip = document.createElement("div");
    strip.className = "pub-lightbox-strip";
    strip.hidden = true;
    overlay.querySelector(".al-lightbox-figure").appendChild(strip);

    const links = Array.from(document.querySelectorAll(".preview-col a[data-lightbox]"));

    const render = () => {
      const current = links.find((a) => a.href === image.src);
      const siblings = current ? Array.from(current.closest(".preview-col").querySelectorAll("a[data-lightbox]")) : [];
      strip.replaceChildren();
      strip.hidden = siblings.length < 2;
      siblings.forEach((a, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.setAttribute("aria-label", `Figure ${i + 1} of ${siblings.length}`);
        btn.setAttribute("aria-current", a === current ? "true" : "false");
        const img = document.createElement("img");
        img.src = a.dataset.thumb || a.href;
        img.alt = "";
        btn.appendChild(img);
        btn.addEventListener("click", (event) => {
          event.stopPropagation();
          a.click();
        });
        strip.appendChild(btn);
      });
    };

    new MutationObserver(render).observe(image, { attributes: true, attributeFilter: ["src"] });
  }, 0);
});
