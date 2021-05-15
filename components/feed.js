import moment from "moment";

export default function Feed({ data }) {
  console.log(data)
  return data.map((item) => (
    <div className="m-8 mt-0">
      <section className="">
        {/* <p className="text-left text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue">
          [ {item.title} ]
        </p> */}
        <p className="mb-4 text-base md:text-xl lg:text-xl xl:text-xl">
          {moment(item.created_at).format("MM-DD-YYYY")}
        </p>

        <p
          key={item.id}
          className="h-24 overflow-y-auto text-base md:text-xl lg:text-xl xl:text-xl pb-4"
        >
          {item.post} <br></br> __________________________
        </p>
      </section>
    </div>
  ));
}
