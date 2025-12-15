import { IsString } from "class-validator";

export class CreateCarDto{
    
    @IsString({message:"El brand debe de ser un string"})
    readonly brand:string;


    @IsString()
    readonly model:string;
}