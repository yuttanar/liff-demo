import ProfileCard from "@/components/Profile";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const profile = {
  displayName: "ชื่อ",
  pictureUrl:
    "https://mrwallpaper.com/images/thumbnail/cool-profile-pictures-panda-man-gsl2ntkjj3hrk84s.jpg",
  userId: "userId",
  statusMessage: "statusMessage",
};

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ProfileCard profile={profile} />
        <div className="flex flex-col gap-1"></div>
      </main>
    </div>
  );
}
