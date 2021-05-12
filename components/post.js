

export default function PostForm() {
    return (
        <div className="my-8 mx-4 md:mx-16 lg:mx-16 xl:mx-16">
            <form onSubmit="submit" className="">
                    <textarea rows = "7"  name="post" id="post" className="w-full bg-gray pl-3.5 text-sm overflow-scroll" placeholder="What's On Your Mind?"></textarea>
                    <div className="my-4 w-1/2 md:w-1/4 lg:w-1/3 xl:w-1/3 grid grid-cols-2 divide-x divide-gray-400">

                        <button type="submit" className="h-8 px-2 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-4 hover:ring-gray-600 hover:ring-opacity-50">
                            Post It
                        </button>

                        <button type="submit" className="h-8 px-2 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-4 hover:ring-gray-600 hover:ring-opacity-50">
                            Clear
                        </button>
                    </div>

            </form>





        </div>

    );
}