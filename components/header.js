class SiteHeader extends HTMLElement {
  connectedCallback() {
     const activeMenu = this.getAttribute('active');

    this.innerHTML = `
      <header
        class="sticky top-0 z-50 bg-white/95 dark:bg-[#202124]/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div class="w-full px-4 md:px-8 lg:px-12 flex justify-center">
            <div class="flex items-center justify-between w-full max-w-7xl h-16">
                <a class="flex items-center gap-2.5 cursor-pointer select-none group" href="/">
                    <div class="relative flex items-center justify-center">
                        <span
                            class="material-symbols-outlined text-primary text-3xl group-hover:scale-105 transition-transform">code_blocks</span>
                    </div>
                    <span class="text-xl font-medium text-slate-700 dark:text-gray-200 tracking-tight">Techsang</span>
                </a>
                <div class="hidden md:flex items-center gap-2">
                    <nav class="flex items-center gap-1 p-1 bg-transparent rounded-full">
                        <a class="px-5 py-2 text-sm font-medium ${activeMenu === 'home' ? 'text-primary bg-blue-50 dark:bg-blue-900/20' : 'text-slate-600 dark:text-gray-300'} rounded-full transition-all"
                            href="/">Home</a>
                        <a class="px-5 py-2 text-sm font-medium ${activeMenu === 'services' ? 'text-primary bg-blue-50 dark:bg-blue-900/20' : 'text-slate-600 dark:text-gray-300'} rounded-full transition-all"
                            href="/services.html">Services</a>
                        <a class="px-5 py-2 text-sm font-medium ${activeMenu === 'apps' ? 'text-primary bg-blue-50 dark:bg-blue-900/20' : 'text-slate-600 dark:text-gray-300'} rounded-full transition-all"
                            href="/apps.html">Apps</a>
                        <!--
                            <a class="px-5 py-2 text-sm font-medium ${activeMenu === 'about_us' ? 'text-primary bg-blue-50 dark:bg-blue-900/20' : 'text-slate-600 dark:text-gray-300'} rounded-full transition-all"
                                href="/about-us.html">About us</a>
                        -->
                       <a class="px-5 py-2 text-sm font-medium ${activeMenu === 'contact_us' ? 'text-primary bg-blue-50 dark:bg-blue-900/20' : 'text-slate-600 dark:text-gray-300'} rounded-full transition-all"
                            href="/contact.html">Contact us</a>
                    </nav>
                </div>
                <div class="hidden md:flex items-center gap-3">
                    <button onclick="location='/contact.html'"
                        class="flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-medium transition-colors shadow-sm active:scale-95 transform">
                        Contact Us
                    </button>
                </div>
                <div class="md:hidden flex items-center">
                    <button
                        class="p-2 text-slate-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                        <span class="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </div>
    </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);
