import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SkillCardProps {
  icon: string | StaticImport;
  skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, skill }) => {
  return (
    <div className="flex flex-col items-center bg-primary p-5 lg:p-10   rounded-2xl gap-2 m-2">
      <Image alt={skill} src={icon} width={ 28} height={28} />
      <h3 className="">{skill}</h3>
    </div>
  );
};

export default SkillCard;
