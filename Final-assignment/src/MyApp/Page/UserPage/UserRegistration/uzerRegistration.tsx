import RegistrationForm from "./RegistrationForm";

const UzerRegistration = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Registration
        </h1>

      
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full border-t border-gray-200 my-4" />
        </div>

        
        <RegistrationForm />
      </div>
    </div>
  );
};

export default UzerRegistration;
