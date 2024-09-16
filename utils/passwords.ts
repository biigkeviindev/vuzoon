const bcrypt = require("bcrypt");

export const encryptPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
  }
};

//Save changes
export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    console.error("Error comparing passwords:", error);
  }
};
