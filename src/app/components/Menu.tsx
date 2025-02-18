import Link from "next/link";
import Image from "next/image";
import { title } from "process";

export default function Menu() {
    const menuItems = [
        {
            title: 'MENU',
            items:[
                {
                    icon: '/home.png',
                    label:'DASHBOARD',
                    href:'/'
                },
                {
                    icon: '/home.png',
                    label:'HOME',
                    href:'/'
                },
                {
                    icon:'/student.png',
                    label:'ACCOUNT',
                    href:'/'
                },
                {
                    icon:'/solar-energy.png',
                    label:'SETTINGS',
                    href:'/'
                },
            ],
        },
    ]
    return (
        <div className="mt-4 text-sm">
            {menuItems.map(i =>(
                <div className="flex flex-col space-y-12 md:space-y-5 lg:space-y-5 gap-2" key={i.title}>
                    <span className="hidden lg:block text-gray-400 text-xl">{i.title}</span>
                    {i.items.map((item)=>(
                        <Link href={item.href} key={item.label} className="flex gap-4 items-center justify-center lg:justify-start text-gray-500 py-2">
                            <Image src={item.icon} width={32} height={32} alt=""/>
                            <span className="hidden md:block lg:block text-lg">{item.label}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};
