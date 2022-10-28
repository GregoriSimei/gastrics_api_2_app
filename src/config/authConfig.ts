export const authConfig = {
  jwt: { secret: process.env.TOKEN_SECRET as string, expiresIn: process.env.TOKEN_EXPIRE_IN },
};
