import Image from "next/image";
import tempImage from '../../../public/icons/cute_dev.jpg'

const Contract = (props:any) => {

    return(
        // <div className="block max-h-15 md:w-1/4 rounded-[24px] mb-6 px-8 pt-6 pb-6 text-white"  style={{backgroundColor: "#29292c", opacity:0.8 }}>
        <div className="md:w-1/4 mb-6">
            <div className="m-4 px-8 pt-6 pb-6 rounded-[24px] text-white"  style={{backgroundColor: "#29292c", opacity:0.8 }}>
                <div className="flex items-center">
                    <Image src={tempImage} alt="logo" className="w-8 h-8 rounded-full mr-2" />
                    <h1 style={{fontSize: "18px"}}><b>{props.title}</b></h1>
                </div>
                <p className="h-10 overflow-hidden text-base leading-tight mt-3">
                    {props.description}
                </p>
                <div className="mt-3">
                    <span className="py-06 px-012 rounded-full bg-white bg-opacity-20 p-1 px-2">{props.contract}</span>
                </div>
                <div className="mt-4 w-full pt-2">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold rounded-full flex " style={{padding: "2px"}} >
                        <a className="flex w-full text-white rounded-full py-10rem justify-center items-center pt-2 pb-2" onClick={() => localStorage.setItem('buyData', JSON.stringify(props))} style={{backgroundColor: "#222327"}} href={`/marketplace/buy/${props.id}`}>Buy</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contract;