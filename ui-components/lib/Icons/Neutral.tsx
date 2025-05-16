import { Icon, IconProps } from "./Icon";

const IconNeutral = (props: IconProps) => {
  return (
    <Icon {...props} aria-label="Neutral">
      <mask
        id="mask0_15_752"
        maskUnits="userSpaceOnUse"
        x="3"
        y="3"
        width="18"
        height="18"
      >
        <path
          d="M12 20C16.4184 20 20 16.4184 20 12C20 7.5816 16.4184 4 12 4C7.5816 4 4 7.5816 4 12C4 16.4184 7.5816 20 12 20Z"
          fill="white"
          stroke="white"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M14.7992 9.59961V9.99961M9.19922 9.59961V9.99961M9.19922 14.7996H14.7992"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </mask>
      <g mask="url(#mask0_15_752)">
        <path
          d="M2.40039 2.40039H21.6004V21.6004H2.40039V2.40039Z"
          fill="white"
        />
      </g>
    </Icon>
  );
};

export default IconNeutral;
