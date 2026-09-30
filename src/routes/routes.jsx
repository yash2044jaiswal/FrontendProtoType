import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const AccessibilityAboutPage = lazy(() => import('../pages/AccessibilityAboutPage.jsx'));
const AskPolarisPage = lazy(() => import('../pages/AskPolarisPage.jsx'));
const AuthPage = lazy(() => import('../pages/AuthPage.jsx'));
const DataChartsPage = lazy(() => import('../pages/DataChartsPage.jsx'));
const DatasetDetailPage = lazy(() => import('../pages/DatasetDetailPage.jsx'));
const ExpeditionDetailPage = lazy(() => import('../pages/ExpeditionDetailPage.jsx'));
const ExpeditionGlobePage = lazy(() => import('../pages/ExpeditionGlobePage.jsx'));
const LiveTrackerPage = lazy(() => import('../pages/LiveTrackerPage.jsx'));
const MyAccountPage = lazy(() => import('../pages/MyAccountPage.jsx'));
const CommunityPage = lazy(() => import('../pages/CommunityPage.jsx'));
const MediaGalleryPage = lazy(() => import('../pages/MediaGalleryPage.jsx'));
const EducationHubPage = lazy(() => import('../pages/EducationHubPage.jsx'));
const KnowledgeGraphPage = lazy(() => import('../pages/KnowledgeGraphPage.jsx'));
const RepositoryPage = lazy(() => import('../pages/RepositoryPage.jsx'));
const StyleGuidePage = lazy(() => import('../pages/StyleGuidePage.jsx'));
const PublicationsPage = lazy(() => import('../pages/PublicationsPage.jsx'));
const StationDetailPage = lazy(() => import('../pages/StationDetailPage.jsx'));
const ReportReaderPage = lazy(() => import('../pages/ReportReaderPage.jsx'));
const ScientistProfilePage = lazy(() => import('../pages/ScientistProfilePage.jsx'));
const SearchResultsPage = lazy(() => import('../pages/SearchResultsPage.jsx'));
const StoryDetailPage = lazy(() => import('../pages/StoryDetailPage.jsx'));
const TimelinePage = lazy(() => import('../pages/TimelinePage.jsx'));
const AdminLoginPage = lazy(() => import('../pages/AdminLoginPage.jsx'));
const AdminDashboardPage = lazy(() => import('../pages/AdminDashboardPage.jsx'));
const AdminExpeditionsPage = lazy(() => import('../pages/AdminExpeditionsPage.jsx'));
const AdminUploadPage = lazy(() => import('../pages/AdminUploadPage.jsx'));
const AdminAiQueuePage = lazy(() => import('../pages/AdminAiQueuePage.jsx'));
const AdminStudioPage = lazy(() => import('../pages/AdminStudioPage.jsx'));
const AdminReviewPage = lazy(() => import('../pages/AdminReviewPage.jsx'));
const AdminPublishingPage = lazy(() => import('../pages/AdminPublishingPage.jsx'));
const AdminRightsPage = lazy(() => import('../pages/AdminRightsPage.jsx'));
const AdminUsersPage = lazy(() => import('../pages/AdminUsersPage.jsx'));
const AdminContentPage = lazy(() => import('../pages/AdminContentPage.jsx'));
const AdminMediaPage = lazy(() => import('../pages/AdminMediaPage.jsx'));
const AdminTagsPage = lazy(() => import('../pages/AdminTagsPage.jsx'));
const AdminTranslationPage = lazy(() => import('../pages/AdminTranslationPage.jsx'));
const AdminEducationPage = lazy(() => import('../pages/AdminEducationPage.jsx'));
const AdminEventsInboxPage = lazy(() => import('../pages/AdminEventsInboxPage.jsx'));
const AdminSocialPage = lazy(() => import('../pages/AdminSocialPage.jsx'));
const AdminFieldDiaryPage = lazy(() => import('../pages/AdminFieldDiaryPage.jsx'));
const AdminNotificationsPage = lazy(() => import('../pages/AdminNotificationsPage.jsx'));
const AdminProfilePage = lazy(() => import('../pages/AdminProfilePage.jsx'));

export const ROUTES = [
  { path: "/", Component: HomePage, name: "HomePage" },
  { path: "/about/accessibility", Component: AccessibilityAboutPage, name: "AccessibilityAboutPage" },
  { path: "/ask", Component: AskPolarisPage, name: "AskPolarisPage" },
  { path: "/auth", Component: AuthPage, name: "AuthPage" },
  { path: "/data", Component: DataChartsPage, name: "DataChartsPage" },
  { path: "/datasets/katabatic-wind-dynamics", Component: DatasetDetailPage, name: "DatasetDetailPage" },
  { path: "/expeditions/soe-01", Component: ExpeditionDetailPage, name: "ExpeditionDetailPage" },
  { path: "/globe", Component: ExpeditionGlobePage, name: "ExpeditionGlobePage" },
  { path: "/live/soe-01", Component: LiveTrackerPage, name: "LiveTrackerPage" },
  { path: "/account", Component: MyAccountPage, name: "MyAccountPage" },
  { path: "/community", Component: CommunityPage, name: "CommunityPage" },
  { path: "/media", Component: MediaGalleryPage, name: "MediaGalleryPage" },
  { path: "/education", Component: EducationHubPage, name: "EducationHubPage" },
  { path: "/graph", Component: KnowledgeGraphPage, name: "KnowledgeGraphPage" },
  { path: "/repository", Component: RepositoryPage, name: "RepositoryPage" },
  { path: "/style-guide", Component: StyleGuidePage, name: "StyleGuidePage" },
  { path: "/publications", Component: PublicationsPage, name: "PublicationsPage" },
  { path: "/base-stations/himadri", Component: StationDetailPage, name: "StationDetailPage" },
  { path: "/resources/ncpor-tr-2024-08", Component: ReportReaderPage, name: "ReportReaderPage" },
  { path: "/people/ananya-sen", Component: ScientistProfilePage, name: "ScientistProfilePage" },
  { path: "/search", Component: SearchResultsPage, name: "SearchResultsPage" },
  { path: "/stories/overwintering-in-the-schirmacher-oasis", Component: StoryDetailPage, name: "StoryDetailPage" },
  { path: "/timeline", Component: TimelinePage, name: "TimelinePage" },
  { path: "/admin/login", Component: AdminLoginPage, name: "AdminLoginPage" },
  { path: "/admin", Component: AdminDashboardPage, name: "AdminDashboardPage", admin: true },
  { path: "/admin/expeditions", Component: AdminExpeditionsPage, name: "AdminExpeditionsPage", admin: true },
  { path: "/admin/upload", Component: AdminUploadPage, name: "AdminUploadPage", admin: true },
  { path: "/admin/ai-queue", Component: AdminAiQueuePage, name: "AdminAiQueuePage", admin: true },
  { path: "/admin/studio", Component: AdminStudioPage, name: "AdminStudioPage", admin: true },
  { path: "/admin/review", Component: AdminReviewPage, name: "AdminReviewPage", admin: true },
  { path: "/admin/publishing", Component: AdminPublishingPage, name: "AdminPublishingPage", admin: true },
  { path: "/admin/rights", Component: AdminRightsPage, name: "AdminRightsPage", adminOnly: true, admin: true },
  { path: "/admin/users", Component: AdminUsersPage, name: "AdminUsersPage", adminOnly: true, admin: true },
  { path: "/admin/content", Component: AdminContentPage, name: "AdminContentPage", admin: true },
  { path: "/admin/media", Component: AdminMediaPage, name: "AdminMediaPage", admin: true },
  { path: "/admin/tags", Component: AdminTagsPage, name: "AdminTagsPage", admin: true },
  { path: "/admin/translation", Component: AdminTranslationPage, name: "AdminTranslationPage", admin: true },
  { path: "/admin/education", Component: AdminEducationPage, name: "AdminEducationPage", admin: true },
  { path: "/admin/events-inbox", Component: AdminEventsInboxPage, name: "AdminEventsInboxPage", admin: true },
  { path: "/admin/social", Component: AdminSocialPage, name: "AdminSocialPage", admin: true },
  { path: "/admin/field-diary", Component: AdminFieldDiaryPage, name: "AdminFieldDiaryPage", admin: true },
  { path: "/admin/notifications", Component: AdminNotificationsPage, name: "AdminNotificationsPage", admin: true },
  { path: "/admin/profile", Component: AdminProfilePage, name: "AdminProfilePage", admin: true },
];

// Extra URLs that intentionally render an existing screen (that screen is a combined showcase)
export const ALIASES = {"/admin/integrations": "/admin/rights", "/admin/analytics": "/admin/rights", "/admin/audit-logs": "/admin/rights"};
