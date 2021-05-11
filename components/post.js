

export default function PostForm() {
    return (
        <div className="w-96">
            <form onSubmit="submit" className="w-96">
                    <textarea rows = "5" cols = "60" name="post" id="post" className="ml-8 h-12 w-96 bg-gray-200 pl-3.5 text-sm overflow-scroll" placeholder="What's On Your Mind?"></textarea>
                    <div className="m-5 grid grid-cols-2 divide-x divide-gray-400">

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