import { useState, useEffect } from "react"
import Navbar from "./NavBar"
// import Footer from "./elements/footer"
import NotificationBanner from "./elements/notification-banner"
import { setRequestMeta } from "next/dist/server/request-meta";
// import AlertItem from './AlertItem';
const Layout = ({ children, global, pageContext }) => {
  const { navbar, footer, notificationBanner } = global.attributes;

  useEffect(() => {
    if(window.localStorage.getItem('alertStatus') != undefined) {
      setBannerIsShown(JSON.parse(window.localStorage.getItem('alertStatus')));
    } else {
      setBannerIsShown(true);
    }
  }, []);

  const [bannerIsShown, setBannerIsShown] = useState();
  const closeBanner = (e) => {
    window.localStorage.setItem('alertStatus', 'false');
    setBannerIsShown(false)
  }
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        {console.log(bannerIsShown)}
        {notificationBanner && bannerIsShown && (
          <NotificationBanner
            data={notificationBanner}
            closeSelf={closeBanner}
          />
        )}
        <div className="container px-5 mx-auto">{children}</div>
      </div>
    </div>
  )
}

export default Layout
