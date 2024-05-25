import { AuthContext } from "@/contextProvider/AuthProvider";
import { useContext } from "react";
import { useAccount } from "wagmi";
import prisma from "@/config/db";

export function useAuth() {
  //   const { user, setUser } = useContext(AuthContext);
  const account = useAccount();
  async function getUser() {
    const user = prisma.user.findUnique({
      where: {
        account: account.address,
      },
    });

    console.log(user);
    console.log(account);

    // if (!user) {
    //   const newUser = prisma.user.create({
    //     data:{
    //         account:account.address;

    //     }
    //   });
    // }
  }

  return {
    getUser,
  };
}
