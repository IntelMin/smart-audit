const Coin = (props) => {
    return (
        <button className="py-2 px-6 text-white font-size-14 rounded-full md:items-center hover:bg-blue-700 hover:bg-opacity-10" style={{backgroundColor: "#2c2c2e"}}>
            {props.name}
        </button>
    );
};

export default Coin;