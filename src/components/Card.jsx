export const Card = (props) => {
  const {
    titleText,
    titleColor,
    descriptionText,
    descriptionColor,
    photoUrl,
    bgColor,
  } = props.data;
  console.log(descriptionColor);
  return (
    <div className={`w-full h-[calc(100vh-64px)] bg-${bgColor} flex`}>
      <div className="w-1/2 h-full flex flex-col justify-center">
        <div className="px-24 flex flex-col gap-5">
          <h1 className={`text-${titleColor} text-6xl font-semibold`}>
            {titleText}
          </h1>
          <p className={`text-${descriptionColor} font-thin`}>
            {descriptionText}
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center">
        <div className="w-[750px] h-[510px] border border-white ">
          miejsce na zdjecie
        </div>
      </div>
    </div>
  );
};
