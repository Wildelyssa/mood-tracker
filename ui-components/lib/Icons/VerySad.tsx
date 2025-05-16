import { Icon, IconProps } from "./Icon";

const IconVerySad = (props: IconProps) => {
  return (
    <Icon {...props} aria-label="VerySad">
      <mask
        id="mask0_15_775"
        maskUnits="userSpaceOnUse"
        x="3"
        y="3"
        width="18"
        height="18"
      >
        <path
          d="M12 20C16.4184 20 20 16.4184 20 12C20 7.5816 16.4184 4 12 4C7.5816 4 4 7.5816 4 12C4 16.4184 7.5816 20 12 20Z"
          stroke="white"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M10.0004 9.59961L8.40039 10.3996M14.0004 9.59961L15.6004 10.3996M12.0004 13.9996C14.0004 13.9996 14.8004 15.5996 14.8004 15.5996H9.20039C9.20039 15.5996 10.0004 13.9996 12.0004 13.9996Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </mask>
      <g mask="url(#mask0_15_775)">
        <path d="M2.40039 2.40039H21.6004V21.6004H2.40039V2.40039Z" />
      </g>
    </Icon>
  );
};

export default IconVerySad;
