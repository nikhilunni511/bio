import Link from "next/link";
import styles from "./SocialMedia.module.scss"

const SocialMediaButton = ({ media })  => {
    return (<div className={styles.socialButton}>
        <Link href={'/'} className={styles.socialLoginLink}>
            <span>
                {media.icon}
            </span>
            <span>
                {`Continue with ${media.platform}`}
            </span>
        </Link>
    </div>)
};

export default SocialMediaButton;