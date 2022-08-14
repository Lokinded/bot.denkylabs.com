function validateEnv<T extends string = string>(key: keyof NodeJS.ProcessEnv, defaultValue?: T, warnDefault = false): T {
  const value = process.env[key] as T | undefined;

  if (!value) {
    if (typeof defaultValue !== 'undefined') {
      if (warnDefault) {
        const message = `validateEnv is using a default value for ${key} and has this warning enabled.`;
        console.warn(new Error(message));
      }

      return defaultValue;
    }
    throw new Error(`${key} is not defined in environment variables`);
  }

  return value;
}

export const config = {
  cookieName: 'token',
  clientId: validateEnv('CLIENT_ID'),
  clientSecret: validateEnv('CLIENT_SECRET'),
  jwtSecret: validateEnv('JWT_SECRET', 'denkylabs', true),
} as const;
