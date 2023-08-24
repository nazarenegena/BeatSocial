const Navbar = () => {
    return (
        <div className="flex mx-80   ">
            <p className="mx-6">Home</p>
            <p className="mx-6">Browse</p>
            <p className="mx-6">Playlist</p>
            <p className="mx-6">Artists</p>

            <div className = "flex ml-60">
                <button className="mx-10">Sign in</button>
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Navbar