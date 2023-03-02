import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading } from "@chakra-ui/react";

import { getOutgoings } from "../../store/actions/outgoingAction";

import List from "./list";

const Outgoings = () => {
  const dispatch = useDispatch();

  const outgoings = useSelector((state) => state.outgoings.list);

  useEffect(() => {
    dispatch(getOutgoings());
  }, [dispatch]);

  return (
    <>
      <Heading as="h3" size="lg" noOfLines={1} marginBottom={5}>
        Outgoings
      </Heading>
      <List payreqs={outgoings} />;
    </>
  );
};

export default Outgoings;
