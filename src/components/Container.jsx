const Container = ({ children, className }) => {
  return (
    <div
      className={`px-4  xs:mx-auto xs:max-w-[460px] sm:max-w-[590px] md:max-w-[730px] lg:max-w-[980px] xl:max-w-[75rem] 2xl:max-w-[1400px] 3xl:max-w-[1620px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
