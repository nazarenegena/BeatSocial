import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";

const Header = ({ pageTitle }) => {
  const handleSignIn = () => {
    // handle sign in
  };

  const handleSignOut = () => {
    // handle sign out
  };
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

      <div>
        <SignUp
          className="
            text-bold
            mr-8
            w-36
            rounded-md
            border-2
            border-black
            px-8
            py-2
            font-medium
             text-black
            transition
            hover:border-secondary-orange
            hover:bg-secondary-orange
            hover:text-white
            "
        />
        <SignIn
          className="
            w-36
            rounded-md
            border-2
            border-black
            bg-black
            px-8
            py-2
            font-medium
            text-white
            transition
            hover:border-secondary-orange
            hover:bg-secondary-orange
            hover:text-white
            "
        />
      </div>
    </div>
  );
};

export default Header;
