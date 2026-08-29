import type { GradeBeltProps } from "@/utils/types";

const beltBaseClassName =
  "relative block h-4 w-16 shrink-0 overflow-hidden border border-black/15 shadow-[inset_0_-2px_0_rgba(0,0,0,0.12)]";

export function GradeBelt({ code, name }: GradeBeltProps) {
  return (
    <div className="inline-flex min-h-7 items-center gap-2.5">
      {code === "white" && (
        <span aria-hidden="true" className={`${beltBaseClassName} bg-white`} />
      )}

      {code === "orange" && (
        <span
          aria-hidden="true"
          className={`${beltBaseClassName} bg-orange-500`}
        />
      )}

      {code === "blue" && (
        <span
          aria-hidden="true"
          className={`${beltBaseClassName} bg-blue-600`}
        />
      )}

      {code === "yellow" && (
        <span
          aria-hidden="true"
          className={`${beltBaseClassName} bg-yellow-400`}
        />
      )}

      {code === "green" && (
        <span
          aria-hidden="true"
          className={`${beltBaseClassName} bg-green-600`}
        />
      )}

      {code === "pre_brown" && (
        <span
          aria-hidden="true"
          className={`${beltBaseClassName} bg-green-600`}
        >
          <span className="absolute inset-y-0 right-2 w-2 bg-amber-900" />
        </span>
      )}

      {code === "brown" && (
        <span
          aria-hidden="true"
          className={`${beltBaseClassName} bg-amber-900`}
        />
      )}

      {code === "black" && (
        <span aria-hidden="true" className={`${beltBaseClassName} bg-black`} />
      )}

      <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-black/65">
        {name}
      </span>
    </div>
  );
}
