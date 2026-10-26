import svgPaths from "./svg-m3oq90f2ks";

function Group() {
  return (
    <div className="absolute inset-[0_0_-0.03%_-0.01%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.0034 54.0136">
        <g id="Group">
          <path d={svgPaths.p238dcd00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2a107c00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function YfOpOxTif() {
  return (
    <div className="absolute contents inset-[0_0_-0.03%_-0.01%]" data-name="YfOPOx.tif">
      <Group />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute h-[54px] left-[22px] overflow-clip top-[29px] w-[67px]" data-name="Layer_1">
      <YfOpOxTif />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[112px]">
      <div className="absolute left-0 size-[112px] top-0">
        <div className="absolute inset-[2.21%_6.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96.9948 107.05">
            <foreignObject height="147.05" width="136.995" x="-20" y="-20">
              <div style={{ backdropFilter: "blur(10px)", clipPath: "url(#bgblur_0_405_46_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p279c0500} fill="url(#paint0_linear_405_46)" id="Polygon 3" data-figma-bg-blur-radius="20" />
            <defs>
              <clipPath id="bgblur_0_405_46_clip_path" transform="translate(20 20)">
                <path d={svgPaths.p279c0500} />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_405_46" x1="48.4974" x2="48.4974" y1="-2.47521" y2="109.525">
                <stop stopColor="#9462FB" />
                <stop offset="1" stopColor="#F86880" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Layer />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[302px]">
      <p className="font-['SVN-Zona_Pro:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-black w-full text-[16px]">Giải pháp đo lường</p>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative size-full">
      <Frame />
      <Frame1 />
    </div>
  );
}