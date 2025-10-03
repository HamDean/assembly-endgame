const LanguageBlock = ({ language, textColor, bgColor }) => {
  const styles = {
    color: textColor,
    backgroundColor: bgColor,
  };
  return (
    <div style={styles} className="lang-block">
      {language}
    </div>
  );
};
export default LanguageBlock;
