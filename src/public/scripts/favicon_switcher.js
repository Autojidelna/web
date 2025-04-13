(function () {
  const setFavicon = mode => {
    const favicon = document.getElementById("favicon");
    if (!favicon) return;
    favicon.href = mode === "dark" ? "/logo_white.svg" : "/logo_black.svg";
  };

  // Initial set
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  setFavicon(mediaQuery.matches ? "dark" : "light");

  // Listen for changes
  mediaQuery.addEventListener("change", e => {
    setFavicon(e.matches ? "dark" : "light");
  });
})();
