/**
 * Techsang SVG Icon System
 * Optimized for performance & Lighthouse 100
 */

(function () {
  const ICONS = {
    share: `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="M686-80q-47.5 0-80.75-33.25T572-194q0-8 5-34L278-403q-16.28 17.34-37.64 27.17Q219-366 194-366q-47.5 0-80.75-33T80-480q0-48 33.25-81T194-594q24 0 45 9.3 21 9.29 37 25.7l301-173q-2-8-3.5-16.5T572-766q0-47.5 33.25-80.75T686-880q47.5 0 80.75 33.25T800-766q0 47.5-33.25 80.75T686-652q-23.27 0-43.64-9Q622-670 606-685L302-516q3 8 4.5 17.5t1.5 18q0 8.5-1 16t-3 15.5l303 173q16-15 36.09-23.5 20.1-8.5 43.07-8.5Q734-308 767-274.75T800-194q0 47.5-33.25 80.75T686-80Zm.04-60q22.96 0 38.46-15.54 15.5-15.53 15.5-38.5 0-22.96-15.54-38.46-15.53-15.5-38.5-15.5-22.96 0-38.46 15.54-15.5 15.53-15.5 38.5 0 22.96 15.54 38.46 15.53 15.5 38.5 15.5Zm-492-286q22.96 0 38.46-15.54 15.5-15.53 15.5-38.5 0-22.96-15.54-38.46-15.53-15.5-38.5-15.5-22.96 0-38.46 15.54-15.5 15.53-15.5 38.5 0 22.96 15.54 38.46 15.53 15.5 38.5 15.5ZM724.5-727.54q15.5-15.53 15.5-38.5 0-22.96-15.54-38.46-15.53-15.5-38.5-15.5-22.96 0-38.46 15.54-15.5 15.53-15.5 38.5 0 22.96 15.54 38.46 15.53 15.5 38.5 15.5 22.96 0 38.46-15.54ZM686-194ZM194-480Zm492-286Z"/></svg>`,
    download: `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z"/></svg>`,
    install_mobile: `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="M260-40q-24.75 0-42.37-17.63Q200-75.25 200-100v-760q0-24 18-42t42-18h438q24.75 0 42.38 17.62Q758-884.75 758-860v150q18 3 30 16.95 12 13.96 12 31.63V-587q0 19-12 33t-30 17v437q0 24.75-17.62 42.37Q722.75-40 698-40H260Zm0-60h438v-760H260v760Zm0 0v-760 760Zm220-218 155-155-43-43-82 82v-194h-60v194l-82-82-43 43 155 155Z"/></svg>`,
    star: `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="m323-245 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"/></svg>`,
    update: `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="M483-120q-75 0-141-28.5T226.5-226q-49.5-49-78-115T120-482q0-75 28.5-140t78-113.5Q276-784 342-812t141-28q80 0 151.5 35T758-709v-106h60v208H609v-60h105q-44-51-103.5-82T483-780q-125 0-214 85.5T180-485q0 127 88 216t215 89q125 0 211-88t86-213h60q0 150-104 255.5T483-120Zm122-197L451-469v-214h60v189l137 134-43 43Z"/></svg>`,
    sd_storage: `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="M383-528h60v-157h-60v157Zm119 0h60v-157h-60v157Zm119 0h60v-157h-60v157ZM220-80q-24 0-42-18t-18-42v-501l239-239h341q24 0 42 18t18 42v680q0 24-18 42t-42 18H220Zm0-60h520v-680H426L220-613.88V-140Zm0 0h520-520Z"/></svg>`,
    smartphone: `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="M260-40q-24.75 0-42.37-17.63Q200-75.25 200-100v-760q0-24 18-42t42-18h438q24.75 0 42.38 17.62Q758-884.75 758-860v150q18 3 30 16.95 12 13.96 12 31.63V-587q0 19-12 33t-30 17v437q0 24.75-17.62 42.37Q722.75-40 698-40H260Zm0-60h438v-760H260v760Zm0 0v-760 760Zm240-629q9-9 9-21t-9-21q-9-9-21-9t-21 9q-9 9-9 21t9 21q9 9 21 9t21-9Z"/></svg>`,
    android: `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="M40-239q8-106 65-196.5T256-579l-75-129q-3-9-.5-18t10.5-14q9-5 19.5-2t15.5 12l74 127q86-37 180-37t180 37l75-127q5-9 15.5-12t19.5 2q8 5 11.5 14.5T780-708l-76 129q94 53 151 143.5T920-239H40Zm275-125q15-15 15-35t-15-35q-15-15-35-15t-35 15q-15 15-15 35t15 35q15 15 35 15t35-15Zm400 0q15-15 15-35t-15-35q-15-15-35-15t-35 15q-15 15-15 35t15 35q15 15 35 15t35-15Z"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg>`,
    privacy_tip: `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="M450-284h60v-257h-60v257Zm54-333q10-10 10-24t-10-24q-10-10-24-10t-24 10q-10 10-10 24t10 24q10 10 24 10t24-10ZM480-81q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z"/></svg>`,
    arrow_forward: `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z"/></svg>`,
    icon: ``,
  };

  function initIcons() {
    const elements = document.querySelectorAll("[data-icon]");
    if (!elements.length) return;

    elements.forEach((el) => {
      const name = el.getAttribute("data-icon");
      const svg = ICONS[name];
      if (!svg) return;

      // Prevent CLS by applying width/height before injecting
      if (!el.style.width) el.style.width = "1.5rem";
      if (!el.style.height) el.style.height = "1.5rem";

      el.innerHTML = svg;

      // Apply Tailwind classes if provided
      const classes = el.getAttribute("data-icon-class");
      if (classes) {
        const svgEl = el.firstElementChild;
        svgEl.classList.add(...classes.split(" "));
      }
    });
  }

  // Run only after DOM ready (non-blocking)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initIcons);
  } else {
    initIcons();
  }
})();
