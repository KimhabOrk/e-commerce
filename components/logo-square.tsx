import clsx from "clsx";
import LogoIcon from "./icons/logo";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center bg-white dark:border-neutral-700 dark:bg-black",
        {
          "h-[40px] w-[80px]": !size,
          "h-[30px] w-[60px]": size === "sm",
        },
      )}
    >
      <LogoIcon
        className={clsx({
          "h-[16px] w-[58px]": !size,
          "h-[10px] w-[32px]": size === "sm",
        })}
      />
    </div>
  );
}
