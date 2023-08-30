import LyricSection from "@/components/sections/LyricsSection"
import SocialsSection from "@/components/sections/SocialsSection"
import TrackLineUpSection from "@/components/sections/TrackLineUpSection"

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