import { Liff } from "@line/liff";

export type Profile = Awaited<ReturnType<Liff["getProfile"]>>;

export interface ILiffContext {
  liff: Liff;
  liffError: string | null;
  profile: Profile;
}

