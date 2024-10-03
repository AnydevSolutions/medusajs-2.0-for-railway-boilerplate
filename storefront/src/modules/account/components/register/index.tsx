"use client";

import { useFormState } from "react-dom";
import { signIn } from "next-auth/react"; // Importar la función para el inicio de sesión con Google

import Input from "@modules/common/components/input";
import { LOGIN_VIEW } from "@modules/account/templates/login-template";
import { signUp } from "@modules/account/actions";
import ErrorMessage from "@modules/checkout/components/error-message";
import { SubmitButton } from "@modules/checkout/components/submit-button";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null);

  return (
    <div className="max-w-sm flex flex-col items-center" data-testid="register-page">
      <h1 className="text-large-semi uppercase mb-6">Conviértete en cliente</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Cree su perfil de miembro de Anydev Store y obtenga acceso a una versión mejorada de la
        experiencia de compra.
      </p>
      
      {/* Formulario tradicional de registro */}
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input label="Phone" name="phone" type="tel" autoComplete="tel" data-testid="phone-input" />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          Al crear una cuenta, aceptas los términos de Anydev Store&apos;s{" "}
          <LocalizedClientLink href="/content/privacy-policy" className="underline">
            Politica de privacidad
          </LocalizedClientLink>{" "}
          &{" "}
          <LocalizedClientLink href="/content/terms-of-use" className="underline">
            Terminos de uso
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-6" data-testid="register-button">Join</SubmitButton>
      </form>

      {/* Botón de registro con Google */}
      <div className="w-full mt-4">
        <button
          onClick={() => signIn('google')}
          className="w-full bg-red-500 text-white py-2 rounded-md"
          data-testid="google-sign-in-button"
        >
          Registrarse con Google
        </button>
      </div>

      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        ¿Ya tienes cuenta?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Ingresar
        </button>
        .
      </span>
    </div>
  );
};

export default Register;
