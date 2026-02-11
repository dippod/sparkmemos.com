import Link from "next/link";
import clsx from "clsx";

const baseStyles = {
  solid:
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide outline-none transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember-400",
  outline:
    "inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide outline-none transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember-400",
};

const variantStyles = {
  solid: {
    orange:
      "bg-gradient-to-r from-ember-500 to-ember-400 text-white shadow-[0_14px_34px_rgba(241,79,16,0.45)] hover:brightness-110 active:brightness-95",
    white:
      "bg-white text-ink-900 shadow-[0_14px_30px_rgba(255,187,135,0.3)] hover:bg-ink-50 active:bg-white/90",
    gray: "glass-panel text-ink-50 hover:border-ink-200/40 hover:text-white",
  },
  outline: {
    orange:
      "border-ember-400/80 text-ember-200 hover:border-ember-300 hover:text-ember-100 hover:bg-ember-400/10",
    gray: "border-ink-300/40 text-ink-100 hover:border-ink-200/55 hover:text-white hover:bg-ink-300/10",
  },
};

type ButtonProps = (
  | {
      variant?: "solid";
      color?: keyof typeof variantStyles.solid;
    }
  | {
      variant: "outline";
      color?: keyof typeof variantStyles.outline;
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, "color">
    | (Omit<React.ComponentPropsWithoutRef<"button">, "color"> & {
        href?: undefined;
      })
  );

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= "solid";
  props.color ??= "orange";

  className = clsx(
    baseStyles[props.variant],
    props.variant === "outline"
      ? variantStyles.outline[props.color]
      : props.variant === "solid"
      ? variantStyles.solid[props.color]
      : undefined,
    className
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
