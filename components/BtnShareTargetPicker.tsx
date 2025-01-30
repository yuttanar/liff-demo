import { Liff } from "@line/liff";

export default function BtnShareTargetPicker({
  liff,
}: Readonly<{ liff: Liff }>) {

  const handleShareTargetPicker = () => {
    liff.shareTargetPicker([{ type: "text", text: "aaaaa" }]);
  };
  
  return (
    <div>
      <button
        type="button"
        className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
        onClick={() => handleShareTargetPicker()}
      >
        Share Target Picker
      </button>
    </div>
  );
}
