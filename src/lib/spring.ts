// Tiny critically-damped spring, driven by requestAnimationFrame.
//
// Parameterised the way Apple's springs are: `response` (seconds to reach the
// target, NOT a fixed duration) and `damping` (1 = no overshoot, <1 bounces).
// Because the state is {value, velocity}, retargeting mid-flight continues
// from the live on-screen value at the live velocity - that is what makes a
// menu grab-able and reversible at any instant, with no velocity "brick wall".

export interface SpringOptions {
  response?: number;
  damping?: number;
  /** Stop when |value - target| and |velocity| are both below this. */
  restDelta?: number;
}

export interface Spring {
  /** Retarget. Keeps the current value and velocity. */
  to(target: number): void;
  /** Jump with no animation (cancels any motion in flight). */
  set(value: number): void;
  readonly value: number;
  readonly velocity: number;
  readonly target: number;
  options: Required<SpringOptions>;
}

export function createSpring(
  initial: number,
  onUpdate: (value: number) => void,
  options: SpringOptions = {},
): Spring {
  let x = initial;
  let v = 0;
  let target = initial;
  let raf = 0;
  let last = 0;

  const opts: Required<SpringOptions> = {
    response: 0.4,
    damping: 1,
    restDelta: 0.001,
    ...options,
  };

  function step(now: number) {
    // Clamp dt so a backgrounded tab doesn't explode the integrator.
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;

    const k = (2 * Math.PI / opts.response) ** 2; // stiffness (mass = 1)
    const c = (4 * Math.PI * opts.damping) / opts.response; // damping coeff

    // Semi-implicit Euler in 1/240s substeps: stable for the stiffest springs
    // we use and cheap enough for a couple of scalars.
    const n = Math.max(1, Math.ceil(dt * 240));
    const h = dt / n;
    for (let i = 0; i < n; i++) {
      v += (-k * (x - target) - c * v) * h;
      x += v * h;
    }

    if (Math.abs(x - target) < opts.restDelta && Math.abs(v) < opts.restDelta) {
      x = target;
      v = 0;
      raf = 0;
      onUpdate(x);
      return;
    }
    onUpdate(x);
    raf = requestAnimationFrame(step);
  }

  return {
    to(next) {
      target = next;
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    },
    set(value) {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      x = target = value;
      v = 0;
      onUpdate(x);
    },
    get value() {
      return x;
    },
    get velocity() {
      return v;
    },
    get target() {
      return target;
    },
    options: opts,
  };
}
