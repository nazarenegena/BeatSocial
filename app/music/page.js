import LyricSection from "@/sections/LyricsSection"
import SocialsSection from "@/sections/SocialsSection"
import TrackLineUpSection from "@/sections/TrackLineUpSection"

export default function Page() {
    return (
        // this is the page that contains the tracks and play action
        <>
            <LyricSection />
            <SocialsSection />
            <TrackLineUpSection/>
            </>
    )
}