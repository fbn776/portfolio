"use client";

import emailjs from "@emailjs/browser";
import {FormEvent, useCallback, useRef, useState} from "react";
import Loader from "../../components/loader/Loader";
import {IconChecks, IconHourglassEmpty, IconX} from "@tabler/icons-react";
import {motion} from "framer-motion";
import {fadeLeftChildVariant, staggerParentVariant} from "@data/framer-anims";

//100s
const timeout = 100000;

export default function Connect() {
    const lastTime = useRef(0);
    const [status, setStatus] = useState<
        null | "error" | "success" | "timeout" | "pending"
    >(null);

    const sendEmail = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Date.now() - lastTime.current < timeout) {
            setStatus("timeout");
            setTimeout(() => {
                setStatus(null);
            }, timeout);
            return;
        }

        setStatus("pending");

        emailjs
            .sendForm("service_zgv953o", "template_gcnla4o", e.currentTarget, {
                publicKey: "jq2517wjjZvbkt2tD",
            })
            .then(
                () => {
                    setStatus("success");
                    setTimeout(() => {
                        setStatus(null);
                    }, 2000);
                },
                (error) => {
                    setStatus("error");
                    setTimeout(() => {
                        setStatus(null);
                    }, 2000);
                    console.log("FAILED: ", error);
                }
            );

        lastTime.current = Date.now();
    }, []);

    return (
        <motion.form
            variants={staggerParentVariant}
            onSubmit={sendEmail}
            className="connect-form w-full flex-1 flex flex-col px-[10%] my-5 max-sm:px-0"
        >
            <div className="w-full flex flex-col gap-3 flex-1">
                <motion.label htmlFor="from_name" variants={fadeLeftChildVariant} initial="hidden" whileInView="show"
                              transition={{type: "tween"}}>Name
                </motion.label>
                <motion.input name="from_name" placeholder="Enter name" type="name" variants={fadeLeftChildVariant}
                              initial="hidden" whileInView="show" transition={{type: "tween"}} required/>

                <motion.label htmlFor="from_email" variants={fadeLeftChildVariant} initial="hidden" whileInView="show"
                              transition={{type: "tween"}}>Email
                </motion.label>
                <motion.input
                    name="from_email"
                    type="email"
                    placeholder="Enter email"
                    variants={fadeLeftChildVariant} initial="hidden" whileInView="show" transition={{type: "tween"}}
                    required
                />

                <motion.label htmlFor="message" variants={fadeLeftChildVariant} initial="hidden" whileInView="show"
                              transition={{type: "tween"}}>Message
                </motion.label>
                <motion.textarea name="message" placeholder="Enter message" variants={fadeLeftChildVariant}
                                 initial="hidden" whileInView="show" transition={{type: "tween"}} required/>
            </div>
            <button
                className={`px-5 py-2 flex justify-center text-light gap-2 text-base rounded-md bg-primary max-lg:mt-5 hover:scale-105 disabled:hover:scale-1 transition-transform disabled:bg-primaryDisabled ${
                    status === "error" && "bg-red-600"
                } ${status === "success" && "bg-green-600"}`}
                disabled={status === "pending" || status === "timeout"}
                aria-label="Send message"
            >
                {status === "error" ? (
                    <>
                        Failed
                        <IconX/>
                    </>
                ) : status === "success" ? (
                    <>
                        Success!
                        <IconChecks/>
                    </>
                ) : status === "timeout" ? (
                    <>
                        Please wait
                        <IconHourglassEmpty/>
                    </>
                ) : status === "pending" ? (
                    <Loader/>
                ) : (
                    "Send"
                )}
            </button>
        </motion.form>
    );
}
