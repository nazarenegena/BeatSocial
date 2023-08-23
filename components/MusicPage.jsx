import SocialsSection from "./SocialsSection"
import TrackLineUpSection from "./TrackLineUpSection"


const MusicPage = () => {
    return (
        <div>
         <LyricSection>
          {children}
        </LyricSection>
        <SocialsSection>
          {children}
        </SocialsSection>
        <TrackLineUpSection>
          {children}
        </TrackLineUpSection>
        </div>
    )
}

export default MusicPage