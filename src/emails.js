import Email from "./email"

function Emails(props) {
  return (
    <ul>
      {props.filteredEmails.map((email, index) => (
        <Email
          key={index}
          email={email}
          toggleStar={props.toggleStar}
          toggleRead={props.toggleRead}
        />
      ))}
    </ul>
  );
}
export default Emails;
