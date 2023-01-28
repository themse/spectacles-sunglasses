import { FC, SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  className?: string | unknown;
};

export const ArrowRight: FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <title>Arrow right</title>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M16 12l-6 6V6z" />
    </svg>
  );
};
