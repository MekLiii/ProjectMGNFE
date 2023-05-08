import runCommand from "@/utils/accesComandLane";

interface ActionBoxProps {
  title: string;
  onclick?: () => void;
}
const ActionBox = ({ title,onclick }:ActionBoxProps) => {
  return (
    <div className="bg-sylos-blue w-11/12 flex justify-center items-center" onClick={onclick}>
      {title}
    </div>
  );
};

export default ActionBox;
