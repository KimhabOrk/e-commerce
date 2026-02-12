import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoNav({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black',
        {
          'h-[32px] w-[135px] rounded-xl': !size,
          'h-[26px] w-[120px] rounded-lg': size === 'sm'
        }
      )}
    >
      <LogoIcon
        className={clsx({
          'h-[25px] w-[125px]': !size,
          'h-[20px] w-[110px]': size === 'sm'
        })}
      />
    </div>
  );
}
