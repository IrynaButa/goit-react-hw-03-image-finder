// import React from "react";
// import shortid from "shortid";
// import PropTypes from "prop-types";
// //import styles from "./Contacts.module.css";

// import Button from "./components/Button/Button";
// import Loader from "./components/Loader/Loader";
// import Modal from "./components/Modal/Modal";

// const ImageGallery = ({ contacts, onDeleteContact, id }) => (
//   <ul className={styles.formContacts}>
//     {contacts.map((contact) => (
//       <li key={contact.id}>
//         <Phone width="30" height="20" />
//         {contact.name}
//         {" : "}
//         {contact.number}
//         <IconButton
//           onClick={() => onDeleteContact(contact.id)}
//           title="delete"
//           aria-label="Delete tag"
//         >
//           <Delete width="20" height="20" />
//         </IconButton>
//       </li>
//     ))}
//   </ul>
// );

// Contacts.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
// export default Contacts;