import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
let mm: gsap.MatchMedia | null = null;

// The client router copies <html> attributes from the incoming page, which
// drops the classes we set at runtime, so restore them after every swap.
document.addEventListener('astro:after-swap', () => {
  root.classList.add('js', 'anim-ready');
});

document.addEventListener('astro:before-swap', () => {
  mm?.revert();
  mm = null;
});

document.addEventListener('astro:page-load', () => {
  root.classList.add('anim-ready');
  mm?.revert();
  mm = gsap.matchMedia();

  mm.add(
    {
      motion: '(prefers-reduced-motion: no-preference)',
      desktop: '(min-width: 900px)',
      finePointer: '(pointer: fine)',
    },
    (ctx) => {
      const { motion, desktop, finePointer } = ctx.conditions as Record<string, boolean>;
      if (!motion) return;

      const cleanups: Array<() => void> = [];
      hero();
      splitHeadings();
      reveals();
      counters();
      gears();
      marquee();
      navOnScroll(cleanups);
      readingProgress();
      timeline();
      scrollFill();
      if (desktop) horizontalGallery();
      if (finePointer) {
        magnetic(cleanups);
        hoverCursorTargets(cleanups);
      }

      return () => cleanups.forEach((fn) => fn());
    },
  );
});

// Cursor lives outside the page (transition:persist), so it's set up once.
initCursor();

function hero() {
  const heroEls = gsap.utils.toArray<HTMLElement>('[data-hero]');
  if (!heroEls.length) return;
  gsap.set(heroEls, { autoAlpha: 1 });

  const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.2 } });

  const name = document.querySelector<HTMLElement>('[data-hero="name"]');
  if (name) {
    const split = SplitText.create(name, { type: 'lines,chars', mask: 'lines', linesClass: 'hero-line' });
    tl.from(split.chars, { yPercent: 120, rotate: 8, stagger: 0.035, onComplete: () => split.revert() }, 0.1);
  }
  tl.from('[data-hero="photo"]', { clipPath: 'inset(100% 0 0 0)', scale: 1.15, duration: 1.6 }, 0.2)
    .from('[data-hero="gear"]', { scale: 0.6, autoAlpha: 0, rotate: -90, duration: 2 }, 0.2)
    .from('[data-hero="fade"]', { y: 30, autoAlpha: 0, stagger: 0.1 }, 0.6);
}

function splitHeadings() {
  gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
    gsap.set(el, { autoAlpha: 1 });
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 105,
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }),
    });
  });
}

function reveals() {
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.fromTo(
        batch,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1, overwrite: true },
      ),
  });
}

function counters() {
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => (el.textContent = Math.round(obj.v).toString()),
    });
  });
}

function gears() {
  gsap.utils.toArray<SVGElement>('[data-gear]').forEach((gear, i) => {
    const dir = i % 2 ? -1 : 1;
    // Slow idle spin plus extra rotation tied to scroll position.
    gsap.to(gear, { rotate: `+=${360 * dir}`, duration: 40, repeat: -1, ease: 'none' });
    gsap.to(gear, {
      rotate: `+=${540 * dir}`,
      ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1 },
    });
  });
}

function marquee() {
  gsap.utils.toArray<HTMLElement>('[data-marquee]').forEach((track) => {
    const loop = gsap.to(track, { xPercent: -50, duration: 30, ease: 'none', repeat: -1 });
    // Speed up with scroll velocity, then ease back to the idle speed.
    ScrollTrigger.create({
      trigger: track,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const boost = 1 + gsap.utils.clamp(0, 6, Math.abs(self.getVelocity()) / 300);
        gsap.to(loop, {
          timeScale: boost,
          duration: 0.2,
          overwrite: true,
          onComplete: () => void gsap.to(loop, { timeScale: 1, duration: 1.2 }),
        });
      },
    });
  });
}

function navOnScroll(cleanups: Array<() => void>) {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;
  // Hide the nav while scrolling down, bring it back when scrolling up.
  const hide = gsap.to(nav, { yPercent: -100, paused: true, duration: 0.4, ease: 'power2.inOut' }).reverse();
  const st = ScrollTrigger.create({
    start: 'top top-=120',
    end: 'max',
    onUpdate: (self) => hide.reversed(self.direction === -1),
    onLeaveBack: () => hide.reverse(),
  });
  cleanups.push(() => {
    st.kill();
    gsap.set(nav, { clearProps: 'transform' });
  });
}

function readingProgress() {
  const bar = document.querySelector('[data-progress]');
  const article = document.querySelector('[data-article]');
  if (!bar || !article) return;
  gsap.fromTo(
    bar,
    { scaleX: 0 },
    { scaleX: 1, ease: 'none', scrollTrigger: { trigger: article, start: 'top top', end: 'bottom bottom', scrub: true } },
  );
}

function timeline() {
  const line = document.querySelector('[data-timeline-line]');
  const tl = document.querySelector('[data-timeline]');
  if (!line || !tl) return;
  gsap.fromTo(
    line,
    { scaleY: 0 },
    { scaleY: 1, ease: 'none', scrollTrigger: { trigger: tl, start: 'top 70%', end: 'bottom 60%', scrub: true } },
  );
  gsap.utils.toArray<HTMLElement>('[data-timeline-item]').forEach((item) => {
    gsap.from(item.querySelector('.node'), {
      scale: 0,
      duration: 0.6,
      ease: 'back.out(3)',
      scrollTrigger: { trigger: item, start: 'top 70%', once: true },
    });
  });
}

// Words brighten one by one as a statement scrolls through the viewport.
function scrollFill() {
  gsap.utils.toArray<HTMLElement>('[data-fill]').forEach((el) => {
    const split = SplitText.create(el, { type: 'words' });
    gsap.fromTo(
      split.words,
      { opacity: 0.18 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
      },
    );
  });
}

// Pin the featured-work section and slide the cards sideways.
function horizontalGallery() {
  const section = document.querySelector<HTMLElement>('[data-hscroll]');
  const track = section?.querySelector<HTMLElement>('[data-hscroll-track]');
  if (!section || !track) return;
  const distance = () => track.scrollWidth - section.clientWidth;
  const tween = gsap.to(track, {
    x: () => -distance(),
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${distance()}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
  gsap.utils.toArray<HTMLElement>('[data-hscroll-card]').forEach((card) => {
    gsap.from(card, {
      rotate: 4,
      y: 60,
      scale: 0.92,
      ease: 'none',
      scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left 100%', end: 'left 55%', scrub: true },
    });
  });
}

function magnetic(cleanups: Array<() => void>) {
  gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
    };
    const leave = () => {
      xTo(0);
      yTo(0);
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    cleanups.push(() => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
    });
  });
}

function hoverCursorTargets(cleanups: Array<() => void>) {
  const cursor = document.querySelector('.cursor');
  if (!cursor) return;
  const on = () => cursor.classList.add('is-hover');
  const off = () => cursor.classList.remove('is-hover');
  document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
    el.addEventListener('pointerenter', on);
    el.addEventListener('pointerleave', off);
    cleanups.push(() => {
      el.removeEventListener('pointerenter', on);
      el.removeEventListener('pointerleave', off);
    });
  });
  cleanups.push(off);
}

function initCursor() {
  const fine = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
  const dot = document.querySelector<HTMLElement>('.cursor-dot');
  const ring = document.querySelector<HTMLElement>('.cursor-ring');
  if (!fine.matches || !dot || !ring) return;

  const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3' });
  const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3' });
  const ringX = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' });
  const ringY = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' });
  let visible = false;

  window.addEventListener('pointermove', (e) => {
    if (!visible) {
      gsap.set([dot, ring], { x: e.clientX, y: e.clientY });
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
      visible = true;
    }
    dotX(e.clientX);
    dotY(e.clientY);
    ringX(e.clientX);
    ringY(e.clientY);
  });
  document.addEventListener('pointerleave', () => {
    gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    visible = false;
  });
}
