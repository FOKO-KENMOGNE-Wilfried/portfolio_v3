import { useForm } from "react-hook-form";
import { useTheme } from "../../utils/Context/ThemeContext";
import { useState } from "react";

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

  const onSubmit = (d: any) => {
    console.log(JSON.stringify(d));
    reset();
    setIsDisplayForms(false);
  };
  const values = watch();

  return (
    <div className={`${theme == "dark" ? "" : ""} w-full overflow-hidden`}>
      <div className="border-b border-secondary-dark h-12 w-full"></div>
      <div className="w-full h-full flex justify-between">
        {isDisplayForms ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-secondary-dark text-secondary-dark border-r w-full flex flex-col gap-8 items-center pt-32"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="senderName">_name</label>
                <input
                  className={`${
                    errors.senderName
                      ? "bg-red-700/20 border-red-700 outline-none"
                      : "border-secondary-dark"
                  } border rounded-md bg-black h-10 w-80 outline-primary-light pl-4`}
                  type="text"
                  {...register("senderName", {
                    required: "Name required",
                  })}
                  id="senderName"
                />
                {errors.senderEmail && (
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
                  } transition-all duration-150 ease-in-out border  rounded-md bg-black h-10 w-80 outline-primary-light pl-4`}
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
                {errors.senderEmail && (
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
                  } border rounded-md bg-black resize-none w-80 outline-primary-light pl-4`}
                  {...register("senderMessage", {
                    required: "Message required",
                  })}
                  id="senderMessage"
                ></textarea>
                {errors.senderEmail && (
                  <span className="text-red-700">
                    {errors.senderMessage.message}
                  </span>
                )}
              </div>
              <button
                className="bg-usual-orange w-fit hover:bg-usual-purple cursor-pointer transition-all duration-150 ease-in-out hover:text-white text-black px-8 py-2 rounded-md font-semibold"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <form className="border-secondary-dark text-secondary-dark border-r w-full flex flex-col gap-4 items-center justify-center">
            <p className="text-primary-light text-4xl font-semibold">
              Thank you! 👌
            </p>
            <div className="text-xl">
              <p>Your message has been accepted.</p>
              <p>You will recieve answer soon!</p>
            </div>
            <div
              onClick={() => setIsDisplayForms(true)}
              className="bg-usual-orange w-fit hover:bg-usual-purple cursor-pointer transition-all duration-150 ease-in-out hover:text-white text-black px-8 py-2 rounded-md font-semibold"
            >
              Send-new-message
            </div>
          </form>
        )}

        <div className="border-secondary-dark border-l w-full p-8 text-[#c9d1d9] font-mono text-sm">
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
            <span className="text-usual-orange">
              {values.senderEmail || ""}
            </span>
            ",
          </p>
          <p className="ml-4">
            <span className="text-usual-purple">message</span>: "
            <span className="text-usual-orange">
              {values.senderMessage || ""}
            </span>
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
