import Container from "../../components/Container";

import { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import Input from "../../components/Input";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { motion } from "framer-motion";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const config = {
    Host: "smtp.elasticemail.com",
    Username: import.meta.env.VITE_USER_NAME,
    Password: import.meta.env.VITE_PASSWORD,
  };

  const validateForm = () => {
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
    }

    if (!phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!isValidPhone(phone)) {
      errors.phone = "Invalid phone number";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    // Implement your email validation logic here
    // This is a simple email validation regex pattern
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
  };

  const isValidPhone = (phone) => {
    // Implement your phone number validation logic here
    // This is a simple phone number validation regex pattern
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phone);
    console.log(message);

    const isFormValid = validateForm();

    if (isFormValid) {
      if (window.Email) {
        window.Email.send({
          ...config,
          To: "tarungerhlaut330@gmail.com",
          From: email,
          Subject: "Mail From SnazzyWeb",
          Body: `Name:${firstName} ${lastName} , 
          \nPhone: ${phone} , 
          \nMessage: ${message}`,
        })
          .then(() => {
            toast.success("Message sent successfully!");
          })
          .catch((error) => {
            toast.error(`Failed to send message: ${error}`);
          });
      }

      // Reset the form fields and errors
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({});
    }
  };

  const FirstName = {
    label: "First name",
    type: "text",
    name: "first_name",
  };

  const LastName = {
    label: "Last name",
    type: "text",
    name: "last_name",
  };

  const Email = {
    label: "Work Email",
    type: "text",
    name: "email",
  };

  const Phone = {
    label: "Phone",
    type: "tel",
    name: "phone",
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: "true" }}
        className="relative grid  max-w-[1250px] gap-5 font-poppins lg:mx-auto lg:grid-cols-2 lg:gap-10"
      >
        <div className="content grid  gap-5 pb-10 ">
          <h4
            className="relative   text-xl font-semibold capitalize 
          text-[#293352] after:absolute after:left-0
after:top-7 after:h-[3px] after:w-[28px] after:rounded-3xl after:bg-btn-primary-bg after:content-[''] sm:mb-0 md:text-lg"
          >
            CONTACT US
          </h4>
          <h2 className="  text-3xl font-bold text-[#1b243f]">
            You can connect our sales team when need help!
          </h2>
          <p className="font-medium text-[#5b6278] ">
            Contact our team today to learn more about how SnazzyWeb can help
            you:
          </p>

          <ul className="grid gap-4">
            <li className="relative  pl-6 before:absolute before:left-0 before:top-2 before:h-[10px] before:w-[10px]    before:rounded-full  before:bg-[#00b3b0] before:content-['']">
              <p className=" text-sm  text-gray-600">
                We have a proven track record of delivering high-quality digital
                solutions that meet and exceed our client&apos;s expectations.
              </p>
            </li>
            <li className="relative  pl-6 before:absolute before:left-0 before:top-2 before:h-[10px] before:w-[10px]    before:rounded-full  before:bg-[#00b3b0] before:content-['']">
              <p className=" text-sm   text-gray-600">
                Our team consists of experienced experts who stay up-to-date on
                the latest technologies and trends to offer innovative and
                effective solutions.
              </p>
            </li>
            <li className="relative  pl-6 before:absolute before:left-0 before:top-2 before:h-[10px] before:w-[10px]    before:rounded-full  before:bg-[#00b3b0] before:content-['']">
              <p className=" text-sm   text-gray-600">
                We take a collaborative approach, working closely with our
                clients to understand their unique needs and goals and tailor
                our solutions accordingly.
              </p>
            </li>
            <li className="relative  pl-6 before:absolute before:left-0 before:top-2 before:h-[10px] before:w-[10px]    before:rounded-full  before:bg-[#00b3b0] before:content-['']">
              <p className=" text-sm   text-gray-600">
                We provide responsive and reliable ongoing support to ensure our
                client&apos;s digital needs are met now and in the future.
              </p>
            </li>
          </ul>

          <div className="md:flex md:flex-wrap md:items-center md:justify-between">
            <p className=" text-lg text-text ">
              Join our team – come work with us.
            </p>
            <div className="mt-5 flex items-center gap-4 md:mt-[-2px]">
              <span
                className="icon relative z-10  flex h-12 w-12 items-center justify-center rounded-full bg-btn-primary-bg
        before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:animate-bubble before:rounded-full  before:bg-btn-primary-bg  before:content-['']"
              >
                <AiFillPhone className="text-2xl text-white" />
              </span>
              <span className="text-lg font-medium text-text">
                +123 456 7890
              </span>
            </div>
          </div>
        </div>

        <div>
          <form
            onSubmit={submitHandler}
            className="max-w-[417px] rounded-xl bg-[#f8f8f9]  sm:mx-auto "
          >
            <div className="form-section">
              <h3 className="mb-[6px]  font-medium text-text">Contact Info</h3>
              <div className="form-fields">
                <div className="form-filed-column">
                  <div className="form-filed-group flex">
                    <Input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      error={errors.firstName}
                      info={FirstName}
                    />
                    <Input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      error={errors.lastName}
                      info={LastName}
                    />
                  </div>
                  <div className="mt-4">
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={errors.email}
                      info={Email}
                    />
                  </div>
                  <div className="mt-4">
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      error={errors.phone}
                      info={Phone}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-section mt-5">
              <h3 className="mb-[6px]  font-medium text-text">Message</h3>
              <div className="form-fields">
                <div className="form-filed-column">
                  <div className="mt-4">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                      placeholder="To help us provide you with the best possible response, please leave us a detailed message with your project details."
                      required=""
                      spellCheck="false"
                      className="h-32 w-full overflow-y-hidden rounded border  border-[#edeff2] bg-white p-4 px-4 pt-5 text-base text-text outline-btn-primary-bg placeholder:text-sm"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <button className="mt-3 h-14 w-full cursor-pointer items-center justify-center rounded-lg bg-[#00b3b0] px-7 py-2 text-lg font-medium  text-white transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_6px_13px_2px_rgba(0,0,0,0.2)] hover:outline-[#00b3b0]">
              Send Message
            </button>
          </form>
        </div>
        <ToastContainer />
      </motion.div>
    </Container>
  );
};

export default Contact;
