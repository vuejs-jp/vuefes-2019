type LazyContainerBinding = {
  selector?: string;
};

const observerMap = new WeakMap<HTMLElement, IntersectionObserver>();
const OBSERVER_ROOT_MARGIN = "2160px";
const OBSERVER_MARGIN_PX = 2160;

function loadImage(element: HTMLImageElement) {
  const src = element.dataset.src;
  const srcset = element.dataset.srcset;

  if (src) {
    element.src = src;
  }

  if (srcset) {
    element.srcset = srcset;
  }
}

function hasRenderableBox(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

function observationTarget(element: HTMLElement): HTMLElement {
  let current: HTMLElement | null = element;

  while (current) {
    if (hasRenderableBox(current)) {
      return current;
    }

    current = current.parentElement;
  }

  return element;
}

function isWithinObserverMargin(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();

  return (
    rect.bottom >= -OBSERVER_MARGIN_PX &&
    rect.right >= -OBSERVER_MARGIN_PX &&
    rect.top <= window.innerHeight + OBSERVER_MARGIN_PX &&
    rect.left <= window.innerWidth + OBSERVER_MARGIN_PX
  );
}

function setupObserver(element: HTMLElement, selector = "img") {
  observerMap.get(element)?.disconnect();

  const targets = Array.from(
    element.querySelectorAll<HTMLImageElement>(selector),
  );

  if (!targets.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    targets.forEach(loadImage);
    return;
  }

  const target = observationTarget(element);

  if (isWithinObserverMargin(target)) {
    targets.forEach(loadImage);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) {
        return;
      }

      targets.forEach(loadImage);
      observer.disconnect();
    },
    {
      rootMargin: OBSERVER_ROOT_MARGIN,
      threshold: 0,
    },
  );

  observer.observe(target);
  observerMap.set(element, observer);
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("lazy-container", {
    mounted(element, binding) {
      const value = binding.value as LazyContainerBinding | undefined;
      setupObserver(element, value?.selector);
    },
    updated(element, binding) {
      const value = binding.value as LazyContainerBinding | undefined;
      setupObserver(element, value?.selector);
    },
    unmounted(element) {
      observerMap.get(element)?.disconnect();
    },
  });
});
