import { currentUser } from "@clerk/nextjs";
import { db } from "./db";

export const getUser = async () => {
  const user = await currentUser();

  if (!user || !user.username) {
    throw new Error("Unauthorized!");
  }

  const current = await db.user.findUnique({
    where: { externalUserId: user.id },
  });

  if (!current) {
    throw new Error("Not found!");
  }

  return current;
};
