import VideoPlayer from "./Video";

const Details = () => {
  return (
    <div>
      <h1 className="font-bold flex justify-center text-center mt-14 text-4xl mb-12 ">
        Five Nights At Freddy&apos;s
      </h1>
      <VideoPlayer />
      <div className="overview relative flex  mt-12  mx-[100px] h-[555px] ">
        <div className="over-img">
          <img 
          className="h-full w-[855px]"
            src="https://image.tmdb.org/t/p/w1280/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg"
            alt=""
          />
        </div>
        <div className="over-text flex flex-col gap-8 mx-auto border-solid border">
          <h1 className="bg-black  text-blue-400  flex justify-center text-center text-3xl rounded-3xl h-9 mx-5 mt-5 " >Overview</h1>
          <p className="mx-8 text-3xl "  >
            All unemployed, Ki-taek&apos;s family takes peculiar interest in the
            wealthy and glamorous Parks for their livelihood until they get
            entangled in an unexpected incident.
          </p>
          <h1 className="bg-black text-blue-400  flex justify-center text-3xl text-center rounded-3xl h-9 mx-5  mt-5">Genres</h1>
          <ul className="mx-8 flex justify-around text-3xl" >
            <li>Comedy</li>
            <li>Thriller</li>
            <li>Drama</li>
          </ul>
          <h1 className="bg-black text-blue-400  flex justify-center text-3xl text-center rounded-3xl h-9 mx-5 ">Production Companies</h1>
          <ul className="mx-8 flex text-3xl justify-around">
            <li>Blumhouse Productions</li>
            <li>Scott Cawthon Productions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
