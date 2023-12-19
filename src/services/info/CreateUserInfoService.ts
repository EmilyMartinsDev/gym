import { Goal } from "@prisma/client";
import prismaClient from "../../prisma";
type WizardForm = {
    userId:string
     id    :string              
     name  :string               
   
     weight     :number          
     height   :number      
     gender:'F' | 'M'      
     age:number  
   
     body_fat_percentage   :number
     goal :string                 
     training_time      :number   
     muscle_group_target :string 
         
     activity_level: number      
     training_frequency:number   
     level?:string
    
   }
   
   
class CreateUserInfoService{
    async execute({...data}:WizardForm){
       
            const exists = await prismaClient.userInfo.findFirst({
                where:{
                    id: data.id
                }
            })
        
            if (exists){
                return exists
            }
            const info = await prismaClient.userInfo.create({
                data:{
                    gender: data.gender,
                    goal: data.goal as Goal,
                    activity_level: data.activity_level,
                    age: data.age,
                    body_fat_percentage: data.body_fat_percentage,
                    level: data.level,
                    muscle_group_target: data.muscle_group_target,
                    userId: data.userId,
                    height: data.height,
                    weight: data.weight,
                    training_frequency: data.training_frequency,
                    
                }
            })
            return info
    }
}
export default CreateUserInfoService
/*{
    "userId":"3adbf063-6292-4a19-96e2-7df65cdd68a3",
  "email": "exemplo@email.com",
  "gender": "M",
  "goal": "hipertrofia",
  "activity_level": "1.55",
  "age": 25,
  "body_fat_percentage": 15.5,
  "level": "intermediate",
  "muscle_group_target": ["Peito", "Costas", "Ombros"],
  "height": 175,
  "weight": 70,
  "training_frequency": "4"
}
*/