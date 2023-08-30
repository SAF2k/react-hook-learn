interface ContainerProps {
  children: React.ReactNode,
  BackgroundColor: string,
  ContainerColor: string,
  header: string,
}

const Container = ({ children, BackgroundColor, ContainerColor, header }: ContainerProps) => {

  return (
    <>
      <div className={`flex justify-center h-screen lg:p-6 ${BackgroundColor}`}>
        <div
          className={`flex justify-center flex-col items-center rounded-3xl gap-[50px] h-[calc(100vh-50px)] lg:w-[calc(100vw-30vh)] md:w-[90vw] sm:w-screen ${ContainerColor} `}
        >
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold pb-12">{header}</h1>
          {children}
        </div>
      </div>
      {/* <div className="border-b-2 border-black"></div> */}
    </>
  );
};

export default Container;
