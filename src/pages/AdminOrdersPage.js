import AdminOrders from "../features/admin/components/AdminOrders";
import NavBar from "../features/common/Navbar";

function AdminOrdersPage() {
  return (
    <div>
      <NavBar>
        <AdminOrders />
      </NavBar>
    </div>
  );
}

export default AdminOrdersPage;
