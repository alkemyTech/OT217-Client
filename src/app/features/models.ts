import { Time } from "@angular/common";

export class Activities{
    constructor(
        public name: string,
        public description: string,
        public image: string,
       
        ){
        

    }
}

export interface Organization {
    constructor(
        name: string,
        logo: string,
        welcome_text: string,
        short_description: string,
        address: string,
        phone: string,
        facebook_url: string,
        linkedin_url: string,
        instagram_url: string,
        twitter_url: string

    )
}