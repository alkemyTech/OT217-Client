import { Pipe, PipeTransform } from "@angular/core";
import { Organization } from "../models/organization";


@Pipe({
    name: 'ObjToArray',
    
})



export class ObjToArrayPipe implements PipeTransform{
    transform(object: Organization): any {
        return Object.values(object)
    }
}

