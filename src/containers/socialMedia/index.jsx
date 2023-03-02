import SocialMediaButton from "components/Buttons/SocialMedia"
import styles from "./SocialMedia.module.scss"
import socialMediaCollections from "constants/socialMedia";

export default function SocialMedia() {
    return (
        <div className={styles.socialMediaLogin}>
            {socialMediaCollections().map((media, index) => <SocialMediaButton media={media} key={index} />)}
        </div>
    )
}