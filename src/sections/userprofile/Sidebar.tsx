 

import dynamic from "next/dynamic"
const ProfilePath = dynamic(() => import("@/components/userprofile/ProfilePath"))
import UserNamePlate from "@/components/userprofile/UserNamePlate"
import { accountSettings, help, mystuffs } from "@/data"
import { memo } from "react"


const Sidebar = () => {
  return (
    <aside className="w-[300px] space-y-8 max-md:hidden" >
      <UserNamePlate />
      <div className="space-y-2 rounded-lg" >
        <ProfilePath icon="order" title="My Orders" />
        <ProfilePath icon="dashboard" title="Refer Dashboard" />
        <ProfilePath icon="account" title="Account Settings" list={accountSettings as [{name:string, path:string}]} />
        <ProfilePath icon="stuff" title="My Stuff" list={mystuffs as [{name:string, path:string}]} />
        <ProfilePath icon="support" title="Help & Support" list={help as [{name:string, path:string}]} />
      </div>
    </aside>
  )
}

export default memo(Sidebar)