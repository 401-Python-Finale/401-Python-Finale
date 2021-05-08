

export default function PostForm() {
    return (
        <div>
            <div>
            </div>
            <form onSubmit="submit" className="">
                <div className="">
                    {/* <label htmlFor="post">User Name</label> */}
                    <input
                        type="text"
                        name="post"
                        id="post"
                        placeholder="What's On Your Mind?"
                        className=""
                    />
                    <button type="submit" className="">
                        Post It
                    </button>

                    <button type="submit" className="">
                        Cancel
                    </button>

                </div>
            </form>




        </div>

    );
}