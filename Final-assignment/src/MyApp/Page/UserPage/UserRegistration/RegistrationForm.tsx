import DynamicForm from "../../../component/DynamicForm/DynamicForm";
import { registerSchema } from "../../../Zod/registerSchema";

const RegistrationForm = () => {
  return (
    <DynamicForm
      title="Register"
      initialData={{ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={registerSchema}
      apiEndpoint="http://localhost:5000/api/auth/register"
      successRedirect="/"
      fields={[
        { name: "firstName", placeholder: "სახელი" },
        { name: "lastName", placeholder: "გვარი" },
        { name: "email", type: "email", placeholder: "ელ.ფოსტა" },
        { name: "password", type: "password", placeholder: "პაროლი", showToggle: true },
        { name: "confirmPassword", type: "password", placeholder: "გაიმეორე პაროლი", showToggle: true },
      ]}
    />
  );
};
export default RegistrationForm;
