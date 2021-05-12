

export default function PostForm() {
    return (
        <div className="m-8">
            <form onSubmit="submit" className="">
                    <textarea rows = "5"  name="post" id="post" className="w-full md:w-5/12 lg:w-5/12 xl:w-5/12 bg-gray pl-3.5 text-sm overflow-scroll" placeholder="What's On Your Mind?"></textarea>
                    <div className="my-4 w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/5 grid grid-cols-2 divide-x divide-gray-400">

                        <button type="submit" className="h-8 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
                            Post It
                        </button>

                        <button type="submit" className="h-8 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
                            Cancel
                        </button>
                    </div>

            </form>





        </div>

    );
}