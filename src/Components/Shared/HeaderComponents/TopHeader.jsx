import MiniNabvar from '@/Components/MiniComponents/MiniNabItems';
import { IoIosArrowDown } from "react-icons/io";

const TopHeader = () => {
    return (
        <div className="border-b border-gray-200 text-sm">
            <div className="container mx-auto flex justify-between items-center py-3 px-4 ">
                
                {/* Left side */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <MiniNabvar title={"About Us"} symbol={"|"} />
                        <MiniNabvar title={"My Account"} symbol={"|"}/>
                    </div>
                    <div className="md:flex items-center gap-3">
                        <MiniNabvar title={"Wishlist"} symbol={"|"} />
                        <MiniNabvar title={"Order Tracking"} />
                    </div>
                </div>

                {/* Center text */}
                <div className="  text-gray-400 text-center">
                    <p>“Welcome to Daily Hut — Your everyday destination for trendy savings!”</p>
                </div>

                {/* Right side */}
                <div className="hidden md:flex items-center gap-4">
                    <div className=" md:flex">
                        <MiniNabvar title={"Need help? Call Us (+88 019123-00964)"} symbol={"|"} />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0}>
                                <MiniNabvar title={`English`} symbol={"|"} arrow={<IoIosArrowDown />} />
                            </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-10 w-36 p-2 shadow-sm">
                                <li><a><MiniNabvar title={"Bangla"} /></a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0}>
                                <MiniNabvar title={`USD`} arrow={<IoIosArrowDown />} />
                            </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-10 w-36 p-2 shadow-sm">
                                <li><a><MiniNabvar title={"BDT"} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
