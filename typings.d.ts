interface SanityBody {
    _createdAt: string;
    _id:string;
    _rev:string;
    _updatedAt:string;
}

interface Image {
    _type: "image";
    asset:{
        _ref:string;
        _type:"refence"
    }
}

export interface Technology extends SanityBody {
    _type:'skill';
    title: string;
    progress: number;
    image: Image;
}

export interface Social extends SanityBody {
    _type:'social';
    title:string;
    url:string;
}

export interface Skill extends SanityBody {
    _type:'skill';
    title:string;
    progress: number;
    image: Image;
}

export interface Project extends SanityBody {
    _type:'project';
    title:string;
    image:Image;
    linkToBuild:string;
    summary:string;
    technologies:Technology[];
}

export interface Experience extends SanityBody {
    _type:"experience";
    company:string;
    companyImage:Image;
    dateEnded:date;
    dateStarted:date;
    isCurrentlyWorkingHere:boolean;
    jobTitle:string;
    points:string[];
    technologies:Technology[];
}

export interface PageInfo extends SanityBody {
    _type:'pageInfo';
    address:string;
    backgroundInformation:string;
    email:string;
    heroImage:Iamge;
    name:string;
    profileImage:Image;
    role:string;
    socials:string;
}

