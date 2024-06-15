import { MdOutlineFeaturedPlayList } from "react-icons/md";
import {ReactNode} from "react";


export const values_data:IValue[] = [
    {
        icon:<MdOutlineFeaturedPlayList  />,
        description:"Lorem ipsum dolor sit amet consectetur. Ultrices ornare id et ultricies mauris et metus ut.",
        title:"Accessibilité"
    },{
        icon:<MdOutlineFeaturedPlayList />,
        description:"Lorem ipsum dolor sit amet consectetur. Ultrices ornare id et ultricies mauris et metus ut.",
        title:"Accessibilité"
    },{
        icon:<MdOutlineFeaturedPlayList />,
        description:"Lorem ipsum dolor sit amet consectetur. Ultrices ornare id et ultricies mauris et metus ut.",
        title:"Accessibilité"
    },{
        icon:<MdOutlineFeaturedPlayList />,
        description:"Lorem ipsum dolor sit amet consectetur. Ultrices ornare id et ultricies mauris et metus ut.",
        title:"Accessibilité"
    }
]

export  const services:IService[] = [
    {
        title:"Service Administratif",
        description:"Lorem ipsum dolor sit amet consectetur. Turpis amet id sodales sollicitudin. Vulputate netus lacus vitae condimentum mauris. Enim sodales urna ante laoreet pellentesque sit accumsan iaculis. Id hac fringilla accumsan montes euismod tristique hac mauris odio.",
        bg:"bg-white",
        icon:"bg-[#5541D9] bg-opacity-20",
        tbg:"bg-[#ECF8FF] "
    },
    {
        title:"Service Administratif",
        description:"Lorem ipsum dolor sit amet consectetur. Turpis amet id sodales sollicitudin. Vulputate netus lacus vitae condimentum mauris. Enim sodales urna ante laoreet pellentesque sit accumsan iaculis. Id hac fringilla accumsan montes euismod tristique hac mauris odio.",
        bg:"bg-[#ECF8FF]",
        icon:"bg-white",
        tbg:"bg-white"
    },
    {
        title:"Service Administratif",
        description:"Lorem ipsum dolor sit amet consectetur. Turpis amet id sodales sollicitudin. Vulputate netus lacus vitae condimentum mauris. Enim sodales urna ante laoreet pellentesque sit accumsan iaculis. Id hac fringilla accumsan montes euismod tristique hac mauris odio.",
        bg:"bg-white",
        icon:"bg-[#ECF8FF] ",
        tbg:"bg-white"
    }
]
export const steps:IStep[]=[
    {
        title:"Choisir le Service à Utiliser",
        description:"Lorem ipsum dolor sit amet consectetur. Turpis amet id sodales sollicitudin. Vulputate netus lacus vitae condimentum mauris. Enim sodales urna ante laoreet pellentesque sit accumsan iaculis. Id hac fringilla accumsan montes euismod tristique hac mauris odio."
    },
    {
        title:"Choisir le Service à Utiliser",
        description:"Lorem ipsum dolor sit amet consectetur. Turpis amet id sodales sollicitudin. Vulputate netus lacus vitae condimentum mauris. Enim sodales urna ante laoreet pellentesque sit accumsan iaculis. Id hac fringilla accumsan montes euismod tristique hac mauris odio."
    },
    {
        title:"Choisir le Service à Utiliser",
        description:"Lorem ipsum dolor sit amet consectetur. Turpis amet id sodales sollicitudin. Vulputate netus lacus vitae condimentum mauris. Enim sodales urna ante laoreet pellentesque sit accumsan iaculis. Id hac fringilla accumsan montes euismod tristique hac mauris odio."
    },
]

export interface IValue{
    icon:ReactNode,
    title:string
    description:string
}

export interface IService{
    title:string
    description:string
    bg:string
    icon:string
    tbg:string
}
export  interface IStep{
    title:string,
    description:string
}