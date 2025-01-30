import { Liff } from "@line/liff";

export default function BtnSendMessages({ liff }: Readonly<{ liff: Liff }>) {
  const handleSendMessages = () => {
    liff.sendMessages([{ type: "text", text: "ส่งข้อความ" }]);
  };

  return (
    <div>
      <button
        type="button"
        className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
        onClick={() => handleSendMessages()}
      >
        Send Messages
      </button>
    </div>
  );
}
