import imgVector from "./b7183315c815e8e2d9f61dec13173385aa94640c.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="156.679" src={imgVector} width="320.392" />
          </div>
        </div>
      </div>
    </div>
  );
}