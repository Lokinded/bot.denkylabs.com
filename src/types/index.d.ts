export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  avatar_decoration: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: string;
  banner_color: number;
  accent_color: number;
  locale: string;
  mfa_enabled: boolean;
  email: string;
  premium_type: number;
  verified: boolean;
}

export interface Props {
  user: DiscordUser | null;
}
