import { useForm } from "react-hook-form";
import { useTheme } from "../../utils/Context/ThemeContext";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactMe() {

  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [isDisplayForms, setIsDisplayForms] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const emailId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const onSubmit = async (data: any) => {
    setIsSending(true);
    try {
      await emailjs.send(
        emailId,
        templateId,
        {
          sender_name: data.senderName,
          sender_email: data.senderEmail,
          message: data.senderMessage,
        },
        publicKey
      );
      reset();
      setIsDisplayForms(false);
    } catch (error) {
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const values = watch();

  return (
    <div className={`${theme == "dark" ? "" : ""} w-full overflow-hidden h-full`}>
      <div className="border-b border-secondary-dark h-12 w-full"></div>
      <div className="w-full h-full flex justify-between flex-col md:flex-row">
        {isDisplayForms ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-secondary-dark text-secondary-dark md:border-r w-full flex flex-col gap-8 items-center pt-8 md:pt-32"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="senderName">_name</label>
                <input
                  className={`${
                    errors.senderName
                      ? "bg-red-700/20 border-red-700 outline-none"
                      : "border-secondary-dark"
                  } border text-white rounded-md bg-primary-light-dark h-10 w-80 outline-secondary-dark pl-4`}
                  type="text"
                  {...register("senderName", {
                    required: "Name required",
                  })}
                  id="senderName"
                />
                {typeof errors.senderName?.message == "string" && (
                  <span className="text-red-700">
                    {errors.senderName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="senderEmail">_email</label>
                <input
                  className={`${
                    errors.senderEmail
                      ? "bg-red-700/20 border-red-700 outline-none"
                      : "border-secondary-dark"
                  } transition-all text-white duration-150 ease-in-out border  rounded-md bg-primary-light-dark h-10 w-80 outline-secondary-dark pl-4`}
                  type="email"
                  {...register("senderEmail", {
                    required: "Email required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email format si incorrect.",
                    },
                  })}
                  id="senderEmail"
                />
                {typeof errors.senderEmail?.message == "string" && (
                  <span className="text-red-700">
                    {errors.senderEmail.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="senderMessage">_message</label>
                <textarea
                  rows={6}
                  className={`${
                    errors.senderMessage
                      ? "bg-red-700/20 border-red-700 outline-none"
                      : "border-secondary-dark"
                  } border text-white rounded-md bg-primary-light-dark resize-none w-80 outline-secondary-dark pl-4`}
                  {...register("senderMessage", {
                    required: "Message required",
                  })}
                  id="senderMessage"
                ></textarea>
                {typeof errors.senderMessage?.message == "string" && (
                  <span className="text-red-700">
                    {errors.senderMessage.message}
                  </span>
                )}
              </div>
              <button
                className={`${values.senderName && values.senderEmail && values.senderMessage ? "bg-usual-orange text-black" : "bg-primary-light-dark text-secondary-dark"} w-fit hover:bg-usual-purple cursor-pointer transition-all duration-150 ease-in-out hover:text-white px-8 py-2 rounded-md font-semibold`}
                type="submit"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        ) : (
          <form className="border-secondary-dark text-secondary-dark h-full md:border-r w-full flex flex-col gap-4 items-center justify-center">
            <p className="text-primary-light text-4xl font-semibold">
              Thank you! 👌
            </p>
            <div className="text-xl">
              <p>Your message has been accepted.</p>
              <p>You will receive an answer soon!</p>
            </div>
            <div
              onClick={() => setIsDisplayForms(true)}
              className="bg-usual-orange w-fit hover:bg-usual-purple cursor-pointer transition-all duration-150 ease-in-out hover:text-white text-black px-8 py-2 rounded-md font-semibold"
            >
              Send-new-message
            </div>
          </form>
        )}

        <div className="border-secondary-dark hidden md:block border-l w-full p-8 text-[#c9d1d9] font-mono text-sm">
          <p>
            <span className="text-[#8b949e]">const</span>{" "}
            <span className="text-usual-purple">message</span> = &#123;
          </p>
          <p className="ml-4">
            <span className="text-usual-purple">name</span>: "
            <span className="text-usual-orange">{values.senderName || ""}</span>
            ",
          </p>
          <p className="ml-4">
            <span className="text-usual-purple">email</span>: "
            <span className="text-usual-orange">{values.senderEmail || ""}</span>
            ",
          </p>
          <p className="ml-4">
            <span className="text-usual-purple">message</span>: "
            <span className="text-usual-orange">{values.senderMessage || ""}</span>
            ",
          </p>
          <p className="ml-4">
            <span className="text-usual-purple">date</span>: "
            <span className="text-usual-orange">
              {new Date().toDateString()}
            </span>
            "
          </p>
          <p>&#125;</p>
          <br />
          <p>
            <span className="text-[#8b949e]">button</span>.
            <span className="text-[#d2a8ff]">addEventListener</span>(
            <span className="text-[#a5d6ff]">'click'</span>, () =&gt; &#123;
          </p>
          <p className="ml-4">
            <span className="text-usual-purple">form</span>.
            <span className="text-[#d2a8ff]">send</span>(
            <span className="text-usual-purple">message</span>);
          </p>
          <p>&#125;)</p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
