const Input = ({image,name,placeholder}) => {
    return(
        <div className="mt-5">
            <div className="flex justify-start mb-3">
                <img src={image} alt="" />
                <p>{name}</p>
            </div>

            <div className="border-2 border-black rounded-md h-10 flex items-center ">
                <input className="focus:border-none shadow-none outline-none w-60 ml-5" type="text" placeholder={placeholder}  />
            </div>

        </div>
    )
}


export default Input;