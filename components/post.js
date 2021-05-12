

export default function PostForm() {
    return (
        <div className="">
            <form onSubmit="submit" className="mb-24">
                    <textarea rows = "7" cols = "65" name="post" id="post" className="ml-48 w-1/2 bg-gray pl-3.5 text-sm overflow-scroll" placeholder="What's On Your Mind?"></textarea>
                    <div className="ml-48 mr-48 grid grid-cols-2 divide-x divide-gray-400">

                        <button type="submit" className="h-8 text-lg text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
                            Post It
                        </button>

                        <button type="submit" className="h-8 text-lg text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
                            Cancel
                        </button>
                    </div>

            </form>





        </div>

    );
}