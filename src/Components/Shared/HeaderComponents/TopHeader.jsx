import MiniNabvar from '@/Components/MiniComponents/MiniNabItems';
import { IoIosArrowDown } from "react-icons/io";

const TopHeader = () => {
    return (
        <div className='border-b border-gray-200 ml-5'>
            <div className='flex justify-between items-center py-3 container mx-auto'>
            <div className='flex'>
                <MiniNabvar title={"About Us"} symbol={"|"}></MiniNabvar>
                <MiniNabvar title={"My Account"} symbol={"|"}></MiniNabvar>
                <MiniNabvar title={"Wislist"} symbol={"|"}></MiniNabvar>
                <MiniNabvar title={"Order Tracking"}></MiniNabvar>
            </div>
            <div className='text-gray-400'>
                <p>“Welcome to Daily Hut — Your everyday destination for trendy savings!”</p>
            </div>
            <div className='flex'>
                <MiniNabvar title={"Need help? Call Us (+88 019123-00964)"} symbol={"|"}></MiniNabvar>
                <div>
                    <div className="dropdown dropdown-center">
                        <div tabIndex={0} >
                            <MiniNabvar title={`English`} symbol={"|"} arrow={ <IoIosArrowDown />}></MiniNabvar>
                        </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a><MiniNabvar title={"Bangla"}></MiniNabvar></a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-center">
                        <div tabIndex={0} className='' >
                            <MiniNabvar title={`USD`}  arrow={ <IoIosArrowDown />}></MiniNabvar>
                        </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a><MiniNabvar title={"BDT"}></MiniNabvar></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TopHeader;