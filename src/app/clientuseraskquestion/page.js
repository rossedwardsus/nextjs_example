'use client'

import Image from 'next/image';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

//import { NextResponse } from 'next/server';
//import type { NextRequest } from 'next/server'

export default function Home(request, res) {

  const [firstName, setFirstName] = useState("");
  const router = useRouter();

  useEffect(() => {

    document.title = `You clicked ${"count"} times`;

  });

  //const url = request.nextUrl.clone()   
  //if (url.pathname === '/') {
    //url.pathname = '/userquestions';
    //return NextResponse.redirect(url);   
  //} 

  const firstNameChange = (e) => {

      setFirstName(e.target.value);

  };

  const schema = yup.object({
    firstName: yup.string().required(),
    questionText: yup.string().required(),
    //age: yup.number().positive().integer().required(),
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
      console.log(data);

      //url.pathname = '/userquestions';
      //return NextResponse.redirect(url);   

      router.push('/userquestions');

      //submit to firebase and redirect to users questions
  }

      
 return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <form action="/send-data-here" method="post">
            <label for="first">First name:</label>
            <input type="text" id="first" name="first" onChange={firstNameChange} value={firstName}/>
            <label for="last">Last name:</label>
            <input type="text" id="last" name="last" />
            <button type="submit">Submit</button>
          </form>
          <br/>
          <br/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <p>{errors.firstName?.message}</p>
            <br/>
            <br/>
            <textarea style={{"resize": "none"}} {...register("question_text")} />
            <p>{errors.questionText?.message}</p>
            
            <input type="submit" value="react hook form submit"/>
          </form>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            here
          </div>
        </div>


        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore the Next.js 13 playground.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    )
  }

