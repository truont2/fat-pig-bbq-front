import { useState } from "react"
import Navbar from "./NavBar"
// import Footer from "./elements/footer"
import NotificationBanner from "./elements/notification-banner"
// import AlertItem from './AlertItem';
const Layout = ({ children, global, pageContext }) => {
  const { navbar, footer, notificationBanner } = global.attributes

  const [bannerIsShown, setBannerIsShown] = useState(true)

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        {notificationBanner && bannerIsShown && (
          <NotificationBanner
            data={notificationBanner}
            closeSelf={() => setBannerIsShown(false)}
          />
        )}
        <div className="container px-5 mx-auto">{children}</div>
      </div>
    </div>

    // <div className='container mx-auto px-4'>

    //     <div className="container px-5 mx-auto">
    //       <div>{children}</div>
    //     </div>

    // </div>
  )
}

export default Layout
