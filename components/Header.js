
import SignIn from "@/Authentication/SignIn"
import SignUp from "@/Authentication/SignUp"

const Header = () => {

    const handleSignIn = () => {
        // handle sign in
    }

      const handleSignOut = () => {
        // handle sign out
    }
    return (
        <div className="
        h-fit
        p-6
        mr-12
        flex
        justify-between
        ">
            <div>
<p className="text-4xl font-semibold mb-5">
                Welcome Back
                </p>
                <p className="text-xl font-medium">Top picks for you</p>
            </div>
            
            <div>
 <SignUp className="
            mr-8
            px-8
            w-36
            border-2
            border-black
            text-black
            py-2
            rounded-md
            text-bold
            hover:bg-black
            hover:text-white
            hover:border-black
            transition
            font-medium
            "/>
            <SignIn className="
            px-8
            w-36
            border-2
            border-black
            bg-black
            py-2
            text-white
            rounded-md
            hover:border-black
            hover:text-black
            hover:bg-white
            transition
            font-medium
            "/>
           
            </div>
           
            
        </div>
    )
}

export default Header