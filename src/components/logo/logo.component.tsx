import { IonImg } from "@ionic/react";
import "./logo.styles.scss";

const Logo = () => {
  return (
    <div className="logo-container">
      <IonImg
        src="https://s3-alpha-sig.figma.com/img/ea94/3418/399c9439f088c5ebb9eaeb7545ea66d5?Expires=1621209600&Signature=a1x7K67-LxABFSci-7NP0oNoJ8EiOzmmGyxCOrh3lZtYRTuUGjxNLQQP8cUIHwdOJH~dWeYUd8rx53~kFvfmToAazEdXFDeClzljlRRVRV34PZ0WvHIXmCCJDeMERIShkHWQiCGHFHRhBQyadgGCHx3PD~6mHofc8FrVoXEQNHTIxVHgOh2vjiuO3bWV0VuW-WVkHlSyapnjlpg1pZOT4dRw0FKwzzHedtO0kO55zDAhumEeM7kMibti8M~kknq7i9kpEkyWuK45JNcj2rne4XOrFO3nekSl6KFhrrHwoy5lKjD3p-9JveiepoOQOZtP5O1EhPvE56cT~wjZBo9N~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt="logo"
        className="logo-image"
      />
    </div>
  );
};

export default Logo;
