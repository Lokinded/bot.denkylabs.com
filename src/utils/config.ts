function validateEnv<T extends string = string>(key: keyof NodeJS.ProcessEnv, defaultValue?: T): T {
  const value = process.env[key] as T | undefined;

  if (!value) {
    if (typeof defaultValue !== 'undefined') return defaultValue;

    throw new Error(`${key.toString()} is not defined in environment variables`);
  }

  return value;
}

export const config = {
  cookieName: 'DENKY_WEB_SESSION',
  clientId: validateEnv('CLIENT_ID'),
  clientSecret: validateEnv('CLIENT_SECRET'),
  apiUrl: validateEnv('API_URL', 'http://localhost:3000'),
  jwtSecret: validateEnv('JWT_SECRET', 'denkylabs'),
} as const;
