import { BellRing, X } from "lucide-react";
import "./index.scss";

// interface IProps{
//     // title: string
// }

const Alert = () => {
  return (
    <div className="alert-danger">
      <div className="alert-header">
        <div className="title">
          <span>
            <BellRing />
          </span>
          <h4>Alert Title</h4>
        </div>
        <X />
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero vel
        totam eius! Sed nisi atque fugiat, consectetur suscipit error
        praesentium.
      </p>
    </div>
  );
};

export default Alert;
