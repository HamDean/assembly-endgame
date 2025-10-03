import { languagesBlocksInfo } from "../constants";
import LanguageBlock from "./LanguageBlock";

const LanguagesSection = () => {
  return (
    <div className="lang-sec">
      {languagesBlocksInfo.map((info, index) => (
        <LanguageBlock
          key={index}
          language={info.language}
          textColor={info.textColor}
          bgColor={info.bgColor}
        />
      ))}
    </div>
  );
};
export default LanguagesSection;
