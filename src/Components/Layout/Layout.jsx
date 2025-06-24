import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <div className="main-container">
      <Sidebar />
      <main>{children}</main>
    </div>
  </div>
);

export default Layout;
