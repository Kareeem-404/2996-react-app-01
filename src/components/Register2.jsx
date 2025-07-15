import { Label, Checkbox } from "flowbite-react";
import FnameInp from "./FnameInp";
import LnameInput from "./LnameInput";
import MobileInp from "./MobileInp";
import EmailInp from "./EmailInp";
import PasswordInp from "./PasswordInp";






export default function Register() {
  return (
    <div className="bg-slate-800 text-gray-400 p-5 rounded-md">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Create an Account
      </h1>
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        Personal Information
      </h2>
      <div className="flex gap-3">
        <FnameInp />
        <LnameInput />
      </div>
      <MobileInp />
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        Account Information
      </h2>
      <EmailInp />
      <PasswordInp />
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <Checkbox id="terms" />
          </div>
          <Label
            htmlFor="terms"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree to the{" "}
            <a
              href="#"
              className="text-amber-600 hover:underline dark:text-amber-500"
            >
              Terms and Conditions
            </a>
          </Label>
        </div>

        {/* Submit Button */}

        <button type="submit" className="w-full bg-amber-600 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-amber-700">
          Create Account
        </button>

        {/* Login Link */}
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
          Already have an account?{" "}
          <a
            href="#"
            className="text-amber-600 hover:underline dark:text-amber-500"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
