

export default function Feed() {
    const feedItems = [
        {
            id: 1,
            // author: ,
            title: "Some Crap",
            date: "now",
            body: "here's some crap.  It's a long block of crap.  You'll notice it goes on foreeeeeeeeeeever.  I'm testing to see how it formatts when it needs to scroll or overflow the box I gave it.  Like I said, a super super super long post but that's ok cuz I'm testing.  It needs to be lonnnnnnnnnnnnnnnnnnnger",
        },

        {
            id: 2,
            // author: ,
            title: "Some other Crap",
            body: "and some more crap",
            date: "before now"
        },

        {
            id: 3,
            // author: ,
            title: "Some Crap",
            date: "much before now",
            body: "here's some crap.  It's a long block of crap.  You'll notice it goes on foreeeeeeeeeeever.  I'm testing to see how it formatts when it needs to scroll or overflow the box I gave it.  Like I said, a super super super long post but that's ok cuz I'm testing.  It needs to be lonnnnnnnnnnnnnnnnnnnger.  This one needs to be even longerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
        },

    ];

    return feedItems.map((item) => (
        <div className="h-1/3 overflow-y-scroll" >
            <table className="border-b-2 w-96 ml-8">
                <thead >
                    <tr>
                        <th className="pt-4 pb-4">{item.title} <br></br> {item.date}</th>
                    </tr>
                </thead>


                <tbody >
                    <td key = {item.id} className="pb-4">
                        {item.body}
                    </td>

                </tbody>
            </table>
        </div>
    ));
}
