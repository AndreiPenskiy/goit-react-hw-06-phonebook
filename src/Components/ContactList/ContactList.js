import React from "react";
import PropTypes from "prop-types";
import { Item, Button } from "./ContactList.styled";
import { remove } from "../../redux/ToolkitSlice";
import { useDispatch } from 'react-redux';

const ContactList = ({ contacts }) => {

  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(remove(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
