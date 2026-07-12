"use client";

import React from "react";
import Link from "next/link";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiGlobe,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { MdDelete, MdEmail } from "react-icons/md";
import { IconType } from "react-icons";
import { toast } from "react-toastify";

interface ContactInfo {
  icon: IconType;
  title: string;
  details: string;
  subDetails: string;
}

interface ContactPageProps {}

export default function ContactPage({}: ContactPageProps): React.JSX.Element {
  const contactInfo: ContactInfo[] = [
    {
      icon: FiMapPin,
      title: "Our Location",
      details: "Bhaluka, Mymensingh",
      subDetails: "Bangladesh",
    },
    {
      icon: FiMail,
      title: "Email Us",
      details: "hello@gadgetloop.com",
      subDetails: "support@gadgetloop.com",
    },
    {
      icon: FiPhone,
      title: "Call Us",
      details: "+880 1234 567890",
      subDetails: "Mon-Fri, 9am to 6pm",
    },
  ];

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
    toast.success("Message sent successfully!", {
      position: "top-center",
    });
    event.currentTarget.reset();
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#050505] transition-colors duration-500 text-slate-900 dark:text-white pt-24 pb-24 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-900/20 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-900/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-700 dark:text-zinc-300">
              We&apos;re here to help
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            Let&apos;s get in{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              touch.
            </span>
          </h1>
          <p className="text-slate-600 dark:text-zinc-400 text-lg">
            Have a question about a trade, need support, or just want to say hi?
            Drop us a message below.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-purple-500/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-100 dark:border-white/5 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-cyan-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-zinc-400 font-medium">
                      {item.details}
                    </p>
                    <p className="text-slate-500 dark:text-zinc-500 text-sm">
                      {item.subDetails}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-3xl bg-linear-to-tr from-purple-500/5 to-cyan-500/5 border border-slate-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-4 text-center">
                Follow Our Journey
              </h3>
              <div className="flex justify-center gap-4">
                <Link
                  href="https://github.com/salmansahed"
                  target="_blank"
                  className="p-3 rounded-xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <FiGithub className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/salman-sahed"
                  target="_blank"
                  className="p-3 rounded-xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-[#0077b5] dark:hover:text-[#0077b5] hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <FiLinkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/salman_sahed10"
                  target="_blank"
                  className="p-3 rounded-xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <FaXTwitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://salman-sahed.vercel.app"
                  target="_blank"
                  className="p-3 rounded-xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <FiGlobe className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-purple-500 to-cyan-500 rounded-[2.5rem] opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-500" />
              <div className="relative p-8 md:p-10 rounded-[2.5rem] bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl">
                <Form className="w-full" onSubmit={onSubmit}>
                  <Fieldset>
                    <Fieldset.Legend className="text-xl font-bold">
                      Send an Email
                    </Fieldset.Legend>
                    <Description className="text-base">
                      Fill out the form below to send us a message.
                    </Description>
                    <FieldGroup className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <TextField
                          isRequired
                          name="name"
                          validate={(value: string) => {
                            if (value.length < 3) {
                              return "Name must be at least 3 characters";
                            }
                            return null;
                          }}
                        >
                          <Label>Name</Label>
                          <Input placeholder="John Doe" className="h-14" />
                          <FieldError />
                        </TextField>
                        <TextField
                          isRequired
                          name="email"
                          type="email"
                          validate={(value: string) => {
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            return emailRegex.test(value)
                              ? null
                              : "Please enter a valid email address.";
                          }}
                        >
                          <Label>Email</Label>
                          <Input
                            placeholder="john@example.com"
                            className="h-14"
                          />
                          <FieldError />
                        </TextField>
                      </div>
                      <TextField
                        isRequired
                        name="subject"
                        validate={(value: string) => {
                          if (value.length < 10) {
                            return "Subject must be at least 10 characters";
                          }
                          return null;
                        }}
                      >
                        <Label>Subject</Label>
                        <Input
                          placeholder="How can we help you?"
                          className="h-14"
                        />
                        <FieldError />
                      </TextField>
                      <TextField
                        isRequired
                        name="message"
                        validate={(value: string) => {
                          if (value.length < 10) {
                            return "Message must be at least 10 characters";
                          }
                          return null;
                        }}
                      >
                        <Label>Message</Label>
                        <TextArea
                          placeholder="Write your message here..."
                          className="h-32"
                        />
                        <Description>Minimum 10 characters</Description>
                        <FieldError />
                      </TextField>
                    </FieldGroup>
                    <Fieldset.Actions>
                      <Button
                        type="submit"
                        className="h-11 px-6 rounded-xl bg-linear-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
                      >
                        <MdEmail />
                        Send Message
                      </Button>
                      <Button
                        type="reset"
                        variant="danger-soft"
                        className="h-11 px-6 rounded-xl"
                      >
                        <MdDelete />
                        Clear
                      </Button>
                    </Fieldset.Actions>
                  </Fieldset>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
