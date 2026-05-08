import UserSettingsPageComponent from "@/components/pages/user/UserSettingsPageComponent/UserSettingsPageComponent";
import WithAdmin from "@/role-wrappers/WithAdmin";

const SettingsPage = () => {
  return (
    <WithAdmin>
      <UserSettingsPageComponent />
    </WithAdmin>
  );
};

export default SettingsPage;
