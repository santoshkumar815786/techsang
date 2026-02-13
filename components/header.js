class SiteHeader extends HTMLElement {
  connectedCallback() {
    const activeMenu = this.getAttribute("active");

    this.innerHTML = `
      <header
        class="sticky top-0 z-50 bg-white/95 dark:bg-[#202124]/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        
        <div class="w-full px-4 sm:px-6 md:px-8 lg:px-12 flex justify-center">
          <div class="flex items-center justify-between w-full max-w-7xl h-16">

            <!-- Logo -->
            <a class="flex items-center gap-2.5 cursor-pointer select-none group" href="/">
              <img
                src="/src/assets/images/techsang-mobile-app-development.webp"
                alt="Techsang app development company building Android apps, websites, and scalable backend systems"
                class="w-8 h-8 group-hover:scale-105 transition-transform"
              />
              <span class="text-lg sm:text-xl font-medium text-slate-700 dark:text-gray-200 tracking-tight">
                Techsang
              </span>
            </a>

            <!-- Desktop / Tablet Navigation -->
            <div class="hidden md:flex items-center gap-2">
              <nav class="flex items-center gap-1 p-1 rounded-full">

                <a class="px-4 lg:px-5 py-2 text-sm font-medium ${
                  activeMenu === "home"
                    ? "text-primary bg-blue-50 dark:bg-blue-900/20"
                    : "text-slate-600 dark:text-gray-300"
                } rounded-full transition-all"
                  href="/">Home</a>

                <a class="px-4 lg:px-5 py-2 text-sm font-medium ${
                  activeMenu === "services"
                    ? "text-primary bg-blue-50 dark:bg-blue-900/20"
                    : "text-slate-600 dark:text-gray-300"
                } rounded-full transition-all"
                  href="/services.html">Services</a>

                <a class="px-4 lg:px-5 py-2 text-sm font-medium ${
                  activeMenu === "apps"
                    ? "text-primary bg-blue-50 dark:bg-blue-900/20"
                    : "text-slate-600 dark:text-gray-300"
                } rounded-full transition-all"
                  href="/apps.html">Apps</a>

                <a class="px-4 lg:px-5 py-2 text-sm font-medium ${
                  activeMenu === "contact_us"
                    ? "text-primary bg-blue-50 dark:bg-blue-900/20"
                    : "text-slate-600 dark:text-gray-300"
                } rounded-full transition-all"
                  href="/contact.html">Contact</a>

                <a class="px-4 lg:px-5 py-2 text-sm font-medium ${
                  activeMenu === "blog"
                    ? "text-primary bg-blue-50 dark:bg-blue-900/20"
                    : "text-slate-600 dark:text-gray-300"
                } rounded-full transition-all"
                  href="/blog.html">Blog</a>

              </nav>
            </div>

            <!-- Desktop Right Section -->
            <div class="hidden md:flex items-center gap-3">

              <a href="/sitemap.html"
                title="Sitemap"
                class="p-2 text-slate-600 dark:text-gray-300 hover:text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-all">
                <span class="material-symbols-outlined text-lg">account_tree</span>
              </a>

              <button onclick="location='/contact.html'"
                class="flex items-center justify-center rounded-full h-10 px-5 bg-primary hover:bg-primary-dark text-white text-sm font-medium transition-colors shadow-sm active:scale-95">
                Contact Us
              </button>

            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center">
              <button id="menuToggle"
                class="p-2 text-slate-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition">
                <span class="material-symbols-outlined">menu</span>
              </button>
            </div>

          </div>
        </div>

        <!-- Mobile Dropdown -->
        <div id="mobileMenu"
          class="hidden md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#202124]">

          <div class="px-4 py-4 flex flex-col gap-2 text-sm">

            <a href="/"
              class="px-4 py-2 rounded-lg ${
                activeMenu === "home"
                  ? "text-primary bg-blue-50 dark:bg-blue-900/20"
                  : "text-slate-600 dark:text-gray-300"
              }">Home</a>

            <a href="/services.html"
              class="px-4 py-2 rounded-lg ${
                activeMenu === "services"
                  ? "text-primary bg-blue-50 dark:bg-blue-900/20"
                  : "text-slate-600 dark:text-gray-300"
              }">Services</a>

            <a href="/apps.html"
              class="px-4 py-2 rounded-lg ${
                activeMenu === "apps"
                  ? "text-primary bg-blue-50 dark:bg-blue-900/20"
                  : "text-slate-600 dark:text-gray-300"
              }">Apps</a>

            <a href="/contact.html"
              class="px-4 py-2 rounded-lg ${
                activeMenu === "contact_us"
                  ? "text-primary bg-blue-50 dark:bg-blue-900/20"
                  : "text-slate-600 dark:text-gray-300"
              }">Contact</a>

            <a href="/blog.html"
              class="px-4 py-2 rounded-lg ${
                activeMenu === "blog"
                  ? "text-primary bg-blue-50 dark:bg-blue-900/20"
                  : "text-slate-600 dark:text-gray-300"
              }">Blog</a>

            <a href="/sitemap.html"
              class="px-4 py-2 rounded-lg text-slate-600 dark:text-gray-300">
              Sitemap
            </a>

            <button onclick="location='/contact.html'"
              class="mt-2 w-full rounded-lg h-10 bg-primary hover:bg-primary-dark text-white text-sm font-medium transition-colors">
              Contact Us
            </button>

          </div>
        </div>

      </header>
    `;

    // Mobile Toggle Logic (UI only – no navigation logic changed)
    const toggleBtn = this.querySelector("#menuToggle");
    const mobileMenu = this.querySelector("#mobileMenu");

    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

customElements.define("site-header", SiteHeader);
