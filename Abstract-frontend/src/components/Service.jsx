import web from "../images/web.png";
function Service(props) {
  return (
    <div className="w-full bg-secondary rounded-[20px]">
      <div className="flex">
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="mt-4">
            {/* Small icon */}
            <img src={props.icon} alt="Icon" className="w-12 h-12" />
          </div>
          <div className="text-[#C7B555] mt-4 font-barlow-condensed">
            {/* Title */}
            <h3 className="text-xl">{props.title}</h3>
          </div>
          <div className="mt-4">
            {/* Description */}
            <p>{props.desc}
            </p>
          </div>
        </div>
        <div className="w-1/2">
          {/* Right side image */}
          <img src={web} alt="Image" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Service;
