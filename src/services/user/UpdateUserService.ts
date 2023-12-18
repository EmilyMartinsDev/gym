import prismaClient from "../../prisma"

type Goal = 'GAIN_MASS' | 'LOSE_FAT' | 'MAINTENANCE';
type Gender = 'F' | 'M';

interface UserInfo {
  id: string;
  name?: string | null;
  email: string;
  weight?: number | null;
  height?: number | null;
  body_fat_percentage?: number | null;
  goal: Goal;
  training_time?: number | null;
  muscle_group_target?: string | null;
  gender: Gender;
  age?: number | null;
  activity_level?: number | null;
  training_frequency?: number | null;
  average_training_time?: number | null;
  userId: string;
  created_at: Date;
  updated_at: Date;
}

interface UserUpdateRequest{
    userId: string
    name: string
   info?: UserInfo
}

class UpdateUserService{
    async execute({userId, name, info}: UserUpdateRequest ){

        try{
           const user = await prismaClient.user.findFirst({
                where:{
                    id: userId
                }
            });

           if (!user){
            throw new Error("user not found")
           }

           const userUpdated = await prismaClient.user.update({
                where:{
                    id: userId
                },
                data:{
                    name: name,
                    info: {
                        update: {...info}
                    }
                },
                select:{
                    name: true,
                    email: true,
               
                }
           });

           return userUpdated


        }catch(err){
            console.log(err)
            throw new Error("error an update the user ")
        }


    }
}

export { UpdateUserService }