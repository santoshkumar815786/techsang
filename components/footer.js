class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <footer class="bg-white dark:bg-[#202124] border-t border-gray-200 dark:border-gray-800 text-sm">
        <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 lg:py-16">
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                <div class="col-span-2 lg:col-span-2">
                    <div class="flex items-center gap-2 mb-4">
                     <img
                            src="/src/assets/images/techsang-mobile-app-development.webp"
                            alt="Techsang app development company building Android apps, websites, and scalable backend systems"
                            class="w-8 h-8 text-primary text-3xl group-hover:scale-105 transition-transform"
                        />
                    <span class="text-lg font-semibold text-slate-700 dark:text-gray-200">
                        Techsang
                    </span>
                </div>

                <p class="text-slate-500 dark:text-gray-400 max-w-xs leading-relaxed mb-6">
                    Building the future of digital experiences. We create apps that matter and solutions that scale.
                </p>

                    <div class="flex gap-4">
                         <!-- <a class="text-slate-400 hover:text-primary dark:hover:text-gray-300 transition-colors"
                            href="#">
                            <span class="sr-only">Twitter</span>
                            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z">
                                </path>
                            </svg>
                        </a> -->
                        <!-- Instagram -->
                            <a class="text-slate-400 hover:text-primary dark:hover:text-gray-300 transition-colors"
                            href="https://www.instagram.com/techsang.official"
                            target="_blank">
                                <span class="sr-only">Instagram</span>
                                <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5C5.28 3.5 3.5 5.28 3.5 7.75v8.5c0 2.47 1.78 4.25 4.25 4.25h8.5c2.47 0 4.25-1.78 4.25-4.25v-8.5c0-2.47-1.78-4.25-4.25-4.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.13 1.13 0 1 1 0-2.26 1.13 1.13 0 0 1 0 2.26z">
                                    </path>
                                </svg>
                            </a>

                            <!-- Facebook -->
                            <a class="text-slate-400 hover:text-primary dark:hover:text-gray-300 transition-colors"
                            href="https://www.facebook.com/profile.php?id=61586108687477"
                            target="_blank">
                                <span class="sr-only">Facebook</span>
                                <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495v-9.294H9.691V11.01h3.128V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z">
                                    </path>
                                </svg>
                            </a>
                        <a class="text-slate-400 hover:text-primary dark:hover:text-gray-300 transition-colors"
                            href="https://www.linkedin.com/in/santosh-kumar815/" target="_blank">
                            <span class="sr-only">LinkedIn</span>
                            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                                </path>
                            </svg>
                        </a>
                        <!-- <a class="text-slate-400 hover:text-primary dark:hover:text-gray-300 transition-colors"
                            href="#">
                            <span class="sr-only">GitHub</span>
                            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                                </path>
                            </svg>
                        </a> -->
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold text-slate-900 dark:text-gray-100 mb-4">Products</h4>
                    <ul class="flex flex-col gap-3">
                        <li><a class="text-slate-600 dark:text-gray-400 hover:text-primary transition-colors"
                                href="/apps.html">All Apps</a></li>
                        <li><a class="text-slate-600 dark:text-gray-400 hover:text-primary transition-colors"
                                href="/apps/bachat-box.html">Bachat Box</a></li>
                        <li><a class="text-slate-600 dark:text-gray-400 hover:text-primary transition-colors"
                                href="/apps/sateek-toolkit.html">Sateek Toolkit</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-slate-900 dark:text-gray-100 mb-4">Services</h4>
                    <ul class="flex flex-col gap-3">
                        <li><a class="text-slate-600 dark:text-gray-400 hover:text-primary transition-colors"
                                href="/services.html">Web Development</a></li>
                        <li><a class="text-slate-600 dark:text-gray-400 hover:text-primary transition-colors"
                                href="/services.html">Mobile Apps</a></li>
                        <li><a class="text-slate-600 dark:text-gray-400 hover:text-primary transition-colors"
                                href="/services.html">Backend Systems</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-slate-900 dark:text-gray-100 mb-4">Company</h4>
                    <ul class="flex flex-col gap-3">
                        <li><a class="text-slate-600 dark:text-gray-400 hover:text-primary transition-colors"
                                href="/contact.html">About Us</a></li>
                        <li><a class="text-slate-600 dark:text-gray-400 hover:text-primary transition-colors"
                                href="/contact.html">Contact</a></li>
                        <li><a class="text-slate-600 dark:text-gray-400 hover:text-primary transition-colors"
                                href="/privacy-policy.html">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div
                class="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col items-center gap-4 text-center">
                
                <p class="text-slate-500 dark:text-gray-500">
                    © 2026 Techsang. All rights reserved.
                </p>

                <!-- Optional links (will still be centered) -->
                <!--
                <div class="flex gap-6">
                    <a class="text-slate-500 hover:text-slate-700 dark:text-gray-500 dark:hover:text-gray-300 text-xs" href="#">Terms</a>
                    <a class="text-slate-500 hover:text-slate-700 dark:text-gray-500 dark:hover:text-gray-300 text-xs" href="#">Privacy</a>
                    <a class="text-slate-500 hover:text-slate-700 dark:text-gray-500 dark:hover:text-gray-300 text-xs" href="#">Cookies</a>
                </div>
                -->
                </div>
        </div>
    </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
