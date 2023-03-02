import Moment from "react-moment";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const List = ({ payreqs }) => {
  return (
    <>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Employee Name</Th>
            <Th>Payreq No</Th>
            <Th>Type</Th>
            <Th>Approved Date</Th>
            <Th isNumeric>IDR</Th>
            <Th isNumeric>Days</Th>
          </Tr>
        </Thead>
        <Tbody>
          {payreqs.length > 0
            ? payreqs.map((payreq, index) => (
                <Tr key={payreq.id}>
                  <Td>{index + 1}</Td>
                  <Td>{payreq.employee.name}</Td>
                  <Td>{payreq.payreq_num}</Td>
                  <Td>{payreq.payreq_type}</Td>
                  <Td>
                    <Moment format="DD-MM-YYYY">{payreq.approve_date}</Moment>
                  </Td>
                  <Td isNumeric>{payreq.payreq_idr.toLocaleString()}</Td>
                  <Td isNumeric>{payreq.days.toLocaleString()}</Td>
                </Tr>
              ))
            : null}
        </Tbody>
      </Table>
    </>
  );
};

export default List;
