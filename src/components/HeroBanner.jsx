import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Fitness Craze Sweat, Smile
              <br className="inline-block md:hidden" /> & Repeat.
            </h1>
            <p className="mb-8 leading-relaxed">
              Check out the most effective exercises
            </p>
            <div className="flex justify-center">
              <a
                href="#exercises"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Explore Exercises
              </a>
            </div>
            <div className="opacity-10 hidden sm:block font-semibold text-[200px] text-red-600 -z-10">
              Exercises
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={HeroBannerImage}
              alt="Banner"
              className="object-cover object-center rounded"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBanner
