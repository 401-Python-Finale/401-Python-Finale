

export default function Feed() {
    const feedItems = [
        {
            id: 1,
            // author: ,
            title: "Some Crap",
            body: "here's some crap.  It's a long block of crap.  You'll notice it goes on foreeeeeeeeeeever.  I'm testing to see how it formatts when it needs to scroll or overflow the box I gave it.  Like I said, a super super super long post but that's ok cuz I'm testing",
        },

        {
            id: 2,
            // author: ,
            title: "Some other Crap",
            body: "and some more crap",
        },
    ];

    return feedItems.map((item) => (
        <div>
            <table className="border-t-2 border-b-2 w-96 ml-8">
                <thead >
                    <tr>
                        <th className="pt-4 pb-4">{item.title}</th>
                    </tr>
                </thead>


                <tbody>
                    <td
                        key = {item.id}
                        className="overflow-y-auto h-2 pb-4"
                        >
                        {item.body}
                    </td>

                </tbody>
            </table>
        </div>
    ));
}
