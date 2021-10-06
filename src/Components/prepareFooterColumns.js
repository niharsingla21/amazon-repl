import { v4 as uuidv4 } from "uuid";

export const prepareFooterColumns = (footItems, idx) => {
  let footColItems = footItems.links.map((link) => {
    return (
      <div key={uuidv4()} className="footer-cell">
        <div>{link.text}</div>
      </div>
    );
  });

  return (
    <div key={uuidv4()} id={uuidv4()} className="footer-col">
      <div key={uuidv4()} className="footer-col-head">
        {footItems.header}
      </div>
      <div>{footColItems}</div>
    </div>
  );
};
