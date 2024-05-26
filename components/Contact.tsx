"use client";
import React from "react";
import { Input, Textarea } from "@nextui-org/input";
import * as EmailValidator from "email-validator";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

type Data = {
  Name: string;
  Email: string;
  Message: String;
};
const Contact = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      Message: "",
    },
  });
  function handleFormSubmit(data: Data) {
    if (data.Name.trim().length === 0) {
      toast.error("Enter Name");
      return;
    }
    if (!EmailValidator.validate(data.Email)) {
      toast.error("Enter valid Email address");
      return;
    }
    if (data.Message.trim().length === 0) {
      toast.error("Enter Message");
      return;
    }
    toast.success("Query Submitted");
    reset();
  }
  return (
    <div
      id="contact"
      className="text-white h-[80dvh] md:h-[100dvh]  mt-[350px] md:mt-20 pt-20"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.6 }}
        className="text-2xl md:text-5xl font-bold text-center"
      >
        <span className="text-purple-100">Contact</span> Me 📱
      </motion.h1>
      <motion.form
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.5, translateY: 0 },
        }}
        viewport={{ once: true, amount: 0.6 }}
        onSubmit={handleSubmit(handleFormSubmit)}
        className="max-w-[400px]  border border-purple rounded-lg mx-auto mt-10 py-3 px-4 flex flex-col justify-center items-center gap-3"
      >
        <Input
          {...register("Name")}
          type="text"
          label="name"
          placeholder="Enter your Name"
        />
        <Input
          {...register("Email")}
          type="text"
          label="Email"
          isInvalid={false}
          placeholder="Enter your email"
        />
        <Textarea
          {...register("Message")}
          label="Message"
          placeholder="Enter your description"
        />
        <button
          type="submit"
          className="px-8 py-2 rounded-full relative bg-black-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
        >
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <span className="relative z-20">Submit</span>
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
