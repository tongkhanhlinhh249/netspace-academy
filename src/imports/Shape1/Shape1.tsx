import imgVector from "./c74ca96f265c2962524be91063cca4826fcfae66.png";
import imgVector1 from "./5b1ea373e7915332a19a9ce834b99051711f82bc.png";
import imgVector2 from "./d6e6bffa416274dc46764d42a82ed7fc889cd691.png";
import imgVector3 from "./2ba3ab215474b6ced1b532b668a99b32f2320dad.png";
import imgVector4 from "./b7183315c815e8e2d9f61dec13173385aa94640c.png";
import imgVector5 from "./5387c3b45783f04c629c4fc243c85220d160f57c.png";

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[0_28.3%_36.38%_28.3%]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="250.677" src={imgVector} width="445.741" />
      </div>
      <div className="absolute inset-[11.33%_73.12%_45.53%_0]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="169.992" src={imgVector1} width="276.082" />
      </div>
      <div className="absolute inset-[67.2%_32.65%_0_32.49%]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="129.259" src={imgVector2} width="358.002" />
      </div>
      <div className="absolute inset-[60.24%_68.8%_0_0]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="156.679" src={imgVector3} width="320.392" />
      </div>
      <div className="absolute flex inset-[60.24%_0_0_68.8%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="156.679" src={imgVector4} width="320.392" />
          </div>
        </div>
      </div>
      <div className="absolute inset-[11.33%_0_45.53%_73.12%]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="169.992" src={imgVector5} width="276.082" />
      </div>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-0" data-name="Layer 1">
      <Group />
    </div>
  );
}

export default function Shape() {
  return (
    <div className="relative size-full" data-name="Shape 1">
      <Layer />
    </div>
  );
}