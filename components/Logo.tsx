import appIcon from "@/public/app-icon.png";
import clsx from "clsx";
import Image from "next/image";

export function Logomark({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"img">) {
  return (
    <Image
      className={clsx(className, "rounded-lg")}
      {...props}
      src={appIcon}
      width={40}
      height={40}
      alt="Spark Memos Logo"
    />
  );
}

export function Logo({
  className,
  label,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { label: string }) {
  return (
    <div
      className={clsx(className, "flex gap-2 items-center")}
      aria-hidden="true"
      {...props}
    >
      <Logomark className="shadow-[0_8px_20px_rgba(10,14,23,0.42)]" />
      <span className="text-display text-xl tracking-wide">{label}</span>
    </div>
  );
}
