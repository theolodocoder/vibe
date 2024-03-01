import { db } from "./db";
import { getUser } from "./auth-service";

export const getRecommended = async () => {
  const recommendedUsers = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return recommendedUsers;
};
