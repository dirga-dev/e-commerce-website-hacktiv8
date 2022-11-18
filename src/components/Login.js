import React, { useEffect, useState } from "react";
import SubmitButton from "./SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authUser, saveToken, checkEmail, setPassword, authAdmin, resetError } from "../features/userSlice.js";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, password, error, isAuthenticated, adminStatus } = useSelector((state) => state.user);
  // const [inputEmail, setInputEmail] = useState();
  // const [inputPassword, setInputPassword] = useState();

  useEffect(() => {
    dispatch(resetError());
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!adminStatus) {
      await dispatch(
        authUser({
          username,
          password,
        }),
      );
      dispatch(saveToken());
    } else {
      dispatch(authAdmin());
    }
  };

  return (
    <div className="mt-5">
      {error ? (
        <div class="container">
          <div class="alert alert-danger" role="alert">
            Mohon Maaf, Email atau Password Anda Salah!
          </div>
        </div>
      ) : (
        <></>
      )}
      <div class="container d-flex justify-content-center">
        <div class="card shadow" style={{ width: 400 }}>
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <div class="mb-3 text-start">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => dispatch(checkEmail(e.target.value))} />
              </div>
              <div class="mb-3 text-start">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => dispatch(setPassword(e.target.value))} />
              </div>
              <SubmitButton label="Login" buttonType="submit" className="btn btn-primary w-100" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
