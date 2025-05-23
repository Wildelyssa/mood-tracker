import { cn } from "@/lib/utils";

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg bg-white border-light-gray p-4 shadow-gray-light",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
