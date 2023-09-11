const Header = ({ pageTitle }) => {
  return (
    <div
      className="
       
        mr-12
       
        flex
        h-fit
       justify-between bg-gradient-to-r from-white
       to-orange-100 py-5 pl-8 
        "
    >
      <div>
        <p className="mb-5 ml-3 text-3xl font-semibold text-black ">
          {pageTitle}
        </p>
      </div>
    </div>
  );
};

export default Header;
