const LanguageBlock = ({ language, textColor, bgColor, isLost }) => {
  const styles = {
    color: textColor,
    backgroundColor: bgColor,
  };
  return (
    <div style={styles} className={`lang-block ${isLost && "lost"}`}>
      {language}
    </div>
  );
};
export default LanguageBlock;
