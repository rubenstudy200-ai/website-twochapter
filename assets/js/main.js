/* TWOCHAPTER — interaction layer
   Vanilla JS, no dependencies. Progressive enhancement. */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Header ---------------- */
  var header = document.querySelector("[data-header]");
  if (header) {
    var hero = document.querySelector(".hero");
    var isSolid = header.classList.contains("site-header--solid");
    var threshold = 32;

    var updateThreshold = function () {
      if (!isSolid && hero) {
        threshold = Math.max(32, hero.offsetHeight - header.offsetHeight);
      }
    };

    var onHeaderScroll = function () {
      if (window.scrollY > threshold) {
        header.classList.add("is-scrolled");
      } else if (!isSolid) {
        header.classList.remove("is-scrolled");
      }
    };

    updateThreshold();
    onHeaderScroll();
    window.addEventListener("scroll", onHeaderScroll, { passive: true });
    window.addEventListener("resize", function () {
      updateThreshold();
      onHeaderScroll();
    });
  }

  /* ---------------- Mobile drawer ---------------- */
  var drawer = document.querySelector("[data-drawer]");
  var openBtn = document.querySelector("[data-menu-open]");
  var closeBtn = document.querySelector("[data-menu-close]");
  var lastFocus = null;

  function focusables(root) {
    return Array.prototype.slice
      .call(
        root.querySelectorAll(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      )
      .filter(function (el) {
        return el.offsetParent !== null;
      });
  }

  function openDrawer() {
    if (!drawer) return;
    lastFocus = document.activeElement;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    if (openBtn) openBtn.setAttribute("aria-expanded", "true");
    window.setTimeout(function () {
      if (closeBtn) closeBtn.focus();
    }, 60);
  }

  function closeDrawer() {
    if (!drawer || !drawer.classList.contains("is-open")) return;
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    if (openBtn) openBtn.setAttribute("aria-expanded", "false");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

  if (drawer) {
    drawer.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeDrawer();
        return;
      }
      if (e.key !== "Tab") return;
      var items = focusables(drawer);
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    drawer.querySelectorAll("a[href]").forEach(function (link) {
      link.addEventListener("click", function () {
        if (link.getAttribute("aria-disabled") === "true") {
          return;
        }
        closeDrawer();
      });
    });
  }

  document.querySelectorAll('a[aria-disabled="true"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });

  /* ---------------- Reveal on scroll ---------------- */
  var revealItems = document.querySelectorAll(".reveal");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealItems.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------------- Portfolio filters ---------------- */
  var filterButtons = document.querySelectorAll("[data-filter]");
  var workGrid = document.querySelector("[data-work-grid]");

  if (filterButtons.length && workGrid) {
    var live = document.createElement("p");
    live.className = "sr-only";
    live.setAttribute("aria-live", "polite");
    workGrid.insertAdjacentElement("afterend", live);

    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filter = btn.dataset.filter;
        filterButtons.forEach(function (b) {
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });

        var shown = 0;
        workGrid.classList.toggle("is-filtered", filter !== "all");
        workGrid.querySelectorAll(".work-item").forEach(function (item) {
          var match = filter === "all" || item.dataset.cat === filter;
          item.hidden = !match;
          if (match) shown += 1;
        });
        live.textContent = shown + (shown === 1 ? " work shown." : " works shown.");
      });
    });
  }

  /* ---------------- Album filters ---------------- */
  var albumGrid = document.querySelector("[data-album-grid]");
  var albumFilterButtons = document.querySelectorAll("[data-album-filter]");

  if (albumGrid && albumFilterButtons.length) {
    var albumLive = document.createElement("p");
    albumLive.className = "sr-only";
    albumLive.setAttribute("aria-live", "polite");
    albumGrid.insertAdjacentElement("afterend", albumLive);

    var albumEmpty = document.querySelector("[data-album-empty]");
    var albumCards = albumGrid.querySelectorAll("[data-album-cat]");

    albumFilterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filter = btn.dataset.albumFilter;
        albumFilterButtons.forEach(function (b) {
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });

        var shown = 0;
        albumCards.forEach(function (card) {
          var match = filter === "all" || card.dataset.albumCat === filter;
          card.hidden = !match;
          if (match) shown += 1;
        });

        if (albumEmpty) albumEmpty.hidden = shown > 0;
        albumLive.textContent = shown + (shown === 1 ? " album shown." : " albums shown.");
      });
    });
  }

  /* ---------------- Lightbox ---------------- */
  var lightbox = document.querySelector("[data-lightbox]");

  if (lightbox && workGrid) {
    var stage = lightbox.querySelector("[data-lightbox-stage]");
    var caption = lightbox.querySelector("[data-lightbox-caption]");
    var count = lightbox.querySelector("[data-lightbox-count]");
    var closeLb = lightbox.querySelector("[data-lightbox-close]");
    var prevLb = lightbox.querySelector("[data-lightbox-prev]");
    var nextLb = lightbox.querySelector("[data-lightbox-next]");
    var lbItems = [];
    var lbIndex = 0;
    var lbTrigger = null;

    var pad = function (n) {
      return String(n).padStart(2, "0");
    };

    var activeAlbum = null;

    function collectItems() {
      lbItems = Array.prototype.slice
        .call(workGrid.querySelectorAll('.work-item[data-title]'))
        .filter(function (el) {
          if (el.hidden) return false;
          if (activeAlbum && el.dataset.album !== activeAlbum) return false;
          return true;
        });
    }

    function renderLightbox(index) {
      if (!lbItems.length) return;
      lbIndex = (index + lbItems.length) % lbItems.length;
      var item = lbItems[lbIndex];
      var media = item.querySelector(".work-item__media");
      if (media && stage) {
        var clone = media.cloneNode(true);
        clone.classList.remove("media-zoom");
        clone.querySelectorAll(".work-item__inner").forEach(function (el) {
          el.remove();
        });
        clone.removeAttribute("aria-hidden");
        stage.replaceChildren(clone);
      }
      if (caption) {
        caption.textContent = item.dataset.title + " — " + item.dataset.meta;
      }
      if (count) {
        count.textContent = pad(lbIndex + 1) + " / " + pad(lbItems.length);
      }
    }

    function openLightbox(item) {
      activeAlbum = item.dataset.album || null;
      collectItems();
      var index = lbItems.indexOf(item);
      if (index < 0) index = 0;
      lbTrigger = item;
      renderLightbox(index);
      document.body.classList.add("is-locked");
      if (typeof lightbox.showModal === "function") {
        lightbox.showModal();
      } else {
        lightbox.setAttribute("open", "");
      }
      if (closeLb) closeLb.focus();
    }

    function closeLightbox() {
      if (typeof lightbox.close === "function" && lightbox.open) {
        lightbox.close();
      } else {
        lightbox.removeAttribute("open");
      }
      document.body.classList.remove("is-locked");
      if (lbTrigger && typeof lbTrigger.focus === "function") lbTrigger.focus();
    }

    workGrid.querySelectorAll(".work-item").forEach(function (item) {
      item.addEventListener("click", function () {
        openLightbox(item);
      });
    });

    if (closeLb) closeLb.addEventListener("click", closeLightbox);
    if (prevLb) {
      prevLb.addEventListener("click", function () {
        renderLightbox(lbIndex - 1);
      });
    }
    if (nextLb) {
      nextLb.addEventListener("click", function () {
        renderLightbox(lbIndex + 1);
      });
    }

    lightbox.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        renderLightbox(lbIndex - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        renderLightbox(lbIndex + 1);
      }
    });

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    lightbox.addEventListener("close", function () {
      document.body.classList.remove("is-locked");
      if (lbTrigger && typeof lbTrigger.focus === "function") lbTrigger.focus();
    });
  }

  /* ---------------- Testimonials ---------------- */
  var quoteRoot = document.querySelector("[data-quotes]");
  if (quoteRoot) {
    var quotes = Array.prototype.slice.call(quoteRoot.querySelectorAll("[data-quote]"));
    var quoteCount = document.querySelector("[data-quote-count]");
    var qIndex = 0;

    function showQuote(index) {
      qIndex = (index + quotes.length) % quotes.length;
      quotes.forEach(function (q, i) {
        q.hidden = i !== qIndex;
      });
      if (quoteCount) {
        quoteCount.textContent =
          String(qIndex + 1).padStart(2, "0") + " / " + String(quotes.length).padStart(2, "0");
      }
    }

    var prevQuote = document.querySelector("[data-quote-prev]");
    var nextQuote = document.querySelector("[data-quote-next]");
    if (prevQuote) {
      prevQuote.addEventListener("click", function () {
        showQuote(qIndex - 1);
      });
    }
    if (nextQuote) {
      nextQuote.addEventListener("click", function () {
        showQuote(qIndex + 1);
      });
    }
    showQuote(0);
  }

  /* ---------------- Five chapters (About) ---------------- */
  var chapters = document.querySelector("[data-chapters]");
  if (chapters) {
    var tabs = Array.prototype.slice.call(chapters.querySelectorAll("[data-chapter]"));
    var panels = Array.prototype.slice.call(chapters.querySelectorAll("[data-chapter-panel]"));
    var chapterMedia = chapters.querySelector("[data-chapter-media]");
    var tones = { 1: "media--a", 2: "media--b", 3: "media--c", 4: "media--d", 5: "media--e" };

    function selectChapter(n, focusTab) {
      tabs.forEach(function (tab) {
        var active = tab.dataset.chapter === String(n);
        tab.setAttribute("aria-selected", active ? "true" : "false");
        tab.tabIndex = active ? 0 : -1;
        if (active && focusTab) tab.focus();
      });
      panels.forEach(function (panel) {
        panel.hidden = panel.dataset.chapterPanel !== String(n);
      });
      if (chapterMedia) {
        chapterMedia.className = "media " + (tones[n] || "media--a") + " ratio-4x5";
      }
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        selectChapter(tab.dataset.chapter, false);
      });
    });

    chapters.querySelector('[role="tablist"]').addEventListener("keydown", function (e) {
      var current = tabs.findIndex(function (t) {
        return t.getAttribute("aria-selected") === "true";
      });
      if (current < 0) current = 0;
      var next = null;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (current + 1) % tabs.length;
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (current - 1 + tabs.length) % tabs.length;
      if (e.key === "Home") next = 0;
      if (e.key === "End") next = tabs.length - 1;
      if (next === null) return;
      e.preventDefault();
      selectChapter(tabs[next].dataset.chapter, true);
    });
  }

  /* ---------------- Inquiry form (demo) ---------------- */
  var form = document.querySelector("[data-form]");
  if (form) {
    var status = form.querySelector("[data-form-status]");

    // Prefill session type from ?session=
    try {
      var params = new URLSearchParams(window.location.search);
      var sessionValue = params.get("session");
      var sessionSelect = form.querySelector("#session");
      if (sessionValue && sessionSelect) {
        var hasOption = Array.prototype.some.call(sessionSelect.options, function (opt) {
          return opt.value === sessionValue;
        });
        if (hasOption) sessionSelect.value = sessionValue;
      }
    } catch (err) {
      /* URLSearchParams unavailable — ignore */
    }

    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function fieldWrap(el) {
      return el.closest(".field");
    }

    function setError(el, hasError) {
      var wrap = fieldWrap(el);
      if (wrap) wrap.classList.toggle("has-error", hasError);
      if (hasError) {
        el.setAttribute("aria-invalid", "true");
      } else {
        el.removeAttribute("aria-invalid");
      }
    }

    function validate() {
      var invalid = [];
      var name = form.querySelector("#name");
      var email = form.querySelector("#email");
      var country = form.querySelector("#country");
      var session = form.querySelector("#session");
      var message = form.querySelector("#message");
      var payment = form.querySelector("#payment");
      var referral = form.querySelector("#referral");

      if (!name.value.trim()) {
        setError(name, true);
        invalid.push(name);
      } else {
        setError(name, false);
      }

      if (!emailRe.test(email.value.trim())) {
        setError(email, true);
        invalid.push(email);
      } else {
        setError(email, false);
      }

      if (!country.value.trim()) {
        setError(country, true);
        invalid.push(country);
      } else {
        setError(country, false);
      }

      if (!session.value) {
        setError(session, true);
        invalid.push(session);
      } else {
        setError(session, false);
      }

      if (!message.value.trim()) {
        setError(message, true);
        invalid.push(message);
      } else {
        setError(message, false);
      }

      if (!payment.value) {
        setError(payment, true);
        invalid.push(payment);
      } else {
        setError(payment, false);
      }

      if (!referral.value) {
        setError(referral, true);
        invalid.push(referral);
      } else {
        setError(referral, false);
      }

      return invalid;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (status) {
        status.textContent = "";
        status.className = "form__status";
      }

      var honeypot = form.querySelector("#website");
      if (honeypot && honeypot.value) {
        return;
      }

      var invalid = validate();
      if (invalid.length) {
        if (status) {
          status.textContent = "Please check the highlighted fields and try again.";
          status.classList.add("is-error");
        }
        invalid[0].focus();
        return;
      }

      // Demo only: no network request. Connect an endpoint before launch.
      if (status) {
        status.textContent =
          "Thank you — this is a demo form, so nothing was sent. Connect a form endpoint to receive real inquiries.";
        status.classList.add("is-success");
      }
    });

    form.querySelectorAll("input, select, textarea").forEach(function (el) {
      var clear = function () {
        if (fieldWrap(el) && fieldWrap(el).classList.contains("has-error")) {
          setError(el, false);
        }
      };
      el.addEventListener("input", clear);
      el.addEventListener("change", clear);
    });
  }

  /* ---------------- Year ---------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
