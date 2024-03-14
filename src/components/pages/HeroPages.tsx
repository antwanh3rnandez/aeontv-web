import hero from "../../assets/hero-3.png"

export const HeroPages = ({ title }: { title: string }) => {
    return(
        <>
        <img className="w-full h-full object-cover" src={hero} alt="Hero" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="w-full h-full bg-black bg-opacity-20 text-white text-center p-4 rounded"
            style={{ backdropFilter: 'blur(0px)' }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="mt-[-12px]">
                <h2 className="hero-text lg:text-[3.5em] text-[2.5em]">
                  {title}
                </h2>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}