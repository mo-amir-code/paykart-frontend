import React from "react";
import Card from "./Card";
import LevelEarning from "./LevelEarning";
import WithdrawalHistory from "./WithdrawalHistory";
import ReferNow from "./ReferNow";

const index = () => {
  return (
    <div>
      <h4 className="font-medium font-poppins">Dashboard</h4>
      <div className="flex items-center mt-4 gap-4">
        <Card
          type="totalEarning"
          msg="Your referral total earning is"
          amount={6547}
        />
        <Card
          type="totalWithdrawal"
          msg="Your total withdrawal is"
          amount={6547}
        />
        <Card
          type="isWithdrawalActive"
          msg={`Bank withdrawal is ${true ? "active" : "locked"}.`}
          isWithdrawalActive
          amount={6547}
        />
      </div>
      <div className="mt-12 space-y-20" >
        <LevelEarning />
        <WithdrawalHistory />
      </div>
        <ReferNow />
    </div>
  );
};

export default index;