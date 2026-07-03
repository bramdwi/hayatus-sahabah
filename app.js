/* Hayatus Sahabah — reader app logic */
(function () {
  "use strict";

  const STORAGE_KEY = "hayatus:progress";
  const FONT_KEY = "hayatus:fontscale";
  const THEME_KEY = "hayatus:theme";

  const els = {
    chapterStage: document.getElementById("chapterStage"),
    topbarVolume: document.getElementById("topbarVolume"),
    topbarChapter: document.getElementById("topbarChapter"),
    progressFill: document.getElementById("progressFill"),
    footProgress: document.getElementById("footProgress"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    menuBtn: document.getElementById("menuBtn"),
    closeDrawer: document.getElementById("closeDrawer"),
    drawer: document.getElementById("drawer"),
    drawerOverlay: document.getElementById("drawerOverlay"),
    drawerList: document.getElementById("drawerList"),
    volumeTabs: document.getElementById("volumeTabs"),
    fontBtn: document.getElementById("fontBtn"),
    fontPanel: document.getElementById("fontPanel"),
    fontOverlay: document.getElementById("fontOverlay"),
    fontUp: document.getElementById("fontUp"),
    fontDown: document.getElementById("fontDown"),
    fontSizeLabel: document.getElementById("fontSizeLabel"),
    offlineBanner: document.getElementById("offlineBanner"),
    installBanner: document.getElementById("installBanner"),
    installBtn: document.getElementById("installBtn"),
    dismissInstall: document.getElementById("dismissInstall"),
    reader: document.getElementById("reader"),
  };

  const book = HAYATUS_DATA;

  const state = {
    volumeIndex: 0,
    chapterIndex: 0,
    fontScale: 1,
  };

  function loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved && typeof saved.v === "number" && typeof saved.c === "number") {
        state.volumeIndex = saved.v;
        state.chapterIndex = saved.c;
      }
    } catch (e) {}
    try {
      const fs = parseFloat(localStorage.getItem(FONT_KEY));
      if (fs) state.fontScale = fs;
    } catch (e) {}
  }

  function saveProgress() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ v: state.volumeIndex, c: state.chapterIndex })
      );
    } catch (e) {}
  }

  function currentVolume() {
    return book.volumes[state.volumeIndex];
  }
  function currentChapters() {
    return currentVolume().chapters;
  }
  function currentChapter() {
    return currentChapters()[state.chapterIndex];
  }

  const romanish = (n) => String(n); // simple numeral, arabic numerals in Amiri look elegant already

  function renderChapter(direction) {
    const vol = currentVolume();
    const ch = currentChapter();
    if (!ch) return;

    const article = document.createElement("article");
    article.className = "chapter";
    article.innerHTML = `
      <div class="chapter-emblem">
        <div class="emblem-ring"><span class="emblem-num">${romanish(ch.id)}</span></div>
        <span class="emblem-caption">${vol.label} &middot; Kisah ${ch.id} dari ${vol.chapters.length}</span>
      </div>
      <h1 class="chapter-title">${ch.title}</h1>
      <div class="chapter-divider" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0l1.8 5.2L15 7l-5.2 1.8L8 14l-1.8-5.2L1 7l5.2-1.8z"/></svg>
      </div>
      <div class="chapter-body">
        ${ch.paragraphs.map((p) => `<p>${p}</p>`).join("\n")}
      </div>
      <div class="chapter-endmark" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="3" fill="currentColor"/><circle cx="3" cy="11" r="1.4" fill="currentColor"/><circle cx="19" cy="11" r="1.4" fill="currentColor"/></svg>
      </div>
    `;

    const old = els.chapterStage.querySelector(".chapter");
    if (old) {
      old.classList.add("leaving");
      setTimeout(() => old.remove(), 180);
    }
    els.chapterStage.appendChild(article);
    els.reader.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

    // top bar
    els.topbarVolume.textContent = vol.label;
    els.topbarChapter.textContent = ch.title;
    document.title = `${ch.title} — Hayatus Sahabah`;

    // progress
    const pct = ((ch.id) / vol.chapters.length) * 100;
    els.progressFill.style.width = pct + "%";
    els.footProgress.textContent = `${ch.id} / ${vol.chapters.length}`;

    // prev/next state
    els.prevBtn.disabled = state.chapterIndex === 0;
    els.nextBtn.disabled = state.chapterIndex >= vol.chapters.length - 1;

    renderDrawerActive();
    saveProgress();
  }

  function goTo(index) {
    const chapters = currentChapters();
    if (index < 0 || index >= chapters.length) return;
    state.chapterIndex = index;
    renderChapter();
  }

  function goPrev() {
    if (state.chapterIndex > 0) goTo(state.chapterIndex - 1);
  }
  function goNext() {
    if (state.chapterIndex < currentChapters().length - 1) goTo(state.chapterIndex + 1);
  }

  /* ---------------- Drawer / TOC ---------------- */
  function renderVolumeTabs() {
    els.volumeTabs.innerHTML = "";
    book.volumes.forEach((vol, i) => {
      const btn = document.createElement("button");
      btn.className = "vol-tab" + (i === state.volumeIndex ? " active" : "");
      btn.textContent = vol.label;
      btn.disabled = !vol.available;
      btn.title = vol.available ? vol.theme : "Segera hadir";
      btn.addEventListener("click", () => {
        if (!vol.available) return;
        state.volumeIndex = i;
        state.chapterIndex = 0;
        renderVolumeTabs();
        renderDrawerList();
        renderChapter();
      });
      els.volumeTabs.appendChild(btn);
    });
  }

  function renderDrawerList() {
    const vol = currentVolume();
    els.drawerList.innerHTML = "";
    if (!vol.available || vol.chapters.length === 0) {
      const li = document.createElement("li");
      li.className = "drawer-empty";
      li.textContent = "Jilid ini akan segera ditambahkan.";
      els.drawerList.appendChild(li);
      return;
    }
    vol.chapters.forEach((ch, idx) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.className = "drawer-item" + (idx === state.chapterIndex ? " active" : "");
      btn.innerHTML = `<span class="num">${romanish(ch.id)}</span><span class="lbl">${ch.title}</span>`;
      btn.addEventListener("click", () => {
        goTo(idx);
        closeDrawer();
      });
      li.appendChild(btn);
      els.drawerList.appendChild(li);
    });
  }

  function renderDrawerActive() {
    const items = els.drawerList.querySelectorAll(".drawer-item");
    items.forEach((el, idx) => el.classList.toggle("active", idx === state.chapterIndex));
    const activeEl = els.drawerList.querySelector(".drawer-item.active");
    if (activeEl && els.drawer.classList.contains("open")) {
      activeEl.scrollIntoView({ block: "center" });
    }
  }

  function openDrawer() {
    els.drawer.classList.add("open");
    els.drawer.setAttribute("aria-hidden", "false");
    els.drawerOverlay.hidden = false;
    requestAnimationFrame(() => els.drawerOverlay.classList.add("show"));
    els.menuBtn.setAttribute("aria-expanded", "true");
    const activeEl = els.drawerList.querySelector(".drawer-item.active");
    if (activeEl) activeEl.scrollIntoView({ block: "center" });
  }
  function closeDrawer() {
    els.drawer.classList.remove("open");
    els.drawer.setAttribute("aria-hidden", "true");
    els.drawerOverlay.classList.remove("show");
    els.menuBtn.setAttribute("aria-expanded", "false");
    setTimeout(() => (els.drawerOverlay.hidden = true), 300);
  }

  /* ---------------- Font / theme panel ---------------- */
  function applyFontScale() {
    document.documentElement.style.setProperty("--reader-scale", state.fontScale.toFixed(2));
    els.fontSizeLabel.textContent = Math.round(state.fontScale * 100) + "%";
    try {
      localStorage.setItem(FONT_KEY, state.fontScale);
    } catch (e) {}
  }

  function openFontPanel() {
    els.fontPanel.classList.add("open");
    els.fontPanel.setAttribute("aria-hidden", "false");
    els.fontOverlay.hidden = false;
    requestAnimationFrame(() => els.fontOverlay.classList.add("show"));
    els.fontBtn.setAttribute("aria-expanded", "true");
  }
  function closeFontPanel() {
    els.fontPanel.classList.remove("open");
    els.fontPanel.setAttribute("aria-hidden", "true");
    els.fontOverlay.classList.remove("show");
    els.fontBtn.setAttribute("aria-expanded", "false");
    setTimeout(() => (els.fontOverlay.hidden = true), 300);
  }

  function applyTheme(theme) {
    if (theme === "cream") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    document.querySelectorAll(".swatch").forEach((s) =>
      s.classList.toggle("active", s.dataset.theme === theme)
    );
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute(
        "content",
        theme === "night" ? "#101815" : theme === "sepia" ? "#efe2c6" : "#1c3d2e"
      );
    }
  }

  /* ---------------- Swipe gesture ---------------- */
  function initSwipe() {
    let startX = 0,
      startY = 0,
      tracking = false;
    els.reader.addEventListener(
      "touchstart",
      (e) => {
        const t = e.touches[0];
        startX = t.clientX;
        startY = t.clientY;
        tracking = true;
      },
      { passive: true }
    );
    els.reader.addEventListener(
      "touchend",
      (e) => {
        if (!tracking) return;
        tracking = false;
        const t = e.changedTouches[0];
        const dx = t.clientX - startX;
        const dy = t.clientY - startY;
        if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.6) {
          if (dx < 0) goNext();
          else goPrev();
        }
      },
      { passive: true }
    );
  }

  /* ---------------- PWA: install + offline ---------------- */
  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (!localStorage.getItem("hayatus:installDismissed")) {
      els.installBanner.hidden = false;
    }
  });
  els.installBtn.addEventListener("click", async () => {
    els.installBanner.hidden = true;
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
    }
  });
  els.dismissInstall.addEventListener("click", () => {
    els.installBanner.hidden = true;
    try {
      localStorage.setItem("hayatus:installDismissed", "1");
    } catch (e) {}
  });
  window.addEventListener("appinstalled", () => {
    els.installBanner.hidden = true;
  });

  function updateOnlineStatus() {
    els.offlineBanner.hidden = navigator.onLine;
  }
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("sw.js")
        .then((reg) => {
          // Actively ask the browser to re-check sw.js against the server
          // (bypasses the update-hell of an old worker sitting in "waiting").
          reg.update().catch(() => {});
          if (reg.waiting) reg.waiting.postMessage({ type: "SKIP_WAITING" });
          reg.addEventListener("updatefound", () => {
            const fresh = reg.installing;
            if (!fresh) return;
            fresh.addEventListener("statechange", () => {
              if (fresh.state === "installed" && navigator.serviceWorker.controller) {
                fresh.postMessage({ type: "SKIP_WAITING" });
              }
            });
          });
        })
        .catch(() => {});

      // When the new worker takes control, reload exactly once so the page
      // picks up the matching app.js/data.js instead of stale cached assets.
      let reloaded = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (reloaded) return;
        reloaded = true;
        location.reload();
      });
    });
  }

  /* ---------------- Wire up events ---------------- */
  function init() {
    loadProgress();
    if (!currentVolume() || !currentVolume().available) {
      state.volumeIndex = 0;
      state.chapterIndex = 0;
    }
    if (state.chapterIndex >= currentChapters().length) state.chapterIndex = 0;

    applyFontScale();
    let savedTheme = "cream";
    try {
      savedTheme = localStorage.getItem(THEME_KEY) || "cream";
    } catch (e) {}
    applyTheme(savedTheme);

    renderVolumeTabs();
    renderDrawerList();
    renderChapter();
    if (window.hayatusLoadTimeout) clearTimeout(window.hayatusLoadTimeout);
    updateOnlineStatus();
    initSwipe();

    els.menuBtn.addEventListener("click", openDrawer);
    els.closeDrawer.addEventListener("click", closeDrawer);
    els.drawerOverlay.addEventListener("click", closeDrawer);

    els.fontBtn.addEventListener("click", openFontPanel);
    els.fontOverlay.addEventListener("click", closeFontPanel);
    els.fontUp.addEventListener("click", () => {
      state.fontScale = Math.min(1.5, +(state.fontScale + 0.1).toFixed(2));
      applyFontScale();
    });
    els.fontDown.addEventListener("click", () => {
      state.fontScale = Math.max(0.8, +(state.fontScale - 0.1).toFixed(2));
      applyFontScale();
    });
    document.querySelectorAll(".swatch").forEach((sw) =>
      sw.addEventListener("click", () => applyTheme(sw.dataset.theme))
    );

    els.prevBtn.addEventListener("click", goPrev);
    els.nextBtn.addEventListener("click", goNext);

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") {
        closeDrawer();
        closeFontPanel();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
