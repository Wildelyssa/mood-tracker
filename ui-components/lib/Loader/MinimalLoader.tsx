import "./minimal-loader.css";

interface Props {
  size?: number;
  color?: string;
}

const MinimalLoader = ({ size = 24, color = "rgba(54 101 125, 1)" }: Props) => {
  return (
    <div
      className="minimal-loader rounded-full"
      style={{
        width: size,
        height: size,
        borderLeft: `${size / 6}px solid ${color}`,
        borderBottom: `${size / 6}px solid ${color}`,
        borderRight: `${size / 6}px solid ${color}`,
        borderTop: `${size / 6}px solid transparent`,
      }}
    />
  );
};

export default MinimalLoader;
