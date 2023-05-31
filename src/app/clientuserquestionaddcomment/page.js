'use client'

import Image from 'next/image';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useRouter } from 'next/navigation';

//import { NextResponse } from 'next/server';
//import type { NextRequest } from 'next/server'

export default function Home(request, res) {

  const router = useRouter();

  //const url = request.nextUrl.clone()   
  //if (url.pathname === '/') {
    //url.pathname = '/userquestions';
    //return NextResponse.redirect(url);   
  //} 

  const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
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

  const question = {"question_id": 1, question_title: "qt", question_text: 22222222};
      
 return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <>
              <>{question.question_title}</>
              <br/>
              <>{question.question_text}</>
            </>


          <form action="/send-data-here" method="post">
            <label for="first">First name:</label>
            <input type="text" id="first" name="first" />
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
            <input {...register("age")} />
            <p>{errors.age?.message}</p>
            
            <input type="submit" value="react hook form"/>
          </form>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            here
          </div>
        </div>
      </main>
    )
  }

