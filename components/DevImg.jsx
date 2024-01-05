// ... (other imports and code)

const DevImg = ({ containerStyles, imgSrc, imgWidth, imgHeight }) => {
  return (
    <div className={containerStyles}>
      <img src={imgSrc} width={imgWidth} height={imgHeight} alt="Developer" />
    </div>
  );
};

export default DevImg;
