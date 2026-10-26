import imgImage from "./113eba5e48a6284d18c5684a01adee2045ccf6a6.png";

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[180px] pt-[199.015px] px-[520px] relative size-full" data-name="Container">
      <div className="absolute inset-[0_0_0.23%_0] rounded-bl-[64px] rounded-br-[64px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[64px] rounded-br-[64px]">
          <img alt="" className="absolute h-[235.93%] left-0 max-w-none top-[-135.93%] w-full" src={imgImage} />
        </div>
      </div>
    </div>
  );
}