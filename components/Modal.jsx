"use client"
import axios from 'axios'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import ReactInputMask from 'react-input-mask'

const Modal = ({ closeModal, isOpenModal }) => {
    const modalRef = useRef(null);
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        if (isOpenModal) {
            gsap.fromTo(
                modalRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
            );
        }
    }, [isOpenModal]);

    const close = () => {
        gsap.to(modalRef.current, { opacity: 0, y: -50, duration: 0.3, ease: 'power2.in', onComplete: closeModal });
    };

    const onSubmit = (data) => {
        setIsSubmitSuccessful(true)
        let OBJ = `Имя: ${data.firstName} \n`;
        OBJ += `Фамилия: ${data.lastName} \n`;
        OBJ += `Номер: ${data.number} \n`;

        axios
            .post(
                `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`, {
                chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
                parse_mode: "html",
                text: OBJ,
            })
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    gsap.to(modalRef.current, { opacity: 0, y: -50, duration: 0.3, ease: 'power2.in', onComplete: closeModal });
                    setIsSubmitSuccessful(false)
                    console.log(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        reset({
            firstName: "",
            lastName: "",
            number: ""
        });
    }, [isSubmitSuccessful]);

    if (!isOpenModal) return null;

    return (
        <div ref={modalRef} onClick={close} className="modal-bg fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-[#4b4d6350]">
            <form onSubmit={handleSubmit(onSubmit)} onClick={(e) => e.stopPropagation()} className="modal bg-[#7d5a50] text-white p-6 rounded shadow-lg w-96 mx-3">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-l   g font-semibold">Оставить заявку</h2>
                    <button onClick={close} className="text-white hover:text-gray-300 duration-100">
                        <svg className="w-10 h-10 fill-current" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M12.707 12.707a1 1 0 0 1-1.414 0L10 11.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L8.586 10 7.293 8.707a1 1 0 0 1 1.414-1.414L10 8.586l1.293-1.293a1 1 0 1 1 1.414 1.414L11.414 10l1.293 1.293a1 1 0 0 1 0 1.414z"
                            />
                        </svg>
                    </button>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Имя</label>
                    <input
                        {...register("firstName", { required: true })}
                        type="text"
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm text-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Фамилия</label>
                    <input
                        {...register("lastName", { required: true })}
                        type="text"
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm text-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Номер</label>
                    <ReactInputMask
                        {...register("number", { required: true })}
                        mask="+\9\98(99)999-99-99"
                        placeholder='+998(__)___-__-__'
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm text-black"
                    />
                    {/* <input
                        {...register("number", { required: true })}
                        type="text"
                        className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none sm:text-sm text-black"
                    /> */}
                </div>
                <button disabled={isSubmitSuccessful} className="button w-full">
                    {isSubmitSuccessful ? <div className='w-5 h-5 m-auto rounded-full border-y animate-spin border-white' /> : "Сохранить"}
                </button>
            </form>
        </div>
    )
}

export default Modal