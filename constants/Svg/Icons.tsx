type Props = {
  stroke: string;
  fill: string;
  ClassName: string;
};

export const Verified: React.FC<Props> = ({
  fill,
  stroke,
  ClassName,
}: Props) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill={fill}
      className={ClassName}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_45_188)">
        <path
          d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
          fill="#06D6A0"
        />
        <path
          d="M10 5L6 9L4 7"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_45_188">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
