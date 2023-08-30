interface ContainerProps {
  children: React.ReactNode,
  BackgroundColor: string,
  ContainerColor: string,
  header: string,
}

const Container = ({ children, BackgroundColor, ContainerColor, header }: ContainerProps) => {

  return (
    <>
      <div className={`flex justify-center h-screen p-6 ${BackgroundColor}`}>
        <div
          className={`flex justify-center flex-col items-center rounded-3xl gap-[50px] h-[calc(100vh-50px)] w-[calc(100vw-510px)] ${ContainerColor} `}
        >
          <h1 className="text-5xl font-bold pb-12">{header}</h1>
          {children}
        </div>
      </div>
      {/* <div className="border-b-2 border-black"></div> */}
    </>
  );
};

export default Container;
