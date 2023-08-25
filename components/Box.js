const Box = ({ children, className }) => {
  return (
    <div
      className={`${className} rounded-lg
            w-full
            bg-primary-pink`}
    >
      {children}
    </div>
  );
};

export default Box;
