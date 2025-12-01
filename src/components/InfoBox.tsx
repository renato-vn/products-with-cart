import type { ReactNode } from "react";

type Props = {
  ico?: string;
  children: ReactNode;
};

export const InfoBox = ({ ico = "", children }: Props) => {
  return (
    <div className="flex items-center justify-center gap-2 bg-Rose-50 p-4 text-sm rounded-lg">
      {ico && <img src={ico} alt="Icon" />}
      <div>{children}</div>
    </div>
  );
};
