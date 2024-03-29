import { memo } from "react";
import Notification from "./Notification";

const index = () => {
  return (
    <div className="space-y-6">
      <h4 className="font-medium">Notifications</h4>
      <div className="w-full" >
        <Notification />
        <Notification />
        <Notification />
      </div>
    </div>
  );
};

export default memo(index);
