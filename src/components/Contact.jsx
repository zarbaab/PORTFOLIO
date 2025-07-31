<<<<<<< HEAD
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "emailjs-com"; // ✅ Import EmailJS
=======
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
>>>>>>> 32cd73a9204deb87b207fe92b65cf0cac774225c

function Contact() {
  const {
    register,
    handleSubmit,
<<<<<<< HEAD
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
  const serviceID = "service_8r3gdzv";
  const templateID = "template_8g5xeax";
  const userID = "6RKDXD9jRYDrbtZD-";

  emailjs.send(serviceID, templateID, {
    name: data.name,
    email: data.email,
    message: data.message,
    time: new Date().toLocaleString(), // ✅ This matches {{time}}
  }, userID)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      toast.success("Your message has been sent!");
    })
    .catch((error) => {
      console.error("FAILED...", error);
      toast.error("Message failed to send. Try again.");
    });
};



  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Contact me</h1>
      <span>Please fill out the form below to contact me</span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
        >
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">FullName</label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your fullname"
            />
            {errors.name && <span>This field is required</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span>This field is required</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Query"
            />
            {errors.message && <span>This field is required</span>}
          </div>

          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
=======

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bvredzqb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className=" flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="https://getform.io/f/bvredzqb"
            method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
>>>>>>> 32cd73a9204deb87b207fe92b65cf0cac774225c
  );
}

export default Contact;
