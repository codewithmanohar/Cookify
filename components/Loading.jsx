import { imgs } from '@/lib/data';
import Image from 'next/image';


const Loading = () => {
    return (
        <div className="flex items-center flex-col gap-5 justify-center min-h-screen text-xl font-medium">
            <Image src={imgs.loading} alt='logo' width={200} height={50} className='rounded-2xl' />
            <span>Generating recipe...</span>
        </div>
    );
}

export default Loading