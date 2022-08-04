import { useState, useEffect } from "react"
import NotificationBanner from "./elements/notification-banner"
const Layout = ({ children, global, pageContext }) => {
  const { navbar, footer, notificationBanner } = global.attributes;

  useEffect(() => {
    const status = window.sessionStorage.getItem('alertStatus')
    if(status != undefined) {
      setBannerIsShown(JSON.parse(status));
    } else {
      setBannerIsShown(true);
    }
  }, []);

  const [bannerIsShown, setBannerIsShown] = useState();
  const closeBanner = (e) => {
    window.sessionStorage.setItem('alertStatus', 'false');
    setBannerIsShown(false)
  }
  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#FAF9F6]">
      {/* Aligned to the top */}
      <div className="flex-1">
        {notificationBanner && bannerIsShown && (
          <NotificationBanner
            data={notificationBanner}
            closeSelf={closeBanner}
          />
        )}
        <div className=" mx-auto w-screen">{children}</div>
      </div>
    </div>
  )
}

export default Layout
