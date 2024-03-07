import UserPersonalInfo from '@/components/userprofile/personalInfo'
import ManageAddresses from "@/components/userprofile/manageAddresses"
import Notifications from "@/components/userprofile/notifications"
import ReferDashboard from "@/components/userprofile/referDashboard"
import MyOrders from "@/components/userprofile/orders"
import OrderDetails from "@/components/userprofile/orderDetails"

const MainProfile = () => {
  return (
    <div className='flex-grow max-md:bg-tertiary-color bg-white rounded-lg py-4 px-6' >
      {/* <UserPersonalInfo /> */}
      {/* <ManageAddresses /> */}
      {/* <Notifications /> */}
      {/* <ReferDashboard /> */}
      {/* <MyOrders /> */}
      <OrderDetails />
    </div>
  )
}

export default MainProfile