import prismaClient from "../../prisma"

interface UserDetailRequest{
    userId: string
}

class DetailUserService{
    async execute({userId}: UserDetailRequest){
        const user = await prismaClient.user.findFirst({
            where:{
                id: userId
            },
            select:{
                name: true,
                email: true,
                id: true,
                
                subscription: {
                    select:{
                        id: true,
                        status: true,
                        priceId: true,
                    }
                },
                info:true           
            }
        });

        return user
    }
}
export { DetailUserService }