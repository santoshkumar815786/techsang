class ShareLinkComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="flex items-center gap-4">
        <span class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
          Share:
        </span>

        <div class="flex gap-4 text-slate-600 dark:text-slate-300">

          <a data-platform="facebook" target="_blank" rel="noopener noreferrer"
             class="hover:text-primary transition-colors">
            ${this.facebookIcon()}
          </a>

          <a data-platform="twitter" target="_blank" rel="noopener noreferrer"
             class="hover:text-primary transition-colors">
            ${this.twitterIcon()}
          </a>

          <a data-platform="linkedin" target="_blank" rel="noopener noreferrer"
             class="hover:text-primary transition-colors">
            ${this.linkedinIcon()}
          </a>

          <a data-platform="whatsapp" target="_blank" rel="noopener noreferrer"
             class="hover:text-primary transition-colors">
            ${this.whatsappIcon()}
          </a>

          <a data-platform="telegram" target="_blank" rel="noopener noreferrer"
             class="hover:text-primary transition-colors">
            ${this.telegramIcon()}
          </a>

          <a data-platform="email"
             class="hover:text-primary transition-colors">
            ${this.mailIcon()}
          </a>

          <button data-copy
            class="hover:text-primary transition-colors">
            ${this.copyIcon()}
          </button>

        </div>
      </div>
    `;

    this.initShareLinks();
  }

  initShareLinks() {
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);

    const links = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
      whatsapp: `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`,
      telegram: `https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`,
      email: `mailto:?subject=${pageTitle}&body=${pageTitle}%0A${pageUrl}`,
    };

    this.querySelectorAll("[data-platform]").forEach((link) => {
      const platform = link.dataset.platform;
      link.href = links[platform];
    });

    const copyBtn = this.querySelector("[data-copy]");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link copied!"))
        .catch(() => alert("Unable to copy link."));
    });
  }

  // ---- SVG ICON METHODS ----

  iconWrapper(path) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="w-5 h-5">
        ${path}
      </svg>
    `;
  }

  facebookIcon() {
    return this.iconWrapper(
      `<path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z"/>`,
    );
  }

  twitterIcon() {
    return this.iconWrapper(
      `<path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-7-6 7H2l8-9.2L1 2h6.9l4.8 6.4L18.9 2z"/>`,
    );
  }

  linkedinIcon() {
    return this.iconWrapper(
      `<path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.49 1 3.86 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.8 2.6 4.8 6V24h-4v-7.5c0-1.8 0-4-2.4-4s-2.8 1.9-2.8 3.8V24h-4V8z"/>`,
    );
  }

  whatsappIcon() {
    return this.iconWrapper(
      `<path d="M20 4.9A11.9 11.9 0 002.3 19.6L1 23l3.5-1.3A11.9 11.9 0 1020 4.9z"/>`,
    );
  }

  telegramIcon() {
    return this.iconWrapper(
      `<path d="M9.9 16.2l-.4 4c.6 0 .9-.3 1.2-.6l2.9-2.8 6 4.4c1.1.6 1.9.3 2.2-1l4-18.7"/>`,
    );
  }

  mailIcon() {
    return this.iconWrapper(`<path d="M2 4h20v16H2V4zm10 9L20 6H4l8 7z"/>`);
  }

  copyIcon() {
    return this.iconWrapper(
      `<path d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"/>`,
    );
  }
}

customElements.define("share-links", ShareLinkComponent);
