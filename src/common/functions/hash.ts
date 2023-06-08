import * as bcrypt from 'bcrypt';

export async function hashPassword(password: string) {
  const saltOrRounds = 10;

  const salt = await bcrypt.genSalt(saltOrRounds);
  return await bcrypt.hash(password, salt);
}
