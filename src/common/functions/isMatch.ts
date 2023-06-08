import * as bcrypt from 'bcrypt';

export async function isMatch(
  password: string,
  hash: string,
): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}
