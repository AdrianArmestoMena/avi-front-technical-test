import CalendarModal from "../calendarModal/calendarModal";
import ConditionForm from "../ConditionForm/ConditionForm";
import Modal from "../modal/Modal";
import ServiceCard from "../ServiceCard/ServiceCard";

const Layout = (): JSX.Element => {
  return (
    <div className="service-layout">
      <ServiceCard />
      <CalendarModal />
      <ConditionForm />
      <Modal />
    </div>
  );
};

export default Layout;
