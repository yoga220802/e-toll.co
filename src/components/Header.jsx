import { Search, Bell, Menu } from "lucide-react";
import { Input } from "./ui/uiInput";
import { Button } from "./ui/uiButton";
import Flag from "../assets/images/flag.svg";
import Profile from "../assets/images/profile.svg";

export function Header({ toggleSidebar }) {
	return (
		<div className='flex items-center justify-between p-4 border-b'>
			<div className='flex items-center flex-1 max-w-xl'>
				<Button className='re;ative' onClick={toggleSidebar}>
					<Menu className='w-5 h-5' />
				</Button>
				<Input
					placeholder='Search'
					className='w-full'
					startIcon={<Search className='w-4 h-4 text-gray-400' />}
				/>
			</div>
			<div className='flex items-center gap-4'>
				<Button className='relative'>
					<Bell className='w-5 h-5' />
					<span className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center'>
						2
					</span>
				</Button>
				<Button className='hidden sm:flex items-center gap-2'>
					<img src={Flag} alt='English' className='w-6 h-4 object-cover rounded' />
					<span>English</span>
				</Button>
				<img src={Profile} alt='Profile' className='w-10 h-10 rounded-full' />
			</div>
		</div>
	);
}
