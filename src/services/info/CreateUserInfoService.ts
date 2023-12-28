
import prismaClient from "../../prisma";
import { Level, frequency, Goal, MuscleGroup } from "../../types";
type WizardForm = {
    userId:string
     id    :string              
     name  :string               
   
     weight     :number          
     height   :number      
     gender:'F' | 'M'      
     age:number  
   
     body_fat_percentage   :number
     goal :          Goal.GAIN_MASS |Goal.LOSE_FAT| Goal.MAINTENANCE,       
     training_time      :number   
     frequency: frequency.FIVE | frequency.FOUR | frequency.SIX | frequency.THREE       
     activity_level: number      
     level:Level.ADVANCED |  Level.BEGINNER | Level.BEGINNER
     isFinished:boolean
    muscle_target:MuscleGroup.ABDOMEN |MuscleGroup.BICEPS | MuscleGroup.COSTAS | MuscleGroup.GLUTEO | MuscleGroup.OMBROS | MuscleGroup.PEITO | MuscleGroup.POSTERIOR | MuscleGroup.QUADRICEPS | MuscleGroup.QUADRICEPS | MuscleGroup.TRICEPS
   }
   
  interface trainWeek{
    session:{
        exercicio:{
            name:string;
            sets:{
                reps:string,
                carga:number
            }[]
            rest: number,
            obs:string,
            muscle_target:string
        },
    }[],

  }
class CreateUserInfoService{
    async execute({...data}:WizardForm){
       
         try{
            const exists = await prismaClient.userInfo.findUnique({
                where:{
                    userId: data.userId,
                }
            })
        
            if (exists){
                throw new Error("already exists");
                
            }
            const info = await prismaClient.userInfo.create({
                data:{
                    frequency: data.frequency,
                    muscle_target:data.muscle_target,
                    gender: data.gender,
                    goal: data.goal,
                    activity_level: data.activity_level,
                    age: data.age,
                    body_fat_percentage: data.body_fat_percentage,
                    level: data.level,
                    height: data.height,
                    weight: data.weight,
                    isFinished:data.isFinished,
                    user:{
                        connect:{
                            id:data.userId
                        }
                    }
                },
            })
          
          

            const training = await prismaClient.workout.create({
                data:{
                    name: `hypertrophy-base ${info.userId}`,
                    fase:"BASE",
                    frequency: info.frequency,
                    muscle_target: info.muscle_target,
                    workout_level: info.level,
                   
                }
            })
            const userTraining = await prismaClient.workoutUser.create({
                data:{
                    userId: info.userId,
                    workouId: training.id
                }
            })
            return {info, userTraining}
         }catch(err){
            console.log(err)
         }

            
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