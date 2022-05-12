import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Smember() {
    const navigate = useNavigate()
    const LoginAccount = (e)=>{
        e.preventDefault();
        navigate('/SmemberMain')
    }
  return (
    <div className="w-3/5 mx-auto mt-20">
      <div className="">
        <img
          className="rounded-3xl"
          src="https://cellphones.com.vn/smember/_nuxt/img/BlockCPS.50bb45a.jpg"
          alt=""
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="font-bold text-red-600 text-xl">
          VUI LÒNG ĐĂNG NHẬP VÀO TRANG THÀNH VIÊN SMEMBER
        </h2>
      </div>
      <form className="form" onSubmit={LoginAccount}>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label text-[25px]">
            Email
          </label>
          <div class="col-sm-10 flex flex-col justify-center items-center">
            <input
              type="email"
              class="form-control"
              id="inputPassword"
              placeholder="Email address"
              required
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label text-[25px]">
            Password
          </label>
          <div class="col-sm-10 flex flex-col justify-center items-center">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
              required
            />
          </div>
        </div>
        <input type="submit" className="btn btn-primary text-[#f53939]" value="Login"/>
      </form>
    </div>
  );
}

export default Smember;
