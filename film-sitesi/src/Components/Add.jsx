const Add = () => {
  return (
    <>
      <div className="container  ">
        <div className="add-content -mt-5 w-[80%] h-2 mx-auto  ">
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg"
            alt=""
          />
        </div>
        <div className="items flex flex-col justify-items-start justify-start">
          <div className="h11">
            <h1 className="text-white text-5xl">Hoşgeldiniz</h1>
          </div>{" "}
         <div className="h22">
         <h2 className="text-white text-4xl">
            Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
          </h2>
         </div>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Film, dizi , kişi ara..."
            className="rounded-xl w-[70%] h-9 mt-12"
          />
          <input type="submit"  />
        </div>
        `
      </div>
    </>
  );
};

export default Add;
