import { Time } from "@angular/common";

export class Activities{
    constructor(
        public _id: string,
        public name: string,
        public slug: string,
        public description: string,
        public image: string,
        public user_id: string,
        public category_id: string,
        public created_at: string,
        public updated_at: string,
        public delete_at: string,
        public group_id: string
        ){
        

    }
}