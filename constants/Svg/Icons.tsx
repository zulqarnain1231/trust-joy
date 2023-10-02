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

export const Dev: React.FC<Props> = ({ fill, stroke, ClassName }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="30"
      viewBox="0 0 28 30"
      className={ClassName}
      stroke={stroke}
      fill={fill}
    >
      <g clip-path="url(#clip0_1_189)">
        <path
          d="M15.7967 14.9996C15.8029 17.2518 14.9746 19.4146 13.4937 21.0129C12.0128 22.6113 10.0004 23.5147 7.89834 23.5246C5.79631 23.5147 3.78388 22.6113 2.30299 21.0129C0.822094 19.4146 -0.00619884 17.2518 4.07206e-06 14.9996C-0.00619884 12.7474 0.822094 10.5847 2.30299 8.98627C3.78388 7.38788 5.79631 6.48454 7.89834 6.47461C10.0004 6.48454 12.0128 7.38788 13.4937 8.98627C14.9746 10.5847 15.8029 12.7474 15.7967 14.9996ZM24.4533 14.9996C24.4533 19.4246 22.6917 23.0246 20.51 23.0246C18.3283 23.0246 16.555 19.4246 16.555 14.9996C16.555 10.5746 18.3283 6.97461 20.51 6.97461C22.6917 6.97461 24.4533 10.5746 24.4533 14.9996ZM28 14.9996C28 18.9621 27.3817 22.1871 26.6117 22.1871C25.8417 22.1871 25.2233 18.9621 25.2233 14.9996C25.2233 11.0371 25.8417 7.81211 26.6117 7.81211C27.3817 7.81211 28 11.0371 28 14.9996Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_189">
          <rect width="28" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
