import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutAppPage } from "../pages/AboutApp";
import { AboutUsPage } from "../pages/AboutUs";
import { FAQPage } from "../pages/FAQ";
import { FeedbackPage } from "../pages/Feedback";
import { HowToUsePage } from "../pages/HowToUse";
import { NotFoundPage } from "../pages/NotFound";
import { PrivacyPage } from "../pages/Privacy";
import { SettingsPage } from "../pages/Settings";
import { WhoWeArePage } from "../pages/WhoWeAre";
import {
  PATH_ABOUT_APP,
  PATH_ABOUT_US,
  PATH_ANY,
  PATH_FAQ,
  PATH_FEEDBACK,
  PATH_HOW_TO_USE,
  PATH_PRIVACY,
  PATH_ROOT,
  PATH_SETTINGS,
  PATH_WHO_WE_ARE,
} from "./paths";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={PATH_ROOT} element={<AboutAppPage />} />
      <Route path={PATH_HOW_TO_USE} element={<HowToUsePage />} />
      <Route path={PATH_ABOUT_APP} element={<AboutAppPage />} />
      <Route path={PATH_PRIVACY} element={<PrivacyPage />} />
      <Route path={PATH_WHO_WE_ARE} element={<WhoWeArePage />} />
      <Route path={PATH_FAQ} element={<FAQPage />} />
      <Route path={PATH_ABOUT_US} element={<AboutUsPage />} />
      <Route path={PATH_FEEDBACK} element={<FeedbackPage />} />
      <Route path={PATH_SETTINGS} element={<SettingsPage />} />
      <Route path={PATH_ANY} element={<NotFoundPage />} />
    </Routes>
  );
};
