export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f2f2f2] h-[448px] left-0 rounded-[16px] top-0 w-[1280px]" />
      <div className="absolute bg-[#d9d9d9] h-[416px] left-[16px] rounded-[8px] top-[16px] w-[590px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[640px] not-italic text-[24px] text-black top-[16px] w-[640px]">{`SỰ KIỆN... `}</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[640px] not-italic text-[16px] text-black top-[85px] w-[640px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    </div>
  );
}