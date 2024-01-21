import prisma from "@/config/db";
import { UserType } from "@prisma/client";

type props = {
  token: string | undefined;
  userId: string | undefined;
  role: UserType;
};

export default async function findingUserType({
  token,
  userId,
}: props): Promise<any> {
  var user;
  if (token) {
    const session = await prisma.session.findUnique({
      where: { jwtToken: token },
    });
    const userId = session?.userId;
    user = await prisma.user.findUnique({ where: { id: userId } });
    // user = session?.user | null;
  } else {
    user = await prisma.user.findUnique({
      where: { id: userId },
    });
  }

  if (user) {
    console.log("inside helper", user.role);

    return user.role;
  }
}
