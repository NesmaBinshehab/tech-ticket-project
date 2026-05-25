import ProfileCard from "../components/ProfileCard";
import ProfileStats from "../components/ProfileStats";
import ProfileTabs from "../components/ProfileTabs";

export default function ProfilePage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-200 p-6">
      
      <div className="max-w-5xl mx-auto space-y-6">

        <ProfileCard />

        <ProfileStats />

        <ProfileTabs />

      </div>

    </div>
  );
}