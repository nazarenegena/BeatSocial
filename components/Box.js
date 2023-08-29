const Box = ({ children, className }) => {
  return (
    <div
      className={`${className} rounded-lg
            w-full
            shadow-md`}
    >
      {children}
    </div>
  );
};

export default Box;
