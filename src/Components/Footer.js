import footItems from "../Json/footer1.json";
import { prepareFooterColumns } from "./prepareFooterColumns.js";

export const Footer = (props) => {
  let items = footItems.map((item, idx) => {
    return prepareFooterColumns(item, idx);
  });

  return (
    <div>
      <div className="footer">
        <div className="footer-div">{items}</div>
      </div>
    </div>
  );
};
