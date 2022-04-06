import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import { Badge } from "react-bootstrap";

const NavBadge = () => {
  const [state] = useStoreContext();
  return (
    <Badge
      style={{ position: "relative", left: "7px", bottom: "10px" }}
      bg="primary"
      pill
    >
      {state.cart.length}
    </Badge>
  );
};

export default NavBadge;
