/* Dependencies */
import { useState } from "react";

/* Components */
import Input from "./Input";

const Form = () => {
  const [userFormData, setUserFormData] = useState({ name: "", email: "" });
  const [isError, setIsError] = useState(false);
  const [sendSuccessfully, setSendSuccesfully] = useState(false);
  const EMAIL_REGEX =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  const onChange = (e) => {
    switch (e.target.name) {
      case "name":
        setUserFormData({ ...userFormData, name: e.target.value });
        break;
      case "email":
        setUserFormData({ ...userFormData, email: e.target.value });
        break;

      default:
        break;
    }
  };

  const onValidateName = () => userFormData.name.length > 5;
  const onValidateEmail = () => EMAIL_REGEX.test(userFormData.email);

  const onSubmit = (e) => {
    e.preventDefault();

    if (onValidateName() && onValidateEmail()) {
      setIsError(false);
      setSendSuccesfully(true);
      console.log(
        `Send! Name: ${userFormData.name} & Email ${userFormData.email}`
      );
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="form__container">
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Complete name"
          onChange={onChange}
          value={userFormData.name}
        />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={userFormData.email}
          margin="15px 0"
        />
        <button className="input" onClick={onSubmit}>
          Send
        </button>
        {isError && <p>Por favor verifique su información nuevamente</p>}
        {sendSuccessfully && (
          <p>
            Gracias {userFormData.name}, te contactaremos cuando antes vía mail!
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
