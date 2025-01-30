import { Profile } from "@/interfaces/index.interface";
import React from "react";

export default function ProfileCard({
  profile,
}: Readonly<{ profile: Profile }>) {
  return (
    <div className="flex items-center">
      <div className="mb-4 shrink-0 sm:mb-0 sm:mr-4">
        <img
          src={profile.pictureUrl}
          className="inline-block size-16 rounded-md"
          alt="profile"
        />
      </div>
      <div>
        <h4 className="text-lg font-bold">{profile.displayName}</h4>
        <p className="mt-1">{profile.statusMessage}</p>
        <p className="mt-1">{profile.userId}</p>
      </div>
    </div>
  );
}
